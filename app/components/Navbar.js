'use client'

import React from "react";
import {Navbar} from "@nextui-org/react";
import {Tabs} from "./tabs";

export default function NavbarComponent({activeTab, setActiveTab}) {

    const tabs = [
        {
            title: "home",
            value: "home",
            content: (''
            ),
        },
        {
            title: "tanulmányaim",
            value: "studies",
            content: ('')
        },
        {
            title: "projektjeim",
            value: "projects",
            content: (''
            ),
        },
        {
            title: "kapcsolat",
            value: "contact",
            content: (''
            ),
        },
    ];

    return (
        <Navbar className="text-sm bg-opacity-0 mt-2 animate__animated animate__fadeInDown" shouldHideOnScroll={false} isBlurred={false} position="sticky"
                height="40px" maxWidth="full" style={{position: "fixed"}}>

            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} activeTabClassName="active-tab"/>

        </Navbar>
    );
}
