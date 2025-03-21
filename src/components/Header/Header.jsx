import "./Header.css";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock/CodeBlock";
import Facts from "../../ui/Facts/Facts";
import SocialHandles from "../../ui/SocialHandles/SocialHandles";
import BreathCircle from "../../ui/BreathCircle"

const code = 
`const developer = {
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
`

const Header = () => {
    return (
        <header id="header">
            <BreathCircle />
            <div className="section__wrapper">

                <div className="grid upper">
                    <div className="column">
                        <div className="title__heading">
                        Front-End Software Engineer Specializing in&nbsp;<span>React</span>
                        </div>
                    </div>

                    <div className="column">
                        <img src={profile1} className="profile__photo" alt="profile photo" />
                    </div>
                </div>

                <div className="card grid lower">
                    <CodeBlock language={"javascript"} code={code} />

                    <div>
                        <p className="text__muted description">
                        Crafting seamless, intuitive, and visually stunning web experiences through modern technologies, user-centric design, and innovation.
                        </p>
                        <Facts />
                        <SocialHandles />
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
