
/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";


export function InviteUser() {
    const [val, setVal] = useState("");

    const axs = axios.create({
        baseURL: 'mongodb://localhost:27017'
    });

    // ***
    const addUser = () => {
        axs.post(`/projects/:projectId/members/:${val}`)

        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
    }

  return (
    <>
        <form>
            <button className="text-sm font-medium font-dana text-white bg-sendEmailBtn w-[80px] h-[40px] rounded-s-md" onClick={addUser}>ارسال</button>
            <input  dir="rtl" className="font-dana outline-none pr-2 rounded-r-md border-none bg-neutral-100 w-[340px] h-[40px]" type="text" placeholder=" دعوت با نام کاربری" onChange={(e)=>{setVal(e.target.value)}} />
        </form>
    </>
  )
}
