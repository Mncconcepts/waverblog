import React, { useState } from 'react';

const FAQPage = () => {
  const faqs = [
    {
      question: "What is this blog about?",
      answer: "Our blog covers the latest fashion trends, styling tips, and sustainable fashion insights."
    },
    {
      question: "How often are new blogs posted?",
      answer: "We update our blog section with new posts every week."
    },
    {
      question: "Can I contribute to the blog?",
      answer: "Yes, we welcome guest contributors. Please contact us for more information."
    },
    {
      question: "How can I stay updated with your latest blogs?",
      answer: "Subscribe to our newsletter or follow us on social media to stay updated."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const additionalFAQs = [
    {
      question: "What topics do you cover?",
      answer: "We cover a range of topics including fashion, lifestyle, and sustainability."
    },
    {
      question: "Do you offer styling consultations?",
      answer: "Yes, we offer personalized styling consultations. Contact us for details."
    },
  ];

  return (
    <div className='faq-page-container'>
      <div className='container'>
        <div className='section-header text-center'>
          <h3 className='title'>Frequently Asked Questions</h3>
        </div>
        <div className='faq-list'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className='faq-question'>
                <h5>{faq.question}</h5>
                <span className='toggle-icon'>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && <div className='faq-answer'><p>{faq.answer}</p></div>}
            </div>
          ))}
        </div>
        {!showMore && (
          <div className="text-center mt-4">
            <button className="show-more-btn" onClick={() => setShowMore(true)}>
              Show More Questions ↓
            </button>
          </div>
        )}
        {showMore && (
          <div className='faq-list mt-4'>
            {additionalFAQs.map((faq, index) => (
              <div
                key={index + faqs.length}
                className={`faq-item ${activeIndex === index + faqs.length ? 'active' : ''}`}
                onClick={() => toggleFAQ(index + faqs.length)}
              >
                <div className='faq-question'>
                  <h5>{faq.question}</h5>
                  <span className='toggle-icon'>{activeIndex === index + faqs.length ? '-' : '+'}</span>
                </div>
                {activeIndex === index + faqs.length && <div className='faq-answer'><p>{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQPage;
