import React from 'react';


const conSubTitle = "Contact Us";
const conTitle =
    "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send Us Messages";


const Contact = () => {
    const contactDetails = [
        {
            icon: 'fa-map-marker-alt',
            title: 'Office Address',
            desc: '1201 Park Street, Fifth Avenue',
        },
        {
            icon: 'fa-phone-alt',
            title: 'Phone Number',
            desc: '+22698 745 632, 02 982 745',
        },
        {
            icon: 'fa-envelope',
            title: 'Email Address',
            desc: 'admin@waverblog.com',
        },
        {
            icon: 'fa-globe',
            title: 'Website',
            desc: 'www.waverblog.com',
        },
    ];

    return (
        <div>
            <header className="about-header">
                <div className="header-content">
                    <h1 className="animate__animated animate__fadeIn">Our contact Page</h1>
                    <h1 className="animate__animated animate__fadeIn text-white mt-5">CONTACT PAGE</h1>
                </div>
            </header>
            <div className="contact-page">
                {/* Contact Header */}
                <div className="contact-header text-center">
                    <h2>Contact Us</h2>
                    <p>We'd love to hear from you! Feel free to reach out via the form or details below.</p>
                </div>

                {/* Contact Details */}
                <div className="contact-details">
                    <div className="container">
                        <div className="row">
                            {contactDetails.map((item, index) => (
                                <div key={index} className="col-md-6 col-lg-3">
                                    <div data-aos='fade-right' className="contact-card">
                                        <i className={`fas ${item.icon}`}></i>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="contact-section padding-tb">
                    <div className="container">
                        <div data-aos='fade-down' className="section-header text-center">
                            <span className="subtitle">{conSubTitle}</span>
                            <h3 className="title">{conTitle}</h3>
                        </div>
                        <div className="section-wrapper">
                            <form className="contact-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        name="number"
                                        id="number"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div className="form-group w-100">
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Your Message"
                                        rows="6"
                                    />
                                </div>
                                <div className="form-group w-100 text-center">
                                    <button type="submit" className="lab-btn">
                                        <span>{btnText}</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
