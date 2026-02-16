import { useEffect, useState } from "react";
import useIsMobile from "../hooks/isMobile";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isMobile = useIsMobile();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const threshold = 10;

    const controlNavBar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) setIsVisible(true);
      else if (currentScrollY > lastScrollY + threshold) setIsVisible(false);
      else if (currentScrollY < lastScrollY - threshold) setIsVisible(true);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavBar);

    return () => window.removeEventListener("scroll", controlNavBar);
  }, []);

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Lessons", href: "Lessons" },
    { label: "Spots", href: "Spots" },
    { label: "Book Now", href: "contact" },
  ];

  return (
    <header className={`header ${isVisible ? "show" : "hidden"}`}>
      <nav className="navbar">
        <div className="nav-logo">
          <a href="/">
            <span className="logo-text">Aloha Surf</span>
          </a>
        </div>
        {!isMobile && (
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={`#${link.href}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        )}
        {isMobile && (
          <button
            className="burger-icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img
              src={
                isMobileMenuOpen
                  ? "/icons/close-icon.svg"
                  : "/icons/burger-menu.svg"
              }
              height={25}
              width={25}
              alt="burger icon"
            />
          </button>
        )}
      </nav>
      {isMobile && (
        <div
          className={
            isMobileMenuOpen ? "mobile-menu open" : "mobile-menu close"
          }
        >
          <ul className="mobile-nav-links ">
            {navLinks.map((link) => (
              <li
                key={link.label}
                //    onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href={`#${link.href}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
