import React from 'react'
import Spinner from "./spinner/spinner"

export default function Loader() {
    return (
        <div className="stage-second">
            <div className="stage-second-inner-div">
                <h1 className="heading-Past-Missions">Past Missions</h1>
                <div className="mission-view" >
                        <div className="noImage loadingImage">
                            <Spinner />
                        </div>
                        <h2 className="loading-h2"></h2>
                        <label className="loading-label"></label>
                        <span className="loading-button"></span>
                </div>
                <div className="mission-view" >
                        <div className="noImage loadingImage">
                            <Spinner />
                        </div>
                        <h2 className="loading-h2"></h2>
                        <label className="loading-label"></label>
                        <span className="loading-button"></span>
                </div>
                <div className="mission-view" >
                        <div className="noImage loadingImage">
                            <Spinner />
                        </div>
                        <h2 className="loading-h2"></h2>
                        <label className="loading-label"></label>
                        <span className="loading-button"></span>
                </div>
                    <button className="Show-All-Missions">Show All Missions</button>
            </div>
        </div>
    )
}
