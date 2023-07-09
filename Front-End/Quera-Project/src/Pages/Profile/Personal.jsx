/* eslint-disable no-misleading-character-class */
import { useForm } from "react-hook-form";
import { useAuth } from "../../components/ContextApi/AuthContext";
import { baseurl } from "../../assets/baseUrl";
import axios from "axios";
import { useState } from "react";
import { useTheme } from "../../components/ThemeContext/ThemeContext";
export const Personal=()=>{
  const [resultMessage,setResultMessage]=useState({})
  const {token,userdata,userId,updateuser}=useAuth()
  const {Themecolor}=useTheme()
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({defaultValues:{
      name:userdata.firstname,
      lastname:userdata.lastname,
      phone:userdata.phone
    }});
   
    const onsubmit=async(data)=>{
        await axios.put(baseurl+"/users/"+userId,{
          firstname:data.name,
          lastname:data.lastname,
          email:userdata.email,
          phone:data.phone
        },{headers:{"x-auth-token":token}}).then((response)=>{
         console.log(response)
         setResultMessage({message:"اطلاعات با موفقیت ذخیره شد",color:"#208D8E"})
         updateuser(response.data.data)
         

        })
        .catch((error)=>{
          setResultMessage({message:"خطایی رخ داده است",color:"#FF9494"})
        })
    }

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div dir="rtl" className=" flex flex-col float-right h-[550px] font-dana gap-[35px]  mr-[58px] mt-[170px] ">
          <section className="text-[31px] font-bold">اطلاعات فردی</section>
          <section>
            <div className="flex gap-4 items-center flex-row">
              <span className="rounded-full bg-yellow-200 w-[100px] h-[100px] font-medium ml-2 flex justify-center items-center  text-[34px]">{userdata.lastname[0] ? userdata.firstname[0] + " " + userdata.lastname[0]:userdata.firstname[0] }</span>
              <div className="flex flex-col gap-3   items-start">  
                <div style={{color:Themecolor,borderColor:Themecolor}} className=" p-[10px]  border border-[#208D8E] rounded-lg cursor-pointer text-[#208D8E] text-xl">ویرایش تصویر پروفایل</div>
                <p className=" text-[#8A8989]  text-xs">این تصویر برای عموم قابل نمایش است.</p>
              </div>
            </div>
          </section>
          <div>  
            <div  className="flex   gap-5 flex-col">
              <div className="flex   flex-col">
                <label htmlFor="name" className="mb-2 text-sm font-dana">نام</label>
                <input id="name" type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "وارد کردن نام الزامی است",
                  },
                  pattern: {
                    value:
                      /^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u0020\u2000-\u200F\u2028-\u202F\u06A9\u06AF\u06BE\u06CC\u0629\u0643\u0649-\u064B\u064D\u06D5\sa-zA-Z]+$/,
                    message: "نام وارد شده صحیح نمی باشد",
                  },
                })}
                className="     border border-inputBorder font-dana focus-visible:outline-none rounded-md px-2   h-10 "
                />
                <p className="text-xxs mt-1 font-dana text-red-700">{errors.name?.message}</p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastname" className="mb-2 text-sm font-dana">نام خانوادگی</label>
                <input id="lastname" type="text"
                {...register("lastname", {
                  required: {
                    value: true,
                    message: "وارد کردن نام خانوادگی الزامی است",
                  },
                  pattern: {
                    value:
                      /^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u0020\u2000-\u200F\u2028-\u202F\u06A9\u06AF\u06BE\u06CC\u0629\u0643\u0649-\u064B\u064D\u06D5\sa-zA-Z]+$/,
                    message: "نام وارد شده صحیح نمی باشد",
                  },
                })}
                className="     border border-inputBorder font-dana focus-visible:outline-none rounded-md px-2   h-10 "
                />
                <p className="text-xxs mt-1 font-dana text-red-700">{errors.lastname?.message}</p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-2 text-sm font-dana">شماره موبایل</label>
                <input id="phone" type="tel"
                {...register("phone", {
                  minLength:{
                    value:11,
                    message: "شماره وارد شده صحیح نمی باشد"
                  }
                })}
                className="     border border-inputBorder font-dana focus-visible:outline-none rounded-md px-2   h-10 "
                />
                <p className="text-xxs mt-1 font-dana text-red-700">{errors.phone?.message}</p>
              </div>
            </div>   
            <p className=" font-semibold text-sm mt-1 font-dana" style={{color:resultMessage.color}}>{resultMessage.message}</p>
          </div>
          <div className="flex flex-col mt-auto ">
            <input style={{backgroundColor:Themecolor}} className="  cursor-pointer w-full  h-[38px] text-sm rounded-md font-dana text-white  " value="ثبت تغییرات" type="submit"/>
          </div>
        </div> 
      </form>
    </>
  );
}