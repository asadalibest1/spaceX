import React from 'react'
import "./css/Missions.css";
import { MissionInfoQuery } from "../../../generated/graphql"
import { Link } from "react-router-dom";

interface Props {
    data: MissionInfoQuery,
}
const MissionsList: React.FC<Props> = ({ getId, data }) => {

    return (
        <div className="missions-main-div">
            <h1>Past Missions</h1>
            {
                data.launches.map((item, ind) => {
                    return <div key={ind}>
                        {
                            (item.links.flickr_images.length !== 0) ?
                                <img src={item.links.flickr_images} alt="picter" />
                                :
                                <div><b>No image found</b></div>
                        }
                        <h2>{item.mission_name}</h2>
                        <label>
                            {item.launch_year}: {(item.launch_success === true) ?
                                "Success" :
                                <span style={{ color: 'red' }}>Failed</span>}
                        </label>
                        <Link to="/missionDetails" className="Link">
                            <button onClick={() => { getId(ind++) }}>Mission Details</button>
                        </Link>
                    </div>
                })
            }
        </div>
    )
}

export default MissionsList;