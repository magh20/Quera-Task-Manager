import { useState } from 'react';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import profile from "../../../../assets/img/girl.png"
import { TaskLog } from './TaskLog';
import { ShareTask } from '../ShareTask/ShareTask';
import { CommentSection } from './CommentSection';
import { toJalaali } from 'jalaali-js';
import { useTheme } from '../../../ThemeContext/ThemeContext';


export const TaskInfo = ({ show, setShow,description,id,name,deadline,setTaskEdit,updateBoard }) => {

    const [shareTask, setShareTask] = useState(false);
    const date=new Date(deadline)
    const {Themecolor}=useTheme()
    const { jm, jd } = toJalaali(date);
        
    const shareShow = () => {
        setShareTask(true);
    }
    const monthNames = [
        "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
    ];

    function convertToPersianNumbers(input) {
        var persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        return input.replace(/[0-9]/g, function (match) {
            return persianNumbers[parseInt(match)];
        });
    }

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-30 transition ease-in-out delay-150 duration-300 ${show? 'visible': 'invisible'}`} >
            <div className="w-[1352px] h-[596px] bg-white rounded-[20px]" >
                <button className="mt-[33px] ml-[36px] text-gray-400 " onClick={() => { setShow(!show) }} ><ClearOutlinedIcon fontSize='' /></button>
                <div className="w-[1316px] h-[506px] mt-[33px] rounded-bl-[20px] flex">
                    <div className=" relative bg-white w-[665px] h-[506px] rounded-bl-[20px] overflow-y-hidden ">
                        {/* task log  header */}
                        <div className="w-[659px] h-[222px] bg-white flex flex-col justify-between">
                            <div className="w-full h-[57px] bg-white flex justify-between ">

                                <div className="w-[33px] h-[33px]  ml-[36px] mt-[11px] relative">
                                    <div className="flex items-center gap-[10px] w-[18px] h-[18px] absolute left-[16px] bg-blue-400 rounded-full z-20">
                                        <label className="font-dana font-medium text-xs text-right text-black mx-auto mt-1">۲</label>
                                    </div>
                                    <RemoveRedEyeOutlinedIcon className=" absolute top-[6px] text-gray-400 z-10" fontSize='large' />
                                </div>

                                <div className="min-w-[381px] h-[57px] mr-5 flex justify-between items-center">
 
                                    <div className=" h-[48px] flex flex-col justify-between">
                                        <label className=" font-dana font-medium  text-xs text-right text-gray-400 flex-grow-0 float-none" dir='rtl'>ددلاین</label>
                                        <label className=" font-dana font-medium text-base text-right text-gray-800 order-1  flex-none" dir='rtl'>{convertToPersianNumbers(jd.toString())} {monthNames[jm - 1]}</label>
                                    </div>
                                   

                                    <div className="w-[109px] h-[48px] flex flex-col justify-between">
                                        <label className=" font-dana font-medium  text-xs text-right text-gray-400 flex-grow-0 float-none" dir='rtl'>زمان</label>
                                        <div className='flex justify-between'>
                                            <label className="font-dana font-medium text-base text-right text-gray-800 flex-grow-0 flex-none">00 : 00 : 00</label>
                                            <PlayCircleFilledTwoToneIcon color='success' />
                                        </div>
                                    </div>

                                    <div className="w-fit h-[48px] flex flex-col justify-between">
                                        <label className=" font-dana font-medium  text-xs text-right text-gray-400 flex-grow-0 float-none" dir='rtl'>ساخته‌شده در</label>
                                        <label className=" font-dana font-medium text-base text-right text-gray-800 order-1 flex-grow-0 flex-none" dir='rtl'>۱ اردیبهشت ۱۴۰۲</label>
                                    </div>
                                </div>
                            </div>

                            {/* task log */}
                            <div className="bg-white w-full mt-[48px] h-fit overflow-y-scroll snap-y scrollbar-hide">
                                <div className=" bg-white w-full h-[25px] pr-5 pl-9 mb-5 flex justify-between flex-row items-center self-stretch" dir='rtl'>
                                    <p className="ml-1 font-dana font-normal text-base text-right text-black"><span style={{color:Themecolor}} className=" text-teal-600">شما </span>این تسک را ساختید</p>
                                    <p className="font-dana font-normal text-xs text-right text-gray-400">۱ ساعت پیش</p>
                                </div>

                                <TaskLog fromName={"In Progress"} fromColor={"bg-red-500"} toName={"Done"} toColor={"bg-green-500"} />
                                <TaskLog fromName={"Done"} fromColor={"bg-green-500"} toName={"Pending"} toColor={"bg-yellow-500"} />
                                <TaskLog fromName={"Done"} fromColor={"bg-green-500"} toName={"Pending"} toColor={"bg-yellow-500"} />
                                <TaskLog fromName={"Done"} fromColor={"bg-green-500"} toName={"Pending"} toColor={"bg-yellow-500"} />
                            </div>
                        </div>
                        <CommentSection id={id} />
                    </div>

                    {/* right side */}
                    <div className="bg-white w-[657px] h-[400px] flex flex-col justify-between ">
                        {/* Header  */}
                        <div className="bg-white w-full h-[57px] px-5 flex items-center justify-between ">
                            {/* share */}
                            <div className="bg-white h-[25px] flex items-center justify-center ">
                                <article className="mr-0 font-semibold flex flex-row cursor-pointer">
                                    <MoreHorizIcon className='text-gray-400 mr-2' fontSize='small' />
                                    <span className="w-auto mr-2 h-5 flex items-center font-dana font-medium text-base" onClick={shareShow}>اشتراک گذاری</span>

                                    <span className="w-auto h-5 mr-2 flex items-center">{<ShareOutlinedIcon className="text-gray-400 " fontSize='small'></ShareOutlinedIcon>}</span>
                                </article>
                                <label style={{color:Themecolor,borderColor:Themecolor}} onClick={()=>{setShow(false),setTaskEdit(true)}} className=' text-white border font-medium p-1 text-xs rounded-md cursor-pointer  hover:opacity-70'>ویرایش تسک</label>
                            </div>

                            <div className="bg-white w-[335px] h-[34px] flex justify-between items-center">
                                {/* flag  */}
                                <div className='w-[34px] h-[34px] border-dashed border-1 border-red-600 rounded-full flex items-center justify-center'>
                                    <OutlinedFlagRoundedIcon className='text-red-600' />
                                </div>

                                {/* corprator  */}
                                <div className=" bg-white w-[61px] h-[34px] flex flex-row items-start order-1">

                                    <div className="w-[34px] h-[34px] flex items-center justify-center p-[4.25px] gap-[10.62px] rounded-full border-dashed border-1 border-gray-400">
                                        <div className="w-full h-full text-gray-400 flex items-center justify-center ">
                                            <PersonAddAltOutlinedIcon />
                                        </div>

                                    </div>

                                    <img className="-ml-2 w-[35px] h-[34px] rounded-full flex-none" src={profile} />
                                </div>

                                <AssignmentTurnedInOutlinedIcon className='text-gray-400 order-2' />

                                <div className='w-[138px] h-[30px] order-3 flex justify-between '>
                                    <div className="bg-red-500 w-[25px] h-[30px] rounded-tl-md rounded-bl-md flex items-center justify-center">
                                        <ArrowBackIosNewOutlinedIcon className='text-white' sx={{ fontSize: 13 }} />
                                    </div>
                                    <div className="bg-red-500 w-[111px] h-[30px] flex justify-center items-center ">
                                        <label className="font-dana font-normal text-s text-right text-white" >Open</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* main  */}
                        <div className="bg-white w-full h-[295px] flex flex-col justify-between items-end pr-5">
                            {/* bookmark  */}
                            <div className=" border-gray-400 w-[34px] h-[34px] border-1 border-dashed rounded-full flex items-center justify-center" >
                                <BookmarksOutlinedIcon className='text-gray-400' fontSize='small' />
                            </div>
                            {/* task discription */}
                            <div className="bg-white w-full h-[154px] flex flex-col justify-between" dir='rtl'>
                                <h1 className=" font-dana font-semibold text-2xl text-right text-black">{name}</h1>
                                <div className='bg-white w-[617px] h-[96px] flex flex-row justify-end items-start p-3 gap-[10px] border-1 rounded-xl border-gray-300 order-1 self-stretch'>
                                    <p className="font-dana font-normal text-base text-right text-black flex-grow"
                                    >{description}</p>
                                </div>
                            </div>

                            <div className="bg-white w-[137px] h-[68px] flex flex-col justify-between" dir='rtl'>
                                <div className='bg-white w-[137px] h-[24px] flex flex-row justify-start items-center p-0 gap-1 flex-grow-0'>
                                    <AddBoxOutlinedIcon className='text-teal-500' sx={{ fontSize: 23 }} />
                                    <label className='text-teal-500 font-dana font-medium text-xs text-right flex-grow-0'>اضافه کردن چک لیست</label>
                                </div>

                                <div className='bg-white w-[137px] h-[24px] flex flex-row justify-start items-center p-0 gap-1 flex-grow-0'>
                                    <AddBoxOutlinedIcon className='text-teal-500' sx={{ fontSize: 23 }} />
                                    <label className='text-teal-500 font-dana font-medium text-xs text-right flex-grow-0'>اضافه کردن پیوست</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { shareTask &&<ShareTask updateBoard={updateBoard} taskid={id} show={shareTask} setShow={setShareTask} />}
        </div>
    );
}
