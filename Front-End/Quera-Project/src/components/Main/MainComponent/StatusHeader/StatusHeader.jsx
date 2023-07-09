import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import { FilterDropdown } from "../FIlterDropdown/FilterDropdown";
import { useState } from "react";
export const StatusHeader = ({TagDetails}) => {
  const [show,setShow]=useState(false);
  return (
    <section className="w-full h-[60px] flex flex-row-reverse  border-solid border-b-2 border-gray-200">
      <article>
        <form className="w-[245px] mt-4 pl-14 border-solid border-l-2 border-gray-200 ">
          <input dir="rtl" className="font-dana w-full pr-8 font-medium text-xs   rounded focus:outline-none" type="search" name="search-statusHeader" placeholder="جستجو بین تسک ها"/>
          <span className="-ml-7  text-xs"><SearchOutlinedIcon></SearchOutlinedIcon></span>
        </form>
      </article>

      <article className=" mr-10 flex flex-row-reverse items-center justify-end">
        <button  onClick={()=>{setShow(!show)}} className="flex flex-row-reverse items-center">
          <span className="w-auto flex items-center">{<SyncAltOutlinedIcon></SyncAltOutlinedIcon>}</span>

          <span  className="  mr-2  flex items-center font-semibold text-[13px] font-dana">فیلترها</span>
          
        </button><span className="relative flex justify-center "><FilterDropdown TagDetails={TagDetails} show={show} setShow={setShow}/></span>

        <span className="  mr-5 p-1 rounded bg-sky-100 flex items-center font-semibold text-[13px]  font-dana"> دسته بندی شده با: وضعیت</span>
      </article>
    </section>
  );
};

