/* svgs */
import arrowcirc from './svg/arrow-right-circle.svg';
import doge from './svg/doge.svg';
import css from './svg/bxl-css3.svg';
import git from './svg/bxl-git.svg';
import html from './svg/bxl-html5.svg';
import c from './svg/c.svg';
import games from './svg/games.svg';
import gitbranch from './svg/git-branch.svg';
import java from './svg/java.svg';
import linkedlin from './svg/linkedin.svg';
import javascript from './svg/logo-javascript.svg';
import vertical from './svg/more-vertical.svg';
import search from './svg/search.svg';
import moon from './svg/moon.svg';
import sundark from './svg/sundark.svg';

import ds from './DS.png'
import webpic from './website.png'
import jspacman from './jspacman.png'
import snapbitham from './bitblank.png';
import code from './svg/code.svg';
import hand from './svg/me.svg';
import home from './svg/home.svg';
import homedark from './svg/homedark.svg';
import mail from './svg/mail.svg';
import tool from './svg/tool.svg';
import filedoc from './svg/file-document.svg';
import { useState, useEffect } from "react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import pin from './svg/location.svg';
import './dark.css';
import './light.css';
import { useMediaQuery } from 'react-responsive';
import  smile from './smile.png'
import styled from 'styled-components';


import Particles from "react-tsparticles";

import react from './logo192.png';

import zen from './zenny.gif';
import tan from './tanjiro.gif'



const messages = ["Hello","مرحبا","よっ","Привет","मस्ते","આવો","안녕하세요","Olá","Hola","สวัสดี","你好"];

const name = ["Arth Patel"];

function Name() {

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalDelayMilliseconds = name.length * 1000;
        const interval = setInterval(() => {
          setIndex((prevIndex) => {
            // reset index if current index is greater than array size
            return prevIndex + 1 < name.length ? prevIndex + 1 : 0;
          });
        }, intervalDelayMilliseconds);
    
        return () => clearInterval(interval);
      });

      return (
        
        <h6 id="name"  key={name}>{name[index]}</h6>
           
      );

}
function  Message() {
    
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalDelayMilliseconds = messages.length * 1000;
        const interval = setInterval(() => {
          setIndex((prevIndex) => {
            // reset index if current index is greater than array size
            return prevIndex + 1 < messages.length ? prevIndex + 1 : 0;
          });
        }, intervalDelayMilliseconds);
    
        return () => clearInterval(interval);
      });

      return (
        
            <h6 id  = 'greetings'   key={messages}>{messages[index]}</h6>
       
      );
}


/**
 *  ThemeProvider
 * 
 */
 const Toggle = styled.button`
 border-radius: 50%;
 border: none;
 &:focus {
  outline: none;
 }
 
 transition: all .5s ease;
`;

const Gradient = styled.div`
width: 100vw;
height: 100vh;
position: relative;

;`

const Heading = styled.h6`
color:  ${props => props.theme.fontColor};
;`
const Ps = styled.p`
color:  ${props => props.theme.fontColor};
;`

const As = styled.a`

color:  ${props => props.theme.fontColor};
`;






function Flip(props) {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };
  
    return (

        <a href="#"> 
        <button onClick = {Flip} >  
        <img  id = "home" onClick = {toggleClass} className={isActive ? 'flipit': null}
        src= {props.theme === "dark" ?  home :  homedark} alt="home" /></button>
     </a>
     
     );

}


  

function Body(props) {


    /* Nav Configuration */
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };

    const navLinks = document.querySelectorAll('#links li');
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 921px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 921px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 920px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const [clicked, setClicked] = useState(false);
   
    const rotate = () => {
        setClicked(!clicked);
    };
        
            const wrapperFunct = () => {
                changeTheme()
                rotate();
                
            }

    if( isTabletOrMobile || isPortrait) {
        navLinks.forEach((link, index) => {
                     
                     link.style.animation = `fadeDown 1.5s ease-in forwards  ${index / 7}s `;
                    
                 })};

    if (isDesktopOrLaptop || isBigScreen) {
        navLinks.forEach((link, index) => {

            link.style.animation = `fade 1.5s ease-in forwards  ${index / 7}s `;
         
            });
    }


    const particlesInit = (main) => {
        console.log(main);
       
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        
        console.log(container);
      };






