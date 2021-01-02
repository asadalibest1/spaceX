import React from 'react'
import "./Sidebar.css"
import spacexLogo from "../../images/spacexLogo.png";
import { useMissionInfoQuery } from "../../../generated/graphql"
import { Link } from "react-router-dom";
import "./sidebarLoader.css";

export default function Sidebar({ getId }) {
    const { data, error, loading } = useMissionInfoQuery();

    console.log(data)

    function changeToggle() {
        const element: any = document.querySelector(".home-sidebar");
        element.style.left = "-20%";
    }

    return (
        <div className="home-sidebar">
            <div className="closeToggle">
                <img src={spacexLogo} alt="spacex logo" />
                <div onClick={changeToggle}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="sidebarList" onClick={changeToggle}>
                <div>
                    <Link to="/" className="Link">
                        HOME
                    </Link>
                </div>
                <div>
                    <Link to="/missions" className="Link">
                        MISSIONS
                    </Link>
                </div>
                {
                    (!loading) ?
                        data.launches.map((item, ind) => {
                            return <Link to="/missionDetails" className="Link" onClick={() => getId(ind++)} >
                                {item.mission_name}
                            </Link>
                        })
                        :
                        <span className="lds-roller">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                }
            </div>
        </div>

    )
}
