/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from 'react';
export const ChooseType=({showType,setShowType,id,selectType})=>{
  const input=useRef()
  const [inputValue,setInputValue]=useState("")
  const typenames =[{id:1,type:"تاریخ"},{id:2,type:"تگ"},{id:3,type:"اعضا"},{id:4,type:"اولویت"}]
  return ( 
    <div className="relative  flex flex-col items-center">
      <span className="absolute">
        <ul
        onMouseDown={(e)=>{e.preventDefault()}}
        style={showType ? { display:'flex' } : { display:"none" }}
        className="w-[182px] transition-all h-[165px] text-xs  flex flex-col  rounded-lg bg-white drop-shadow-lg py-2   "
        >
          <li className='flex flex-row px-2  w-[130px]'>
            <SearchIcon className=' text-[#208D8E] ml-2'/><input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} className='w-[100px] outline-none font-dana  tex-[10px]' ref={input} onBlur={()=>{ setShowType(false)}} 
            onClick={()=>{input.current.focus(),setShowType(true)}} type='text' placeholder="جستجو بین فیلتر‌ها"/>
          </li>

          <li className='mb-[16px]'><hr ></hr></li>
                {typenames.map((item)=>{
                  return ( item.type.includes(inputValue) &&
                    <li key={item.id} className='mr-2 cursor-pointer  mb-[14px]'
                    onClick={() => {
                      setShowType(false);
                      selectType(id,item.type)
                    }}
                  >
                    <p>{item.type}</p>
                  </li>
                  )
                })}
         
        </ul>
      </span>
    </div>
  );
}
