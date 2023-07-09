/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import faLocale from "@fullcalendar/core/locales/fa";
import FullCalendar from "@fullcalendar/react";
import { CalendarDropdown } from "./CalendarDropdown";
import AddBoxIcon from "@mui/icons-material/AddBox";

export const Calendar = ({ show, setshow, todayDate }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div
      className="mt-8 font-dana font-semibold  cursor-pointer"
      // onClick={dsddf}
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        dayCellContent={(props) => {
          return (
            <>
              <div className="flex  justify-end  ml-4 text-md font-bold h-[80px]">
                <div className="flex flex-row justify-between group">
                  <span className="opacity-0  invisible group-hover:opacity-100 group-hover:visible">
                    {" "}
                    <button
                      className="ml-[80px]  mt-[95px] text-teal-700  z-40 rounded-[25px]  cursor-pointer"
                      onClick={() => {
                        setShowCalendar(!showCalendar);
                      }}
                      tabIndex={1}
                      onBlur={() => {
                        setShowCalendar(false);
                      }}
                    >
                      {<AddBoxIcon className="border-2  border-solid scroll-mx-10" />}
                    </button>
                    <CalendarDropdown
                      show={showCalendar}
                      setshow={setShowCalendar}
                      todayDate={todayDate}
                    />
                  </span>

                  <div className="text-end mt-[95px] ">
                    {props.dayNumberText}
                  </div>
                </div>
              </div>
            </>
          );
        }}
        initialView="dayGridMonth"
        // dateClick={handleDateClick}
        headerToolbar={false}
        // year={'numeric'}
        // month={'long'}
        // day={'string'}
        selectAllow={'bg-green'}
        locale={faLocale}
        dayCellClassNames={"relative right-0 "}
        contentHeight={"768px"}
        fixedWeekCount={false}
      />
    </div>
  );
};

