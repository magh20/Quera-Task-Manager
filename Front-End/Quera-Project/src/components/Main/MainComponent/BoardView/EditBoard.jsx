import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
export const EditBoard = ({name,id,editBoard,setEdit}) => {
    const [value,setvalue]=useState(name);
    
    const undoproject=()=>{
    setEdit(false)
    }
    
    return(
        <div  className="w-[260px] h-[599px] left-[788px] gap-5 mt-[17px] flex flex-col items-center p-0 flex-none order-5 flex-grow-0" dir='ltr'>
        <div  dir="ltr"
        className="flex px-2 transition-height flex-row-reverse justify-between items-center bg-asideProject rounded h-[33px] pr-1 mt-4 group/lesson">
            <input placeholder="نام پروژه را وارد کنید" dir="rtl" className=" px-1 text-base font-medium outline-none h-[22px] font-dana rounded  bg-asideProject" 
            type="text" value={value} onChange={(e)=>{setvalue(e.target.value)}} />

            <span className=" hover:scale-105 transition-transform cursor-pointer font-dana  text-sm" 
            onClick={()=>{editBoard(id,value,setEdit)}}>تایید</span>

            <CloseIcon onClick={undoproject} className="!text-sm cursor-pointer text-black hover:text-red-600 transition-all active:opacity-60 hover:transition-all rounded-full "/>
        </div></div>
    );
}