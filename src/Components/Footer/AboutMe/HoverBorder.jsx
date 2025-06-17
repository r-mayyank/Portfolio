"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "../../../utils/cn";
import AboutMeContent from "./Contents.jsx";
import { SkillSvg, EducationSvg, JourneySvg, ValueSvg, CodeSvg } from "./svgs.jsx";
export function HoverBorderGradient({
    children,
    isLight,
    splashStatus,
    globalBlur,
    containerClassName,
    className,
    as: Tag = "button",
    duration = 1,
    clockwise = true,
    ...props
}) {
    const [hovered, setHovered] = useState(0);
    const [selected, setSelected] = useState(0);
    const [direction, setDirection] = useState("TOP");

    const rotateDirection = (currentDirection) => {
        const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        const currentIndex = directions.indexOf(currentDirection);
        const nextIndex = clockwise
            ? (currentIndex - 1 + directions.length) % directions.length
            : (currentIndex + 1) % directions.length;
        return directions[nextIndex];
    };

    const movingMap = {
        TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        BOTTOM:
            "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        RIGHT:
            "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    };

    const highlight =
        "radial-gradient(75% 181.1% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

    const items = [
        { name: "Skills", icon: SkillSvg },
        { name: "Journey", icon: JourneySvg },
        { name: "Education", icon: EducationSvg },
        { name: "Values", icon: ValueSvg },
        { name: "Code", icon: CodeSvg },
    ];

    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setDirection((prevState) => rotateDirection(prevState));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered]);

    return (
        <div className={`${splashStatus ? "hidden" : "block"}`}>
            <div
                className={`${globalBlur
                    ? "md:blur-none blur-md duration-500 ease-in-out"
                    : "blur-none duration-500 ease-in-out"
                    } mt-10 md:mt-20 pt-5 flex flex-col xl:px-80`}
            >
                <Tag
                    onMouseEnter={() => setHovered(true)}
                    //   onMouseLeave={() => setHovered(false)}
                    className={cn(
                        "relative flex rounded-full border border-gray-700 bg-black text-white transition duration-500",
                        "dark:border-gray-500 dark:bg-gray-900",
                        "items-center overflow-visible p-px decoration-clone w-full",
                        containerClassName
                    )}
                    {...props}
                >
                    {/* Inner Content */}
                    <div
                        className={cn(
                            "z-10 py-2 rounded-[inherit] text-gray-300 text-xl md:text-xl flex justify-start w-full px-10 flex-wrap",
                            "dark:bg-gray-800 dark:text-gray-400", isLight ? "bg-[#FFFDFB]" : "bg-[#0D0D0D]",
                            className
                        )}
                    >
                        {items.map((item, idx) => (
                            <a
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(false)}
                                // onClick={onItemClick}
                                className={isLight ? "relative px-4 py-2 text-neutral-600 hover:text-neutral-800 transition-colors duration-200" : "relative z-10 px-4 py-2 text-neutral-300 hover:text-white transition-colors duration-200"}
                                key={`link-${idx}`}
                                href={item.link}
                            >
                                {hovered === idx && (
                                    <motion.div
                                        layoutId="hovered"
                                        className={isLight ? "absolute inset-0 h-full w-full rounded-full bg-gray-100 z-0" : "absolute inset-0 h-full w-full rounded-full bg-neutral-800 z-0"}
                                    >
                                    </motion.div>
                                )}
                                {selected === idx && (
                                    <motion.div
                                        layoutId="underline"
                                        className={`absolute bottom-0 left-0 right-0 h-[2px] ${isLight ? "bg-highlightBrown": "bg-blue-500"}`}
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                                <span onClick={() => setSelected(idx)} className={`relative z-20 flex gap-1 items-center`}><item.icon />{item.name}</span>
                            </a>
                        ))}
                    </div>

                    {/* Hover Animation */}
                    <motion.div
                        className="absolute inset-0 overflow-hidden z-0 rounded-[inherit]"
                        style={{ filter: "blur(2px)", position: "absolute", width: "100%", height: "100%" }}
                        initial={{ background: movingMap[direction] }}
                        animate={{
                            background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
                        }}
                        transition={{ ease: "linear", duration: duration ?? 1 }}
                    />

                    {/* Inner Dark Mode Layer */}
                    <div className="absolute inset-[2px] rounded-[100px] bg-black dark:bg-gray-900" />
                </Tag>

                <div className="transition-opacity duration-300">
                    <AboutMeContent idx={selected} isLight={isLight}/>
                </div>
            </div>
        </div>
    );
}