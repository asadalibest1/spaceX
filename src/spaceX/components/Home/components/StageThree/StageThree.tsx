import React from 'react'
import spacex from "../../../../images/spacexLogo.png"
import fb from "../../../../images/fb.png";
import github from "../../../../images/github.png";
import wa from "../../../../images/wa.png";
import "./StageThree.css"

export default function StageThree() {
    return (
        <div className="page-footer">
            <div>
                <img src={spacex} alt="spacex" />
                <label>spaceX @copyright 2021</label>
            </div>
            <div>
                <h2>About Us</h2>
                <p>WHO ARE WE</p>
                <p>CONTACT US</p>
                <p>FAQ's</p>
                <p>MISSSIONS</p>
                <p>OTHER COMPANIES</p>
            </div>
            <div>
                <h2>Company</h2>
                <p>CAREERS</p>
                <p>LEGAL</p>
                <p>POLICY</p>
                <p>PRESS</p>
                <p>BLOG</p>
            </div>
            <div>
                <h2>Socials</h2>
                <img src={fb} alt="fb" onClick={()=>{window.open("https://www.facebook.com/asadali.asad.355")}}/>
                <img src={github} alt="github" onClick={()=>{window.open("https://www.github.com/asadalibest1")}}/>
                <img src={wa} alt="whatsapp"/>
            </div>
        </div>
    )
}
