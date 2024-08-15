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
            <LandingPage activeTab={activeTab} setActiveTab={setActiveTab}/>
            <Social/>
            <ShootingStars starColor="#66fcf1" trailColor="0e7490" minSpeed={5}/>
        </>
    )
}