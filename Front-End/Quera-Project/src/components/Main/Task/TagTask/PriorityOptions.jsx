/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
export const PriorityOptions = ({showTask ,setShowTask}) => {
  return (
    <div className=" absolute flex flex-col  justify-end z-50 -translate-x-[127px]">
        <div  className=" absolute bg-white w-[157px] h-[178px]   flex flex-col  p-[8px] gap-[5px] shadow-xl rounded-lg "       style={{ visibility: showTask ? "visible" : "hidden" }}
>
            <div className=" flex flex-row justify-end items-center text-[13px] mt-1">
              فوری
              <OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>
            </div>
            <div className=" flex flex-row justify-end items-center text-[13px] mt-1">
              بالا
              <OutlinedFlagIcon className="text-yellow-400"></OutlinedFlagIcon>
            </div>
            <div className=" flex flex-row justify-end items-center text-[13px] mt-1">
              متوسط
              <OutlinedFlagIcon className="text-blue-500"></OutlinedFlagIcon>
            </div>
            <div className=" flex flex-row justify-end items-center text-[13px] mt-1">
              پایین
              <OutlinedFlagIcon className="text-gray-300"></OutlinedFlagIcon>
            </div>
            <div className=" flex flex-row justify-end items-center text-[13px] mt-2">
              حذف اولویت
              <CloseOutlinedIcon className="text-red-500"></CloseOutlinedIcon>
            </div>{" "}
        </div>
    </div>
  );
};

