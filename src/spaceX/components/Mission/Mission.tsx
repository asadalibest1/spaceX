import React from 'react'
import { useMissionInfoQuery } from "../../../generated/graphql"
import MissionsList from "./MissionsList"
import backgroundImg from "../../images/sunrise.jpg"
// import "./loader.css";
import Loader from '../loader/loader';

export default function MissionInfo({getId}) {
    const { data, error, loading } = useMissionInfoQuery();

    React.useEffect(()=>{
        document.getElementsByTagName("body")[0].style.backgroundImage = `url(${backgroundImg})`;
        },[])

    if (loading)
        return  <Loader />

    return (
        <MissionsList data={data} getId={getId}/>
        )
}
