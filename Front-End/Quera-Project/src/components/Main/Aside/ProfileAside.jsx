import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */

export const ProfileAside = ({Name, Abb}) => {
    const Navigate = useNavigate();

    return(
        <article className="flex flex-row-reverse justify-start items-center w-full font-dana cursor-pointer" onClick={()=>{Navigate("../Profile/Personal")}}>
            <span className="rounded-full bg-yellow-200 w-[35px] h-[35px] ml-2 flex justify-center items-center text-sm">{Abb}</span>
            <span className="font-dana text-base font-medium">{Name}</span>
        </article>
    );
}