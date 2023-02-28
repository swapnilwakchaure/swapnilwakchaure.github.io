import { skillData } from "../utils/portData";
import "./Skills.css";

const Skills = () => {
    return (
        <div className="skill-section" id="skills">
            <h1>Skills</h1>
            <div className="skill-section-data">
                {skillData.map((item, index) => (
                    <div key={index}>
                        <img src={item.src} alt={item.alt} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;