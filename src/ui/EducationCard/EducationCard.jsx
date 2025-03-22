import "./EducationCard.css";
import { education } from "../../data";

const EducationCard = () => {
    return (
        <div className="card education__card">
            <h3 className="title">
                <span className="g-text">Education</span>
            </h3>

            <div className="education__content">
                {education.map((item, index) => (
                    <article key={index} className="flex education__details">
                        <div className="education__logo">
                            <img src={item.logo} alt={item.school} />
                        </div>

                        <div className="education__text">
                            <h4 className="education__title">{item.title}</h4>
                            {item.degree && (
                                <p className="education__degree">
                                    {item.degree}
                                </p>
                            )}
                            <p className="text__muted">
                                {item.school}
                            </p>
                            <p className="text__muted">
                                {item.location}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default EducationCard;
