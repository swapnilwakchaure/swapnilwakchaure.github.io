import "./Project.css";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import Travelocity from "../../Images/travelocity.png";
import Nykaa from "../../Images/nykaa.png";
import OLX from "../../Images/olx.png";

const Project = () => {
    return (
        <div className="project-section-main" id="projects">
            <h1>Project</h1>
            <div className="project-section-container">
                <div className="project-section-single-project">
                    <img src="https://user-images.githubusercontent.com/57268357/221432161-29a0ef3a-097f-416c-b51a-41f6ad053e87.PNG" alt="project-image" />
                    <p className="single-project-name">Anthropologie-Clone</p>
                    <p className="single-project-description">
                        Anthropologie is built with the reference website "anthropologie.com". It is an e-commerce website that sells clothing,
                        jewelry, home furniture, decorations, beauty products, and gifts.
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
                        <a href="https://github.com/jithstephen13/folklore" target="_blank">
                            <button><FaGithub />CODE</button>
                        </a>
                        <a href="https://folkl0re.netlify.app/" target="_blank">
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
                    <img src={OLX} alt="project-image" />
                    <p className="single-project-name">OLX-Clone</p>
                    <p className="single-project-description">
                        OLX India(clone) offers online local classified ads in India.
                        where users can post ads, and see the ads posted by other users,
                        then can connect with the sellers.
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
                        <a href="https://github.com/amanvyas1/olx-clone" target="_blank">
                            <button><FaGithub />CODE</button>
                        </a>
                        <a href="https://classy-starburst-3b7522.netlify.app/" target="_blank">
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
