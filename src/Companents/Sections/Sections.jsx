import React, { useState } from 'react';
import style from '../Sections/Sections.module.css';
import logo from '../Images/reac.jpg';

const faqData = [
  {
    question: 'Question 1: What is Lorem Ipsum?',
    answer: 'Answer 1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    question: 'Question 2: Why do we use it?',
    answer: 'Answer 2: It is a long established fact that a reader will be distracted by the readable content of a page.'
  },
  {
    question: 'Question 3: Where does it come from?',
    answer: 'Answer 3: Contrary to popular belief, Lorem Ipsum is not simply random text.'
  }
];

const Sections = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setSelectedFAQ(selectedFAQ === index ? null : index);
  };

  return (
    <div className={style.abc}>
      <div className={style.settings}>
        <div className={style.head}>
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo et, esse laudantium consequatur. Eum soluta illum architecto dolorum quae suscipit dignissimos! Saepe, amet explicabo nemo eligendi totam sint repudiandae.
          </p>
          <button className={style.button}>
            Adopt Her Now
          </button>   
        </div>
      </div>
      <div className={style.faqSuallar}>
        {faqData.map((faq, index) => (
          <div key={index} className={style.faqItem}>
            <div className={style.question} onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {selectedFAQ === index && (
              <div className={style.answer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sections;