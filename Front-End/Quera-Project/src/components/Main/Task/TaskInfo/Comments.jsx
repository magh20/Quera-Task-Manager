import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import profile from "../../../../assets/img/girl.png"
import { toJalaali } from "jalaali-js";
import { useState } from 'react';
import axios from 'axios';
import { baseurl } from '../../../../assets/baseUrl';
import { useAuth } from '../../../ContextApi/AuthContext';
import { useTheme } from '../../../ThemeContext/ThemeContext';
export const Comments=({createdAt,text,id,fetchComments})=>{
    const {Themecolor}=useTheme()
    const time=new Date(createdAt)
                    const { jm, jd } = toJalaali(time);
                    const {token}=useAuth()
                    const [value,setvalue]=useState(text)
                    const [edit,setEdit]=useState(false)
                    function convertToPersianNumbers(input) {
                        var persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
                        return input.replace(/[0-9]/g, function (match) {
                            return persianNumbers[parseInt(match)];
                        });
                    }
                    const monthNames = [
                        "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
                    ];
                    const editComment=async()=>{
                        if(value.trim()){
                           await  axios.patch(baseurl+'/comments/'+id,{
                            text:value
                        },{headers:{'x-auth-token':token}})
                        .then((res)=>{
                            fetchComments()
                            setEdit(false)
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                        }
                       
                    }
                    const deleteComment=async()=>{
                       await axios.delete(baseurl+'/comments/'+id,{headers:{'x-auth-token':token}})
                        .then((res)=>{
                            fetchComments()
                        })
                    }
                   return (
                    <div  className="bg-white snap-start mt-2 w-full group h-[104px] flex flex-row justify-end items-start gap-3 px-5">
                        <img className="w-[35px] h-[34px] rounded-full flex items-start justify-end flex-none order-1" src={profile} />
                        <div className='bg-white w-[572px] h-[104px] flex flex-col items-end p-4 gap-2 border-1 border-solid border-gray-300 rounded-xl flex-grow flex-none'>
                            <div className='bg-white w-[528px] h-[25px] flex flex-row justify-between items-center'>
                                <div className='bg-white w-[105px] h-[25px] order-1 flex-grow-0 flex flex-row justify-end items-center p-0 gap-1'>
                                    <label style={{color:Themecolor}} className='text-teal-500 font-dana font-semibold text-base text-right order-1'>شما </label>
                                    <label className='text-gray-400 font-dana font-normal text-xs flex-grow-0 flex-none'>کامنت گذاشتید</label>
                                </div>
                                <div className='flex flex-row '>
                                <label className='text-gray-400 font-dana font-normal mr-1 text-xs text-right flex-grow-0' dir='rtl'>{convertToPersianNumbers(jd.toString())} {monthNames[jm - 1]}</label>
                                 <DeleteOutlineIcon onClick={deleteComment} className=' group-hover:opacity-100 cursor-pointer group-hover:transition-opacity opacity-0 transition-all  !text-gray-400 !text-base mr-1'/>
                                 <EditIcon onClick={()=>{setEdit(!edit),edit==true && setvalue(text)}} className=' group-hover:opacity-100 cursor-pointer group-hover:transition-opacity opacity-0 transition-all  !text-gray-400 !text-base'/>
                                
                                </div>
                            </div>
                            {!edit ?<label className='font-dana font-normal text-xs text-right text-black order-1' dir='rtl' >{text} </label>:<div className='flex flex-row items-center ' dir='rtl'><input value={value} onChange={(e)=>setvalue(e.target.value)} className='inline shadow-inner p-1 bg-slate-100 outline-none rounded-md text-sm '/><span onClick={editComment} className='inline cursor-pointer mr-1 text-sm'>تایید</span></div>}
                        </div>
                    </div>
                )
}