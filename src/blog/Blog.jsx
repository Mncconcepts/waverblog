import React from 'react'

import bloglist from '../utilis/blogdata';
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <header className="about-header">
        <div className="header-content">
          <h1 className="animate__animated animate__fadeIn">Our Blog Page</h1>
          <h1 className="animate__animated animate__fadeIn text-white mt-5">OUR BLOG PAGE</h1>
        </div>
      </header>
      <div className='blog-section padding-tb section-bg'>
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
              {
                bloglist.map((blog, i) => (
                  <div key={i} className='col'>
                    <div data-aos='zoom-in' className='post-item'>
                      <div className='post-inner'>
                        <div className="post-thumb">
                          <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} alt="" /></Link>
                        </div>
                        <div className="post-content">
                          <Link to={`/blog/${blog.id}`}><h5>{blog.title}</h5></Link>
                          <div className="meta-post">
                            <ul className='lab-ul'>
                              {
                                blog.metaList.map((val, i) => (
                                  <li key={i}><i className={val.iconName}>{val.text}</i></li>
                                ))
                              }
                            </ul>
                          </div>
                          <small>{blog.desc}</small>
                        </div>
                        <div className="post-footer">
                          <div className="pf-left">
                            <Link to={`/blog/${blog.id}`} className='lab-btn-text'>{blog.btnText}
                              <i className='icofont-external-link'></i></Link>
                          </div>
                          <div className="pf-right">
                            <i className='icofont-comment'></i>
                            <span className='comment-count'>{blog.btnText}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog