'use client'

import React, {useState} from 'react';
import NavbarComponent from "./components/Navbar";
import Social from "./components/Social";
import {ShootingStars} from "./components/shooting-stars";
import LandingPage from "./LandingPage";

export default function LandingHome() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <>
            <NavbarComponent activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div style={{zIndex: 2, position: "fixed"}}
                 className="relative b m-2">
            </div>
            <LandingPage activeTab={activeTab} setActiveTab={setActiveTab}/>
            <Social/>
            <ShootingStars starColor="#66fcf1" trailColor="0e7490" minSpeed={5}/>
        </>
    )
}