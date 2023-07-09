/* eslint-disable react/prop-types */
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState, useRef, useEffect } from 'react';
import projectPic from "../../../../assets/images/tasks/project.jpg"
import { TaskInfo } from '../../Task/TaskInfo/TaskInfo';
import { Profilepicture } from "../../../ProfilePic/ProfilePicture"
import { useAuth } from '../../../ContextApi/AuthContext';
import { useProject } from '../TaskLayout/TaskLayout'
import { EditTask } from '../../Task/EditTask/EditTask';
import axios from 'axios';
import { baseurl } from '../../../../assets/baseUrl';
import { useParams } from 'react-router-dom';
import { TagsinTask } from './Tags';

export const Tasks = ({ imageExist, taskref, projectCategory, boards, lessonsCategory, description, name, taskid, deadline, setBoards, updateBoard, boardid, position }) => {

    const [hovered, setHovered] = useState(false);
    const [tags, setTags] = useState([])
    const [showTaskInfo, setShowTaskInfo] = useState(false);
    const { id } = useParams()
    const [showtags, setshowTags] = useState(false)
    const [showChangeBoard, setChangeBoard] = useState(false)
    const [showTaskEdit, setTaskEdit] = useState(false)
    const { token, userdata } = useAuth()
    const filteredboard = boards.filter((item) => item._id != boardid)
    const project = useProject()
    const dragref = useRef()
    dragref.current = null
    const changeTaskboard = async (boardid) => {
        await axios.put(baseurl + `/task/${taskid}/board/${boardid}`, {}, { headers: { 'x-auth-token': token } })
            .then((response) => {
                updateBoard(id)
            })
    }
    const deleteTask = async () => {
        await axios.delete(baseurl + `/task/${taskid}`, { headers: { 'x-auth-token': token } })
            .then((response) => {
                updateBoard(id)

            })
    }
    async function tasksort() {
        if (taskref.current && taskref.current.id == boardid) {
            await axios.put(baseurl + `/task/${taskid}/position/${taskref.current.position}`, {}, { headers: { "x-auth-token": token } })
                .then((response) => {
                    updateBoard(id)
                    taskref.current = null
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    const fetchTags = async () => {
        await axios.get(baseurl + '/tags/task/' + taskid, { headers: { 'x-auth-token': token } })
            .then((response) => {
                setTags(response.data.data.tags)
            })
    }

    useEffect(() => {
        fetchTags()
    }, [])
    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <>
            <div draggable onDragOver={(e) => { e.preventDefault() }} onDragStart={() => { taskref.current = { id: boardid, position: position } }} onDragEnter={() => taskref.current = { id: boardid, position: position }} onDragEnd={tasksort} className="bg-white w-[250px] mb-[11px] p-[10px] box-border flex flex-col items-end border border-gray-100 shadow-md rounded-md hover:shadow-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

                dir='ltr'>

                <div className={imageExist ? 'bg-black w-[230px] h-[134px] mb-[18px]' : ''}>
                    <img className={imageExist ? 'bg-black w-[230px] h-[134px] mb-[18px]' : ' invisible w-0 h-0'} src={projectPic}></img>
                </div>

                {/* top div  */}
                <div className=" w-[230px] h-[42px] flex flex-col items-end gap-[9px] mb-[18px] p-0 flex-none order-2 self-stretch flex-grow-0">
                    <article className="flex flex-row-reverse items-center w-full cursor-pointer justify-between">
                        <label className=" font-dana font-medium text-right text-xs text-gray-600">{project.nameProject}</label>
                        {hovered && <Profilepicture size={28} firstname={userdata.firstname} lastname={userdata.lastname} />}
                    </article>
                    <div className="w-[230px] h-[18px] gap-1 flex flex-row-reverse items-center p-0 flex-none order-1 self-stretch flex-grow-0 ">
                        <label className="font-dana font-medium text-xs text-right">{name}</label>
                        <FormatAlignRightIcon sx={{ fontSize: 12 }} color="disabled"></FormatAlignRightIcon>
                    </div>
                </div>

                {/* second div  */}
                <div className="w-[125px] h-[16px] flex flex-row items-start gap-2 mb-[18px] p-0 flex-none flex-grow-0 order-3 ">
                    {/* 2/12 tick */}
                    <div className="w-[50px] h-[16px] flex flex-row justify-end items-center p-0 gap-[2px] flex-none">
                        <label className="w-[29px] h-[15px] font-dana font-medium text-xs justify-center text-right text-gray-400 ">۲ / ۱۲</label>
                        <CheckBoxOutlinedIcon fontSize="inherit" color="disabled"></CheckBoxOutlinedIcon>
                    </div>

                    {/* date */}
                    <div className="w-[75px] h-[16px] gap-[2px] flex flex-row justify-end items-center p-0 order-1 ">
                        <label className="w-[65px] h-[15px] font-dana font-medium text-xs text-right text-gray-800" dir="rtl">۵مهر - فرد</label>
                        <OutlinedFlagRoundedIcon fontSize="small" htmlColor="red"></OutlinedFlagRoundedIcon>
                    </div>

                </div>

                {/* Third div  */}
                <div className={' h-[19px] flex flex-row items-start justify-between p-0 gap-1 flex-wrap order-4'}>
                    {tags.map((item) => {

                        return <TagsinTask fetchTags={fetchTags} key={item._id} id={item._id} taskid={taskid} color={item.color} tagName={item.tagName} />
                    })}

                </div>

                {/* Hidden  */}
                <div className={hovered ? 'transition ease-in-out delay-150 duration-300 opacity-100 w-[230px] h-[28px] relative mt-[18px] order-5 border-t border-gray-200 flex flex-row justify-between items-center pt-4' : "transition ease-in-out delay-150 duration-300 opacity-0 h-[0px]"}>
                    {/* ChangeBoard Dropdown */}
                    {hovered && showChangeBoard &&
                        <section dir='rtl' onMouseDown={(e)=>{e.preventDefault()}} className='absolute left-[60px] min-w-[120px] rounded-lg shadow-md  py-2  font-dana  z-50 bg-white text-xs flex flex-col items-start justify-center'>
                            <span className='mx-2'><p>انتقال به برد:</p></span>
                            <hr className=' border-0.5 mb-1 w-full' ></hr>
                            {filteredboard.map((item) => {
                                return <div onClick={() => { changeTaskboard(item._id) }} style={{ backgroundColor: item.color }} className='mb-1.5 cursor-pointer p-1 rounded   mx-2 bg-white' key={item._id} >{item.name}</div>
                            })}
                        </section>}

                    <button onClick={() => { setShowTaskInfo(true) }}><MoreHorizIcon fontSize='small' htmlColor='#323232' className={hovered ? "opacity-100" : "opacity-0"}></MoreHorizIcon></button>
                    <span>
                        {hovered && <DeleteOutlineOutlinedIcon onClick={deleteTask} className=' cursor-pointer text-red-500 opacity-50 active:opacity-100' />}
                        <TaskAltOutlinedIcon style={{ cursor: "pointer",outline:'none' }} tabIndex={1} onBlur={()=> setChangeBoard(false)} onClick={() => { setChangeBoard(!showChangeBoard) }} fontSize='small' htmlColor='#323232' className={hovered ? "opacity-100" : "opacity-0"}></TaskAltOutlinedIcon>
                    </span>



                </div>



            </div>
            {showTaskInfo && <TaskInfo updateBoard={updateBoard} id={taskid} setTaskEdit={setTaskEdit} name={name} deadline={deadline} description={description} show={showTaskInfo} setShow={setShowTaskInfo}></TaskInfo>}
            {showTaskEdit && <EditTask setShow={setTaskEdit} taskid={taskid} name={name} deadline={deadline} description={description} setBoards={setBoards} />}
        </>
    )
}