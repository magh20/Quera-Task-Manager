/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { LinkButton } from "../../components/Bottons/LinkButtons";
import { useNavigate } from "react-router";
import axios from "axios";
import { ToastContainer, toast, useToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Forget = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:3000/api/auth/forget-password", {
        email: data.email,
      })
      .then(function (response) {
        console.log(response);
        navigate("/Reset");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Invalid User Credentials!");
      });
  };

  return (
    <>
      <div className=" h-bgh z-0 absolute flex overflow-hidden bottom-0 ">
        <div className="w-screen h-bgh bg-bggradient origin-top-right -skew-y-7 "></div>
      </div>
      <LinkButton
        buttoncontent={"ورود"}
        question={"قبلا ثبت نام کرده ای؟"}
        path={"/"}
      />

      <div dir="rtl">
        <div className="h-screen w-screen z-20 flex flex-col items-center fixed mt-45 justify-center">
          <div
            className={`  w-registerw  bg-white flex flex-col justify-center rounded-registerRad shadow-registerShadow `}
          >
            <p className="text-center text-headerSize font-dana font-bold mt-6 ">
              فراموشی رمز عبور
            </p>
            <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-6 mr-6">
                <label htmlFor="email" className="  mb-2 text-sm font-dana">
                  ایمیل خود را وارد کنید
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
                  {" "}
                  {errors.email?.message}
                </p>{" "}
              </div>
              <ToastContainer />
              <div className="text-center mx-6 ">
                <input
                  className=" mb-6 cursor-pointer w-full h-12 align-middle rounded-md font-dana bg-submitColor text-white  "
                  id="check"
                  type="submit"
                  value="دریافت ایمیل بازیابی رمز عبور"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
