import FloatingTechStack from "./Skills";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Code, Heart, BookOpen, MousePointer } from "lucide-react"
import { Card, CardContent } from "../../ui/card"

function AboutMeContent({ idx, isLight }) {
    const [showPopup, setShowPopup] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    if (idx == 0) {
        return (
            <div>
                <FloatingTechStack isLight={isLight} />
            </div>
            // <div className="rounded-lg p-4 flex flex-col gap-4 transition-all ease-in-out duration-500">
            //     <div className="backdrop-blur-md bg-white/20 border-white/30 shadow-lg rounded-2xl p-8 items-center text-2xl">Full-stack <span className="text-sm bg-gray-600 py-0.5 px-1 rounded-full ml-3">10</span>
            //         <div className="text-base"> NextJS, ReactJS, Tailwind, THREE.js, GSAP, Framer, TypeScript, Javascript(ES6+), ElectronJS</div>
            //     </div>
            //     <div className="backdrop-blur-md bg-white/20 border-white/30 shadow-lg rounded-2xl p-8 items-center text-2xl">Backend<span className="text-sm bg-gray-600 py-0.5 px-1 rounded-full ml-3">8</span>
            //         <div className="text-base"> Node.js, Express.js, MongoDB, Postgres, Prisma, MySQL, Python, REST APIs</div>
            //     </div>
            //     <div className="backdrop-blur-md bg-white/20 border-white/30 shadow-lg rounded-2xl p-8 items-center text-2xl">Blockchain<span className="text-sm bg-gray-600 py-0.5 px-1 rounded-full ml-3">7</span>
            //         <div className="text-base"> Ehterium, Solidity, Hardhat, Foundry, Solana, Rust, Anchor</div>
            //     </div>
            //     <div className="backdrop-blur-md bg-white/20 border-white/30 shadow-lg rounded-2xl p-8 items-center text-2xl">Tools<span className="text-sm bg-gray-600 py-0.5 px-1 rounded-full ml-3">9</span>
            //         <div className="text-base"> Git, Vercel, AWS, Docker, Markdowns, CI/CD, Github Copilot, Claude, V0</div>
            //     </div>
            // </div>
        );
    } else if (idx == 1) {
        return (
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className={`border-l-4 pl-6 py-4 m-5 ${isLight ? "border-gray-800" : "border-gray-300"}`}>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            onMouseEnter={() => setShowPopup(true)}
                            onMouseLeave={() => setShowPopup(false)}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                setMousePos({
                                    x: e.clientX - rect.left,
                                    y: e.clientY - rect.top
                                });
                            }}
                            className="cursor-pointer"
                        >
                            <div className={`space-y-2 p-4 rounded-lg shadow-lg ${isLight ? "bg-[#FFD6C4]" : "bg-[#1C2632]"}`}>
                                <div className="flex justify-between items-center">
                                    <p className={`text-sm pt-1 ${isLight ? "text-gray-800" : "text-gray-500"}`}>Feb-June (2025)</p>
                                    <p className={`text-lg font-bold flex gap-2 items-center underline underline-offset-2 decoration-wavy decoration-darkBlue decoration-1 ${isLight ? "text-red-500" : "text-red-500"}`}>Hover Me
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 320"
                                            width="1em"
                                            height="1em"
                                        >
                                            <path
                                                fill={`${isLight ? "black" : "white"}`}
                                                d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136l-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141"
                                            ></path>
                                        </svg>
                                    </p>
                                </div>
                                <h3 className={`text-xl font-semibold ${isLight ? "text-black" : "text-white"}`}>Full-stack Developer Intern</h3>
                                <p className={`${isLight ? "text-gray-900" : "text-gray-500"}`}>VLSI For All</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                <AnimatePresence>
                    {showPopup &&
                        (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute z-50 w-80 overflow-hidden"
                                style={{
                                    left: `${mousePos.x + 30}px`,
                                    top: `${mousePos.y + 30}px`,
                                }}
                            >
                                <div
                                    className={`rounded-lg shadow-2xl border overflow-hidden ${isLight ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700"
                                        }`}
                                >
                                    {/* Image */}
                                    <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                        <img
                                            src="/placeholder.svg?height=192&width=320"
                                            alt="VLSI For All workspace"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 space-y-3">
                                        <h4 className={`text-lg font-semibold ${isLight ? "text-gray-900" : "text-white"}`}>
                                            VLSI For All
                                        </h4>

                                        <div className="space-y-2 text-sm">
                                            <p className={`${isLight ? "text-gray-700" : "text-gray-300"}`}>
                                                <strong>Role:</strong> Full-stack Developer Intern
                                            </p>
                                            <p className={`${isLight ? "text-gray-700" : "text-gray-300"}`}>
                                                <strong>Duration:</strong> Feb 2025 - June 2025
                                            </p>
                                        </div>

                                        <p className={`text-sm leading-relaxed ${isLight ? "text-gray-600" : "text-gray-400"}`}>
                                            <ul>
                                                <li>- Re-built the website with new modular features and animations.</li>
                                                <li>- Made new backends from scratch and rewrote old ones.</li>
                                            </ul>
                                            {/* Developing web applications for VLSI education platform. Working with React, Node.js, and database
                                            technologies to create interactive learning experiences for students and professionals in the
                                            semiconductor industry. */}
                                        </p>

                                        <div className="flex flex-wrap gap-1 pt-2">
                                            {["React", "Next.js", "JavsScript", "Node.js", "MongoDB", "Express", "Framer-motion"].map((tech) => (
                                                <span
                                                    key={tech}
                                                    className={`px-2 py-1 text-xs rounded-full ${isLight ? "bg-blue-100 text-blue-800" : "bg-blue-900 text-blue-200"
                                                        }`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                </AnimatePresence>
            </div >
        );
    } else if (idx == 2) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className={`border-l-4 pl-6 py-4 m-5 ${isLight ? "border-gray-800" : "border-gray-300"}`}>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className={`space-y-2 p-4 rounded-lg shadow-lg ${isLight ? "bg-[#FFD6C4]" : "bg-[#1C2632]"}`}>
                            <p className={`text-sm ${isLight ? "text-gray-800" : "text-gray-500"}`}>2023-2027</p>
                            <h3 className={`text-xl font-semibold ${isLight ? "text-black" : "text-white"}`}>Delhi Technological University (DTU/DCE)</h3>
                            <p className={`${isLight ? "text-gray-900" : "text-gray-500"}`}>Bachelor of Technology</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        );
    } else if (idx == 3) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <Card className={`m-5 ${isLight ? "bg-[#FFD6C4]" : "bg-[#1C2632] border-slate-800 "}`}>
                    <CardContent className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Clean Code */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Code className={`w-6 h-6 ${isLight ? "text-black" : "text-white"}`} />
                                    <h3 className={`text-xl font-semibold ${isLight ? "text-black" : "text-white"}`}>Clean Code</h3>
                                </div>
                                <p className={`text-base ${isLight ? "text-black" : "text-white"}`}>Writing maintainable, readable code</p>
                            </div>

                            {/* User-Centered */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Heart className={`w-6 h-6 ${isLight ? "text-black" : "text-white"}`} />
                                    <h3 className={`text-xl font-semibold ${isLight ? "text-black" : "text-white"}`}>User-Centered</h3>
                                </div>
                                <p className={`text-base ${isLight ? "text-black" : "text-white"}`}>Interfaces that prioritize user needs</p>
                            </div>

                            {/* Learning */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <BookOpen className={`w-6 h-6 ${isLight ? "text-black" : "text-white"}`} />
                                    <h3 className={`text-xl font-semibold ${isLight ? "text-black" : "text-white"}`}>Learning</h3>
                                </div>
                                <p className={`text-base ${isLight ? "text-black" : "text-white"}`}>Always exploring new technologies</p>
                            </div>

                            {/* Detail Focus */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <MousePointer className={`w-6 h-6 ${isLight ? "text-black" : "text-white"}`} />
                                    <h3 className={`text-xl font-semibold ${isLight ? "text-black" : "text-white"}`}>Detail Focus</h3>
                                </div>
                                <p className={`text-base ${isLight ? "text-black" : "text-white"}`}>Ensuring every pixel is perfect</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        )
    } else if (idx == 4) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className={`p-6 rounded-lg m-5 shadow-lg ${isLight ? "bg-[#FFD6C4]" : "bg-[#1C2632]"}`}>
                    <h2 className={`text-xl ${isLight ? "text-black" : "text-white"}`}>My Coding Philosophy</h2>
                    <p className="my-3">I believe that code is a great equalizer, we can build and match anything with right knowledge.</p>
                </div>
            </motion.div>
        );
    }
}

export default AboutMeContent;