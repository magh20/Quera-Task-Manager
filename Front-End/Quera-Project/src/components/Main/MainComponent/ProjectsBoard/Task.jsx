/* eslint-disable react/prop-types */
import { toJalaali } from 'jalaali-js';
import { Tooltip, Fade } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../../ContextApi/AuthContext';
import { baseurl } from '../../../../assets/baseUrl';
import { Profilepicture } from '../../../ProfilePic/ProfilePicture';
import myprof from '../../../../assets/images/p2.jpg'


export const Task = ({
  ColorIcon,
  taskText,
  memberBoy,
  memberGirl,
  taskTime,
  prioritySign,
  descIcon,  imageExist1,
  imageExist2,
  showTask,
  description,
  updateBoard,taskid,taskref,position,members
}) => {
  const monthNames = [
    "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
];

const {id}=useParams()
const {token}=useAuth()
const {userdata}=useAuth()
async  function tasksort(){
  if(taskref.current != position){
     console.log(taskref.current)
      
      await axios.put(baseurl+ `/task/${taskid}/position/${taskref.current}`,{},{headers:{"x-auth-token":token}})
  .then((response)=>{
    updateBoard(id)
    taskref.current=null
  })
  .catch((error)=>{
    console.log(error)
  })
}
  }
function convertToPersianNumbers(input) {
    var persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return input.replace(/[0-9]/g, function (match) {
        return persianNumbers[parseInt(match)];
    });
}
  const date=new Date(taskTime)
          const { jm, jd } = toJalaali(date);
  return (
    <section   style={{display:showTask ? "flex":'none'}} className="w-full flex flex-row-reverse py-1 bg-gray-100  justify-between  mt-6  font-dana">
      <article  onDragOver={(e)=>{e.preventDefault()}}onDragStart={()=>{taskref.current=position}} 
    onDragEnter={()=>taskref.current=position} onDragEnd={tasksort} className="w-1/2 flex  items-center  flex-row-reverse  mr-12">
        <span className="font-dana mr-4 text-base font-semibold p-1">
          {ColorIcon}
        </span>
        <span className=" font-dana  font-semibold text-[13px] " dir="rtl">
          {taskText}
        </span>
      </article>

      <article className="w-1/2 px-4 pr-1  flex mr-5 flex-row-reverse items-center ">
        <span className="w-1/4 font-dana flex flex-row items-center mr-2">
          <img src={myprof} className=' rounded-full w-[32px] h-[32px]'/>
          {members.map((item)=>{
          return <Profilepicture key={item._id} firstname={item.firstname} lastname={item.lastname} />
           
        })}
          
         
        </span>
        <span
          className="w-1/4 font-dana text-md  tracking-tighter tex"
          dir="rtl"
        >
          <span className="mr-[80px] ">{convertToPersianNumbers(jd.toString())} {monthNames[jm - 1]}</span>
        </span>
        <span className="w-1/4 text-lg">{prioritySign}</span>
        <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
        <Tooltip title={description} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} placement="top" arrow >
          {descIcon}
                    </Tooltip>

        </span>
      </article>
    </section>
  );
};