/* Color Mode Configuration
*/
    function changeTheme() {
        if (props.theme === "light") {
            
            props.setTheme("dark");
        } else {
            props.setTheme("light");
           
        }
    };
  
    
   

    

    return (


<Gradient className= {"gradient " + (props.theme === "dark" ?  "dark" :  "light")}>

<nav id = "nav" > 

    <Toggle  onClick={wrapperFunct}  > <img  id = "icon"  className = {clicked ? 'flip': null}    src= {props.theme === "dark" ?  moon :  sundark } alt="moon/sun" /> </Toggle>
    
         <Flip theme={props.theme} setTheme={props.setTheme}/>
    
         <button  id= "dropmenu" className = { (props.theme === "dark" ?  "dark" :  "light")} type="submit" onClick = {toggleClass}   ><img  className={"linksvg " + (props.theme === "dark" ?  "dark" :  "light")} id="bit"  src= {snapbitham } />
         </button>  
          <div className="navitems">
    
         <ul id= "links" className={isActive ? null : 'visibility' }   >
             
             <li className = { (props.theme === "dark" ?  "dark" :  "light")} ><a href="#boutmecont"  className="link"  > <img  className="linksvg"   id = "hand" src= {hand} alt="hand" /></a>  </li>
             <li className = { (props.theme === "dark" ?  "dark" :  "light")}><a href="./ArthResume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="link" ><img  className="linksvg"  id ="res" src={filedoc} alt="resume" /></a></li>
             <li className = { (props.theme === "dark" ?  "dark" :  "light")}><a href="#projcont" className="link" ><img  className="linksvg"  id="code" src= {code} alt="code" /></a></li>
             <li className = { (props.theme === "dark" ?  "dark" :  "light")}><a href="#Skillscont" className="link" ><img  className="linksvg" id ="tool" src= {tool} alt="skills" /></a></li>
             <li className = { (props.theme === "dark" ?  "dark" :  "light")}><a href="mailto:patelarth0311@gmail.com" className="link"  ><img  id="mail"  src= {mail} alt="mail" /></a></li>
         
         </ul>
         
         </div>
     </nav>
         

    
       
        <div id="particle"  >
  

       

 
  
        <Particles     id = "tsparticles"  style={{

    top: 0,
    left: 0,
            position: 'absolute',
    width: "100px",
    height: "100px"



  }}

  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  options={{
   
    fpsLimit: 60,
    fullScreen: false,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 120,
          duration: 2,
          opacity: 1,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 105,
        enable: true,
        opacity: 1,
        width: .85,
        triangles: {
            enable: true,
            color: "#ffffff",
            opacity: .07
            
          }
      },
    
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 6,
        },
        value: .5,
      },
      opacity: {
        value: .9,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 2,
      },
    },
    
    detectRetina: true,
  }}



      
    />
        </div>
    
        <div id="orbit-container">
            <div className="Cont">
              <Name  ></Name>
               

                   <a href="https://github.com/patelarth0311" target="_blank" rel="noopener noreferrer"> <img id = "smile" src = {smile}></img></a>
                
                   
                   <Message  ></Message>
            </div>

          
          
           
    </div>
    
    




    <div id="boutmecont" className = { (props.theme === "dark" ?  "dark" :  "light")} >
        <Heading>Me </Heading>
       <br/>

   
            <Ps> Hello! I'm Arth Patel. I am a junior at the University of Georgia, pursing a Bachelor of Computer Science and
             the UGA New Media Certificate.
        </Ps>
 
      

        <div></div>
         
            
             
             <ul id= {"media"} >

                    <div  className = "mediacont">
                <li className = { (props.theme === "dark" ?  "dark" :  "light")} ><a href="https://www.linkedin.com/in/arth-patel-343bb51b3/"  target="_blank" rel="noopener noreferrer" className="linksvg"><img  className="linkedin" src={linkedlin} alt="linkedin" /></a></li>
               
                <li  className = { (props.theme === "dark" ?  "dark" :  "light")}  ><a href=" https://github.com/patelarth0311"  target="_blank" rel="noopener noreferrer" className="linksvg">
                    <div className="bluebg"></div><FontAwesomeIcon   className={"fab fa-github " +  (props.theme === "dark" ?  "dark" :  "light") } icon={faGithub}  /></a></li>
            </div>
            
                <As href="/ArthResume.pdf" id = "resume" target="_blank" rel="noopener noreferrer" > Resume
                    <img   id="rightarrow" src= {arrowcirc} alt="arrow" /></As>
            </ul>
    
            
            
        </div>
    
    <Projects theme={props.theme} setTheme={props.setTheme}/>
    
    
    <Skills theme={props.theme} setTheme={props.setTheme}/>
    
    <div className={"contactcont " + (props.theme === "dark" ?  "dark" :  "light")}>
 
        <div id="contactwrap">
     <div id = "footer">
    
<img  className={"linksvg " + (props.theme === "dark" ?  "dark" :  "light")} id="bit2"  src= {snapbitham } />
<Heading>Made with: <img id = "react" src = {react}></img></Heading>
       </div>
     

        <div id="contact">
            <Heading>Contact</Heading>
           
 <a href="mailto:patelarth0311@gmail.com"><img  id="mail2"  src= {mail} alt="mail" /></a>


        </div>


        <div id = "connect">
        <Heading>Connect</Heading>

      
     
<a href="https://www.linkedin.com/in/arth-patel-343bb51b3/"  target="_blank" rel="noopener noreferrer" ><img  id = "linkedin2" src={linkedlin} alt="linkedin" /></a>

<a href=" https://github.com/patelarth0311"  target="_blank" rel="noopener noreferrer" >

