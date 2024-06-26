"use client";
import { useFormik } from "formik";
import Input from "@/components/Input/Input";
import * as Yup from "yup";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { useAuthActions } from "@/context/AuthProvider";
import { signupAsync } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

const initialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const SignUp = () => {
  const dispatch = useDispatch();

  const submitHandler = async (values) => {
    const { name, email, phoneNumber, password } = values;
    dispatch(signupAsync({ name, email, phoneNumber, password }));
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("نام را وارد کنید"),
    phoneNumber: Yup.string()
      .required("شماره همراه را وارد کنید")
      .matches(/^(\+98|0)?9\d{9}$/, "شماره همراه اشتباه است")
      .nullable(),
    email: Yup.string()
      .email("ایمیل نادرست است")
      .required("ایمیل را وارد کنید"),
    password: Yup.string()
      .required("رمز عبور را وارد کنید")
      .min(8, `حداقل باید ${toPersianDigits(8)} کاراکتر باشد`),
    repeatPassword: Yup.string()
      .required("رمز عبور را تکرار کنید")
      .oneOf([Yup.ref("password"), null], "رمز عبور تفاوت دارد"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: submitHandler,
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="mt-5 w-1/4 mx-auto">
        <h1 className="mb-2 text-2xl font-bold text-blue-600">ثبت نام</h1>
        <Input
          label="نام"
          name="name"
          formik={formik}
          type="text"
          placeholder="نام ..."
        />
        <Input
          label="شماره همراه"
          name="phoneNumber"
          formik={formik}
          type="text"
          placeholder="شماره همراه ..."
        />
        <Input
          label="ایمیل"
          name="email"
          formik={formik}
          type="email"
          placeholder="ایمیل ..."
        />
        <Input
          label="رمز عبور"
          name="password"
          formik={formik}
          type="password"
          placeholder="رمز عبور ..."
        />
        <Input
          label="تکرار رمز عبور"
          name="repeatPassword"
          formik={formik}
          type="password"
          placeholder="تکرار رمز عبور..."
        />
        <button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          className="w-full mt-3 bg-blue-500 rounded-md text-white px-7 py-2 "
        >
          ورود
        </button>
      </form>
    </div>
  );
};

export default SignUp;
