import React from 'react'
import "./Home.css"
import rocketMan from "../../images/rocket-man.png";

export default function Home() {
    return (
        <div className="main-home-page">
            <div className="stage-one">
                <h1>Come With Us for Open Your Mind
                    <img src={rocketMan} alt="rocket man"/>
                </h1>
                <h3>An international space research organization that involve to descover the new space things</h3>
                <h2>To Mars and Beyond</h2>
                <div className="watch-video">
                    <div className="traingle-box">
                        <div className="traingle">
                        </div>
                    </div>
                    <div className="text">Watch Video</div>
                </div>
            </div>
    )</div>
    )
}
