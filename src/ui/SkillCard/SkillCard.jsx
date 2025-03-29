import "./SkillCard.css";

const SkillCard = ({ title, data }) => {
    return (
        <div className="card skill__card">
            <h3 className="title">
                <span className="g-text">{title}</span>
            </h3>
            <div className="skill__content">
                {data.map((skill, index) => (
                    <article key={index} className="flex skill__details">
                        <div className="skill__logo">
                            <img src={skill.logo} alt={skill.skill} />
                        </div>
                        <div>
                            <h4 className="skill__name">{skill.skill}</h4>
                            {/* <small className="text__muted skill__level">
                                {skill.level}
                            </small> */}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
