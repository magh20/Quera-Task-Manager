/* eslint-disable react/prop-types */
import { useState } from "react"
import { BoardPhase1 } from "./BoardPhase1"
import { BoardPhase2 } from "./BoardPhase2"
import { useForm } from "react-hook-form"
import { useAuth } from "../../../ContextApi/AuthContext"
import axios from "axios"
import { baseurl } from "../../../../assets/baseUrl"
import { useParams } from "react-router-dom"
import { useTheme } from "../../../ThemeContext/ThemeContext"


export const NewBoard=({show,setshow,setMylesson,Mylesson,newBoard})=>{
    
    const {watch,register,reset,formState:{errors},handleSubmit}=useForm({defaultValues:{color:"#7D828C"}});
    const [phase,setphase]=useState(1);
    const {id}=useParams()
    const {Themecolor}=useTheme()
     const {token,userId} = useAuth()
    const onsubmit= async(data)=>{
        if(phase<2){
            setphase(phase+1);
        }
        else{
            await axios.post(baseurl+"/board/",{
                name:watch("name"),
                color:watch("color"),
                projectId:id
            },{headers:{"x-auth-token":token}})
            .then(function (response) {
                
                newBoard(response.data.data)
              
              })
              .catch(function (error) {
               console.log(error)
              });
            
            
            setphase(1);
            reset();
            setshow(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <div id="outer" onClick={(e)=>{e.target.id=="outer" &&  setshow(false)}} className={`w-screen h-screen inset-0  bg-gray-600 bg-opacity-50 z-50 justify-center items-center ${show ? "flex":"hidden"} flex-col fixed `}>
                <div style={{maxHeight:"383px",minHeight:"294px"}} dir="rtl" className=" p-6  rounded-lg bg-white    items-center flex flex-col w-100">
                    {phase==1 ? <BoardPhase1 errors={errors} setshow={setshow} register={register} />:
                    <BoardPhase2 watch={watch} register={register} setshow={setshow} setphase={setphase}/>
                    }

                    <div className="w-full flex flex-row justify-center self-end  px-1 items-center"><input style={{backgroundColor:Themecolor}} type="submit" value={phase!=2 ? "ادامه":"ساختن برد"}  className="w-full h-10  text-center text-sm rounded-md font-dana text-white"/></div>
                </div>

                <div className="flex mt-10 flex-row">
                    <div style={{backgroundColor:phase==1? "white":"grey"}} className=" h-2 w-2 rounded-full   mx-1"></div>
                    <span style={{backgroundColor:phase==2 ? "white" :"grey"}} className=" h-2 w-2 rounded-full block  mx-1"></span>
                    
                </div>
            </div>
        </form>
    )
}