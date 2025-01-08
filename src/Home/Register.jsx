import React from 'react'
import { Link } from 'react-router-dom';
const title = (
    <h1 className='title mt-5 padding-t'>Featured</h1>
)
const subTitle = "Breaking Into Web Design And Development";

const desc = "Limited Time Offer! Hurry now";
const Register = () => {
    return (
        <section className='register-section style-4 pt-5 pb-5 pading-tb pb-0'>
            <div className="container">
                <div className="row g-3 row-cols-1">
                    <div className="col">
                        <div data-aos='fade-right' className="section-header">
                            {title}
                            <h3 className='pt-1 text-white align-item-center'>{subTitle} <br />Get Every Update You Need On Our Blog</h3>
                            <p className='text-white pt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem rem natus sed, 
                                itaque alias minima in delectus repudiandae quaerat laborum, fugit eius tempore sapiente rerum? Alias odit 
                                reprehenderit tempore, quae praesentium ipsa distinctio commodi! Repudiandae dolorem enim ipsam quia eligendi.reprehenderit tempore, quae praesentium ipsa distinctio commodi! Repudiandae dolorem enim ipsam</p>
                            <Link to="/blog" className='lab-btn'><span className='text-white'>Join Us</span></Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Register;