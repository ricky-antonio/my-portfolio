import { FaArrowRight } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ title, category, image, description, stacks,demoLink, githubLink }) => {
    return (
        <div className="card project__card">
            <div className="project__card-container">
            <div className="project__card-top">
                <a href={demoLink} target="_blank">
                <div className="picture">
                    <img src={image} alt={title} />
                </div>
                </a>
            </div>

            <div className="project__card-bottom">
                <div className="flex project__info">
                    <div className="img">
                        <img src={image} alt={title} />
                    </div>
                    <div>
                        <h3 className="title">{title}</h3>
                        <p className="text__muted category">{category}</p>
                    </div>
                </div>

                <p className="text__muted description">{description}</p>
                <div className="flex__center stacks">
                    {stacks.map((stack, index) => (
                        <div className="stack" key={index}>
                            <img src={stack.logo} alt={stack.name} />
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <div className="links">
                <a href={githubLink} target="_blank">
                    GitHub Repo <span>&rarr;</span>
                </a>
                <a href={demoLink} target="_blank">
                    View Project <span>&rarr;</span>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
