import "./Experience.css";
import Hole from "../../ui/Hole";
import { experience } from "../../data";

const Experience = () => {
    return (
        <section id="experience">
            <div className="card section__wrapper">
                <Hole />
                <h2 className="shine">Experience</h2>

                <div className="experience__group">
                    {experience.map((item, index) => (
                        <div className="experience__container" key={index}>
                            <div className="experience__details">
                                <h3>{item.title}</h3>
                                <p className="experience__employer">
                                    {item.employer}
                                </p>
                                <p className="experience__stats">
                                    {item.location} | {item.dates}
                                </p>
                            </div>

                            <ul className="highlight__container">
                                {item.highlights.map((highlight, index) => (
                                    <li key={index} className="highlight">{highlight}</li>
                                ))}
                            </ul>
                            <hr/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
