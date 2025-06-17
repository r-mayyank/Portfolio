import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "../../ui/resizable-navbar";
import { useState } from "react";
import DisplayDateTime from "./DateTime";
import ForkGithub from "./ForkGithub";
import DownloadResume from "./DownloadResume";
import ThemeSwitch from "./ThemeSwitch";
import "../MyDetails/profileborder.css";

export function Navbar2({ splashStatus, toggleTheme, isLight }) {
    const navItems = [
        {
            name: "Features",
            link: "#features",
        },
        {
            name: "Pricing",
            link: "#pricing",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <div className={`${splashStatus ? "hidden" : "fixed fadeInOnly"
                } lg:top-0 md:top-0 left-0 w-full p-4 z-50 `}>
                <Navbar classname="hidden lg:visible">
                    {/* Desktop Navigation */}
                    <NavBody isLight={isLight} >
                        <DisplayDateTime isLight={isLight} />
                        <NavItems isLight={isLight} items={navItems} />
                        <div className="relative flex items-center z-55">
                            <ul className="flex items-center gap-4">
                                <li
                                    title={`${isLight ? "Switch To Dark Theme" : "Switch to Light Theme"
                                        }`}
                                    className="flex justify-center md:w-18"
                                >
                                    <ThemeSwitch toggleTheme={toggleTheme} isLight={isLight} />
                                </li>
                                <li
                                    title="Download Resume PDF"
                                    className="flex flex-col justify-center"
                                >
                                    <DownloadResume isLight={isLight} />
                                </li>
                            </ul>
                        </div>
                    </NavBody>

                    {/* Mobile Navigation */}
                    <MobileNav isLight={isLight}>
                        <MobileNavHeader isLight={isLight}>
                            <DisplayDateTime isLight={isLight} />
                            <MobileNavToggle
                                isLight={isLight}
                                isOpen={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            />
                        </MobileNavHeader>

                        <MobileNavMenu
                            isLight={isLight}
                            isOpen={isMobileMenuOpen}
                            onClose={() => setIsMobileMenuOpen(false)}
                        >
                            {navItems.map((item, idx) => (
                                <a
                                    key={`mobile-link-${idx}`}
                                    href={item.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={isLight ? "relative text-neutral-600" : "relative text-neutral-300"}
                                >
                                    <span className="block">{item.name}</span>
                                </a>
                            ))}
                            <div className="flex w-full flex-col gap-4">
                                <li
                                    title="Download Resume PDF"
                                    className="flex justify-center"
                                >
                                    <DownloadResume isLight={isLight} />
                                </li>
                                <li
                                    title={`${isLight ? "Switch To Dark Theme" : "Switch to Light Theme"
                                        }`}
                                    className="flex justify-center md:w-18"
                                >
                                    <ThemeSwitch toggleTheme={toggleTheme} isLight={isLight} />
                                </li>
                                {/* <NavbarButton
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    variant="primary"
                                    className="w-full"
                                >
                                    Login
                                </NavbarButton>
                                <NavbarButton
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    variant="primary"
                                    className="w-full"
                                >
                                    Book a call
                                </NavbarButton> */}
                            </div>
                        </MobileNavMenu>
                    </MobileNav>
                </Navbar>

                {/* Navbar */}
            </div>
        </div>
    );
}