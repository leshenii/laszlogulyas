import {Handle, Position} from "@xyflow/react";
import { motion } from "framer-motion";

export default function CustomNode({data, isConnectable}) {

    const bgColorClass = data.family === 'programming' ? 'bg-programming' :
        data.family === 'math' ? 'bg-math' :
            data.family === 'science' ? 'bg-science' : 'bg-other';

    const handleClick = () => {
        window.open(data.url, "_blank", "noopener,noreferrer");
    };

    return (
        <motion.div
            className="container text-center"
            whileHover={{scale: 1.2}}
            whileTap={{scale: 0.8, borderRadius: "100%"}}
            onClick={handleClick}
        >
            <div
                className={`flex flex-row justify-center items-center font-semibold ${bgColorClass} p-3 w-52 rounded-full`}>
                <span className="text-center text-sm white w-full">{data.label}</span>
                <span
                    className="text-base pb-[2px]">{data.progress === 'done' ? "✔️" : data.progress === 'active' ? "⌛" : data.progress === 'future' ? "⏳" : ""}</span>
                <Handle isConnectable={isConnectable} type="source" position={Position.Right} id="a"
                        className="react-flow__handle"/>
                <Handle isConnectable={isConnectable} type="target" position={Position.Right} id="a"
                        className="react-flow__handle"/>

            </div>
        </motion.div>
    )
}