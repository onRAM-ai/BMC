'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQItem from '../components/FAQItem';
import { motion } from 'framer-motion';

export default function FAQPage() {
  const faqs = [
    {
      question: "How do artists get paid?",
      answer: "Artists receive funding directly to their bank account once an investment is completed. They continue to earn their share of royalties from streaming, licensing, and other revenue sources."
    },
    {
      question: "What&apos;s the minimum investment amount?",
      answer: "The minimum investment varies by project, but typically starts at $100 to ensure accessibility for a wide range of investors."
    },
    {
      question: "How are royalties distributed?",
      answer: "Royalties are tracked through our platform and distributed quarterly to all investors based on their ownership percentage."
    },
    {
      question: "Can I sell my investment?",
      answer: "Yes, we offer a secondary marketplace where you can sell your music investments to other users on our platform."
    },
    {
      question: "How do you verify artists?",
      answer: "We conduct thorough due diligence on all artists, including verification of their music rights, streaming history, and professional background."
    },
    {
      question: "What happens if an artist leaves the platform?",
      answer: "Existing investments and royalty agreements remain in place, managed through smart contracts that ensure continued payment distribution."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked <span className="text-gradient">Questions</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Everything you need to know about our platform
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-text-secondary mb-4">
              Still have questions? We&apos;re here to help!
            </p>
            <a 
              href="/contact"
              className="btn-primary text-lg px-8 py-3 rounded-full inline-flex items-center justify-center gap-2"
            >
              Contact Us
              <i className="fas fa-arrow-right"></i>
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}