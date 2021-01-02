import React from 'react'
import "./css/Missions.css";
import {MissionInfoQuery} from "../../../generated/graphql"
import { Link } from "react-router-dom";

interface Props{
    data: MissionInfoQuery,
}
const MissionsList: React.FC<Props> = (props) => {
// React.useEffect(()=>{
//     window.onscroll = () => {
//         if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
//                 const element: any = document.getElementsByClassName("header-div")[0];
//                 element.style.color = "black";
//                 element.style.background = "black";

//                 alert("down")
//             }else{
//             const element: any = document.getElementsByClassName("header-div")[0];
//             element.style.color = "black";
//             alert("up")

//         }
//     }
// },[])
    const {data, getId} = props;
    // const dataReverse = data.launches.reverse();
    // const {launches} = data
    return (
        <div className="missions-main-div">
        {
            data.launches.map((item, ind)=>{
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
                            <span style={{color: 'red'}}>Failed</span>}
                        </label>
                            <Link to="/missionDetails" className="Link">
                                <button onClick={()=>{getId(ind++)}}>Mission Details</button>
                            </Link>
                        </div>
            })
        }
    </div>
    )
}

export default MissionsList;
