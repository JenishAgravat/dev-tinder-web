import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";

const Login=()=>{
    const[emailId,setEmailId]=useState("");
    const[password,setPassword]=useState("");
    const dispatch=useDispatch();

    const handleLogin=async()=>{
        try{
            const res=await axios.post(BASE_URL+"/login",{emailId,password},{withCredentials:true})
            dispatch(addUser(res.data));
        }catch(err){
            console.error(err)
        }
    }

    return(<div></div>)
}