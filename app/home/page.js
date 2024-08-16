'use client'

import {Image} from "@nextui-org/react";
import NextImage from "next/image";
import React, {useEffect, useState} from "react";
import {StarsBackground} from "../components/stars-background";
import {TextGenerateEffect} from "../components/text-generate-effect";
import {useWindowWidth} from "@react-hook/window-size";
import {title} from "../components/primitives";

export default function Home() {

    const words = `Laci vagyok, de hívj csak a következő full-stack webfejlesztődnek.`;

    const width = useWindowWidth()

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <div className="section" style={{zIndex: 1}}>
            <div className="flex flex-col lg:flex-row items-center w-11/12 lg:w-4/5 mx-auto pb-[40px] lg:pl-6" style={{overflow: "hidden"}}>
                <div className="flex flex-col lg:mr-10">
                    <div className="kanit-extrabold text-3xl lg:text-6xl text-center lg:text-right text-white animate__animated animate__fadeInDown">
                        Szia!
                    </div>
                    <div className="kanit-extrabold text-3xl lg:text-6xl text-center lg:text-right pb-12 lg:pb-0">
                        Laci vagyok, de hívj csak a következő &nbsp;
                        <h1 className={title({color: "blue", size: width < 1024 ? "sm" : "lg"})}>full-stack webfejlesztődnek</h1>.
                    </div>
                </div>
                <div className="w-full animate__animated animate__fadeInRight">
                    {domLoaded && width < 1024 && (
                        <Image
                            as={NextImage}
                            radius="full"
                            shadow="lg"
                            width={200}
                            height={200}
                            src="/gulyas_laszlo_portre.png"
                            alt="Gulyás László portréja"
                            isZoomed
                            classNames={{
                                wrapper: "shadow-xl mx-auto lg:mx-0 shadow-cyan-400/50",
                            }}
                            draggable={false}
                        />
                    )}
                    {domLoaded && width >= 1024 &&  (
                        <Image
                            as={NextImage}
                            radius="full"
                            shadow="lg"
                            width={300}
                            height={300}
                            src="/gulyas_laszlo_portre.png"
                            alt="Gulyás László portréja"
                            isZoomed
                            classNames={{
                                wrapper: "shadow-xl mx-auto lg:mx-0 shadow-cyan-400/50",
                            }}
                            draggable={false}
                        />
                    )}
                </div>
            </div>
            <StarsBackground starDensity={0.00065}/>
        </div>
    );
}
