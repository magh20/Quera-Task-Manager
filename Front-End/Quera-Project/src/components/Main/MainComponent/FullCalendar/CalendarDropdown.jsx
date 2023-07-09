/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CloseIcon from "@mui/icons-material/Close";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { useRef } from "react";
export function CalendarDropdown({ show, setshow, todayDate }) {
  const inputref = useRef();
  const mydate = new Date();
  const getday = mydate.getDate();
  const month = [
    "فروردین",
    " اردیبهشت",
    "خرداد",
    " تیر",
    "مرداد",
    "شهریور",
    "مهر ",
    " آبان",
    "آذر",
    " دی",
    "بهمن",
    "اسفند",
  ];
  const daydate = mydate.getDay();
  return (
    <article className=" flex  relative z-20">
      <div
        dir="rtl"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        style={{ display: show ? "flex" : "none" }}
        className="absolute box-border p-[17px]  rounded-lg gap-[13px] bg-white border border-[#208D8E] shadow-lg  font-dana flex flex-col  w-[333px]  "
      >
        <article className="flex flex-row gap-[18px] items-center ">
          <CloseIcon
            onClick={() => {
              setshow(false);
            }}
            className=" !text-base cursor-pointer text-[#C8C8C8]"
          />
          <input
            ref={inputref}
            onBlur={() => {
              setshow(false);
            }}
            onClick={() => {
              inputref.current.focus(), setshow(true);
            }}
            className=" "
            placeholder="نام تسک را وارد کنید"
          />
        </article>
        <article className="flex flex-row py-[9px] justify-between ">
          <article className="flex flex-row ">
            <FlagOutlinedIcon className=" text-[#C1C1C1]" />
            {
              <span className="text-[#208D8E] text-[18px] px-3">
                {`${getday + 10} ${month[daydate + 2]} `}
              </span>
            }
          </article>

          <article>
            <button className=" text-white  bg-[#208D8E] px-[31px] py-[7px] text-xs rounded ">
              ساختن تسک
            </button>
          </article>
        </article>
      </div>
    </article>
  );
}
