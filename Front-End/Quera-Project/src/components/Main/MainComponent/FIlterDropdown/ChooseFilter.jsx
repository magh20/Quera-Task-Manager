/* eslint-disable react/prop-types */
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { ChooseDecide } from "./ChooseDecide"
import { ChooseTag} from "./ChooseTag";
import { ChooseType } from "./ChooseType";
export const ChooseFilter = ({ tagid, type, decide,color,TagDetails, selectDecide,id,selectTag,selectType,DeleteFilter }) => {
  const [showTag, setShowTag] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showDecide, setShowDecide] = useState(false);
  return (
    <article className="flex mb-6 flex-row items-center gap-[71px]">
      <article className="flex flex-row items-center  gap-[10px]">
        <p className=" text-sm">تسک‌هایی که</p>
        <article  className="flex flex-col gap-1 mt-1   justify-center items-center">
          <button tabIndex="0" onBlur={()=>{setShowType(false)}} 
          onClick={() => {
            setShowType(!showType);
          }} className="w-[182px] border px-2 py-1 rounded-md border-[#E9EBF0] justify-between  text-xs items-center flex flex-row">
            <p style={{ color: type == "انتخاب کنید" ? "#959595" : "black" }}>
              {type}
            </p>
            <KeyboardArrowDownIcon className=" !text-sm" />
          </button>
          <ChooseType showType={showType} id={id} selectType={selectType} setShowType={setShowType}/>
        </article>
        <p className=" text-sm">آن‌ها</p>
        <article  className="flex flex-col gap-1 mt-1   justify-center items-center">
          <button tabIndex="0" onBlur={()=>{setShowTag(false)}} onClick={()=>{setShowTag(!showTag)}} className="w-[146px] text-xs items-center px-2 py-1 rounded-md border border-[#E9EBF0] justify-between flex flex-row">
          {tagid ? TagDetails.map((item)=> item.id == tagid && <p key={id} className=" px-[3px] py-[1px] rounded-md" style={{backgroundColor:item.bgcolor}}>{item.tag}</p> ) :<p>انتخاب کنید</p>}
            <KeyboardArrowDownIcon className=" !text-sm" />
          </button>
          <ChooseTag TagDetails={TagDetails} showTag={showTag} id={id} selectTag={selectTag} setShowTag={setShowTag}/>
        </article>
        <article  tabIndex="0"
          onBlur={()=>{setShowDecide(false)}}
            onClick={() => {
              setShowDecide(!showDecide);
            }} className="flex flex-col gap-1 mt-1   justify-center items-center">
          <button className="w-[107px]  text-xs items-center px-2 py-1 rounded-md border border-[#E9EBF0] justify-between flex flex-row">
            <p>{decide}</p>
            <KeyboardArrowDownIcon style={{rotate: showDecide && "180deg"}}className=" !text-sm"/>
          </button>
          <ChooseDecide showDecide={showDecide} id={id} selectDecide={selectDecide} setShowDecide={setShowDecide}/>
        </article>
      </article>

      <article>
        <DeleteOutlineOutlinedIcon onClick={()=>{DeleteFilter(id)}} className=" cursor-pointer" />
      </article>
    </article>
  );
};
