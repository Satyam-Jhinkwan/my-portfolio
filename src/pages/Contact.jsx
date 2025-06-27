import { useState } from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { motion } from "motion/react";
import { Element } from "react-scroll";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Element name="contact">
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="min-h-screen flex items-center justify-center mt-10 mb-10"
      >
        <BackgroundGradient className="rounded-[22px] min-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <h2 className="text-4xl font-extrabold text-red-600 mb-8 text-center drop-shadow-lg">
            Contact Me
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 z-10 relative"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border text-white border-orange-200 bg-neutral-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition placeholder-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border text-white border-orange-200 bg-neutral-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition placeholder-gray-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="border text-white border-orange-200 bg-neutral-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none transition placeholder-gray-300"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-orange-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-red-600 hover:to-red-800 transition text-lg"
            >
              Send Message
            </button>
          </form>
        </BackgroundGradient>
      </motion.section>
    </Element>
  );
}

export default Contact;
