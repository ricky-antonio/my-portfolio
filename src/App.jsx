import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";



const App = () => {
    useEffect(() => {
        // Options for Intersection Observer
        const observerOptions = {
            root: null, // Observe the viewport
            rootMargin: "0px 0px -100px 0px", // Adjust for triggering earlier/later
            threshold: 0.1, // Trigger when 20% of the element is visible
        };
    
        // Initialize Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show'); // Add 'show' when element is in view
                } else {
                    entry.target.classList.remove('show'); // Optional: remove when out of view
                }
            });
        }, observerOptions);
    
        // Select and observe elements with the class '.fade-in'
        const elements = document.querySelectorAll('.fade-in');
        if (elements.length > 0) { // Ensure there are elements to observe
            elements.forEach((el) => observer.observe(el));
        }
    
        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar />
            <Header />
            <Skills />
            <Projects />
            <Experience /> 
            <Contact />
            <Footer />

        </>
    );
};

export default App;
