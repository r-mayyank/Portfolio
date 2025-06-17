import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import {
    Code2,
    Database,
    Blocks,
    Globe,
    Layers,
    Palette,
    Box,
    Zap,
    Cpu,
    FileCode,
    Smartphone,
    Server,
    Cloud,
    Shield,
    Coins,
    Lock,
    Hammer,
    Anchor,
    GitBranch,
    Upload,
    Settings,
    Package,
} from "lucide-react"

const techSections = [
    {
        title: "Full-stack",
        count: 10,
        technologies: [
            { name: "NextJS", icon: Globe, color: "text-black" },
            { name: "ReactJS", icon: Code2, color: "text-blue-400" },
            { name: "Tailwind", icon: Palette, color: "text-cyan-400" },
            { name: "THREE.js", icon: Box, color: "text-green-400" },
            { name: "GSAP", icon: Zap, color: "text-yellow-400" },
            { name: "Framer", icon: Layers, color: "text-purple-400" },
            { name: "TypeScript", icon: FileCode, color: "text-blue-500" },
            { name: "Javascript(ES6+)", icon: Code2, color: "text-yellow-500" },
            { name: "ElectronJS", icon: Smartphone, color: "text-gray-400" },
            { name: "React", icon: Code2, color: "text-blue-300" },
        ],
    },
    {
        title: "Backend",
        count: 8,
        technologies: [
            { name: "Node.js", icon: Server, color: "text-green-500" },
            { name: "Express.js", icon: Server, color: "text-gray-400" },
            { name: "MongoDB", icon: Database, color: "text-green-600" },
            { name: "Postgres", icon: Database, color: "text-blue-600" },
            { name: "Prisma", icon: Database, color: "text-indigo-400" },
            { name: "MySQL", icon: Database, color: "text-orange-500" },
            { name: "Python", icon: Code2, color: "text-yellow-600" },
            { name: "REST APIs", icon: Cloud, color: "text-purple-500" },
        ],
    },
    {
        title: "Blockchain",
        count: 7,
        technologies: [
            { name: "Ethereum", icon: Coins, color: "text-gray-300" },
            { name: "Solidity", icon: Shield, color: "text-gray-400" },
            { name: "Hardhat", icon: Hammer, color: "text-yellow-600" },
            { name: "Foundry", icon: Hammer, color: "text-red-500" },
            { name: "Solana", icon: Coins, color: "text-purple-600" },
            { name: "Rust", icon: Lock, color: "text-orange-600" },
            { name: "Anchor", icon: Anchor, color: "text-blue-700" },
        ],
    },
    {
        title: "Tools",
        count: 9,
        technologies: [
            { name: "Git", icon: GitBranch, color: "text-orange-500" },
            { name: "Vercel", icon: Upload, color: "text-black" },
            { name: "AWS", icon: Cloud, color: "text-orange-400" },
            { name: "Docker", icon: Package, color: "text-blue-500" },
            { name: "Markdowns", icon: FileCode, color: "text-gray-500" },
            { name: "CI/CD", icon: Settings, color: "text-green-500" },
            { name: "Github Copilot", icon: Code2, color: "text-purple-600" },
            { name: "Claude", icon: Cpu, color: "text-orange-300" },
            { name: "V0", icon: Blocks, color: "text-black" },
        ],
    },
]

