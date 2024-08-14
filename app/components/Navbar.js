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

            {/*<NavbarBrand className="animate__animated animate__fadeInDown ">
                <Button onPress={() => fullpage_api.moveTo(1)} color="primary" size="sm" radius="none"
                        className="hover:text-cyan-700 text-sm kanit-extrabold">
                    G. LACI
                </Button>
            </NavbarBrand>
            <NavbarContent id="myMenu" className="hidden sm:flex gap-4 " justify="right">
                <NavbarItem>
                    <Link data-menuanchor="home" href="#studies" color="secondary"
                          className="text-sm hover:text-cyan-700" underline="hover">
                        tanulmányaim
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link data-menuanchor="studies" href="#projects" color="secondary" className="text-sm hover:text-cyan-700" underline="hover">
                        projektjeim
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link data-menuanchor="projects" href="#contact" color="secondary" className="text-sm hover:text-cyan-700" underline="hover">
                        elérhetőségeim
                    </Link>
                </NavbarItem>
            </NavbarContent>*/}

        </Navbar>
    );
}
