
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import { Editcalendar } from "./EditCalendar";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../ContextApi/AuthContext";
import { baseurl } from "../../../../assets/baseUrl";
import { useParams } from "react-router-dom";
import { useTheme } from "../../../ThemeContext/ThemeContext";


export const EditTask = ({taskid,description,name,deadline,setShow,setBoards}) => {
    const date=new Date(deadline)
    const {Themecolor}=useTheme()
  const [Datevalue,setDateValue]=useState(date)
  const {token}=useAuth()
  const {id}=useParams()
  const [showCalendar, setShowCalendar] = useState(false);
  const [value, setValue] = useState(name);
  const [desValue,setDesValue]=useState(description)
  const fetchBoards=async()=>{
   await  axios.get(baseurl+"/board/"+id,{headers:{"x-auth-token":token}})
          .then((response)=>{
            setBoards(response.data.data)
            setBoards(perv=>perv.sort((a,b)=>(a.position < b.position) ? 1 : (a.position > b.position) ? -1 : 0))
          })
  }

  const onsubmit=async(e)=>{
    const date=new Date(Datevalue)
     e.preventDefault()
     await axios.put(baseurl+`/task/${taskid}`,{
        name:value,
        description:desValue,
        deadline:date.toISOString()
     },{headers:{'x-auth-token':token}})
     .then((response)=>{
        fetchBoards()
        setShow(false)
        
     })
     .catch((error)=>{
        console.log(error)
     })
 
  }

  return (
    <div className="w-screen h-screen fixed inset-0 font-dana bg-black bg-opacity-30 flex z-40 justify-center items-center" >
      <form onSubmit={(e)=>onsubmit(e)}>
        <section className="w-[1166px] h-[576px] shadow-newTaskShadow rounded-3xl bg-white flex flex-col p-10">
        {/* task name & exit */}
        <article className="flex flex-row-reverse w-full mb-[70px] justify-between">
          <div className="flex flex-row-reverse items-center justify-end">
            <span>
                <SquareRoundedIcon className="text-gray-300 !text-xl" />
            </span>
           <input required value={value} onChange={(e)=>setValue(e.target.value)} dir="rtl" placeholder="عنوان تسک را وارد کنید" type="text" className=" h-8 w-[300px] bg-gray-200 outline-none text- focus:shadow-inner  bg-opacity-60 p-1 rounded"/>
           
          </div>
          
          <span
          onClick={() => {
              setShow(false);
          }}
          >
          <CloseOutlinedIcon className="text-gray-400 cursor-pointer"></CloseOutlinedIcon>
          </span>
        </article>

        {/* description of task */}
        <article className="w-full h-auto mt-11">
          
            <label className="w-full flex flex-wrap">
            <textarea required type="text" name="descriptionTask" 
        className="w-full h-[200px] border-1 border-gray-300 rounded-xl font-dana text-end px-4 outline-none break-words pt-4 resize-none"
        placeholder="توضیحاتی برای این تسک بنویسید" 
        wrap="normal"
        onChange={(e)=>{setDesValue(e.target.value)}}
        value={desValue}
        ></textarea>
            </label>
        </article>

        {/* upload file */}
        <article className="w-full h-[80px] flex flex-row-reverse justify-start items-center font-dana">
          <p>افزودن پیوست</p>
          <button className="mr-2 border-2 border-teal-500 rounded flex flex-row-reverse w-[115px] h-[33px] justify-center items-center">
            <span>
              <InsertLinkOutlinedIcon className="text-teal-600 ml-1"></InsertLinkOutlinedIcon>
            </span>
            <p>آپلود فایل</p>
          </button>
        </article>

        {/* other work on task & create task */}
        <article className="w-full flex flex-row-reverse justify-between items-center">
          <div className="flex flex-row-reverse items-center justify-start">
            {/* PriorityOptions */}
           
            {/* CalendarTask */}
            <span
              onClick={() => {
                setShowCalendar(!showCalendar);
              }}
              tabIndex={1}
              onBlur={() => {
                setShowCalendar(false);
              }}
              className="border-dashed border-1 border-gray-400 h-[50px] w-[50px] rounded-full mx-6 flex justify-center items-center cursor-pointer"
            >
              <CalendarMonthOutlinedIcon className="text-neutral-400 !text-3xl"></CalendarMonthOutlinedIcon>
              
           
            
            </span>
            <span className="relative flex flex-row justify-center z-50 -translate-y-[300px] items-end ">{ showCalendar && <Editcalendar value={Datevalue} setValue={setDateValue} />}</span>
            <span className="h-[60px] w-[50px] cursor-pointer flex items-end relative">
              <span style={{backgroundColor:Themecolor}} className="bg-teal-500 w-[26px] h-[26px] rounded-full flex justify-center items-center right-0 top-0 absolute">
                2
              </span>
              <VisibilityOutlinedIcon className="text-neutral-400 !text-5xl"></VisibilityOutlinedIcon>
            </span>
          </div>
          <input style={{backgroundColor:Themecolor}} type="submit" value="ویرایش تسک " className="text-white bg-footBtn font-dana font-medium text-xs w-[125px] h-[32px] rounded"/>
           
         
        </article>
      </section>
      </form>
    </div>
  );
}