function FloatingTechCard({ section, index, isLight }) {
    const [elements, setElements] = useState([])
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const animationRef = useRef()
    const containerRef = useRef()

    // Fixed dimensions for consistent behavior
    const CONTAINER_WIDTH = 500
    const CONTAINER_HEIGHT = 200

    const initializeElements = useCallback(() => {
        const newElements = section.technologies.map((tech, i) => ({
            id: `${section.title}-${i}`,
            x: 50 + Math.random() * (CONTAINER_WIDTH - 100),
            y: 50 + Math.random() * (CONTAINER_HEIGHT - 100),
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            size: Math.random() * 10 + 24,
            icon: tech.icon,
            color: tech.color,
            rotation: 0,
            rotationSpeed: (Math.random() - 0.5) * 2,
            label: tech.name,
        }))
        setElements(newElements)
    }, [section])

    useEffect(() => {
        initializeElements()
    }, [initializeElements])

    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         if (containerRef.current) {
    //             const rect = containerRef.current.getBoundingClientRect()
    //             setMousePos({
    //                 x: e.clientX - rect.left,
    //                 y: e.clientY - rect.top - 80, // Account for header
    //             })
    //         }
    //     }

    //     const container = containerRef.current
    //     if (container) {
    //         container.addEventListener("mousemove", handleMouseMove)
    //         return () => container.removeEventListener("mousemove", handleMouseMove)
    //     }
    // }, [])

    useEffect(() => {
        const animate = () => {
            setElements((prevElements) =>
                prevElements.map((element) => {
                    let { x, y, vx, vy } = element

                    // Mouse interaction - repel from mouse
                    const dx = x - mousePos.x
                    const dy = y - mousePos.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 80 && distance > 0) {
                        const force = ((80 - distance) / 80) * 0.5
                        vx += (dx / distance) * force
                        vy += (dy / distance) * force
                    }

                    // Update position
                    x += vx
                    y += vy

                    // Bounce off walls
                    if (x <= 30 || x >= CONTAINER_WIDTH - 30) {
                        vx *= -0.8
                        x = x <= 30 ? 30 : CONTAINER_WIDTH - 30
                    }
                    if (y <= 30 || y >= CONTAINER_HEIGHT - 30) {
                        vy *= -0.8
                        y = y <= 30 ? 30 : CONTAINER_HEIGHT - 30
                    }

                    // Apply friction and add random movement
                    vx *= 0.99
                    vy *= 0.99
                    vx += (Math.random() - 0.5) * 0.1
                    vy += (Math.random() - 0.5) * 0.1

                    // Limit velocity
                    const maxVel = 4
                    const currentVel = Math.sqrt(vx * vx + vy * vy)
                    if (currentVel > maxVel) {
                        vx = (vx / currentVel) * maxVel
                        vy = (vy / currentVel) * maxVel
                    }

                    return {
                        ...element,
                        x,
                        y,
                        vx,
                        vy,
                        rotation: element.rotation + element.rotationSpeed,
                    }
                }),
            )

            animationRef.current = requestAnimationFrame(animate)
        }

        if (elements.length > 0) {
            animationRef.current = requestAnimationFrame(animate)
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [elements.length, mousePos])

    const themeClass = isLight
        ? "bg-[#FFD6C4] border-[#FFD6C4]"
        : "bg-gray-800/90 border-gray-700/50";

    return (
        <motion.div
            key={isLight ? 'true' : 'false'}
            ref={containerRef}
            className={`relative backdrop-blur-lg rounded-2xl p-6 mx-5 overflow-hidden border h-32 ${themeClass}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            {/* Header */}
            <div className="relative z-10 mb-4 text-shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                    <h2 className={`text-2xl font-bold ${isLight? "text-black" : "text-white"}`}>{section.title}</h2>
                    <span className="bg-gray-700 text-white  px-2 py-1 rounded-full text-sm font-medium">{section.count}</span>
                </div>
                <p className={`text-sm line-clamp-2 ${isLight? "text-black" : "text-white"}`}>{section.technologies.map((tech) => tech.name).join(", ")}</p>
            </div>

            {/* Floating Animation Area */}
            <div className="absolute inset-0 z-0">
                {elements.map((element) => {
                    const IconComponent = element.icon
                    return (
                        <div
                            key={element.id}
                            className="absolute transition-transform duration-75 ease-out"
                            style={{
                                left: `${element.x}px`,
                                top: `${element.y}px`,
                                transform: `translate(-50%, -50%) rotate(${element.rotation}deg)`,
                            }}
                        >
                            <div className="relative group cursor-pointer">
                                <IconComponent
                                    size={element.size}
                                    className={`${element.color} drop-shadow-lg opacity-80 hover:opacity-100 transition-all duration-200 hover:scale-110`}
                                    strokeWidth={1.5}
                                />
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                                    {element.label}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-900/10 pointer-events-none rounded-2xl" />
        </motion.div>
    )
}

export default function FloatingTechStack({isLight, splashStatus, globalBlur}) {
    return (
        <div className="mt-5">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {techSections.map((section, index) => (
                        <div key={section.title} className="">
                            <FloatingTechCard section={section} index={index} isLight={isLight} splashStatus={splashStatus} globalBlur={globalBlur} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
