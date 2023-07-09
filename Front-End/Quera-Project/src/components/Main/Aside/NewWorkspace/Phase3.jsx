/* eslint-disable react/prop-types */
import CloseIcon from '@mui/icons-material/Close';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Profilepicture } from '../../../ProfilePic/ProfilePicture';
import { useAuth } from '../../../ContextApi/AuthContext';
export const Phase3=({setshow,setphase,watch})=>{
const {userdata}=useAuth()
    return (
    <>
        <div className="w-full flex flex-row mb-10"><CloseIcon className=' cursor-pointer' onClick={()=>{setshow(false)}} />
            <div className="inline-flex justify-center w-full flex-row ">
                <span className="  justify-self-center font-extrabold text-2xl tracking-tight font-dana  self-center">مرور اطلاعات</span>
            </div><KeyboardBackspaceIcon className=' cursor-pointer' onClick={()=>{setphase(2)}} />
        </div>

        <div className=" flex  flex-col w-full mb-15 px-1 "><p className="mb-2 font-dana text-sm"></p>
            <div style={{height:"158px",border: "0.5px solid #AAAAAA"}} className=" flex flex-col gap-6 px-3  py-4 rounded-md">
                <div className="flex flex-row justify-between  ">
                    <p className="font-dana font-semibold  tracking-tight text-sm">نام ورک‌اسپیس</p>
                    <p className="font-dana text-sm tracking-tight font-semibold">{watch("name")}</p>
                </div>

                <div className=" flex flex-row items-center justify-between">
                    <p className="font-dana font-semibold  tracking-tight text-sm">رنگ ورک‌اسپیس</p>
                    <div style={{backgroundColor:watch("color")}} className=" rounded-sm h-3.5 w-3.5 "></div>
                </div>

                <div className=" flex flex-row items-center justify-between">
                    <p className="font-dana font-semibold  tracking-tight text-sm">اعضا</p>
                    <Profilepicture firstname={userdata.firstname} lastname={userdata.lastname}/>
                </div>
            </div>
        </div>
    </>);
}