/* eslint-disable react/prop-types */

import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import girlImg from "../../../../assets/img/girl.png";
import boyImg from "../../../../assets/img/boy.png";
import { useRef, useState } from "react";
import { Task } from "./Task";


export const BoardList = ({
  tasks,
  ProcessName,
  color,
  updateBoard
}) => {
  const [showTask, setShowTask] = useState(true);
  const sortedTasks=tasks.sort((a,b)=>(a.position > b.position) ? 1 : (a.position < b.position) ? -1 : 0)
  const taskref=useRef()

  return (
    <>
      <section className="w-full flex flex-row-reverse  justify-between  mt-7  font-dana">
        <article className="w-1/2 flex  items-center  flex-row-reverse  mr-10">
          { tasks.length != 0 &&<span className="flex" onClick={()=>{setShowTask(!showTask)}}>
          <ExpandCircleDownOutlinedIcon  className="text-gray-700"></ExpandCircleDownOutlinedIcon>
          </span>}
          <span style={{backgroundColor:color}} className="text-xl  p-1 mr-1  rounded text-white text tracking-wider">
            {ProcessName}
          </span>
          <span className="mr-3 font-dana  text-base font-semibold tracking-tighter">
            <span className="" dir="rtl">
              {tasks.length+" تسک"}
            </span>
          </span>
        </article>

        { tasks.length !=0 && <article className="w-1/2  flex mr-5 flex-row-reverse items-center ">
          <span className="w-1/4 font-dana text-base font-semibold tracking-tighter">
          <p>اعضا</p>
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
          <p>ددلاین</p>
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
          <p>اولویت</p>
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            <p>
              توضیحات
            </p>
          </span>
        </article>}
      </section>
      <span className="w-full">
        {" "}
        {sortedTasks.map((item)=>{
          return <Task
          members={item.taskAssigns}
          key={item._id}
          position={item.position}
          updateBoard={updateBoard}
          taskid={item._id}
            ColorIcon={
              <SquareRoundedIcon style={{color:color}}></SquareRoundedIcon>
            }
            taskref={taskref}
            showTask={showTask}
            description={item.description}
            taskText={item.name}
            memberBoy={<img src={boyImg} alt="" />}
            memberGirl={<img src={girlImg} alt="" />}
            taskTime={item.deadline}
            prioritySign={
              <OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>
            }
            descIcon={
              <FormatAlignRightIcon className="text-stone-400"></FormatAlignRightIcon>
            }
          />
        })
          
         
        }
      </span>
      
    </>
  );
};
