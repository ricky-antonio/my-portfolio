import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";



const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <About /> 
            <Skills />
            <Projects />
            <Contact />
            <Footer />

        </>
    );
};

export default App;
