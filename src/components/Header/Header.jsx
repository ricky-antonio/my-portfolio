import "./Header.css";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock/CodeBlock";
import Facts from "../../ui/Facts/Facts";
import SocialHandles from "../../ui/SocialHandles/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";

const code = `const developer = {
    firstName: "Ricardo",
    lastName: "Monterrosa",
    hobby: () => {
        console.log("eat...");
        console.log("code...");
        console.log("jiu jitsu..");
        console.log("sleep...");
        console.log("repeat...");
        }
    }
`;

const Header = () => {
    return (
        <header id="header">
            <BreathCircle />
            <div className="section__wrapper">
                <div className="grid upper">
                    <div className="column">
                        <div className="title__heading">
                            Front-End Software Engineer Specializing in&nbsp;
                            <span>React</span>
                        </div>
                    </div>

                    <div className="column">
                        <img
                            src={profile1}
                            className="profile__photo"
                            alt="profile photo"
                        />
                    </div>
                </div>

                <div id="about" className="card grid lower">
                    <CodeBlock language={"javascript"} code={code} />

                    <div className="about-me">
                        <h2 className="title">
                            Hi I'm {" "}
                            <span className="color__primary">
                                Ricardo!
                            </span>
                        </h2>
                        <p className="text__muted description">
                            A skilled front-end React developer with a
                            passion for crafting sleek, engaging, and
                            user-focused web experiences. Combining creativity
                            and technical expertise, I thrive on building
                            intuitive interfaces that deliver seamless
                            functionality and modern aesthetics.
                        </p>
                        {/* <Facts /> */}
                        <SocialHandles />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
