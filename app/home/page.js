import {Image} from "@nextui-org/react";
import NextImage from "next/image";
import React from "react";
import {StarsBackground} from "../components/stars-background";
import {TextGenerateEffect} from "../components/text-generate-effect";

export default function Home() {

    const words = `Laci vagyok, de hívj csak a következő full stack webfejlesztődnek.`;

    return (
        <div className="section" style={{zIndex: 1}}>
            <div className="flex flex-row items-center w-4/5 mx-auto pb-[40px] pl-6 ">
                <div className="flex flex-col mr-10">
                    <div className="text-6xl text-right text-white animate__animated animate__fadeInDown">
                        Szia!
                    </div>
                    <div className="text-right">
                        <TextGenerateEffect words={words} />
                    </div>
                </div>
                <div className="w-full animate__animated animate__fadeInRight">
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
                            wrapper: "shadow-xl shadow-cyan-400/50",
                        }}
                        draggable={false}
                    />
                </div>
            </div>
            <StarsBackground/>
        </div>
    );
}
