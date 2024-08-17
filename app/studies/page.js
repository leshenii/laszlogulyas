import {Background, ReactFlow} from "@xyflow/react";
import {StarsBackground} from "../components/stars-background";
import React from "react";
import '@xyflow/react/dist/style.css';

import FloatingEdge from '../components/FloatingEdge';
import FloatingConnectionLine from '../components/FloatingConnectionLine';
import {createNodesAndEdges} from '../lib/flowUtils';
import customNode from '../components/CustomNode';
import nodes from "../lib/nodes";
import edges from "../lib/edges";
import {Card, CardBody} from "@nextui-org/react";
import {Meteors} from "../components/meteors";

const nodeTypes = {
    custom: customNode,
};
const edgeTypes = {
    floating: FloatingEdge,
};

export default function Studies() {

    /*const initialNodes = [
        { id: '1', data: { label: 'Node 1' }, position: { x: 0, y: 0 }, type: 'custom' },
        { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 }, type: 'custom' },
    ];
    const initialEdges = [{ id: 'e1-2', source: '1', target: '2', type: 'floating' }];*/
    const defaultViewport = {x: 0, y: 0, zoom: 1.5};


    return (
        <div className="section">
            <StarsBackground starDensity={0.00045}/>
            <Card
                className="text-white h-[50vh] lg:h-[70vh] w-[90vw] lg:w-[60vw] bg-bg rounded-xl shadow-[0_10px_20px_rgba(0,_255,_255,_0.7)] m-10">
                <CardBody className="text-white overflow-hidden" style={{zIndex: 1}}>
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

        </div>


    )
}