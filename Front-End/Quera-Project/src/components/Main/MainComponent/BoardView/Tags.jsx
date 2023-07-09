import { Tagoptions } from "../../Task/TaskInfo/Tagoptions"
import { useState } from "react"
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import axios from "axios";
import { baseurl } from "../../../../assets/baseUrl";
import { useAuth } from "../../../ContextApi/AuthContext";

export const TagsinTask=({id,color,tagName,fetchTags,taskid})=>{

      const {token}=useAuth()
     const [showtags,setshowTags]=useState(false)
     const [value,setValue]=useState(tagName)
     const [edit,setEdit]=useState(false)
     const Tagedit=async()=>{
      if(value.trim()){
       await axios.patch(baseurl+'/tags/'+tagName,{
          name:value,
          color:color
      },{headers:{'x-auth-token':token}})
      .then((res)=>{
          setEdit(false)
          window.location.reload()
      })
      .catch((error)=>{
        console.log(error)
      })
      }
      
    
    }
   return !edit ?  <div onClick={()=>{setshowTags(!showtags)}} tabIndex={1} onBlur={()=>{setshowTags(false)}} style={{backgroundColor:color}} className={ ' h-[19px] flex items-center justify-center p-2 rounded-l-2xl w-29 h-19' }>
     <span className="relative flex items-start justify-end"><Tagoptions setEdit={setEdit} taskid={taskid}  fetchTags={fetchTags} tagName={tagName} id={id} tagOptions={showtags}/></span>
                    <label className=" font-dana font-medium text-[11px] text-right text-gray-800 ">{tagName}</label>
                   
                </div>:<div dir="rtl" className="flex flex-row items-center"><input value={value} style={{backgroundColor:color}} className=" p-1 rounded outline-none w-[50px] text-[12px]" onChange={(e)=>setValue(e.target.value)}  /><p onClick={Tagedit} className=" cursor-pointer mr-1 text-[12px]">تایید</p><CancelOutlinedIcon onClick={()=>{setEdit(false),setValue(tagName)}} className=" mr-1 text-red-400 !text-[13px]"/></div>
}