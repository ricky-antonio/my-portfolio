import "./Experience.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUI from "../../assets/CardUi";
import { experience } from "../../data";

const Experience = () => {
    return (
        <section id="experience">
            <div className="card section__wrapper">
                <Hole />
                <div className="column left-column">
                    <h3 className="skill__title">My Skills</h3>
                    <div className="skills__container">
                        {skills.map((skill, index) => (
                            <div className="flex skill__group" key={index}>
                                {skill.data.map((item, key) => (
                                    <div className="blur__overlay flex__center skill" key={key}>
                                        <div className="skill__logo">
                                            <img src={item.logo} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <CardUI
                        className="card__ui-item"
                        color={"var(--color-primary)"}
                    />
                </div>
                <div className="column right-column">
                    <h2 className="shine">about Me</h2>
                    <h2 className="title">
                        I am{" "}
                        <span className="color__primary">
                            Ricardo Monterrosa
                        </span>
                    </h2>
                    <p className="text__muted description">
                        I'm a skilled front-end React developer with a passion
                        for crafting sleek, engaging, and user-focused web
                        experiences. Combining creativity and technical
                        expertise, I thrive on building intuitive interfaces
                        that deliver seamless functionality and modern
                        aesthetics, always ensuring impactful and enjoyable
                        digital interactions for users everywhere.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;
