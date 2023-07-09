/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { SharedWith } from "./SharedWith";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import myProfile from"../../../../assets/images/p2.jpg";
import otherProfile from"../../../../assets/images/p1.jpg";
import { InviteUser } from "./InviteUser";

export const ShareProject = ({show,setShow}) => {

    return(
        <div className="w-screen h-screen inset-0 bg-gray-600 bg-opacity-50 z-50 fixed flex justify-center items-center" style={{visibility:show ? "visible":"hidden"}}>{/* entire page */}

            {/* shareProject component */}
            <section className="rounded-2xl bg-white w-[470px] h-[365px] flex flex-col items-center">

                {/* share project name & exit */}
                <article className="w-[90%] h-[50px] flex flex-row justify-end items-end">
                    <span className="font-dana font-medium text-xl my-0 mx-auto pl-6">به اشتراک گذاری پروژه</span>
                    <span className=" mb-1 cursor-pointer" onClick={()=>{setShow(!show)}}><CloseOutlinedIcon className="!text-base"></CloseOutlinedIcon></span>
                </article>

                {/* email input & button */}
                <article className="w-[90%] h-auto flex flex-row mt-10 justify-center">
                    <InviteUser />
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
                        <SharedWith profileImg={otherProfile} userName="sararahimi@gmail.com" />
                    </div>
                </article>
            </section>
        </div>
    );
}