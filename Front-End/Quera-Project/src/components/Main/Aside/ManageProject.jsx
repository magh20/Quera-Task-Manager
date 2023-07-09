/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from "../../ContextApi/AuthContext";
export const ManageProjects = ({showInner,id,Addhandle,RemoveProject,nameProject,edit,setMylesson,workspaceId,editHandle}) => {
    const [value,setvalue]=useState(()=> nameProject==workspaceId? "":nameProject);
    const {token}=useAuth()
    const undoproject=()=>{
        if(edit){
             setMylesson(perv=> perv.map((item)=>{
                return {...item,projects:item.projects.map((p)=>{
                    return {...p,edit: id == p.id ? false:p.edit}
                })}
             }))
        }
        else(
            setMylesson(perv=>perv.map((item)=>{
                return {...item,projects:item.projects.filter((p)=>{
                    return p.id != id
                })}
            }))
        )
    }
    
    
    return(
        <div style={{visibility:showInner ? "visible":"hidden",height:showInner ? "33px":"0",marginTop:showInner ? "16px":"0"}} 
        className="flex px-2 transition-height flex-row-reverse justify-between items-center bg-asideProject rounded h-[33px] pr-1 mt-4 group/lesson">
            <input placeholder="نام پروژه را وارد کنید" dir="rtl" className=" px-1 text-base font-medium outline-none h-[22px] font-dana rounded  bg-asideProject" 
            type="text" value={value} onChange={(e)=>{setvalue(e.target.value)}} />

            <span className=" hover:scale-105 transition-transform cursor-pointer font-dana  text-sm" 
            onClick={()=>{edit ? editHandle(id,value,setvalue) :Addhandle(workspaceId,value,setvalue)}}>تایید</span>

            <CloseIcon onClick={undoproject} className="!text-sm cursor-pointer text-black hover:text-red-600 transition-all active:opacity-60 hover:transition-all rounded-full "/>
        </div>
    );
}