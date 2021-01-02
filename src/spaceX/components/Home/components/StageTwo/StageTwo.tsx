import React from 'react'
import { useMissionInfoQuery } from "../../../../../generated/graphql"
import { Link } from "react-router-dom";
import Loader from "./loader";

import "./StageTwo.css"

export default function StageTwo({getId}) {
    const [modifyData, setData] = React.useState([]) 
    const { data, error, loading } = useMissionInfoQuery();

    if (loading)
        return <Loader />

    return (
        <div className="stage-second">
        <div className="stage-second-inner-div">
            <h1 className="heading-Past-Missions">Past Missions</h1>
          
          
                        <div className="mission-view">
                        <img src={data.launches[16].links.flickr_images} alt="picter" />
                        <h2>{data.launches[16].mission_name}</h2>
                        <label>Success</label>
                            <Link to="/missionDetails" className="Link">
                                <button onClick={()=>{getId(16)}}>Mission Details</button>
                            </Link>
                        </div>
                        
                        <div className="mission-view">
                        <img src={data.launches[25].links.flickr_images} alt="picter" />
                        <h2>{data.launches[25].mission_name}</h2>
                        <label>Success</label>
                            <Link to="/missionDetails" className="Link">
                                <button onClick={()=>{getId(25)}}>Mission Details</button>
                            </Link>
                        </div>

                        <div className="mission-view">
                        <img src={data.launches[31].links.flickr_images} alt="picter" />
                        <h2>{data.launches[31].mission_name}</h2>
                        <label>Success</label>
                            <Link to="/missionDetails" className="Link">
                                <button onClick={()=>{getId(31)}}>Mission Details</button>
                            </Link>
                        </div>

                        <Link to="/missions">
                        <button className="Show-All-Missions">Show All Missions</button>
                        </Link>
        </div>
        </div>
    )
}