<FontAwesomeIcon   id = "github2" icon={faGithub}  /></a>



        </div>

      
        </div>

       
    </div>
    
       
       
        </Gradient>
       
    );
};



function Projects(props) {

   //className = {props.theme === "dark" ?  "dark" :  "light"}
   


    return (
        <div id="projcont" className = {props.theme === "dark" ?  "dark" :  "light"}>
     
        <div id="Projects">
          
    <div id = "Proj">
    <Heading  >Projects</Heading>
    </div>
    
    </div>
  
    <div className="flexcont">

    <div className={"projs pw " + (props.theme === "dark" ?  "dark" :  "light") }>
        <Heading>Portfolio Website</Heading>
        <Ps>My personal website written in HTML, CSS, and JS</Ps>
      <img src ={webpic} alt="Portfolio Website" width = "200"
        height = "200"/>  
        <a href="https://github.com/patelarth0311/portfoliowebsite" target="_blank" rel="noopener noreferrer"> <img   id="branch2" src= {code} alt="code" /></a>
    </div>
    
    <div className={"projs crypto " + (props.theme === "dark" ?  "dark" :  "light")}>
        <Heading>Crypto Search-Query</Heading>
        <Ps>A search-query React application using the Coingecko API</Ps>
       <img src = {doge} alt="doge" width = "180"
        height = "180"/>  
        <a href="https://github.com/patelarth0311/react-api-crypto" target="_blank" rel="noopener noreferrer"> <img   id="branch2" src= {code}  alt="code" /></a>
        <a href=" https://arthpatel.dev/react-api-crypto/" 
        target="_blank" rel="noopener noreferrer">
        <img   id="search" src= {search} alt="search" /></a>

    </div>
    <div className={"projs " + (props.theme === "dark" ?  "dark" :  "light") }>
            <Heading>Pac-Man</Heading>
        <Ps id = "card1">JavaFx personal rendition of Pac-Man</Ps>
    <img id = "tan" src ={tan} alt="Demon Slayer Pac-Man" width = "140"
    height = "160"/>   <a href="https://github.com/patelarth0311/DemonSlayerPacMan" 
    target="_blank" rel="noopener noreferrer">
    <img   id="branch" src= {code} alt="code" /></a>
   
    </div>

    <div className= {"projs " + (props.theme === "dark" ?  "dark" :  "light")} >

                <Heading>Lite Pac-Man</Heading>
                <Ps>JS personal rendition of Pac-Man</Ps>
            
                <img id = "zen" src = {zen} alt="Demon Slayer Pac-Man" width = "140"
                height = "160"/>   <a href="https://github.com/patelarth0311/LiteDemonSlayerPacMan" 
                target="_blank" rel="noopener noreferrer">
                <img   id="branchBack" src={code} alt="code" /></a>
                <a href="https://arthpatel.dev/LiteDemonSlayerPacMan/" 
                target="_blank" rel="noopener noreferrer">
                <img   id="play" src= {games} alt="games" /></a>
               
            
                
            
           

    </div>
    
    </div>
    </div>
    );
}

function Skills(props) {


    return (

        <div id = "Skillscont" className = {props.theme === "dark" ?  "dark" :  "light"}>
   
  
        
        <div id = "Skills" className = {props.theme === "dark" ?  "dark" :  "light"}>
            <Heading>Skills</Heading>

            <div className="skillset">
            
          
            <Heading>Languages</Heading>
        </div>
        <div id="flexskillLangcont">
            <div className={"skill " + (props.theme === "dark" ?  "dark" :  "light")}>
                <Heading>Javascript <br/>
                    (5+ mths)</Heading>
                <img className="ionicon" src={javascript} alt="JS" />
            </div>
            
     
            <div className={"skill " + (props.theme === "dark" ?  "dark" :  "light")}>
                 <Heading>Java<br/>
                    (1 year)</Heading>
                <img className="ionicon" src= {java} alt="Java" />
            </div>
            <div className={"skill " + (props.theme === "dark" ?  "dark" :  "light")}>
                <Heading>C++ <br/>
                    (5+ mths)</Heading>
                <img className="ionicon" src= {c} alt="C++" />
            </div>
        </div>
     
     
        
        <div className="skillset">
         
            <Heading id = "tech">Technical</Heading>
        </div>
        <div id="flexskillTechcont">
            <div className={"skill " + (props.theme === "dark" ?  "dark" :  "light")}>
                <Heading>HTML <br/>(5+ mths)</Heading>
                <img className="ionicon" src= {html} alt="html" />
                 
            </div>
            <div className={"skill " + (props.theme === "dark" ?  "dark" :  "light")}>
                <Heading>CSS<br/>
                    (5+ mths)</Heading>
                <img className="ionicon" src={css} alt="css" />
            </div>
            <div className={"skill " + (props.theme === "dark" ?  "dark" :  "light")}>
                <Heading>Git<br/>
                    (5+ mths)</Heading>
     
                <img className="ionicon" src={git} alt="git" />
            </div>
        
        </div>
        </div>
       
     
     </div>
    );
}

export default Body
