import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import Home from '../components/Home'
import Header from '../Layouts/Header'
import AboutUs from '../components/Aboutus'
import SoftwareServicesComponent from '../components/Software'
import ConversationalAIContent from '../components/CAI'
import Footer from '../Layouts/Footer'
import ContactUsPage from '../components/Contactus'
import WebApplication from '../components/WebApplication'
import CloudSupport from '../components/CloudInfrasupport'
import GisMapping from '../components/Utilities'
import OilGas from '../components/OilGas'
import Telecom from '../components/Telecom'
import Building from '../components/BuildingInfrastructure'
import Utilities from '../components/Utilities'
import Gis from '../components/GIS'
import ManPowerServices from '../components/ManPowerServices'
import Java from '../components/Software'
// import LandingPage from '../components/LandingPage'
// import Parent_Component from '../components/Parent_Component'


const Router = () => {
    return (
        <div>
            <div className="">
            <Header />
            </div>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/About"><AboutUs /></Route>
                <Route path="/Java"><Java /></Route>
                <Route path="/WebApplicaiton"><WebApplication /></Route>
                <Route path="/CloudSupport"><CloudSupport /></Route>
                <Route path="/OilGas"><OilGas /></Route>
                <Route path="/Telecommunication"><Telecom /></Route>
                <Route path="/GIS&Mapping"><Gis /></Route>
                <Route path="/ManPower"><ManPowerServices /></Route>
                <Route path="/Utilities"><Utilities /></Route>
                <Route path="/BuildingInfrastructure"><Building /></Route>
                <Route path="/Sailpoint"><ConversationalAIContent /></Route>
                <Route path="/Contact"><ContactUsPage /></Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default Router
