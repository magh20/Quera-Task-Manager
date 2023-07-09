import { ProfileAside } from "./InnerProfileAside";
import { Personal } from "./Personal";
import { Verify } from "./Verify";
import { Settings } from "./Settings";
import { Route,Routes } from "react-router-dom";
import { useAuth } from "../../components/ContextApi/AuthContext";
import { Navigate } from "react-router-dom";

 export const Profile=()=>{
    const {token}=useAuth()
   return (
         token ?
      <>
         <ProfileAside/>
         <Routes>
            <Route path="Personal" element={<Personal/>}/>
            <Route path="Verify" element={<Verify/>}/>
            <Route path="Settings" element={<Settings/>}/>
         </Routes>
      </>:<Navigate to='/'/>
   )
 }