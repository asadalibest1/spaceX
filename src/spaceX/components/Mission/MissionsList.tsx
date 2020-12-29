import React from 'react'
import "./css/Missions.css";
import {MissionInfoQuery} from "../../../generated/graphql"

interface Props{
    data: MissionInfoQuery,
}
const MissionsList: React.FC<Props> = (props) => {
    const {data, getId} = props;
    // const dataReverse = data.launches.reverse();
    // const {launches} = data
    return (
        <div className="missions-main-div">
        {
            data.launches.map((item)=>{
                return <div>
                        {
                        (item.links.flickr_images.length !== 0) ?
                        <img src={item.links.flickr_images} alt="picter" />
                        :
                        <div>No image found!</div>
                        }
                        <h2>{item.mission_name}</h2>
                        <label>
                            {item.launch_year}: {(item.launch_success === true) ? 
                            "Success" : 
                            <span style={{color: 'red'}}>Failed</span>}
                        </label>
                        <button>Mission Details</button>
                    </div>
            })
        }
    </div>
    )
}

export default MissionsList;
