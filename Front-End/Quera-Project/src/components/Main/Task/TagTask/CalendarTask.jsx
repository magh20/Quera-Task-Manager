/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-datepicker/dist/react-datepicker.css";
export const CalendarTask = ({ showCalendar, setShowCalendar,value,setValue }) => {
  
  const [startDate, setStartDate] = useState(new Date());
  const mydate = new Date();
  const getday = mydate.getDate();
  const daydate = mydate.getDay();
  const monthdate = mydate.getMonth();
  const getsday = mydate.getDate();

  const days = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنج شنبه",
    "جمعه",
  ];

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
  return (
    <div
      className=" bg-gray-100  fixed "
      onMouseDown={(e)=>{e.preventDefault()}}
      style={{ visibility: showCalendar ? "visible" : "hidden" }}
    >
      <section
        className="shadow-lg rounded-lg bg-white w-[517px] h-[350px] flex flex-col "
        dir="rtl"
      >
        {/*section-top*/}
        <article className="w-full  flex flex-row justify-center items-center  font-dana text-[16px]  font-bold h-1/5">
          <span className=" w-1/2  items-center mr-3">
            <CalendarTodayOutlinedIcon className="text-slate-400"></CalendarTodayOutlinedIcon>
            <span className="mr-2">زمان شروع</span>
          </span>
          <span className="w-1/2    items-center  border-r-1">
            <CalendarTodayOutlinedIcon className="text-slate-400 mr-2"></CalendarTodayOutlinedIcon>
            <span className="mr-2">زمان پایان </span>
          </span>
        </article>
        {/*section-top*/}

        {/* body-section */}
        <article className=" h-[290px] flex flex-row w-full">
          <div className="w-[230px] border-zinc-400  bg-slate-100 p-3 pt-6 font-dana  font-semibold">
            <div className="flex justify-between h-7">
              <span>امروز</span>
              <span className="text-slate-400">{`${days[daydate+1]}`}</span>
            </div>
            <div className="flex justify-between h-7">
              <span>کمی بعد</span>
              <span className="text-slate-400">{`${mydate.getHours()}:${mydate.getMinutes()}`}</span>
            </div>{" "}
            <div className="flex justify-between  h-7">
              <span>فردا</span>
              <span className="text-slate-400">
              {`${days[daydate+2]}`}
              </span>
            </div>
            <div className="flex justify-between h-7">
              <span>این آخر هفته</span>
              <span className="text-slate-400">
                {" "}
                {/* {`${days[daydate+(days-3)]}`} */}
                جمعه
              </span>
            </div>{" "}
            <div className="flex justify-between  h-7">
              <span>هفته ی آینده</span>
              <span className="text-slate-400">
              {`${days[daydate+1]}`}
              </span>
            </div>{" "}
            <div className="flex justify-between h-7">
              <span>آخر هفته ی آینده</span>
              <span className="text-slate-400">
                {" "}
                {/* {daydate ? days[daydate] : days[daydate]} */}
                جمعه
              </span>
            </div>{" "}
            <div className="flex justify-between h-7">
              <span>دو هفته دیگر</span>
              <span className="text-slate-400">
                {/* {`${mydate.getDay()+3} ${mydate.getMonth()+1}`} */}
                11 تیر
                </span>
            </div>{" "}
            <div className="flex justify-between h-7">
              <span>۴ هفته دیگر </span>
              <span className="text-slate-400">
                {/* getsday */}
                1مرداد
                </span>
            </div>
          </div>
          <div className="  pr-4 w-[100px] h-12">
            <Calendar
              selected={startDate}
              className=" h-0  px-4"
              calendar={persian}
              locale={persian_fa}
              value={value}
              onChange={setValue}
            />
            {/* <Calendar
              className=" h-0  px-4"
              calendar={persian}
              locale={persian_fa}
              value={value}
              onChange={setValue}
            /> */}
          </div>
        </article>
      </section>
    </div>
  );
};
