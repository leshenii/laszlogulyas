"use client";

import { useEffect, useState } from "react";

import { cn } from "../lib/utils";

interface TextProps {
    /**
     * Text to display
     */
    text: string;

    className?: string;
}

export default function TextBorderAnimation({ text = "Programming", className }: TextProps) {
    const [isHoveredIn, setIsHoveredIn] = useState(false);
    const [isHoveredOut, setIsHoveredOut] = useState(false);

    const handleHover = () => {
        setIsHoveredIn(true);
    };

    const handleHoverExit = () => {
        setIsHoveredIn(false);
        setIsHoveredOut(true);
    };

    useEffect(() => {
        if (isHoveredOut) {
            const timer = setTimeout(() => {
                setIsHoveredOut(false);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [isHoveredOut]);

    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleHoverExit} className="overflow-hidden">
            <span className={cn("text-sm text-foreground", className)}>{text}</span>
            <div className="relative h-1 w-full">
                <div
                    className={cn(
                        "absolute left-0 -top-1 h-[3px] w-full bg-cyan-400 transition-transform duration-300",
                        isHoveredIn
                            ? "translate-x-0 transform opacity-100"
                            : "-translate-x-full transform opacity-0",
                    )}
                ></div>
                <div
                    className={cn(
                        "absolute left-0 -top-1 h-[3px] w-full translate-x-0 transform bg-cyan-400 opacity-0 transition-transform duration-300",
                        isHoveredOut && "translate-x-full opacity-100",
                    )}
                ></div>
            </div>
        </div>
    );
}
