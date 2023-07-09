import { BoardColumns } from './BoardColumns';
import AddIcon from '@mui/icons-material/Add';
import { NewBoard } from '../../Aside/NewBoard/New‌Board';
import { useState } from 'react';
import { useRef ,useEffect} from 'react';

export const BoardView = ({newBoard,boards,deleteBoard,editBoard,updateBoard,setBoards, TagDetails,
    setDetails,}) => {
    const [show,setShow]=useState(false)
    const dragref=useRef()
    dragref.current=null
    return (
          
        <>
        <NewBoard newBoard={newBoard} setshow={setShow} show={show}/>
        <div className="parent w-[1080px] overflow-x-scroll scrollbar-hide" dir='rtl'>
            <div className="main-part w-fit h-[820px] gap-5 flex flex-row-reverse justify-end items-start p-0 flex-none order-3 flex-grow-0 z-10">                
                {
                  
                   boards.map((p)=>{
                        return    <BoardColumns TagDetails={TagDetails} setDetails={setDetails} boards={boards} setBoards={setBoards} updateBoard={updateBoard} dragref={dragref} position={p.position} editBoard={editBoard} tasks={p.tasks} deleteBoard={deleteBoard} boardid={p._id} key={p._id} name={p.name} color={p.color}/>
                    })
                  
                }
                {/* ساختن برد جدید */}
                <div onClick={()=>{setShow(true)}} className="bg-white w-[250px] h-[41px] gap-5 mt-[17px] ml-1 flex flex-col items-start p-0 flex-none order-0 flex-grow-0 border-t-[1px] shadow-md rounded-md" >
                    <div className="bg-white w-[150px] h-[25px] ml-[100px] my-auto gap-1 flex flex-row justify-end items-center p-0 flex-none order-1 flex-grow-0 ">
                        <label className="font-dana font-medium text-base text-right text-gray-800 ">ساختن برد جدید <AddIcon fontSize='' className="w-[24px] h-[24px] flex-none order-0 flex-grow-0"></AddIcon></label>
                    </div>
                </div>

            </div>
        </div>
        </>);
}
