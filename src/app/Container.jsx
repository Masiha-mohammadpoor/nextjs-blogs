"use client"
import Header from "@/components/Header/Header";
import { Toaster } from "react-hot-toast";
import { useSelector ,useDispatch} from "react-redux";
import { loadUser } from "@/redux/features/auth/authSlice";
import { useEffect , useState} from "react";

const Container = ({children}) => {

  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth);
  const [loading , setLoading] = useState(userData.loading || false);
  useEffect(() => {
    dispatch(loadUser())
  },[loading])


  return (
    <body>
      <Header/>
      <main>{children}</main>
      <Toaster />
    </body>
  );
}
 
export default Container;