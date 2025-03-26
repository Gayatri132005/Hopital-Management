import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: "What services does ZeeCare Medical Institute offer?", answer: "We offer general medicine, surgeries, diagnostics, emergency care, and specialized treatments." },
    { question: "How can I book an appointment?", answer: "Appointments can be booked via our website, helpline, or hospital reception." },
    { question: "Do you accept insurance?", answer: "Yes, we accept most major insurance providers. Contact our billing department for details." },
    { question: "What are your hospital's visiting hours?", answer: "Visiting hours are from 9:00 AM to 8:00 PM daily. Critical care units may have restrictions." },
    { question: "How do I get emergency medical assistance?", answer: "Call our 24/7 emergency helpline or visit our emergency department for immediate care." }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={"About Medical Care | Leading Healthcare with Excellence & Innovation"}
        imageUrl={"/image1.webp"}
      />

      {/* Who We Are Section */}
      <section className="about-section">
        <motion.div 
          className="about-container"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2>Who We Are</h2>
            <p>
              At <strong>Medical Care Medical Institute</strong>, we combine cutting-edge medical technology with compassionate care to ensure that every patient receives world-class treatment.
            </p>
          </motion.div>
          <motion.img 
            src="/image2.webp" 
            alt="Who We Are" 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}  // Move from left
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section">
        <motion.div 
          className="about-container"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2>Our Mission & Vision</h2>
            <p>
              Our mission is to enhance lives through advanced medical care, innovation, and excellence. We aim to make quality healthcare accessible to all.
            </p>
          </motion.div>
          <motion.img 
            src="/image3.webp" 
            alt="Our Mission" 
            className="mission-image"
            initial={{ opacity: 0, x: -50 }}  // Move from left
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <motion.div 
              key={index} 
              className="faq-item" 
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="faq-question">{item.question}</h3>
              {openIndex === index && 
                <motion.p 
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: "auto" }} 
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.p>
              }
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
