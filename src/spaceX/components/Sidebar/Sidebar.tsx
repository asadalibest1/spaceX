import React from 'react'
import "./Sidebar.css"
import spacexLogo from "../../images/spacexLogo.png";
import { useMissionInfoQuery } from "../../../generated/graphql"
import { Link } from "react-router-dom";

export default function Sidebar({getId}) {
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
            <div className="sidebarList">
                <div>
                    <Link to="/missionDetails">
                        HOME
                    </Link>
                </div>
                <div>MISSIONS</div>
                {
                    (!loading) ?
                        data.launches.map((item, ind) => {
                            return <div onClick={()=>{getId(14)}}>{item.mission_name}</div>
                        })
                        :

                        <span>loading</span>
                }
            </div>
        </div>

    )
}
