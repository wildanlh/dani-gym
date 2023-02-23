import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <footer className="bg-black border-t-4 border-yellow">
      <div className="container mx-auto py-20 md:text-base text-sm">
        <div className="flex justify-center">
          <ul className="flex space-x-5">
            <motion.li
              className="hover:cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.2,
              }}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="font-lexenddeco text-yellow hover:border-b-2 hover:border-yellow hover:transition hover:ease-in font-semibold uppercase"
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Link>
            </motion.li>
            <motion.li
              className="hover:cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.4,
              }}
            >
              <Link
                to="tentang-kami"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="font-lexenddeco text-yellow hover:border-b-2 hover:border-yellow hover:transition hover:ease-in font-semibold uppercase"
                onClick={() => onUpdateActiveLink("tentang-kami")}
              >
                Tentang Kami
              </Link>
            </motion.li>
            <motion.li
              className="hover:cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.6,
              }}
            >
              <Link
                to="fasilitas"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="font-lexenddeco text-yellow hover:border-b-2 hover:border-yellow hover:transition hover:ease-in font-semibold uppercase"
                onClick={() => onUpdateActiveLink("fasilitas")}
              >
                Fasilitas
              </Link>
            </motion.li>
            <motion.li
              className="hover:cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.8,
              }}
            >
              <Link
                to="kontak"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="font-lexenddeco text-yellow hover:border-b-2 hover:border-yellow hover:transition hover:ease-in font-semibold uppercase"
                onClick={() => onUpdateActiveLink("kontak")}
              >
                Kontak
              </Link>
            </motion.li>
          </ul>
        </div>
        <motion.p
          className="text-white text-center font-opensans py-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          &copy; 2023 Dani GYM Sumedang
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
