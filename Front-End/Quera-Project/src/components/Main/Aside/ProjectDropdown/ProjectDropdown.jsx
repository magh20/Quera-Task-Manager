/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ShareIcon from '@mui/icons-material/Share';
import { useTheme } from '../../../ThemeContext/ThemeContext';

export const ProjectDropdown=({show,setShow,id,RemoveProject,setSharepr,Mylesson,setMylesson})=>{
    const {Themecolor}=useTheme()
     return (
          <div dir="rtl" onMouseDown={(e)=>{e.preventDefault(0)}} style={{visibility:show ? "visible":"hidden",width:'190px',height:show ? "190px":"0",}}  className=" overflow-hidden flex transition-all flex-col absolute  gap-3  shadow-lg rounded-lg p-3 bg-white">
               <div className=" flex flex-row  cursor-pointer items-center gap-2">
                    <AddCircleOutlineIcon className='!text-xl'/>
                    <span className=" my-auto font-dana  text-sm">ساختن تسک جدید</span>
               </div>

               <div onClick={()=>{setMylesson(Mylesson.map((item)=>{
                    return {...item,projects:item.projects.map((p)=>{return {...p,edit:id == p.id ? true:p.edit}})}
               }))}} className=" flex flex-row  cursor-pointer items-center gap-2">
                    <EditRoundedIcon className='!text-xl'/>
                    <span className="font-dana  text-sm">ویرایش نام پروژه</span>
               </div>
      
               <div className=" flex flex-row  cursor-pointer items-center gap-2">
                    <InsertLinkRoundedIcon className='!text-lg -rotate-45'/>
                    <span className="font-dana text-sm">کپی لینک</span>
               </div>

               <div onClick={()=>{RemoveProject(id)}}  className=" flex flex-row   cursor-pointer items-center gap-2">
                    <DeleteTwoToneIcon  className=' text-red-600 !text-lg'/>
                    <span className=" text-red-600 font-dana text-sm">حذف</span>
               </div>

               <div style={{backgroundColor:Themecolor}} onClick={()=>{setShow(false),setSharepr(true)}} className=" flex flex-row  cursor-pointer bg-submitColor h-9 items-center px-3 rounded-md gap-2">
                    <ShareIcon className='text-white !text-lg '/>
                    <span className=" font-dana text-white text-sm">اشتراک‌گذاری </span>
               </div>
          </div>
     );
}