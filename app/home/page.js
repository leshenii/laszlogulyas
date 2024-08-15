'use client'

import {Image} from "@nextui-org/react";
import NextImage from "next/image";
import React, {useEffect, useState} from "react";
import {StarsBackground} from "../components/stars-background";
import {TextGenerateEffect} from "../components/text-generate-effect";
import {useWindowWidth} from "@react-hook/window-size";

export default function Home() {

    const words = `Laci vagyok, de hívj csak a következő full-stack webfejlesztődnek.`;

    const width = useWindowWidth()

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);


    return (
        <div className="section" style={{zIndex: 1}}>
            <div className="flex flex-col md:flex-row items-center w-4/5 mx-auto pb-[40px] md:pl-6" style={{overflow: "hidden"}}>
                <div className="flex flex-col md:mr-10">
                    <div className="text-6xl text-center md:text-right text-white animate__animated animate__fadeInDown">
                        Szia!
                    </div>
                    <div className="text-center md:text-right pb-6 md:pb-0">
                        <TextGenerateEffect words={words} />
                    </div>
                </div>
                <div className="w-full animate__animated animate__fadeInRight">
                    {domLoaded && width < 768 && (
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
                                wrapper: "shadow-xl mx-auto md:mx-0 shadow-cyan-400/50",
                            }}
                            draggable={false}
                        />
                    )}
                    {domLoaded && width >= 768 &&  (
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
                                wrapper: "shadow-xl mx-auto md:mx-0 shadow-cyan-400/50",
                            }}
                            draggable={false}
                        />
                    )}
                </div>
            </div>
            <StarsBackground starDensity={0.00060}/>
        </div>
    );
}
