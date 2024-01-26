import React, { useState } from "react";

const FAQItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq_items ${isOpen ? "open" : ""}`}>
      <div className="faq_item" onClick={() => setIsOpen(!isOpen)}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="faq_number">
            <h2 className={`${isOpen ? "active_faq" : ""}`}>{number}</h2>
          </div>
          <div className="faq_question">
            <h2 className={`${isOpen ? "active_faq" : ""}`}>{question}</h2>
          </div>
        </div>
        <div className="faq_mark">
          <h2
            className={`${isOpen ? "active_faq" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "-" : "+"}
          </h2>
        </div>
      </div>
      <div className={`faq_answer`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQList = () => {
  const faqs = [
    {
      number: "01",
      question: "Hard Web qanday xizmatlarni taqdim etadi?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
    },
    {
      number: "02",
      question: "Hard Web biznesimga qanday yordam berishi mumkin?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Add more FAQs here...
    {
        number: "03",
        question: "Hard Web qanday xizmatlarni taqdim etadi?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
        },
        {
        number: "04",
        question: "Hard Web biznesimga qanday yordam berishi mumkin?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
        number: "05",
        question: "Hard Web qanday xizmatlarni taqdim etadi?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
        },
        { 
        number: "06",
        question: "Hard Web biznesimga qanday yordam berishi mumkin?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
        number: "07",
        question: "Hard Web qanday xizmatlarni taqdim etadi?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
        },
        {
        number: "08",
        question: "Hard Web biznesimga qanday yordam berishi mumkin?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        }
  ];

  return (
    <div className="faq">
      {faqs.map((faq) => (
        <FAQItem key={faq.number} {...faq} />
      ))}
    </div>
  );
};

export default FAQList;
