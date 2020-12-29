import React from 'react'
import { useMissionInfoQuery } from "../../../generated/graphql"
import MissionsList from "./MissionsList"
export default function MissionInfo() {
    const { data, error, loading } = useMissionInfoQuery();

    // const [toggle, setToggle] = React.useState(false);

    if (loading)
        return <h2>Loading 1</h2>

    // function changeToggle(){
    //     setToggle(!toggle)
    // }
    // console.log(data.launches);
    return (
        <MissionsList data={data}/>
        )
}
