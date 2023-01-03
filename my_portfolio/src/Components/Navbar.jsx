import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div>SWAPNIL</div>
            <div>
                <ul id="navbar-components">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/">
                        <li>About</li>
                    </Link>
                    <Link to="/">
                        <li>Skills</li>
                    </Link>
                    <Link to="/">
                        <li>Project</li>
                    </Link>
                    <Link to="/">
                        <li>Contact</li>
                    </Link>
                    <Link to="/">
                        <li>Resume</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;