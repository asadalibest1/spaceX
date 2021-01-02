import React from 'react'
import backgroundImg from "../../images/19350.jpg"

import StageOne from "./components/StageOne/StageOne"
import StageTwo from "./components/StageTwo/StageTwo"
import StageThree from "./components/StageThree/StageThree"

export default function Home({getId}) {
    React.useEffect(() => {
        document.getElementsByTagName("body")[0].style.backgroundImage = `url(${backgroundImg})`;
    }, [])

    return (
        <div className="main-home-page">
                <StageOne />
                <StageTwo getId={getId}/>
                <StageThree />
        </div>
    )
}
