import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import { Tagcolors } from "./Tagcolors";
import { useState } from "react";
export const Tagdropoptions = ({ tagOptions, dropref, id,Tagdelete,newtag,TagColorChange,setEdit }) => {
  const [showcolors, setcolors] = useState(false);
  return (
    <article
      dir="rtl"
      style={{ display: tagOptions ? "flex" : "none" }}
      ref={dropref}
      className=" cursor-default z-10 h-[85px] justify-between min-w-[90px] rounded-lg shadow-md absolute bg-white p-2 font-dana flex-col"
    >
      <section onClick={()=>Tagdelete(id,newtag)} className="flex cursor-pointer flex-row  gap-1">
        <CloseIcon className="!text-xs" />
        <small className=" text-[10px]">حذف</small>
      </section>
      <section onClick={()=>{setEdit(true)}} className="flex flex-row gap-1">
        <EditIcon className=" !text-xs text-[#BDBDBD]" />
        <small className=" cursor-pointer text-[10px]">ویرایش تگ</small>
      </section>
      <section
        onMouseLeave={() => {
          setcolors(false);
        }}
        className="flex cursor-pointer flex-row gap-1"
      >
        <span
          id={id}
          onClick={() => {
            setcolors(!showcolors);
          }}
        >
          <ColorLensOutlinedIcon className=" !text-xs text-[#BDBDBD]" />
          <small id={id} className=" text-[10px]">
            ویرایش رنگ
          </small>
        </span>
        <span className="relative flex flex-row items-center">
          <Tagcolors id={id} TagColorChange={TagColorChange} showcolors={showcolors} />
        </span>
      </section>
    </article>
  );
};
