import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";



const App = () => {
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
