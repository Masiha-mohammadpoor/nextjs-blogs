"use client";
import { createContext, useContext , useEffect} from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useReducerAsync } from "use-reducer-async";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const reducer = async (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { ...state, loading: true };
    case "SIGNIN_SUCCESS":
      return { error: null, loading: false, user: action.payload };
    case "SIGNIN_REJECT":
      return { user: null, error: action.error, loading: false };
    case "SIGNUP_PENDING":
      return { ...state, loading: true };
    case "SIGNUP_SUCCESS":
      return { ...state, loading: false, user: action.payload };
    case "SIGNUP_REJECT":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

const asyncActionHandlers = {
  SIGNIN:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      try {
        const { data: user } = await axios.post(
          "http://localhost:5000/api/user/signin",
          action.payload,
          { withCredentials: true }
        );
        window.location.href = "/";
        dispatch({ type: "SIGNIN_SUCCESS", payload: user });
        toast.success("با موفقیت وارد شدید !!!");
      } catch (err) {
        dispatch({
          type: "SIGNIN_REJECT",
          error: err?.response?.data?.message,
        });
        toast.error(err?.response?.data?.message);
      }
    },
    SIGNOUT:
    ({ dispatch }) =>
    async (action) => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/user/logout",
          { withCredentials: true }
        );
        window.location.href = "/";
      } catch (err) {
        dispatch({
          type: "SIGNIN_REJECT",
          error: err?.response?.data?.message,
        });
        toast.error(err?.response?.data?.message);
      }
    },

  SIGNUP:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "SIGNUP_PENDING" });
      try {
        const { data: user } = await axios.post(
          "http://localhost:5000/api/user/signup",
          action.payload,
          { withCredentials: true }
        );
        window.location.href = "/";
        dispatch({ type: "SIGNUP_SUCCESS", payload : user });
        toast.success("با موفقیت ثبت نام شدید!!!");
      } catch (err) {
        dispatch({
          type: "SIGNUP_REJECT",
          error: err?.response?.data?.message,
        });
        toast.error(err?.response?.data?.message);
      }
    },
  LOAD_USER:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "SIGNUP_PENDING" });
      try {
        const { data: user } = await axios.get(
          "http://localhost:5000/api/user/load",
          { withCredentials: true }
        );
        // window.location.href = "/";
        dispatch({ type: "SIGNUP_SUCCESS", payload : user });
      } catch (err) {
        dispatch({
          type: "SIGNUP_REJECT",
          error: err?.response?.data?.message,
        });
      }
    },
};

const AuthProvider = ({ children }) => {
  const [data, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

  useEffect(() => {
    dispatch({type : "LOAD_USER"})
  } , [data.loading])


  return (
    <AuthContext.Provider value={data}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);

