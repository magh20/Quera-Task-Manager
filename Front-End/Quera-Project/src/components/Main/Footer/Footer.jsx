/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useTheme } from '../../ThemeContext/ThemeContext';
export const Footer = ({show, setShow}) => {
const {Themecolor}=useTheme()
    return(
        <div className=" float-left h-[70px] w-[150px] flex flex-row justify-start z-20 items-start relative">
                <button style={{backgroundColor:Themecolor}} className="  z-20 w-[118px] h-[40px] absolute rounded-md font-bold text-sm text-white font-dana" onClick={()=>{setShow(!show)}}>
                    تسک جدید
                    <AddBoxOutlinedIcon className="ml-1"></AddBoxOutlinedIcon>
                </button>
        </div>
    );
}