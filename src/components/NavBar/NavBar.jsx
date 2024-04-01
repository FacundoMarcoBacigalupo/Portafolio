import React, { useEffect, useState } from 'react'
import "./navBar.css"

const NavBar = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById("home");
            const knowsSection = document.getElementById("knows");
            const proyectsSection = document.getElementById("proyects");
            const contactSection = document.getElementById("contact");
            
            const scrollPosition = window.scrollY;

            if (scrollPosition < knowsSection.offsetTop) {
                setActiveSection("home");
            } else if (scrollPosition >= knowsSection.offsetTop && scrollPosition < proyectsSection.offsetTop) {
                setActiveSection("knows");
            } else if (scrollPosition >= proyectsSection.offsetTop && scrollPosition < contactSection.offsetTop) {
                setActiveSection("proyects");
            } else {
                setActiveSection("contact");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className='containerNav'>
            <nav>
                <span id='n1' className={activeSection === "home" ? "active" : ""} onClick={() => scrollToSection("home")}>Home</span>
                <span id='n2' className={activeSection === "knows" ? "active" : ""} onClick={() => scrollToSection("knows")}>Knows</span>
                <span id='n3' className={activeSection === "proyects" ? "active" : ""} onClick={() => scrollToSection("proyects")}>Proyects</span>
                <span id='n4' className={activeSection === "contact" ? "active" : ""} onClick={() => scrollToSection("contact")}>Contact</span>
            </nav>
        </div>
    )
}


export default NavBar