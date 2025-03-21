import { BsFillSendFill } from "react-icons/bs";
import Pyramid from "../../ui/Pyramid";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <div className="section__wrapper">
                <div className="pyramid__container"><Pyramid /></div>

                <div className="contact__group">
                    <div>
                        <h3 className="title">
                            Let’s Build{" "}
                            <span className="shine">Something Amazing</span>{" "}
                            Together!
                        </h3>
                    </div>
                <form action="">
                    <input type="text" placeholder="Name" name="name" required />
                    <input type="email" placeholder="Email" name="email" required />
                    <textarea
                        name="message"
                        rows={7}
                        placeholder="Your message"
                    ></textarea>
                    <button type="button" className="btn flex__center submit__btn">
                        <div className="icon">
                            <BsFillSendFill />
                        </div>
                        <span>Send Now</span>
                    </button>
                </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
