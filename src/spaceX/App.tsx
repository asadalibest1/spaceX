import React from 'react'

import Home from "./components/Home/Home"
import MissionInfo from "./components/Mission/Mission"
import Appbar from "./components/Appbar/Appbar"
import LaunchProfileQuery from "./components/MissionDetails/MissionDetails"
import Sidebar from './components/Sidebar/Sidebar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import client from "./config_file/config"
import { ApolloProvider } from '@apollo/client'

export default function App() {
    const [id, setId] = React.useState("1")

    function getId(id: string) {
        setId(id);
    }
    return (
        <div className="main-background">
            <ApolloProvider client={client}>
                <Router>
                    <Appbar />
                    <Sidebar  getId={getId}/>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/missions">
                            <MissionInfo />
                        </Route>
                        <Route path="/missionDetails">
                            <LaunchProfileQuery id={id} />
                        </Route>
                    </Switch>
                </Router>
            </ApolloProvider>
        </div>
    )
}
