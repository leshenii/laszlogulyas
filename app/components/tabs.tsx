'use client'

import {motion} from "framer-motion";
import {cn} from "../lib/utils";
import pageTo from "./moveTo";
import TextBorderAnimation from "./text-border-animation";
import {
    useWindowWidth
} from '@react-hook/window-size'
import React, {useEffect, useState} from "react";

type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode | any;
};

export const Tabs = ({
                         tabs: propTabs,
                         activeTab,
                         containerClassName,
                         activeTabClassName,
                         tabClassName,
                     }: {
    tabs: Tab[];
    activeTab?: string;
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}) => {

    const moveSelectedTabToTop = (idx: number) => {
        pageTo(idx + 1)
    };

    const width = useWindowWidth();

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            <div
                className={cn(
                    "flex flex-row items-center justify-center overflow-visible sm:overflow-visible no-visible-scrollbar max-w-full w-full mx-0 px-0",
                    containerClassName
                )}
                style={{overflow: "hidden"}}
            >
                {propTabs.map((tab, idx) => (
                    <button
                        data-menuanchor="home"
                        key={tab.title}
                        onClick={() => {
                            moveSelectedTabToTop(idx);
                        }}
                        className={cn(
                            "relative px-4 py-2 rounded-full text-cyan-400",
                            tabClassName,
                            tab.title === "home" ? "mr-auto" : ""
                        )}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {domLoaded && activeTab === tab.value && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{type: "spring", bounce: 0.3, duration: 0.6}}
                                className={cn(
                                    "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
                                    activeTabClassName
                                )}
                            />
                        )}

                        {domLoaded && width < 768 && (
                            <span className="relative block text-black dark:text-white pt-[1px] text-lg">
                                {tab.value === "home" ? "👤" : tab.value === "studies" ? "🎓" : tab.value === "projects" ? "👨‍💻" : "📞"}
                            </span>
                        )}

                        {domLoaded && width >= 768 && (
                            <span className="relative block text-black dark:text-white pt-[1px]">
                                <TextBorderAnimation text={tab.value === "home" ? "gulyás lászló" : tab.title}
                                                     className="text-sm"/>
                            </span>
                        )}
                    </button>
                ))}
            </div>

        </>
    );
};

