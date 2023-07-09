import { createContext, useContext, useState } from "react";
import { baseurl } from "../../assets/baseUrl";
import { useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const {pathname}=useLocation()
    const [userId,setUserId]=useState(()=>{
       return localStorage.userId ? localStorage.userId:""
    })
    const [userdata,setUserdata]=useState(()=>{
       return localStorage.userdata ? JSON.parse(localStorage.getItem("userdata")):{}
    })
    const [refreshToken, setRefreshToken] = useState(() => {
        return localStorage.refreshToken ? localStorage.refreshToken : "";
    });
    const [token, setToken] = useState(() => {
        return localStorage.token ? localStorage.token : "";
    });
    const navigate=useNavigate()
    const login = (token, refreshToken,userdata) => {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userdata._id);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("userdata",JSON.stringify(userdata))
        setToken(token);
        setUserdata(userdata)
        setUserId(userdata._id)
        setRefreshToken(refreshToken);
    };
   const updateuser=(data)=>{
    const newdata={...userdata,firstname:data.firstname,lastname:data.lastname,phone:data.phone}
        setUserdata(newdata)
        localStorage.setItem("userdata",JSON.stringify(newdata))
   }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId")
        localStorage.removeItem("userdata")
        setToken("");
        setRefreshToken("");
        setUserdata({})
        setUserId("")
        
    };
    
    useEffect(() => {
        
        async function refresh() {
            await axios
                .post(baseurl + "/auth/refreshToken", {
                    refreshToken: refreshToken,
                })
                .then((response) => {
                    localStorage.token = response.data.data.accessToken;
                    setToken(response.data.data.accessToken);
                });
        }
       refreshToken && refresh();
    }, []);
    const firstfetch=async(setMylesson)=>{
        await axios.get(baseurl+"/workspace/get-all",{headers:{"x-auth-token":token}})
         .then((response)=>{
          console.log(response)
          const workspaces=response.data.data
          if(pathname == '/Main'){
             navigate('/Main/'+workspaces[0].projects[0]._id+'/ColumnView')
          }
         
          setMylesson(workspaces.map((item)=>{
            return {id:item._id,nameLesson:item.name,members:item.members,colorSquare:item.color,edit:false,projects:item.projects.map((p)=>{
              return ({id:p._id,nameProject:p.name,members:p.members,boards:p.boards})
            })}
          }))
         })
         .catch((error)=>{
          console.log(error)
         })
      }


    const fetchData=async(setMylesson)=>{
        await axios.get(baseurl+"/workspace/get-all",{headers:{"x-auth-token":token}})
         .then((response)=>{
          console.log(response)
          const workspaces=response.data.data
          setMylesson(workspaces.map((item)=>{
            return {id:item._id,nameLesson:item.name,members:item.members,colorSquare:item.color,edit:false,projects:item.projects.map((p)=>{
              return ({id:p._id,nameProject:p.name,members:p.members,boards:p.boards})
            })}
          }))
         })
         .catch((error)=>{
          console.log(error)
         })
      }

    
    return (
        <AuthContext.Provider value={{ token, setToken, refreshToken, login, logout,userId,userdata,updateuser,fetchData,firstfetch }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext)