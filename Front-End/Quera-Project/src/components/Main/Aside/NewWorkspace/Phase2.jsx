/* eslint-disable react/prop-types */
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const Phase2=({setshow,setphase,register,watch})=>{
    const partedname=watch("name").split(" ");
    const colors=["#84C6A1","#78C6B0","#76BC86","#80DC69","#E46161","#E17E80","#EC8182","#F3C567","#B9995E","#E57A57"
    ,"#F1A25C","#E28A60","#6897C2","#74AADD","#3C45E7","#6DAFCE","#6CB2F7","#9286EA","#C074D1","#486774","#5F6C7C","#46494D","#7FA1D1"];

    return (
    <>
        <div className="w-full flex flex-row  mb-10"><CloseIcon className=' cursor-pointer' onClick={()=>{setshow(false)}} />
            <div className="inline-flex justify-center  w-full flex-row ">
                <span className="  justify-self-center font-extrabold text-2xl tracking-tight font-dana  self-center">انتخاب رنگ ورک‌اسپیس</span>
            </div>

            <KeyboardBackspaceIcon className=' cursor-pointer' onClick={()=>{setphase(1)}} />
        </div>

        <div className=" flex  flex-row box-border  mb-15 w-full">
            <div style={{backgroundColor: watch("color") ? watch("color"):"#7D828C",height:"70px",width:"70px" }} className=" ml-5 rounded-lg  justify-center items-center flex text-center font-dana text-2xl pt-auto   ">
                <p className="text-center text-white align-middle font-bold">{watch("name").trim()[0]+" "+ (partedname[1]? partedname[1][0]:"")}</p>
            </div>

            <div className=" flex  flex-col gap-y-5   px-1 "  >
                <p className=" font-semibold font-dana text-sm">رنگ ورک‌اسپیس</p>
                <div  className="grid w-72 items-center gap-y-2.5 gap-x-2.5 grid-cols-12 grid-rows-2 ">
                    <input className="appearance-none hidden " {...register("color",)}  value={"#7D828C"} type="radio"  id="no1" />
                    <label className=" h-4 w-4   cursor-pointer" htmlFor="no1">
                        <NotInterestedIcon className='!text-base -translate-y-1'></NotInterestedIcon>
                    </label>
                    
                    {colors.map((p)=>{
                    return <input key={p}  style={{backgroundColor:p}} className=" rounded-sm relative appearance-none  checked:after:content-['']  
                    after:absolute after:left-1  after:-top-0.5 after:bg-no-repeat checked:after:border-r-1 
                    checked:after:border-b-1   checked:after:border-black cursor-pointer after:w-1.5
                    after:h-3.5 after:rotate-45 checked:after:scale-75    checked:scale-150   w-3.5 h-3.5" {...register("color")} value={p} type="radio"/>
                  })}
                </div>
            </div>
        </div>
    </>);
}