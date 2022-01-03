

import './App.css';
import './WebBody.js';
import Body from './WebBody.js';
import { useState, useEffect } from "react";
import React from "react";
import Adjust  from './WebBody.js';
import { ThemeProvider } from "styled-components";


const DarkMode = {
    fontColor: "white"
   
}

const LightMode = {
    fontColor: "black"
   
}

const themes = {
    dark: DarkMode,
    light: LightMode
}



const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

function App(){

    const [theme, setTheme] = useState(darkModeQuery.matches ? "dark" : "light");

    useEffect(() => {
        darkModeQuery.onchange = (e) => {
        setTheme(e.matches ? "dark" : "light");
      };
    });


return (
  
    <ThemeProvider theme={themes[theme]}>
       
    <Body theme={theme} setTheme={setTheme} />
  </ThemeProvider>

);

}







export default App;
