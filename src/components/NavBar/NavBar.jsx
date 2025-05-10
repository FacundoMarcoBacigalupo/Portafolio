import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./navBar.css";

const NavBar = () => {
    const [t] = useTranslation(["global"]);
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const knowsSection = document.getElementById("knows");
            const proyectsSection = document.getElementById("proyects");
            const contactSection = document.getElementById("contact");
            const scrollPosition = window.scrollY;
            
            if (scrollPosition < knowsSection.offsetTop) {
                setActiveSection("home");
            }
            else if (scrollPosition >= knowsSection.offsetTop && scrollPosition < proyectsSection.offsetTop) {
                setActiveSection("knows");
            }
            else if (scrollPosition >= proyectsSection.offsetTop && scrollPosition < contactSection.offsetTop) {
                setActiveSection("proyects");
            }
            else {
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
            setIsMenuOpen(false);
        }
    };

    return (
        <div className='containerNav'>
            <button className="menuButton" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                &#9776;
            </button>
            <nav className={isMenuOpen ? "open" : ""}>
                <span id='n1' className={activeSection === "home" ? "active" : ""} onClick={() => scrollToSection("home")}>{t("navbar.span-home")}</span>
                <span id='n2' className={activeSection === "knows" ? "active" : ""} onClick={() => scrollToSection("knows")}>{t("navbar.span-knows")}</span>
                <span id='n3' className={activeSection === "proyects" ? "active" : ""} onClick={() => scrollToSection("proyects")}>{t("navbar.span-proyects")}</span>
                <span id='n4' className={activeSection === "contact" ? "active" : ""} onClick={() => scrollToSection("contact")}>{t("navbar.span-contact")}</span>
            </nav>
        </div>
    );
};

export default NavBar;