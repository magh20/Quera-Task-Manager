/* eslint-disable no-misleading-character-class */
import { useForm } from "react-hook-form";
import { LinkButton } from "../../components/Bottons/LinkButtons";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";

export function Register() {
  const navigate = useNavigate();
  const [registerError,setRegisterError]=useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = async(data) => {
    
   const partedname=data.fullname.split(" ")
   const firstName=partedname.shift()
   const lastName=partedname.join(" ")
    await axios.post("http://localhost:3000/api/auth/register",{
      username:data.fullname,
      password:data.password,
      email:data.email,
    firstname:firstName,
      lastname:lastName,
      profile_url: "https://example.com/john_doe/profile.jpg",
      phone:""
    })
    .then(function (response) {
      setRegisterError('')
      navigate("/");
    })
    .catch(function (error) {
      setRegisterError(error.response.data.message)
    });
    
  };

  return (
    <>
      <div className=' h-bgh z-0 absolute flex overflow-hidden bottom-0 '>
        <div className='w-screen h-bgh bg-bggradient origin-top-right -skew-y-7 '></div>
      </div>
      <LinkButton buttoncontent={"ورود"} question={"قبلا ثبت نام کرده ای؟"} path={"/"} />
      <div className="h-screen w-screen z-20 flex justify-center  mb-11 items-center fixed">
        <div
          dir="rtl"
          className={`  w-registerw max-h-maxh bg-white flex flex-col justify-center align-middle rounded-registerRad shadow-registerShadow `}
        >
          <p className="text-center text-headerSize tracking-tight font-dana font-bold mt-6 ">
            ثبت‌نام در کوئرا تسک منیجر
          </p>
          <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col  mb-6 mt-6 mx-6">
            
              <label htmlFor="name" className="mb-2 text-sm font-dana">
                نام کامل
              </label>
              <input
                id="name"
                type="text"
                {...register("fullname", {
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
                className="   px-2  border border-inputBorder font-dana focus-visible:outline-none rounded-md  h-10 "
              />
              <p className="text-xxs mt-1 font-dana text-red-700">
                {errors.fullname?.message}
              </p>
            </div>
            <div className="flex flex-col mb-6 mr-6">
              <label htmlFor="email" className="  mb-2 text-sm font-dana">
                ایمیل
              </label>
              <input
                id="email"
                dir="ltr"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "وارد کردن ایمیل الزامی است",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "ایمیل وارد شده صحیح نمی باشد",
                  },
                })}
                className=" font-dana px-2 border border-inputBorder focus-visible:outline-none rounded-md ml-6 h-10"
              />
              <p className=" text-xxs mt-1 font-dana text-red-700">
                {errors.email?.message}
              </p>
            </div>
            <div className="flex flex-col mb-6 mr-6">
              <label htmlFor="password" className="mb-2 text-sm font-dana">
                رمز عبور
              </label>
              <input
                id="password"
                dir="ltr"
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "وارد کردن رمز عبور الزامی است",
                  },
                  minLength: {
                    value: 8,
                    message: " رمز عبور باید حداقل ۸ کاراکتر باشد ",
                  },
                })}
                className=" px-2  border border-inputBorder focus-visible:outline-none  rounded-md ml-6 h-10"
              />
              <p className=" mt-1 text-xxs font-dana  text-red-700">
                {errors.password?.message}
              </p>
            </div>
            <div className="mr-6 mb-2">
              <div className="flex flex-row   items-center  text-base">
                <input
                  id="check"
                  {...register("check", {
                    required: {
                      value: true,
                      message: "لطفا ابتدا قوانین و مقررات را مطالعه فرمایید",
                    },
                  })}
                  type="checkbox"
                  className="ml-2 relative appearance-none hover:ring hover:ring-check shrink-0 
                  w-5 h-5 border border-uncheck rounded checked:bg-check checked:after:content-['']  
                  after:absolute after:left-1.5 after:top-0.5 after:bg-no-repeat checked:after:border-r-2 
                  checked:after:border-b-2 after:box-border checked:after:border-mark cursor-pointer after:w-checkw 
                  after:h-checkh after:rotate-45 checked:border checked:border-mark checked:hover:ring-0"
                >
                </input>
                <label htmlFor="check" className=" text-base leading-normal font-dana">
                  قوانین و مقررات را می‌پذیرم.
                </label>
               
              </div>
               <p dir="ltr" className=" ml-6  text-xs text-red-500 ">{registerError}</p>
              <p className="text-xxs mt-1 font-dana text-red-700">
                {errors.check?.message}
              </p>
            </div>
            <div className="text-center mx-6 ">
              <input
                className=" mb-6 cursor-pointer w-full h-12 text-sm rounded-md font-dana bg-submitColor text-white  "
                type="submit"
                value="ثبت‌نام"
              />
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
