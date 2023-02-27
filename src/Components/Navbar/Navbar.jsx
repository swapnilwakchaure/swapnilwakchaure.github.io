import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa";
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
                <Link to="/" className="home">
                    <li>HOME</li>
                </Link>
                <Link to="/" className="about">
                    <li>ABOUT</li>
                </Link>
                <Link to="/" className="skills">
                    <li>SKILLS</li>
                </Link>
                <Link to="/" className="projects">
                    <li>PROJECTS</li>
                </Link>
                <Link to="/" className="contact">
                    <li>CONTACT</li>
                </Link>
                <a
                    href="/resume.pdf"
                    download="Swapnil_Wakchaure_Resume"
                    target="_blank"
                    className="resume"
                >
                    <li>📥 RESUME</li>
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