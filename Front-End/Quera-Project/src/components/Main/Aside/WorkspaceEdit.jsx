import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
export const Workspaceedit=({workspaceHandle,id,name,undoWorkspace})=>{
    const [value,setvalue]=useState(name)
    return(
        <div  
        className="flex px-2 transition-height flex-row-reverse justify-between items-center bg-asideProject rounded h-[33px] pr-1 mt-4 group/lesson">
            <input placeholder="نام ورک اسپیس را وارد کنید" dir="rtl" className=" px-1 text-base font-medium outline-none h-[22px] font-dana rounded  bg-asideProject" 
            type="text" value={value} onChange={(e)=>{setvalue(e.target.value)}} />

            <span className=" hover:scale-105 transition-transform cursor-pointer font-dana  text-sm" 
            onClick={()=>workspaceHandle(id,value)}>تایید</span>

            <CloseIcon onClick={undoWorkspace} className="!text-sm cursor-pointer text-black hover:text-red-600 transition-all active:opacity-60 hover:transition-all rounded-full "/>
        </div>
        )
}