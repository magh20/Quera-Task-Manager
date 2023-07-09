import { useForm } from "react-hook-form";
import { useTheme } from "../../components/ThemeContext/ThemeContext";

export const Verify=()=>{
  const {register,handleSubmit, formState:{errors}}=useForm()
  const {Themecolor}=useTheme()
  const onsubmit=(data)=>{
  console.log(data)
  }

  return(
    <>
      <article dir="rtl"  className="flex float-right font-dana mr-[58px] mt-[170px] w-[354px]  flex-col">
        <section className="mb-[35px]">
          <p className=" font-dana text-[31px] font-bold ">اطلاعات حساب</p>
        </section>
        <form onSubmit={handleSubmit(onsubmit)}>
          <section>  
            <div className="flex flex-col mb-5 ">
              <label htmlFor="email" className="  mb-2 text-sm font-dana"> ایمیل</label>
              <input id="email" dir="ltr" type="email"
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
              className=" font-dana px-2 border border-inputBorder focus-visible:outline-none rounded-md h-10"
              />
              <p className=" text-xxs mt-1 font-dana text-red-700">{errors.email?.message}</p>
            </div>
            <div className=" relative items-center">
              <div className="flex flex-col mb-5 ">
                <label htmlFor="email" className="  mb-2 text-sm font-dana">رمز عبور</label>
                <input id="password" type="password"
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
                className=" flex-grow-[2] font-dana px-2 border border-inputBorder focus-visible:outline-none rounded-md  h-10"
                />
                <p className=" text-xxs mt-1 font-dana text-red-700">{errors.password?.message}</p>
              </div>
              <button style={{backgroundColor:Themecolor}} className=" bottom-[5px] left-[1px] rounded w-[109px] text-white absolute text-sm font-bold h-[38px] ">احراز هویت</button>
            </div>
            <div className="flex flex-col mb-12 ">
              <label htmlFor="email" className="  mb-2 text-sm font-dana">نام کاربری</label>
              <input id="username" dir="ltr" type="text"
              {...register("username", {
                required: {
                  value: true,
                  message: "وارد کردن نام کاربری الزامی است",
                }
              
              })}
              className=" font-dana px-2 border border-inputBorder focus-visible:outline-none rounded-md h-10"
              />
              <p className=" text-xxs mt-1 font-dana text-red-700">{errors.username?.message}</p>
            </div>
          </section>
          <section>
            <input style={{backgroundColor:Themecolor}} type="submit" value="ثبت تغییرات" className="  cursor-pointer w-full  h-[38px] text-sm rounded-md font-dana bg-submitColor text-white  "/>
          </section>
        </form>
      </article>
    </>
  )
}