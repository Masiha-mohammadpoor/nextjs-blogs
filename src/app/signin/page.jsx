"use client";
import { useFormik } from "formik";
import Input from "@/components/Input/Input";
import * as Yup from "yup";
import { toPersianDigits } from "@/utils/toPersianDigits";
import axios from "axios";
import { toast } from 'react-hot-toast';

const initialValues = {
  email: "",
  password: "",
};

const submitHandler = async (values) => {
  try{
    const {data} = await axios.post("http://localhost:5000/api/user/signin" , values , {withCredentials : true})
    toast.success("با موفقیت وارد شدید !!!")
  }catch(err){
    toast.error(err?.response?.data?.message)
  }
}

const SignIn = () => {

  const validationSchema = Yup.object({
    email : Yup.string().email("ایمیل نادرست است").required("ایمیل را وارد کنید"),
    password : Yup.string().required("رمز عبور را وارد کنید").min(8 , `حداقل باید ${toPersianDigits(8)} کاراکتر باشد`)
  })

  const formik = useFormik({
    initialValues,
    onSubmit: submitHandler,
    validationSchema,
  });



  return (
    <div >
      <form onSubmit={formik.handleSubmit} className="mt-16 w-1/4 mx-auto">
        <h1 className="mb-5 text-2xl font-bold text-blue-600">ورود</h1>
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
        <button
          type="submit"
          className="w-full mt-3 bg-blue-500 rounded-md text-white px-7 py-2 ">ورود</button>
      </form>
    </div>
  );
};

export default SignIn;
