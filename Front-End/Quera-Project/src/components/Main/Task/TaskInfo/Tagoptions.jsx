import { Tagcolors } from "../TagOptions/Tagcolors";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import axios from "axios";
import { useAuth } from "../../../ContextApi/AuthContext";
import { baseurl } from "../../../../assets/baseUrl";
import LabelOffOutlinedIcon from '@mui/icons-material/LabelOffOutlined';
export const Tagoptions=({  id,setEdit,tagOptions,tagName,fetchTags,taskid })=>{
    const {token}=useAuth()
       const unTag=()=>{
           axios.post(baseurl+'/tags/untag',{
            name:tagName,
            taskId:taskid
           },{headers:{'x-auth-token':token}})
           .then((res)=>{
            fetchTags()
           })
           .catch((error)=>{
            console.log(error)
          })
       }
      const Tagdelete=()=>{
        axios.delete(baseurl+'/tags/'+tagName,{headers:{'x-auth-token':token}})
        .then((res)=>{
            window.location.reload()
        })
        .catch((error)=>{
          console.log(error)
        })
      }
      const TagColorChange=async(id,value)=>{
       await axios.patch(baseurl+'/tags/'+tagName,{
            name:tagName,
            color:value
        },{headers:{'x-auth-token':token}})
        .then((res)=>{
            window.location.reload()
        })
        .catch((error)=>{
          console.log(error)
        })
      
      }
    const [showcolors, setcolors] = useState(false);
    return (
      <article
        dir="rtl"
        style={{ display: tagOptions ? "flex" : "none" }}
        onMouseDown={(e)=>e.preventDefault()}
        className=" cursor-default z-10 h-[85px] justify-between min-w-[90px] rounded-lg shadow-md absolute bg-white p-2 gap-1 font-dana flex-col"
      >
        <section onClick={()=>unTag()} className="flex cursor-pointer flex-row  gap-1">
          <LabelOffOutlinedIcon className="!text-xs" />
          <small className=" text-[10px]">حذف از تسک</small>
        </section>
        <section onClick={()=>Tagdelete()} className="flex cursor-pointer flex-row  gap-1">
          <CloseIcon className="!text-xs" />
          <small className=" text-[10px]">حذف</small>
        </section>
        <section onClick={()=>setEdit(true)} className="flex flex-row gap-1">
          <EditIcon  className=" !text-xs text-[#BDBDBD]" />
          <small className=" cursor-pointer text-[10px]">ویرایش تگ</small>
        </section>
        <section
          onMouseLeave={() => {
            setcolors(false);
          }}
          className="flex cursor-pointer flex-row gap-1"
        >
          <span
            id={id}
            onMouseEnter={() => {
              setcolors(!showcolors);
            }}
          >
            <ColorLensOutlinedIcon className=" !text-xs text-[#BDBDBD]" />
            <small id={id} className=" text-[10px]">
              ویرایش رنگ
            </small>
          </span>
          <span className="relative flex flex-row items-center">
            <Tagcolors id={id} TagColorChange={TagColorChange}  showcolors={showcolors} />
          </span>
        </section>
      </article>
    );
  };
  