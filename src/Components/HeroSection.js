import React, { useContext } from "react";
import AppTheme from "../Colors";
import ThemeContext from "../Context/ThemeContext";
import ThemeToggler from "../Components/ThemeToggler"
const HeroSection = () => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
    return (
        <div style={{
            color: `${currentTheme.textColor}`,
            backgroundColor: `${currentTheme.backgroundColor}`,
            border: `${currentTheme.border}`, textAlign: "center", padding: "15px"
        }}>
            <h1>Theme Switcher Trial</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut volutpat risus eu tellus luctus aliquam.
                Suspendisse suscipit commodo mauris, interdum tincidunt tellus convallis vitae.
                Nunc eget urna ac nisl iaculis vulputate non in ligula.
                Nullam aliquet ullamcorper sagittis. Aliquam maximus, eros vitae efficitur mattis,
                lectus mi laoreet lacus, nec sodales
                lectus erat ac nisi. Pellentesque vel sapien ut arcu rhoncus tristique sit amet id
                turpis. In quis neque pellentesque, eleifend nisi quis, pulvinar nisl. Suspendisse
                eu velit dui.</p>
            <ThemeToggler />
            {/* <button onClick={()=>{<ThemeToggler/>}}style={{padding:"5px",backgroundColor:"#E6425E",textColor:"#fff",border:`${currentTheme.border}`}}>Click me</button> */}
        </div>
    )
}
export default HeroSection;