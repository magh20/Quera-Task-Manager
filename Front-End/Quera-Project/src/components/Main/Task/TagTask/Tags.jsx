/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import { MoreHorizRounded } from '@mui/icons-material';
import { Tagdropoptions } from "../TagOptions/TagDropOptions";
import { Tageditor } from "../TagOptions/TagEdit";
export function Tags({bgcolor,tag,setSelectedTag,tagchoose,Tagdelete,id,TagColorChange,setShowTag,Tagedit,wholeref}){
  const [edit,setEdit]=useState(false)
  const dropref=useRef()
    const [tagOptions,setOptions]=useState(false)
    const dotsref=useRef()
    const newtag=false
useEffect(()=>{
  const handleclose=(e)=>{
     return !dropref?.current?.contains(e.target)&& setOptions(false)
  }
  const handleclosewhole=(e)=>{
      
     return !wholeref?.current?.contains(e.target)&& setShowTag(false)
  }
  document.addEventListener("mousedown",handleclosewhole)
  document.addEventListener("mousedown",handleclose)
  return ()=>{document.removeEventListener("mousedown",handleclose),document.removeEventListener("mousedown",handleclosewhole)}
})
    return (edit ? <Tageditor bgcolor={bgcolor} setEdit={setEdit} id={id} tag={tag} Tagedit={Tagedit} setShowTag={setShowTag}/> :<li 
            
    className={`  text-center  self-start flex flex-row justify-between pb-[12px] items-center w-full  group  cursor-pointer `}
>
  <p onClick={()=>{setSelectedTag((pervTag)=>[...pervTag,{id:id,tag:tag,bgcolor:bgcolor}]),tagchoose(tag)}} style={{backgroundColor:bgcolor}} className='flex  bg-[${bgcolor}]  rounded-md hover:opacity-70 justify-center px-2 py-[5px] items-center'> {tag}</p><span ref={dotsref} className='relative'><MoreHorizRounded  ref={dotsref}  onClick={()=>{setOptions(true)}} className='text-[#BDBDBD] group-hover:opacity-100 opacity-0 group-hover:transition-all group-hover:duration-300 !text-xs'/>
  <Tagdropoptions setEdit={setEdit} TagColorChange={TagColorChange} newtag={newtag} Tagdelete={Tagdelete} id={id} tagOptions={tagOptions} dropref={dropref} /></span>
</li>)
}