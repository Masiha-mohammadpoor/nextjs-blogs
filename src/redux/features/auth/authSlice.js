import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const signinAsync = createAsyncThunk("auth/signin", async (payload) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/signin`,
      payload,
      { withCredentials: true }
    );
    window.location.href = "/";
    toast.success("با موفقیت وارد شدید !!!");
    return data;
  } catch (err) {
    toast.error(err?.response?.data?.message);
    return err?.response?.data?.message;
  }
});

export const signupAsync = createAsyncThunk("auth/signup", async (payload) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/signup`,
      payload,
      { withCredentials: true }
    );
    window.location.href = "/";
    toast.success("با موفقیت ثبت نام شدید!!!");
    return data;
  } catch (err) {
    toast.error(err?.response?.data?.message);
    return err?.response?.data?.message;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    // sign in
    builder.addCase(signinAsync.fulfilled, (state, action) => {
      return { error: null, loading: false, user: action.payload };
    }),
      builder.addCase(signinAsync.pending, (state, action) => {
        return { ...state, loading: true };
      }),
      builder.addCase(signinAsync.rejected, (state, action) => {
        return { user: null, error: action.error, loading: false };
      }),
      // sign up
      builder.addCase(signupAsync.fulfilled, (state, action) => {
        return { error: null, loading: false, user: action.payload };
      }),
      builder.addCase(signupAsync.pending, (state, action) => {
        return { ...state, loading: true };
      }),
      builder.addCase(signupAsync.rejected, (state, action) => {
        return { user: null, error: action.error, loading: false };
      });
  },
});

export default authSlice.reducer;
