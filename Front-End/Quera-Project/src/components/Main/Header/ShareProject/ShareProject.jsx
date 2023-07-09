/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { SharedWith } from "./SharedWith";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import myProfile from"../../../../assets/images/p2.jpg";
import { InviteUser } from "./InviteUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../ContextApi/AuthContext";
import { baseurl } from "../../../../assets/baseUrl";
import { useParams } from "react-router-dom";
import { useTheme } from "../../../ThemeContext/ThemeContext";

export const ShareProject = ({show,setShow}) => {
    const {Themecolor}=useTheme();
    const {id}=useParams();
    const {token}=useAuth();
    const [memberDetails,setMemberDetails]=useState([]);

    const fetchMembers=async()=>{
        await axios.get(baseurl+"/projects/"+ id,{headers:{"x-auth-token":token}})
        .then((response)=>{
            setMemberDetails(response.data.data.members)
        })
    }

    async function deleteProjectMember(userid){
        await  axios.delete(baseurl+`/projects/${id}/members/${userid}`,{headers:{"x-auth-token":token}})
            .then((response)=>{
                console.log(response)
                fetchMembers()
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    useEffect(()=>{
        fetchMembers()
    },[]);

    return(
        <div className="w-screen h-screen inset-0 bg-gray-600 bg-opacity-50 z-50 fixed flex justify-center items-center" >{/* entire page */}

            {/* shareProject component */}
            <section className="rounded-2xl bg-white w-[470px] min-h-[365px] flex flex-col items-center">

                {/* share project name & exit */}
                <article className="w-[90%] h-[50px] flex flex-row justify-end items-end">
                    <span className="font-dana font-medium text-xl my-0 mx-auto pl-6">به اشتراک گذاری پروژه</span>
                    <span className=" mb-1 cursor-pointer" onClick={()=>{setShow(!show)}}><CloseOutlinedIcon className="!text-base"></CloseOutlinedIcon></span>
                </article>

                {/* email input & button */}
                <article className="w-[90%] h-auto flex flex-row mt-10 justify-center">
                    <InviteUser fetchMembers={fetchMembers} id={id} />
                </article>

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
                            <button className="font-dana font-normal text-xs w-[83px] h-[27px] border-1 border-gray-200 rounded-md ">دسترسی کامل</button>
                        </div>

                        {/* shared with other */}
                        {memberDetails.map((item)=>{
                            return item.role!= "owner" && <SharedWith deleteProjectMember={deleteProjectMember} firstname={item.user.firstname} 
                            lastname={item.user.lastname} key={item.user._id} userid={item.user._id}  userName={item.user.email} />
                        })}
                    </div>
                </article>
            </section>
        </div>
    );
}