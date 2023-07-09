import EastIcon from '@mui/icons-material/East';
import ManageAccountsIcon from '@mui/icons-material/ManageAccountsOutlined';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUserOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import { useNavigate,useLocation } from 'react-router-dom';
import { useTheme } from '../../components/ThemeContext/ThemeContext';
export const ProfileAside=()=>{
   const Navigate=useNavigate()
   const location=useLocation()
   const {Themecolor}=useTheme()
   return ( 
      <aside dir='rtl' className=' border-solid border-l-2 border-gray-200 h-screen w-[340px] float-right flex flex-col pt-10  pr-[50px]'>
         <section className="  w-full bg-namegradient bg-clip-text text-transparent  float-right font-dana font-extrabold tracking-tight text-headerSize ">کوئرا تسک منیجر</section>
         <section className='mt-[79px] mb-10'>
            <button style={{backgroundColor:Themecolor}} className='h-[39px] w-[110px] text-white rounded-lg ' onClick={()=>{Navigate("../Main")}}><EastIcon/> بازگشت</button>
         </section>
         <div className='flex flex-col  ml-6 gap-8'>
            <section onClick={()=>{Navigate("./Personal")}} 
            style={{backgroundColor: location.pathname=="/Profile/Personal" ? "#C5FFFF":"transparent",fontWeight:location.pathname=="/Profile/Personal" ? "600":"500"}} 
            className='  rounded cursor-pointer flex flex-row font-dana pr-2 py-1  transition-all duration-300  gap-[11px]'><ManageAccountsIcon/>
               <p>اطلاعات فردی</p>
            </section>
            <section onClick={()=>{Navigate("./Verify")}} 
            style={{backgroundColor: location.pathname=="/Profile/Verify"? "#C5FFFF":"transparent",fontWeight: location.pathname=="/Profile/Verify"? "600":"500"}} 
            className='cursor-pointer flex rounded flex-row font-dana pr-2 py-1 transition-all duration-300 gap-[11px]'><VerifiedUserIcon/>
               <p>اطلاعات حساب</p>
            </section>
            <section onClick={()=>{Navigate("./Settings")}} 
            style={{backgroundColor:location.pathname=="/Profile/Settings" ? "#C5FFFF":"transparent",fontWeight: location.pathname=="/Profile/Settings"? "600":"500"}} 
            className='cursor-pointer flex rounded flex-row font-dana pr-2 py-1 transition-all duration-300 gap-[11px]'><SettingsIcon/>
               <p>تنظیمات</p>
            </section>
         </div>
      </aside>
   );
}