import React from 'react'
import "./MissionDetails.css"
import { useLaunchProfileQuery } from "../../../generated/graphql"

export default function LaunchProfileQuery({ id }) {
    const { data, loading, error } = useLaunchProfileQuery({
        variables: {
            id: (id + 1).toString(),
        },
    });


    console.log(id, data)

    if (loading) {
        return <h2>loading</h2>
    }
    return (
        <div className="missions-details">
            <div className="heading">Missions Details</div>
            <div className="inner-div">
                <div>
                    <h1>Mission Name: <b>{data.launch.mission_name.toLocaleLowerCase()}</b></h1>
                    <h2>Mission Status:
                    {(data.launch.launch_success === true) ?
                            <span className="success"> Success</span> :
                            <span className="failed"> Failed</span>
                    }</h2>
                    <h2>Mission Details</h2>
                    <p>{data.launch.details}</p>
                    
                    <h2>Mission Launch Year: <b>{data.launch.launch_year}</b></h2>
                    <h2>Rocket used: <b>{data.launch.rocket.rocket_name}</b></h2>
                    <h2>Rocket Type: <b>{data.launch.rocket.rocket_type}</b></h2>
                    <h2>Site: <b>{data.launch.launch_site.site_name}</b></h2>
                </div>
                <div>
                    <img src={data.launch.links.flickr_images} alt="spacex"/>
                </div>
            </div>
        </div>
    )
}