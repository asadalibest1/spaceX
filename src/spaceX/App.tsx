import React from 'react'

import firebaseService from "./services/firebaseService";
import { ApolloProvider } from '@apollo/client'
import client from "./config_file/config"

import Home from "./components/Home/Home"
import MissionInfo from "./components/Mission/Mission"
import Appbar from "./components/Appbar/Appbar"
import LaunchProfileQuery from "./components/MissionDetails/MissionDetails"
import Sidebar from './components/Sidebar/Sidebar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App() {
    const [id, setId] = React.useState("0")

    firebaseService();

    function getId(id: string) {
        setId(id);
    }
    return (
        <div className="main-background">
                <ApolloProvider client={client}>
                <Router>
                    <Appbar />
                    <Sidebar getId={getId} />
                <Switch>
                <Route exact path="/">
                    <Home getId={getId} />
                </Route>
                <Route path="/missions">
                    <MissionInfo getId={getId} />
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
