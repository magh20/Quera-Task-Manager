import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const Loading=()=>{
    const navigate=useNavigate()
    useEffect(()=>{
        const timeout= setTimeout(()=>{
            navigate('/Main')
         },1000)
        return()=> clearTimeout(timeout)
    },[])
    return (
        <section className="inset-0 w-screen h-screen flex items-center bg-gray-500 z-50 bg-opacity-20 backdrop-blur fixed justify-center">
               <div className="  border-[5px] z-50 animate-spin border-[#31d8da] w-12 h-12  bg-transparent rounded-full  border-r-[#208d8e]">

               </div>
        </section>
    )
}