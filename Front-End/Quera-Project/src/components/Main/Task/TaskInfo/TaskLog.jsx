/* eslint-disable react/prop-types */

import { useTheme } from "../../../ThemeContext/ThemeContext";

export const TaskLog = ({ fromName, fromColor, toColor, toName }) => {
    const {Themecolor}=useTheme()
    return (
        <>
            <div className=" bg-white snap-start w-full h-[25px] pr-5 pl-9 mb-5 flex justify-between flex-row items-center self-stretch" dir='rtl'>
                <div className="flex">
                    <span style={{color:Themecolor}} className="  ml-1 font-dana font-normal text-base text-right">شما </span>
                    <p className="ml-1 font-dana font-normal text-base text-right text-black">این تسک را از</p>

                    <div className="flex items-center ml-1">
                        <p className="ml-1 font-dana font-normal text-base text-right text-black">{fromName}</p>
                        <div className={`w-3 h-3 ${fromColor}`}></div>
                    </div>
                    <p className="ml-1 font-dana font-normal text-base text-right text-black">به</p>

                    <div className="flex items-center ml-1">
                        <p className="ml-1 font-dana font-normal text-base text-right text-black">{toName}</p>
                        <div className={`w-3 h-3 ${toColor}`}></div>
                    </div>
                    <p className="ml-1 font-dana font-normal text-base text-right text-black">منتقل کردید</p>

                </div>
                <p className="font-dana font-normal text-xs text-right text-gray-400">۱ ساعت پیش</p>
            </div>
        </>
    );
}
