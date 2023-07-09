/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { SharedWithOther } from "./SharedWithOther";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import myProfile from"../../../../assets/images/p2.jpg";
import {  useState } from "react";
import axios from "axios";
import { useAuth } from "../../../ContextApi/AuthContext";
import { baseurl } from "../../../../assets/baseUrl";
import { useTheme } from "../../../ThemeContext/ThemeContext";

export const ShareWorkspace = ({show,id, setShow, nameProjects,members,setMylesson}) => {
    const [value,setValue]=useState("")
    const [Pro, setPro] = useState("همه پروژه ها");
    const {token,fetchData}=useAuth()
    const [errorMessage,setError]=useState("")
    const {Themecolor}=useTheme()
    function exit(){
        setShow(!show);
        setPro("همه پروژه ها")
    }
    async function addMember(){
       await axios.put(baseurl+`/workspace/${id}/members/${value}`,{},{headers:{"x-auth-token":token}})
        .then((response)=>{
            console.log(response)
            fetchData(setMylesson)
            setError("")
        })
        .catch((error)=>{
            error.response.data.code == 404 ? setError("این نام کاربری وجود ندارد"):error.response.data.code == 400 && setError("این کاربر قبلا اضافه شده")
        })
    }
   async function deleteMember(userid){
      await  axios.delete(baseurl+`/workspace/${id}/members/${userid}`,{headers:{"x-auth-token":token}})
        .then((response)=>{
            console.log(response)
            fetchData(setMylesson)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    

    return(
        <div className="w-screen h-screen bg-gray-600 bg-opacity-50 z-40 fixed inset-0 flex justify-center items-center" >{/* entire page */}

            {/* shareProject component */}
            <section className="rounded-2xl bg-white w-[547px] h-[402px] flex flex-col items-center mb-20">

                {/* share project name & exit */}
                <article className="w-[90%] h-[50px] flex flex-row justify-end items-end">
                    <span className="font-dana font-medium text-xl my-0 mx-auto pl-6">به اشتراک گذاری ورک اسپیس</span>
                    <span className=" mb-1 cursor-pointer" onClick={exit}><CloseOutlinedIcon className="!text-base"></CloseOutlinedIcon></span>
                </article>

                {/* email input & button */}
                <article className="w-[90%] h-auto flex flex-row mt-10 justify-center">
                        <button style={{backgroundColor:Themecolor}}  onClick={addMember} className="text-sm font-medium font-dana text-white w-[90px] h-[40px] rounded-s-md">ارسال</button>
                        <input value={value} onChange={(e)=>{setValue(e.target.value)}}  dir="rtl" className="font-dana outline-none pr-2 rounded-r-md border-none bg-neutral-100 w-[400px] h-[40px]" type="text" placeholder=" دعوت با نام کاربری"/>
                       
                </article> 
                <div dir="rtl" className="flex  mr-14 w-full flex-start"><p className=" text-red-600 font-semibold font-dana text-xs float-right">{errorMessage}</p></div>

                {/* link */}
                <article className="w-[90%] flex flex-row-reverse mt-7 justify-between">
                    <div className="flex flex-row-reverse">
                        <span className="ml-2 leading-3"><LinkOutlinedIcon className="!text-lg"></LinkOutlinedIcon></span>
                        <span className="font-dana font-normal text-sm">لینک خصوصی</span>
                    </div>
                    <button className="font-dana font-normal text-xs border-1 border-gray-200 rounded-md w-[69px] h-[23px]">کپی لینک</button>
                </article>

                {/* shared with... */}
                <article className="w-[90%] flex flex-col mt-7 items-end">
                    <header dir="rtl" className="w-full">
                        <span className="font-dana font-normal text-sm text-stone-500">اشتراک گذاشته شده با</span>
                    </header>

                    {/* all people shared with... */}
                    <div className="flex w-full flex-col mt-4">
                        {/* shared with me */}
                        <div className="flex flex-row-reverse justify-between">
                            <div className="flex flex-row-reverse items-center">
                                <span className="w-[34px] h-[34px] ml-2">
                                    <img className="w-[34px] h-[34px] rounded-full" src={myProfile} alt="my picture!" />
                                </span>
                                <span className="font-dana font-normal text-sm ml-2 flex items-center">من</span>
                                <span className="font-normal text-xs font-dana w-[109px] h-[26px] bg-cyan-200 rounded-md flex items-center justify-center">workspace owner</span>
                            </div>
                            <button className="font-dana font-normal text-xs w-[83px] h-[27px] border-1 border-gray-200 rounded-md" disabled>دسترسی کامل</button>
                        </div>

                        {/* shared with other */}
                        {members.map((item) => {
                            return(
                                <SharedWithOther deleteMember={deleteMember} key={item.user._id} firstname={item.user.firstname} lastname={item.user.lastname} id={item.user._id} userName={item.user.email} pro={Pro} nameProjects={nameProjects} setPro={setPro} Pro={Pro} />
                            );
                        })}
                    </div>
                </article>
            </section>
        </div>
    );
                    }            
