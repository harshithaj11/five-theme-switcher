import React,{useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";
const ThemeToggler=()=>{
    const [themeMode,setThemeMode]=useContext(ThemeContext);
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
    return(

             <button onClick={()=>{setThemeMode(themeMode==="light"?"dark":"light")}} style={{padding:"5px",backgroundColor:"#E6425E",textColor:"#fff",border:currentTheme.border}}> 
      {themeMode==="light"?"Turn Dark Mode":"Turn Light Mode"}</button>


       
    )
}
export default ThemeToggler;