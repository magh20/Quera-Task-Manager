import { createContext,useContext } from "react"
import { useState } from "react"

const Theme=createContext()
export const ThemeProvider=({children})=>{
    const [darkTheme,setDarkTheme]=useState(()=>{
       return localStorage.darkTheme ? localStorage.darkTheme: false
    })
    const [Themecolor,setColor]=useState(()=>{
        return localStorage.color ? localStorage.color:"#208D8E"
    })
    const colorChange=(value)=>{
        setColor(value)
        localStorage.color=value
    }
    const darkmodeChange=(value)=>{
        setDarkTheme(value)
        localStorage.darkTheme=value
    }
   return <Theme.Provider value={{Themecolor,darkTheme,colorChange,darkmodeChange}} >
    {children}
   </Theme.Provider>
}
export const useTheme=()=>useContext(Theme)