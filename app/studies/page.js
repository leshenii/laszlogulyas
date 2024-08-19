'use client'

import {ReactFlow} from "@xyflow/react";
import {StarsBackground} from "../components/stars-background";
import React from "react";
import '@xyflow/react/dist/style.css';

import FloatingEdge from '../components/FloatingEdge';
import FloatingConnectionLine from '../components/FloatingConnectionLine';
import customNode from '../components/CustomNode';
import nodes from "../lib/nodes";
import edges from "../lib/edges";
import {Accordion, AccordionItem, Card, CardBody, Chip} from "@nextui-org/react";
import {Meteors} from "../components/meteors";
import {motion} from "framer-motion";

const nodeTypes = {
    custom: customNode,
};
const edgeTypes = {
    floating: FloatingEdge,
};

export default function Studies() {

    const defaultViewport = {x: 0, y: 0, zoom: 1.5};

    return (
        <div className="section">
            <div className="flex flex-col lg:flex-row w-screen h-[80vh]">
                <Card
                    className="h-[50vh] lg:h-[70vh] w-[90vw] lg:basis-2/3 lg:ml-4 mx-auto my-7 bg-bg rounded-xl shadow-[0_10px_20px_rgba(0,_255,_255,_0.7)] ">
                    <CardBody className="overflow-hidden" style={{zIndex: 1}}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            defaultViewport={defaultViewport}
                            fitView
                            nodeTypes={nodeTypes}
                            edgeTypes={edgeTypes}
                            connectionLineComponent={FloatingConnectionLine}
                            edgesUpdatable={false}
                            edgesFocusable={false}
                            nodesDraggable={false}
                            nodesConnectable={false}
                            nodesFocusable={true}
                            draggable={false}
                            panOnDrag={true}
                            elementsSelectable={true}
                            zoomOnScroll={true}
                            zoomActivationKeyCode={"16"}
                        >

                        </ReactFlow>
                    </CardBody>
                    <Meteors number={20} style={{zIndex: 0}} />
                </Card>
                <div className="basis-1/3 text-center lg:text-left lg:ml-5 lg:mr-3 lg:mt-8 kanit-extrabold">
                    <p className="mx-2 mb-2">
                        Ezen az oldalon az egyetemi előrehaladásomat látod. A tárgyakra kattintva megnyithatod a tárgyi leírást.
                    </p>
                    <motion.div
                        className="container"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        <Accordion variant="splitted" className="mb-2">
                            <AccordionItem key="1" aria-label="képzés" title={
                                <span className="text-3xl tracking-wider">KÉPZÉS</span>
                            } className="bg-bg">
                                <span className="text-3xl ">ELTE Informatikai Kar</span><br></br>
                                <span className="text-xl">Programtervező Informatikus BSc</span><br></br>
                                <span className="text-lg">szoftverfejlesztő specializáció</span><br></br>
                                <span className="text-base">2021 - várható befejezés 2025 ősz</span>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                    <motion.div
                        className="container"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        <Accordion variant="splitted" >
                            <AccordionItem key="1" aria-label="jelmagyarázat" title={
                                <span className="text-3xl">jelmagyarázat</span>
                            } className="bg-bg">
                                <Chip
                                    startContent={<span>✔️</span>}
                                    variant="faded"
                                    color="secondary"
                                    className="m-1"
                                >
                                    teljesített
                                </Chip>
                                <Chip
                                    startContent={<span>⌛</span>}
                                    variant="faded"
                                    color="secondary"
                                    className="m-1"
                                >
                                    aktuális félévben végzett
                                </Chip>
                                <Chip
                                    startContent={<span>⏳</span>}
                                    variant="faded"
                                    color="secondary"
                                    className="m-1"
                                >
                                    jövőbeli félévben végzendő
                                </Chip>
                                <br></br>
                                <Chip
                                    startContent={<span className="bg-programming text-xs w-3 h-3 ml-1"></span>}
                                    variant="faded"
                                    color="secondary"
                                    className="m-1"
                                >
                                    informatikai
                                </Chip>
                                <Chip
                                    startContent={<span className="bg-science text-xs w-3 h-3 ml-1"></span>}
                                    variant="faded"
                                    color="secondary"
                                    className="m-1"
                                >
                                    számítástudományi
                                </Chip>
                                <Chip
                                    startContent={<span className="bg-math text-xs w-3 h-3 ml-1"></span>}
                                    variant="faded"
                                    color="secondary"
                                    className="m-1"
                                >
                                    matematikai
                                </Chip>
                                <Chip
                                    startContent={<span className="bg-other text-xs w-3 h-3 ml-1"></span>}
                                    variant="faded"
                                    color="secondary"
                                    className="m-1"
                                >
                                    egyéb
                                </Chip>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                </div>
            </div>
            <StarsBackground starDensity={0.00045}/>
        </div>


)
}