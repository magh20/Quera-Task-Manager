/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export function TaskName({showInput, setShowInput, value, setValue}) {
    const [val, setVal] = useState("");
    
    const Remove=()=>{
        if(value !== ""){
            setValue(value);
            setShowInput(!showInput);
        }
    }
    const Add=()=>{
        if(value !== ""){
            setValue(val);
            setShowInput(!showInput);
        }
    }
    

  return (
    <div style={{visibility:showInput ? "visible":"hidden"}}
    className="flex flex-row-reverse justify-end items-center bg-asideProject rounded h-[50px] mr-2">
        <input placeholder="نام تسک را وارد کنید" dir="rtl" className=" text-base font-medium outline-none h-[40px] font-dana rounded  bg-asideProject pr-2" 
        type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} onClick={()=>{setVal("")}} />

        <span className=" hover:scale-105 transition-transform cursor-pointer font-dana  text-sm ml-2 mr-2" 
        onClick={()=>{Add()}}>تایید</span>

        <CloseIcon onClick={()=>{Remove()}} className=" !text-base cursor-pointer text-black hover:text-red-600 transition-all active:opacity-60 hover:transition-all rounded-full ml-2"/>
    </div>
  )
}
