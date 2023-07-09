/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { Aside, Footer,Newworkspace ,MainComponent, NewTask } from "../../components";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../components/ContextApi/AuthContext";
export const Main = () => {
    const {token,firstfetch}=useAuth()
    const [showWork,setWork]=useState(false);
    // sample=[{id:1,nameLesson:"abcde",members:[],colorSquare:"#ffff",edit:false,projects:[{id:1,nameProject:"abcde",boards:[{id:1 ,name:"pending",color:"#ffff",tasks:[]}]}]}]
    const [Mylesson, setMylesson] = useState([])
    const [boards,setBoards]=useState([])
    
    
    useEffect(()=>{
       firstfetch(setMylesson)
    },[])
    
    const [TagDetails,setDetails]=useState([{id:1,tag:"درس",bgcolor:"#EBC8C8"},{id:2,tag:"کار",bgcolor:"#C3B7F2"},{id:3,tag:"پروژه",bgcolor:"#7FFAFA"}])
    const [showShareProject,setShareProject] = useState(false);

    const [ShowNewTask,setShowNewTask] = useState(false);
    return(
      token ?
    <>    
    
      {/* new workspace page*/}
      <Newworkspace Mylesson={Mylesson} setMylesson={setMylesson}  show={showWork} setshow={setWork}/>

      {/* new task page*/}
      { ShowNewTask &&<NewTask boards={boards} setBoards={setBoards} TagDetails={TagDetails} setDetails={setDetails} show={ShowNewTask} setShow={setShowNewTask}/>}

      <div className='w-[1440px] h-[1024px] mx-auto my-0 flex flex-row justify-center'>
          {/* left content */}
          <div className="flex flex-col justify-between w-[1080px] h-auto mr-5">
              <MainComponent TagDetails={TagDetails} setDetails={setDetails} ShowNewTask={ShowNewTask} setShowNewTask={setShowNewTask} setMylesson={setMylesson}  setBoards={setBoards} boards={boards} showShareProject={showShareProject} setShareProject={setShareProject} Mylesson={Mylesson} />
              { boards.length>0 && <Footer show={ShowNewTask} setShow={setShowNewTask}  />}
          </div>

          {/* right content */}
          <div className="w-[330] h-auto">
              <Aside setBoards={setBoards} Mylesson={Mylesson} setMylesson={setMylesson} setShareProject={setShareProject}   setWork={setWork} />
          </div>
      </div>
    </>:<Navigate to="/"/>);
}