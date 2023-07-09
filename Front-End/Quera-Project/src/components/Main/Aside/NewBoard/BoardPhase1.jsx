/* eslint-disable react/prop-types */
import CloseIcon from '@mui/icons-material/Close';
export const BoardPhase1=({setshow,register,errors})=>{
    return ( 
    <>
        <div className="w-full flex flex-row  mb-10"><CloseIcon className=' cursor-pointer' onClick={()=>{setshow(false)}} />
            <div className="inline-flex justify-center w-full flex-row ">
                <span className="   font-extrabold text-2xl tracking-tight font-dana ml-3  ">ساختن برد جدید‌</span>
            </div>
        </div>

        <div className=" flex  flex-col w-full mb-auto px-1 ">
            <p className="mb-2 font-dana font-semibold  text-sm">نام برد</p>
            <input className=" px-2 h-10 border  border-inputBorder font-dana focus-visible:outline-none rounded-md" {...register("name",{required:{value:true,message:"لطفا نام برد را وارد کنید"} })} type="text"></input>
            <p className=" mt-1 text-xs text-red-600">{errors.name?.message}</p>
        </div>
    </>);
}