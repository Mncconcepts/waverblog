import React from 'react';
import { Link } from 'react-router-dom';

const subTitle = "BLOGS";
const title = "RECENT BLOGS";

const categoryList = [
  {
    imgUrl: '/assets/images/blog/19.jpg',
    imgAlt: 'blog image 1',
    date: 'December 10, 2024',
    caption: 'How to Style Your Wardrobe',
    link: '/blog/1',
  },
  {
    imgUrl: '/assets/images/blog/20.jpg',
    imgAlt: 'blog image 2',
    date: 'December 12, 2024',
    caption: 'Top 10 Fashion Trends for 2024',
    link: '/blog/2',
  },
  {
    imgUrl: '/assets/images/blog/21.jpg',
    imgAlt: 'blog image 3',
    date: 'December 14, 2024',
    caption: 'Sustainable Fashion: A Guide',
    link: '/blog/3',
  },
];

const BlogSection = () => {
  return (
    <div className='blog-section padding-tb'>
      <div className='container'>
        {/* Section Header */}
        <div className='section-header text-center'>
          <span className='subtitle text-danger'>{subTitle}</span>
          <h3 className='title'>{title}</h3>
        </div>

        {/* Cards Section */}
        <div className='section-wrapper'>
          <div className='row g-4 justify-content-center row-cols-md-3 row-cols-1'>
            {categoryList.map((item, index) => (
              <div key={index} className='col'>
                <div data-aos='fade-right' className='blog-card'>
                  <div className='blog-thumb'>
                    <img src={item.imgUrl} alt={item.imgAlt} />
                  </div>
                  <div className='blog-content'>
                    <span className='blog-date'>{item.date}</span>
                    <h6 className='blog-title'>{item.caption}</h6>
                    <Link to={item.link} className='read-more'>Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See More Button */}
        <div className='text-center mt-4'>
          <Link to="/blog" className='see-more-btn'>See More Blogs</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
