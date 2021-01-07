import React from 'react'
import { useMissionInfoQuery } from "../../../generated/graphql"
import MissionsList from "./MissionsList"
import backgroundImg from "../../images/sunrise.jpg"
import Loader from '../loader/loader';

export default function MissionInfo({ getId }) {
    const { data, error, loading } = useMissionInfoQuery();

    React.useEffect(() => {
        document.getElementsByTagName("body")[0].style.backgroundImage = `url(${backgroundImg})`;
    }, [])

    if (error) {
        return <h2 className="mission-details-loading">
            <span>WARNING!</span>
                error found, 404!
                </h2>
    }

    if (loading)
        return <Loader />

    return (
        <MissionsList data={data} getId={getId} />
    )
}
