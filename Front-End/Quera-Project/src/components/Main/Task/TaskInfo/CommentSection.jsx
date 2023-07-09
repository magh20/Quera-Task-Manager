import { useState, useEffect } from 'react';

import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { Comments } from './Comments';

import axios from 'axios';
import { baseurl } from '../../../../assets/baseUrl';
import { useAuth } from '../../../ContextApi/AuthContext';
import { useTheme } from '../../../ThemeContext/ThemeContext';
export const CommentSection = ({id}) => {
    const {token}=useAuth()
    const {Themecolor}=useTheme()
    // set comment
    const [inputValue, setInputValue] = useState('');
    const initialComment = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. "
    const [comments, setComments] = useState([]);
    const fetchComments=async()=>{
        await axios.get(baseurl+`/comments/task/${id}`,{headers:{"x-auth-token":token}})
        .then((response)=>{
            setComments(response.data.data)
        })
        .catch((error)=>{
           console.log(error)
        })
   }
    const addComment = async() => {
        if (inputValue.trim() !== '') {
            const newComment = `${inputValue}`;
            const comment = newComment;
           await axios.post(baseurl+"/comments/",{
                text:inputValue,
                taskId:id
            },{headers:{"x-auth-token":token}})
            .then((response)=>{
               fetchComments()
            })
            
            setInputValue('');
        }
    };
    
    useEffect(() => {
       fetchComments()
    },[]);

    // up on click 
    const [marginTop, setMarginTop] = useState("217px");
    const [isUp, setIsUp] = useState(false);
    const handleClick = () => {
        if (isUp) {
            setMarginTop("217px");
        } else {
            setMarginTop((prevMarginTop) => (parseInt(prevMarginTop) - 100) + "px");
        }
        setIsUp(!isUp);
    };

    return (
        <div className="relative z-30">
            {/* comment input  */}
            <div className="bg-white border-2 border-gray-200 rounded-t-xl w-[659px] h-[157px] absolute top-0 left-0 flex justify-between transition-all duration-500 z-10" onClick={handleClick} style={{ marginTop, boxShadow: isUp ? '0 -4px 12px rgba(0, 0, 0, 0.25)' : '' }}>
                <MessageOutlinedIcon className="mt-[13px] ml-[36px] text-gray-400" />
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="کامنت"
                    className="mt-[13px] mr-[30px] text-right resize-none outline-none font-dana text-base text-black"
                />
                <div className='bg-white w-full h-[60px] absolute bottom-0 flex flex-row justify-between items-center gap-5 px-5'>

                    <button style={{backgroundColor:Themecolor}} className='bg-teal-500 w-[78px] h-[31px] rounded-md flex flex-row justify-center items-center gap-1 py-[6px] px-3 ' onClick={addComment}>
                        <label className="font-dana font-semibold text-xs text-right text-white cursor-pointer">ثبت کامنت</label>
                    </button>
                    <div className='bg-white w-[156px] h-[24px] order-1 flex flex-row justify-end items-center p-0 gap-5 '>
                        <EmojiEmotionsOutlinedIcon className='text-gray-300' />
                        <InsertDriveFileOutlinedIcon className='text-gray-300' />
                        <AttachFileOutlinedIcon className='text-gray-300' />
                        <AlternateEmailOutlinedIcon className='text-gray-300' />
                    </div>

                </div>
            </div>

            {/* comment section */}
            <div className="bg-white mt-4 relative z-0 h-[208px] w-full flex flex-col overflow-y-auto snap-y scrollbar-hide">

                {/*comment */}
                {comments.map((item) => {
                  return  <Comments fetchComments={fetchComments} text={item.text} createdAt={item.createdAt} id={item._id} key={item._id}/>
                    })}

            </div>
        </div>
    );
}
