import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_14pulyq",
        "template_4syb5hv",
        formRef.current,
        "kcugaBmDIUytFUd4r"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div >
        <motion.h1
        id="contact"
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
         className="my-20 text-center text-4xl"> Contact Me</motion.h1>
      <div ref={ref} className="flex flex-col items-center gap-12 max-w-[1366px] mx-auto h-full p-4 sm:flex-row sm:p-10 sm:gap-14">
        <motion.div 
        whileInView={{y:0 ,opacity:1}}
        initial={{opacity:0,y:100}}
        transition={{duration:1}}
        className="flex flex-col gap-10 sm:gap-5 text-center sm:text-left sm:items-center mt-20 sm:mt-0">
          <h1 className="text-[100px] leading-[88px] sm:text-3xl">
            Let’s work together
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Mail</h2>
            <span className="font-light">21ume019@lnmiit.ac.in</span>
            <h2 className="text-xl">Address</h2>
            <span className="font-light">300 Jainnagar Lalghati Bhopal</span>
            <h2 className="text-xl">Phone</h2>
            <span className="font-light">+91 62651 68991</span>
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1 ,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className="relative flex-1 sm:p-12 sm:w-full">
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
            <input
              type="text"
              required
              placeholder="Name"
              name="Name"
              className="p-5 bg-transparent border border-white text-white rounded sm:p-2.5"
            />
            <input
              type="Email"
              required
              placeholder="Email"
              name="Email"
              className="p-5 bg-transparent border border-white text-white rounded sm:p-2.5"
            />
            <textarea
              rows={8}
              placeholder="Message"
              name="Message"
              className="p-5 bg-transparent border border-white text-white rounded sm:p-2.5"
            />
            <button
              type="submit"
              className="p-5 bg-orange-500 text-white font-medium rounded cursor-pointer border-none sm:p-2.5"
            >
              Submit
            </button>
            {error && <span className="text-red-500">Error</span>}
            {success && <span className="text-green-500">Success</span>}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;