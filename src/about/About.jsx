import React, { useEffect, useState } from "react";

const AboutUs = () => {
    const [yearsExperience, setYearsExperience] = useState(0);
    const [successfulJobs, setSuccessfulJobs] = useState(0);

    useEffect(() => {
        // Animate numbers for experience and jobs
        const experienceInterval = setInterval(() => {
            setYearsExperience((prev) => (prev < 2 ? prev + 1 : 10));
        }, 500);

        const jobsInterval = setInterval(() => {
            setSuccessfulJobs((prev) => (prev < 150 ? prev + 10 : 500));
        }, 100);

        return () => {
            clearInterval(experienceInterval);
            clearInterval(jobsInterval);
        };
    }, []);

    const cards = [
        {
            title: "Authentic Content",
            description: "We deliver well-researched and genuine articles tailored to our audience.",
            icon: "fas fa-pencil-alt",
        },
        {
            title: "Community Driven",
            description: "Building connections with bloggers and readers worldwide.",
            icon: "fas fa-users",
        },
        {
            title: "Inspiring Creativity",
            description: "Our goal is to spark ideas and foster meaningful conversations.",
            icon: "fas fa-lightbulb",
        },
    ];

    return (
        <div>
            <header className="about-header">
                <div className="header-content">
                    <h1 className="animate__animated animate__fadeIn">About Page</h1>
                    <h1 className="animate__animated animate__fadeIn text-white mt-5">ABOUT US</h1>
                </div>
            </header>
            <div className="about-us-container">
                {/* About Section */}
                <div className="about-section">
                    <div data-aos='zoom-in' className="about-image mt-5 ">
                        <img
                            src="src/assets/images/blog/20.jpg"
                            alt="About Us"
                            className="responsive-image"
                        />
                    </div>
                    <div className="about-content">
                        <h1 className="animate-text mt-5">Welcome to Our Blog!</h1>
                        <p>
                            We’re a creative and passionate team, dedicated to sharing compelling stories,
                            unique perspectives, and valuable insights. With a commitment to authenticity,
                            our blog serves as a platform to inspire and connect.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <h2>{yearsExperience}+</h2>
                                <p>Years of Experience</p>
                            </div>
                            <div className="stat-item">
                                <h2>{successfulJobs}+</h2>
                                <p>Successful Projects</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="cards-section">
                    <p className="text-primary mt-5">WHY CHOOSE US</p>
                    <h2 className="cards-title">What Makes Us Unique</h2>
                    <div className="cards-container mb-5">
                        {cards.map((card, index) => (
                            <div data-aos='fade-right' className="card" key={index}>
                                <div className="card-icon">
                                    <i className={card.icon}></i>
                                </div>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
