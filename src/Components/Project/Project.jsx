import "./Project.css";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import Modesense from "../../Images/modesens.png";
import Travelocity from "../../Images/travelocity.png";
import Pepperfry from "../../Images/pepperfry.png";
import Nykaa from "../../Images/nykaa.png";

const Project = () => {
    return (
        <div className="project-section-main" id="projects">
            <h1>Project</h1>
            <div className="project-section-container">
                <div className="project-section-single-project">
                    <img src={Modesense} alt="project-image" />
                    <p className="single-project-name">Modesense-Clone</p>
                    <p className="single-project-description">
                        ModeSens is your digital shopping assistant for the smart and informed.
                        This is an actual Clothing web-application which sales Cloths of women and men Online in USA.
                    </p>
                    <div className="single-project-tech-stack">
                        <div>
                            <img src="https://img.icons8.com/color/96/html-5--v1.png" alt="html-image" />
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/96/css3.png" alt="css-image" />
                            <p>CSS</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/fluency/96/javascript.png" alt="javascript-image" />
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className="single-project-buttons">
                        <a href="https://github.com/sadhakvishu/Slytherin" target="_blank">
                            <button><FaGithub />CODE</button>
                        </a>
                        <a href="https://sadhakvishu.github.io/Slytherin/" target="_blank">
                            <button><SiNetlify />LIVE</button>
                        </a>
                    </div>
                </div>
                <div className="project-section-single-project">
                    <img src={Travelocity} alt="project-image" />
                    <p className="single-project-name">Travelocity-Clone</p>
                    <p className="single-project-description">
                    This is the clone of the Travelocity website. Travelocity is an online travel agency.
                        From this website, users can book a hotel room, flights, cars, etc. across the world.
                    </p>
                    <div className="single-project-tech-stack">
                        <div>
                            <img src="https://img.icons8.com/color/96/html-5--v1.png" alt="html-image" />
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/96/css3.png" alt="css-image" />
                            <p>CSS</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/fluency/96/javascript.png" alt="javascript-image" />
                            <p>JS</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/96/react-native.png" alt="react-image" />
                            <p>React</p>
                        </div>
                    </div>
                    <div className="single-project-buttons">
                        <a href="https://github.com/swapnilwakchaure/paltrysteam6285" target="_blank">
                            <button><FaGithub />CODE</button>
                        </a>
                        <a href="https://travelocity-website.netlify.app/" target="_blank">
                            <button><SiNetlify />LIVE</button>
                        </a>
                    </div>
                </div>
                <div className="project-section-single-project">
                    <img src={Pepperfry} alt="project-image" />
                    <p className="single-project-name">Pepperfry-Clone</p>
                    <p className="single-project-description">
                       Pepperfry is an online furniture shopping website which showcases a 
                       curated range of home furniture & cutting-edge furniture designs.
                    </p>
                    <div className="single-project-tech-stack">
                        <div>
                            <img src="https://img.icons8.com/color/96/html-5--v1.png" alt="html-image" />
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/96/css3.png" alt="css-image" />
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/fluency/96/javascript.png" alt="javascript-image" />
                            <p>JS</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/96/react-native.png" alt="react-image" />
                            <p>React</p>
                        </div>
                    </div>
                    <div className="single-project-buttons">
                        <a href="https://github.com/Prashant1562/glossy-harmony-5967" target="_blank">
                            <button><FaGithub />CODE</button>
                        </a>
                        <a href="https://pepperfry-clone-com.netlify.app/" target="_blank">
                            <button><SiNetlify />LIVE</button>
                        </a>
                    </div>
                </div>
                <div className="project-section-single-project">
                    <img src={Nykaa} alt="project-image" />
                    <p className="single-project-name">Nykaa-Clone</p>
                    <p className="single-project-description">
                      It is clone of Nykaa which is an Indian e-commerce website which deals in cosmetics 
                      & beauty products online.It is a beauty retail company that sells cosmetic commodities 
                      and fashion products, including men's innerwear, both online and offline.
                    </p>
                    <div className="single-project-tech-stack">
                        <div>
                            <img src="https://img.icons8.com/color/96/html-5--v1.png" alt="html-image" />
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/96/css3.png" alt="css-image" />
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/fluency/96/javascript.png" alt="javascript-image" />
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className="single-project-buttons">
                        <a href="https://github.com/jigna16/Nykaa" target="_blank">
                            <button><FaGithub />CODE</button>
                        </a>
                        <a href="https://fascinating-squirrel-ee2e99.netlify.app/" target="_blank">
                            <button><SiNetlify />LIVE</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
