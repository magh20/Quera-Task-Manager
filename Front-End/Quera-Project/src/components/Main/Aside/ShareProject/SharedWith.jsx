/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { AccessLevel } from "./AccessLevel";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export const SharedWith = ({profileImg, userName}) => {
    const accessLevel = [
        {id:1, levelAccess:"دسترسی کامل", description:"توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه"},
        {id:2, levelAccess:"دسترسی ویرایش", description:"توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد."},
        {id:3, levelAccess:"دسترسی کامنت", description:"توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد."},
        {id:4, levelAccess:"فقط دسترسی مشاهده", description:"توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد."},
    ];

    const [Show,setShow] = useState(false);
    const [Acc, setAcc] = useState("دسترسی کامل");

    const AccValue = (value) => {
        setShow(!Show);
        setAcc(value);
    }

    return(
        <div className="flex flex-row-reverse mt-4 items-start justify-between relative" onBlur={()=>{setShow(false)}}>
            <div className="flex flex-row-reverse items-center justify-start">
                <span className="w-[34px] h-[34px] ml-2">
                    <img className="w-[34px] h-[34px] rounded-full" src={profileImg} alt="picture!" />
                </span>
                <span className="font-dana font-normal text-sm ml-2 flex items-center">{userName}</span>
            </div>

            <button id="btn" className="font-dana font-normal text-xs w-[111px] h-[27px] border-1 border-gray-200 rounded-md flex flex-row-reverse justify-center items-center" onClick={() => {setShow(!Show)}}>
                {Acc}
                <KeyboardArrowDownOutlinedIcon className='!text-sm mr-2'></KeyboardArrowDownOutlinedIcon>
            </button>

            <div className="w-[252px] h-[277px] z-20 flex flex-col gap-3 shadow-lg rounded-lg p-3 bg-white absolute left-0" style={{visibility: Show ? "visible":"hidden"}} onMouseDown={(e)=>{e.preventDefault()}}>
                {accessLevel.map((item) => {
                    return(
                        <AccessLevel AccValue={AccValue} key={item.id} levelaccess={item.levelAccess} description={item.description}/>
                    );
                })}
            </div>    
        </div>
    );
}