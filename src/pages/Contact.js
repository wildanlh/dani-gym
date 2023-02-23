import { motion } from "framer-motion";
import Iframe from "react-iframe";
import Form from "../components/form/Form.js";
import { BsInstagram, BsYoutube, BsWhatsapp } from "react-icons/bs";

const link =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8082265452376!2d108.01162391537436!3d-6.793174268327206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68d5f24ce0e249%3A0xb8b24e54d4998775!2sDani%20GYM%20Fitness%20Center!5e0!3m2!1sen!2sid!4v1676821479712!5m2!1sen!2sid";

const Contact = () => {
  return (
    <div className="contact" id="kontak">
      <div className="bg-dark h-full flex justify-center items-center bg-gradient-to-b from-black via-dark pb-20">
        <div className="container mx-auto">
          <motion.h1
            className="font-lexenddeco text-4xl font-bold pb-10 pt-40 text-white text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow">Kontak</span> Kami
          </motion.h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:px-0 px-3 pb-10">
            <motion.a
              href="https://www.instagram.com/danigymsumedang/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="instagram text-white flex items-center justify-center h-96"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <BsInstagram className="text-7xl text-center mr-3" />
                <h1 className="font-lexenddeco md:text-3xl text-xl font-bold text-white text-center border-yellow border-b-4">
                  @danigymsumedang
                </h1>
              </motion.div>
            </motion.a>
            <motion.a
              href="https://wa.me/6281927373517"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="instagram text-white flex items-center justify-center h-96"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <BsWhatsapp className="text-7xl text-center mr-3" />
                <h1 className="font-lexenddeco md:text-3xl text-xl font-bold text-white text-center border-yellow border-b-4">
                  0819 2737 3517
                </h1>
              </motion.div>
            </motion.a>
            <motion.a
              href="https://www.youtube.com/channel/UCJ9IF4aZTDM7-6jsvKDt1AA"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="instagram text-white flex items-center justify-center h-96"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <BsYoutube className="text-7xl text-center mr-3" />
                <h1 className="font-lexenddeco md:text-3xl text-xl font-bold text-white text-center border-yellow border-b-4">
                  Dani GYM Sumedang
                </h1>
              </motion.div>
            </motion.a>
          </div>
          <div class="grid lg:grid-cols-2 grid-cols-1 mx-3">
            <motion.div
              initial={{ x: "-1vw", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
            >
              <Iframe
                url={link}
                width="100%"
                className="maps h-128 lg:rounded-l-lg"
              />
            </motion.div>
            <motion.div
              class="bg-white lg:rounded-r-lg h-128 px-4"
              initial={{ x: "1vw", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
            >
              <h1 className="font-lexenddeco text-3xl font-bold py-9 text-dark text-center">
                <span className="text-yellow">Kritik</span> & Saran
              </h1>
              <Form />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
