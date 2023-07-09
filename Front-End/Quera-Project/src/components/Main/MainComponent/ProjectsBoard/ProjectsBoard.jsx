/* eslint-disable no-unused-vars */


import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { BoardList } from "./BoardList";
import { useState } from "react";
import React from "react";
import { useProject } from "../TaskLayout/TaskLayout";

export const ProjectsBoard = ({boards,updateBoard}) => {
  const [showProcess, setShowProcess] = useState(true);
  const project=useProject()

  return (
    <main className="w-[1080px] scr h-screen overflow-y-scroll mt-6 flex flex-col justify-start items-end">
      {/* First-Project area */}
      <section className=" w-full mr-5 flex flex-row-reverse text-lg font-dana   tracking-tight  text-end">
        <span className="mt-0.5" >
          <ExpandCircleDownOutlinedIcon onClick={()=>{setShowProcess(!showProcess)}}></ExpandCircleDownOutlinedIcon>
        </span>
        <span className="mr-2 font-extrabold">{project.nameProject}</span>
      </section>
      {/* Pending */}
      <span className="w-full" >
        {showProcess && 
          boards.map((item)=>{
            return (
              <BoardList
              key={item._id}
           
            
              updateBoard={updateBoard}
            ProcessName={item.name}
            color={item.color}
            tasks={item.tasks}
          />
            )
          })}
          
        
      </span>
      
      
      
    </main>
  );
};
