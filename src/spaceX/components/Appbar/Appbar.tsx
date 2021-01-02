import React from 'react'
import "./css/Appbar.css";
import spacexLogo from "../../images/spacexLogo.png";
import { Link } from "react-router-dom";


export default function Appbar() {

// React.useEffect(()=>{
//     window.scroll = () => {
//         alert("downward")

//         if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
//             // document.getElementsByClassName('header-div')[0].style.backgroundColor ="black";
//             alert("downward")
//         }else{
//             // document.getElementsByClassName('header-div')[0].style.backgroundColor ="transparent";
//             alert("upward")
        
//         }
//     }
// },[])
    function changeToggle() {
        const element: any = document.querySelector(".home-sidebar");
        element.style.left = "0%";
    }
    return (
        <div className="header-div">
            <nav className="inner-header-div">
                {/* <Sidebar /> */}
                <div className="toggle" onClick={changeToggle}>
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                    <span className="four"></span>
                </div>
                <img src={spacexLogo} alt="spacex logo" />
                <div className="menubar">
                    <Link to="/"><span>HOME</span></Link>
                    <Link to="/missions"><span>MISSIONS</span></Link>
                </div>
            </nav>

        </div>
    )
}
