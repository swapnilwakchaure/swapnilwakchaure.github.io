import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
            <h3 className="logo">SWAPNIL</h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={() => setIsMobile(false)}
            >
                <a href="/#home" className="home">
                    <li>HOME</li>
                </a>
                <a href="/#about" className="about">
                    <li>ABOUT</li>
                </a>
                <a href="/#skills" className="skills">
                    <li>SKILLS</li>
                </a>
                <a href="/#projects" className="projects">
                    <li>PROJECTS</li>
                </a>
                <a href="/#contact" className="contact">
                    <li>CONTACT</li>
                </a>
                <a
                    href={"Swapnil-Wakchaure-Resume.pdf"}
                    onClick={() => window.open("Swapnil-Wakchaure-Resume.pdf")}
                    download={"Swapnil-Wakchaure-Resume.pdf"}
                    target="_blank"
                    className="resume"
                >
                    <li><BiDownload /> RESUME</li>
                </a>
            </ul>
            <button className="mobile-menu-icon"
                onClick={() => setIsMobile((prev) => !prev)}
            >
                {isMobile ? (
                    <FaTimes />
                ) : (
                    <GiHamburgerMenu />
                )
                }
            </button>
        </nav>
    )
}

export default Navbar;