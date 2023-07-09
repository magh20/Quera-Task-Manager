import { Outlet, useParams,useOutletContext,Navigate } from "react-router-dom"
import { Header } from "../../Header/Header"
import { StatusHeader } from "../StatusHeader/StatusHeader"
import { ShareProject } from "../../Header/ShareProject/ShareProject"
import { Footer } from "../../Footer/Footer"
import { useEffect } from "react"
import axios from "axios"
import { useAuth } from "../../../ContextApi/AuthContext"
import { baseurl } from "../../../../assets/baseUrl"
import { Loading } from "../../../Loading/Loading"
export const TaskLayout=({Mylesson,setMylesson,showShareProject,setShareProject,TagDetails,setBoards,ShowNewTask,setShowNewTask})=>{
  let {id}= useParams()
 let SelectedWorkspace= Mylesson.filter((item)=>{
    return item.projects.some((p)=>{
        return p.id == id
    })
  })
  const {token}=useAuth()
  
 let project= SelectedWorkspace.length > 0 ? SelectedWorkspace[0].projects.filter((item)=>{
   return item.id == id
  })[0]:"undefined"
  const fetchBoards=async()=>{
   await axios.get(baseurl+"/board/"+id,{headers:{"x-auth-token":token}},{validateStatus:function (){return true}})
    .then((response)=>{
      setBoards(response.data.data)
      setBoards(perv=>perv.sort((a,b)=>(a.position < b.position) ? 1 : (a.position > b.position) ? -1 : 0))
    })
    .catch(function(error){

    })
}
  useEffect(()=>{
     fetchBoards()
  },[])
    return Mylesson.length == 0 ? <Loading/> : SelectedWorkspace.length == 0  ? <Navigate to="/Main" /> :
    
    <>
    {/* share project page*/}
    { showShareProject && <ShareProject  members={project.members} show={showShareProject} setShow={setShareProject}/>}
   <Header id={id} show={showShareProject} setShow={setShareProject} projectname={project.nameProject}  />
   <StatusHeader TagDetails={TagDetails} />
<Outlet context={project} />

    </>
    
}
export const useProject=()=>{
    return useOutletContext()
}