import React, { useContext, useState } from "react";
import Logo from "../assets/vcart logo.png";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
// import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { authDataContext } from "../context/AuthContext.jsx";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase.js";
import { userDataContext } from "../context/UserContext.jsx";
import Loading from '../component/Loading';


const Login = () => {
  let navigate = useNavigate();
  let [show, setshow] = useState(false)
  let {serverUrl} = useContext(authDataContext);
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let {getCurrentUser} = useContext(userDataContext);
  let [loading,setLoading] = useState(false)

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(serverUrl + "/api/auth/login", {
        email,
        password,
      }, {withCredentials: true});
      console.log(result.data);
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleSign = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;

      const result = await axios.post(serverUrl + "/api/auth/googlelogin", {
        name,
        email,
      }, {withCredentials: true});
      // console.log(result.data);
      navigate("/login");

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      <div
        className="w-full h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Logo} alt="V Cart Logo" className="h-[40px]" />
        <h1 className="text-[20px]">V cart</h1>
      </div>
      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-[25px] font-bold">Registration Page</span>
        <span className="text-[15px] font-semibold">
          Welcome to oneCart, Place Tour order
        </span>
      </div>
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000035] border-[1px] border-[#96969635] backdrop-blur-md rounded-lg flex items-center justify-center">
        <form
          action=""
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
          onSubmit={handleSignin}
        >
          <div className="w-[90%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center gap-[10px] py-[20px] curser-pointer" onClick={googleSign}>
            <img className="w-[30px] rounded-full" src={google} alt="" />{" "}
            Registration with google
          </div>
          <div className="w-[100%] h-[20px] rounded-lg flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div> OR{" "}
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>
          <div className="w-[90%]  flex flex-col items-center justify-center gap-[15px] relative ">
            <input
              type="email"
              className="w-[100%] h-[50px] rounded-lg bg-[#00000035] border-[2px] border-[#96969635] backdrop:blur-sm shadow-lg bg-transparent placeholder:text-white px-[20px] font-semibold"
              placeholder=" Email"
              required
              onChange={(e) => setemail(e.target.value)} value={email}
            />
            <input
              type={show ? "text" : "password"}
              className="w-[100%] h-[50px] rounded-lg bg-[#00000035] border-[2px] border-[#96969635] backdrop:blur-sm shadow-lg bg-transparent placeholder:text-white px-[20px] font-semibold"
              placeholder=" Password"
              required
              onChange={(e) => setpassword(e.target.value)} value={password}
            />
            {!show && <IoEyeOffOutline  className="absolute right-[20px] top-[38%] translate-y-[-50%]" onClick={() => setshow(prev => !prev)}/>}
            {show && <IoEye className="absolute right-[20px] top-[38%] translate-y-[-50%]" onClick={() => setshow(prev => !prev)}/>}
            <button className="w-[100%] h-[50px] rounded-lg bg-[#6060f5] flex items-center justify-center mt-[20px] text-[18px] font-semibold">
              {loading? <Loading/> : "Login"}
            </button>
            <p className="flex items-center justify-center gap-[10px]">You Have Not An Account?<span className="text-[#5555f6cf] text-17px font-semibold curser-pointer"onClick={() => navigate("/signup")}>Create New Account</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
