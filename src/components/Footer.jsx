import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Footer = () => {
    const socialLinks = [
        { iconName: 'fab fa-facebook', siteLink: '#' },
        { iconName: 'fab fa-twitter', siteLink: '#' },
        { iconName: 'fab fa-instagram', siteLink: '#' },
        { iconName: 'fab fa-linkedin', siteLink: '#' },
    ];

    return (
        <footer
            className="footer"
            style={{
                backgroundColor: "#1a1a1a",
                color: "#fff",
                padding: "20px 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                className="footer-content"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <h2 style={{ marginTop: "3rem", fontSize: "24px", marginBottom: "10px" }} className='text-white mb-4'>Stay Connected</h2>
                <ul className="social-icons" style={{ display: "flex", gap: "15px", listStyle: "none", padding: 0 }}>
                    {socialLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.siteLink}
                                className="social-link"
                                style={{
                                    display: "inline-block",
                                    width: "40px",
                                    height: "40px",
                                    lineHeight: "40px",
                                    borderRadius: "50%",
                                    backgroundColor: "#333",
                                    color: "#fff",
                                    textAlign: "center",
                                    fontSize: "18px",
                                    transition: "0.3s",
                                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
                                }}
                            >
                                <i className={link.iconName}></i>
                            </a>
                        </li>
                    ))}
                </ul>
                <p style={{ marginTop: "20px", fontSize: "14px" }}>
                    &copy; {new Date().getFullYear()} Waverblog. Designed by{' '}
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#f39c12", textDecoration: "none" }}
                    >
                        Mncconcepts
                    </a>
                </p>
            </div>
            <div
                className="glow-effect"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 70%)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            ></div>
        </footer>
    );
};

export default Footer;
