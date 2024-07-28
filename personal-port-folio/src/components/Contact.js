import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin,  } from "@fortawesome/free-brands-svg-icons";
import Heading from "./Heading";

const ContactSection = () => {
  return (
    <motion.div 
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Me</h2> */}
      <Heading title={"Contact Me"}/>
      <motion.p 
        className="text-lg text-slate-700 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Feel free to reach out via email or connect with me on social media.
      </motion.p>
      <motion.a 
        href="mailto:your-email@example.com" 
        className="text-blue-600 hover:underline text-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> mabdullahbaig5534@gmail.com
      </motion.a>
      <div className="flex justify-center space-x-6 mt-6">
        <motion.a 
          href="https://www.linkedin.com/in/muhammad-abduallah-baig-8ab48b269/" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="text-slate-700 hover:text-slate-900"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </motion.a>
      
      </div>
    </motion.div>
  );
};

export default ContactSection;
