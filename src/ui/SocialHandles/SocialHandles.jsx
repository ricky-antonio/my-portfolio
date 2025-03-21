import { socialHandles } from "../../data";
import "./SocialHandles.css";

const SocialHandles = () => {
    return (
        <div className="social__handles__container">
            {socialHandles.map((social) => (
                <a
                href={social.link}
                target="_blank"
                className="icon_container social__handle"
                key={social.name}
                >
                    <span className="flex__center tooltip">
                        {social.icon} {social.name}
                    </span>
                    {social.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialHandles;
