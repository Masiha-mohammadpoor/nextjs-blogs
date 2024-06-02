"use client";
import { createContext, useContext } from "react";
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
      return { ...state, loadng: false, user: action.user };
    case "SIGNIN_REJECT":
      return { ...state, error: action.error, loading: false };
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
        dispatch({ type: "SIGNIN_SUCCESS", user });
        toast.success("با موفقیت وارد شدید !!!");
      } catch (err) {
        dispatch({
          type: "SIGNIN_REJECT",
          error: err?.response?.data?.message,
        });
        toast.error(err?.response?.data?.message);
      }
    },
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
