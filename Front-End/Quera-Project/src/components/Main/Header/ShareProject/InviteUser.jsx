
/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../ContextApi/AuthContext";
import { baseurl } from "../../../../assets/baseUrl";
import { useTheme } from "../../../ThemeContext/ThemeContext";


export function InviteUser({id,fetchMembers}) {
    const [val, setVal] = useState("");
    const[error,setError]=useState("")
    const {Themecolor}=useTheme()
    const {token,fetchData}= useAuth()

    // ***
    const addUser = () => {
        axios.put(baseurl+`/projects/${id}/members/${val}`,{},{headers:{'x-auth-token':token}})

        .then(function (response) {
        fetchMembers()
        setError("")
        })
        .catch((error)=>{
            error.response.data.code == 404 ? setError("این نام کاربری وجود ندارد"):error.response.data.code == 400 && setError("این کاربر قبلا اضافه شده")
        })
    }

  return (
    <>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <button style={{backgroundColor:Themecolor}} className="text-sm font-medium font-dana text-white bg-sendEmailBtn w-[80px] h-[40px] rounded-s-md" onClick={addUser}>ارسال</button>
            <input  dir="rtl" className="font-dana outline-none pr-2 rounded-r-md border-none bg-neutral-100 w-[340px] h-[40px]" type="text" placeholder=" دعوت با نام کاربری" onChange={(e)=>{setVal(e.target.value)}} />
            <p className=" float-right mt-1 font-dana font-semibold text-xs text-red-600">{error}</p>
        </form>
    </>
  )
}
