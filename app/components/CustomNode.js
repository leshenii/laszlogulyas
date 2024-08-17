import {Handle, Position} from "@xyflow/react";


export default function CustomNode ({data, isConnectable}) {

    const bgColorClass = data.family === 'programming' ? 'bg-programming' :
        data.family === 'math' ? 'bg-math' :
            data.family === 'science' ? 'bg-science' : 'bg-other';


    return (
        <div className={`flex flex-row justify-center items-center text-xs font-semibold ${bgColorClass} p-3 w-44 rounded-full`}>
            <span className="text-center white w-full">{data.label}</span>
            <span className="text-base pb-[3px]">{data.progress === 'done' ? "✔️" : data.progress === 'active' ? "⌛" : data.progress === 'future' ? "⏳" : ""}</span>
            <Handle isConnectable={isConnectable} type="source" position={Position.Right} id="a" className="react-flow__handle" />
            <Handle isConnectable={isConnectable} type="target" position={Position.Right} id="a" className="react-flow__handle" />

        </div>
    )
}