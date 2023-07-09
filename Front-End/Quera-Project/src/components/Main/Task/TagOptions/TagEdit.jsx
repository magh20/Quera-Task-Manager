import { useRef, useState,useEffect } from "react"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
export const Tageditor=({bgcolor,setShowTag,tag,id,Tagedit,setEdit})=>{
    const [value,setValue]=useState(tag)
    const editref=useRef()
   
 return <li 
 
    className={`  text-center  self-start flex flex-row justify-between pb-[12px] items-center w-full  group  cursor-pointer `}
><input className=" w-[100px] outline-none p-1 rounded" style={{backgroundColor:bgcolor}}   value={value} onChange={(e)=> setValue(e.target.value)} ref={editref} onClick={()=>{editref.current.focus(),setShowTag(true)}}/>
<CheckOutlinedIcon onClick={()=>{ value ?(Tagedit(id,value),setEdit(false),editref.current.blur()):undefined}}   className=" !text-sm text-[#208D8E]"/>
<CancelOutlinedIcon onClick={()=>{setValue(tag),setEdit(false)}} className=" !text-sm text-[#208D8E]"/>
</li>
}