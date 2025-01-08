import React, { useState } from 'react';
import blogList from '../utilis/blogdata';
import { useParams, Link } from 'react-router-dom';


const SingleBlog = () => {
    const [blog] = useState(blogList);
    const { id } = useParams();
    const results = blog.filter((b) => b.id === Number(id));

    const popularTags = [
        "Trends",
        "Show",
        "Entertainment",
        "Politics",
        "Games",
        "Studies",
        "Market",
        "Community",
        "Highlights",
    ];

    return (
        <div>
            <header className="about-header">
                <div className="header-content">
                    <h1 className="animate__animated animate__fadeIn">Our Single Blog Page</h1>
                    <h1 className="animate__animated animate__fadeIn text-white mt-5">SINGLE BLOG PAGE</h1>
                </div>
            </header>

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Main Blog Content */}
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    {results.map((item) => (
                                        <div key={item.id} className="post-item style-2">
                                            <div className="post-inner">
                                                <div data-aos="zoom-in" className="post-thumb">
                                                    <img src={item.imgUrl} alt={item.title} className="w-100" />
                                                </div>
                                                <div className="post-content">
                                                    <h4>{item.title}</h4>
                                                    <div className="meta-post">
                                                        <ul className="lab-ul">
                                                            {item.metaList.map((val, i) => (
                                                                <li key={i}>
                                                                    <i className={val.iconName}></i> {val.text}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <span>{item.desc}</span>
                                                    <span>
                                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Integer posuere erat a ante sit amet, consectetur adipiscing elit.
                                                        Integer posuere erat a ante."
                                                    </span>
                                                    <cite>Allexa</cite>

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        </div>

                        {/* Sidebar Section */}
                        <div className="col-lg-4 col-12">
                            {/* Popular Tags Section */}
                            <div className="popular-tags mt-5">
                                <h3 className='ms-3'>Most Popular Tags</h3>
                                <div className="tags-list">
                                    {popularTags.map((tag, i) => (
                                        <Link
                                            key={i}
                                            to={`/blog ${tag.toLowerCase()}`}
                                            className="btn btn-outline-light text-black m-1"
                                        >
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                                <Link to="/blog" className="lab-btn mt-3 ms-3 text-white d-inline-block">
                                    See More
                                </Link>
                            </div>

                            {/* Newsletter Subscription */}
                            <div className="newsletter mt-5">
                                <h3 className='ms-3'>Subscribe To Our Newsletter</h3>
                                <form className="register-form ms-3 mt-3">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="form-control mb-3"
                                    />
                                    <button type="submit" className="lab-btn">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
