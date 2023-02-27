import "./Home.css";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { RxCodesandboxLogo } from "react-icons/rx";

const Home = () => {
    return (
        <div className="home-section-main">
            <div className="home-section-container">
                <div className="home-intro-section">
                    <div className="home-job-position">
                        I'm A Full Stack Web Developer
                    </div>
                    <div className="home-social-media-icons">
                        <a href="https://github.com/swapnilwakchaure" target="_blank">
                            <BsGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/swapnil-wakchaure-675071202/" target="_blank">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://codesandbox.io/u/swapnilwakchaure2411999" target="_blank">
                            <RxCodesandboxLogo />
                        </a>
                    </div>
                    <div className="home-resume-button">
                        <a href="/resume.pdf" target="_blank">
                            <button>Resume</button>
                        </a>
                    </div>
                </div>
                <div className="home-section-cover-image">
                    <img
                        src="https://i0.wp.com/kartaca.com/wp-content/uploads/2018/11/1_sDNKM7JL7j10i3Ed_jFrKQ.png?w=800&ssl=1"
                        alt="cover-photo"
                    />
                </div>
            </div>
        </div>
    )
}


export default Home;