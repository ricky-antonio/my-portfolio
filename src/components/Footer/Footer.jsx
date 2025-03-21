import { Link } from "react-scroll";
import { menu } from "../../data";
import "./Footer.css";
import SocialHandles from "../../ui/SocialHandles/SocialHandles";

const Footer = () => {
    return (
        <footer>
            <div className="section__wrapper">
                <ul className="flex__center nav">
                    {menu.map((item, index) => (
                        <Link
                            key={index}
                            to={item.name.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className="nav__item"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
                <SocialHandles />
                <div className="copyright">
                    <h3>&copy; 2025 Ricardo Monterrosa. All rights reserved.</h3>
                </div>
                <div className="base__logo">
                    <h1 className="full__name shine">Ricardo Monterrosa</h1>
                </div>
    
            </div>
        </footer>
    );
};

export default Footer;
