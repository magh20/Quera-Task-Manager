/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ChecklistIcon from '@mui/icons-material/Checklist';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useNavigate ,useLocation} from 'react-router-dom';
import { useTheme } from '../../ThemeContext/ThemeContext';


export const Header = ({show, setShow,id,projectname }) => {
const navigate=useNavigate()
const {Themecolor}=useTheme()
const url=useLocation()
    return (
        <header className='w-full h-[110px] flex flex-row justify-end border-solid border-b-2 border-gray-200'>

            {/* project name */}
            <section className='flex flex-row-reverse w-full items-end justify-between'>
                <article  className='flex flex-row-reverse '>
                <article className=" pb-7 flex flex-row justify-end items-center font-bold  h-[25px]">
                    <span className="w-auto h-5 text-lg flex items-center pl-4 border-solid border-l-2 border-gray-200 font-dana">{projectname}</span>
                </article>

                {/* list view  */}
                <article style={ url.pathname == "/Main/" + id + "/ColumnView" ?{borderColor:Themecolor}:undefined} className={` pb-7 flex flex-row justify-end items-center w-[150px] h-[25px] cursor-pointer ${url.pathname == "/Main/" + id + "/ColumnView" ? 'border-solid border-b-2 border-teal-500' : ''}`} onClick={()=>{navigate("/Main/"+id + "/ColumnView")}}>
                    <span style={ url.pathname == "/Main/" + id + "/ColumnView" ? {color:Themecolor}:undefined}  className={`w-auto h-5 mr-2 font-semibold flex items-center pl-4 border-solid border-l-2 border-gray-200 font-dana ${url.pathname == "/Main/" + id + "/ColumnView" ? 'text-teal-500' : ''}`}>نمایش لیستی</span>
                    <span style={ url.pathname == "/Main/" + id + "/ColumnView"?{color:Themecolor}:undefined}  className={`w-auto h-5 mr-2 flex items-center ${url.pathname == "/Main/" + id + "/ColumnView" ? ' text-teal-500' : ''}`}>{<ChecklistIcon></ChecklistIcon>}</span>
                </article>

                {/* column display */}
                <article style={ url.pathname == "/Main/" + id + "/BoardView" ?{borderColor:Themecolor}:undefined} className={`  pb-7 flex flex-row justify-end items-center w-[150px] h-[25px] cursor-pointer ${ url.pathname == "/Main/" + id + "/BoardView"? 'border-solid border-b-2 border-teal-500' : ''}`} onClick={()=>{navigate("/Main/"+id + "/BoardView")}}>
                    <span style={url.pathname == "/Main/" + id + "/BoardView" ?{color:Themecolor}:undefined} className={`w-auto h-5 mr-2 font-semibold flex items-center pl-4 border-solid border-l-2 border-gray-200 font-dana ${ url.pathname == "/Main/" + id + "/BoardView"? 'text-teal-500' : ''}`}>نمایش ستونی</span>
                    <span style={ url.pathname == "/Main/" + id + "/BoardView" ?{color:Themecolor}:undefined} className={`w-auto h-5 mr-2 flex items-center ${ url.pathname == "/Main/" + id + "/BoardView"? ' text-teal-500' : ''}`}>{<SpaceDashboardOutlinedIcon></SpaceDashboardOutlinedIcon>}</span>
                </article>

                {/* calender */}
                <article style={ url.pathname == "/Main/" + id + "/Calendar" ?{borderColor:Themecolor}:undefined} className={`mr-0 pb-7 flex flex-row justify-end items-center w-[90px] h-[25px] cursor-pointer ${ url.pathname == "/Main/" + id + "/Calendar" ? 'border-solid border-b-2 border-teal-500' : ''}`} onClick={()=>{navigate("/Main/"+id + "/Calendar")}}>
                    <span style={url.pathname == "/Main/" + id + "/Calendar" ?{color:Themecolor}:undefined} className={`w-100 h-5 mr-2 font-semibold flex items-center pl-4 border-solid border-l-2 border-gray-200 font-dana ${ url.pathname == "/Main/" + id + "/Calendar" ? 'text-teal-500' : ''}`}>تقویم</span>
                    <span style={url.pathname == "/Main/" + id + "/Calendar" ?{color:Themecolor}:undefined} className={`w-auto h-5 mr-2 flex items-center ${ url.pathname == "/Main/" + id + "/Calendar" ? ' text-teal-500' : ''}`}>{<CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>}</span>
                </article>
                </article>

                {/* share */}
                <article className=" pb-7 font-semibold flex flex-row justify-start items-center w-[555px] h-[25px] cursor-pointer">
                    <article className='flex flex-row'>
                        <span className="w-auto mr-2 h-5 flex items-center font-dana" onClick={()=>{setShow(!show)}}>اشتراک گذاری</span>
                    <span className="w-auto h-5 mr-2 flex items-center">{<ShareOutlinedIcon></ShareOutlinedIcon>}</span>
                    </article>
                </article>
            </section>
        </header>
    );
}