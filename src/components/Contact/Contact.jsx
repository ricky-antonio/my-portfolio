import { BsFillSendFill } from "react-icons/bs";
import Pyramid from "../../ui/Pyramid";
import "./Contact.css";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const Contact = () => {
    const [emailSent, setEmailSent] = useState(false);

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmailSent(true)

        // Check honeypot field
        const formData = new FormData(formRef.current);
        const honeypotValue = formData.get("honeypot");
        if (honeypotValue) {
            console.log("Spam detected. Submission rejected.");
            return; // Exit and do not send the email
        }

        // send email
        emailjs
            .sendForm(
                EMAILJS_SERVICE_ID, // Service ID
                EMAILJS_TEMPLATE_ID, // Template ID
                formRef.current,
                EMAILJS_USER_ID // User ID
            )
            .then((result) => {
                console.log("Email sent successfully!", result.text);
            })
            .catch((error) => {
                console.error("Error sending email:", error.text);
            });
    };

    return (
        <section id="contact">
            <div className="section__wrapper">
                <div className="pyramid__container">
                    <Pyramid />
                </div>

                <div className="contact__group">
                    <div className="cta">
                        <h3 className="title">
                            Let’s Build{" "}
                            <span className="shine">Something Amazing</span>{" "}
                            Together!
                        </h3>
                    </div>
                    <div className="form__container">
                        {!emailSent && (
                            <form
                                action="submit"
                                ref={formRef}
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    required
                                />
                                <textarea
                                    name="message"
                                    rows={7}
                                    placeholder="Your message"
                                    required
                                ></textarea>
                                {/* Honeypot field */}
                                <input
                                    type="text"
                                    name="honeypot"
                                    style={{ display: "none" }}
                                    autoComplete="off"
                                />
                                <button
                                    type="submit"
                                    className="btn flex__center submit__btn"
                                >
                                    <div className="icon">
                                        <BsFillSendFill />
                                    </div>
                                    <span>Send Now</span>
                                </button>
                            </form>
                        )}
                        {emailSent && (
                            <h3
                                className={`title ${
                                    emailSent && "email__sent"
                                }`}
                            >
                                Thank you for reaching out,
                                <br />
                                I'll be in touch soon!
                            </h3>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
