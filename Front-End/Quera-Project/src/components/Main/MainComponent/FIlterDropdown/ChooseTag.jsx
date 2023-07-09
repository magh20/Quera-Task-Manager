/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from 'react';
export const ChooseTag=({showTag,setShowTag,id,selectTag,TagDetails})=>{
  const input=useRef()
  const [inputValue,setInputValue]=useState("")
  return(  
    <div className="relative  flex flex-col items-center">
      <span className="absolute">
        <ul 
        onMouseDown={(e)=>{e.preventDefault()}}
        style={showTag ? { display:'flex' } : { display:"none" }}
        className="w-[146px] transition-all text-xs  flex flex-col  rounded-lg bg-white drop-shadow-lg py-2   "
        >
          <li className='flex flex-row px-2  w-[130px]'>
            <SearchIcon className=' text-[#208D8E] ml-2'/><input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} className='w-[100px] outline-none font-dana  tex-[10px]' ref={input} onBlur={()=>{ setShowTag(false)}} onClick={()=>{input.current.focus(),setShowTag(true)}} type='text' placeholder="جستجو"/>
          </li>

          <li className='mb-[16px]'><hr></hr></li>
          {TagDetails.map((item)=>{
            return (item.tag.includes(inputValue) &&
            <li key={item.id}
            onClick={() => {
              setShowTag(false);
              selectTag(id,item.id)
            }}
           style={{backgroundColor:item.bgcolor}} className={` mx-2 rounded-md text-center flex justify-center  w-min   mb-[12px] px-2 py-[5px]   cursor-pointer hover:opacity-70`}
          >
            <p className='flex justify-center items-center'> {item.tag}</p>
          </li>
          )
          })}
         

         
        </ul>
      </span>
    </div>
  );
}
