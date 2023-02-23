import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";
import { logo } from "../../assets/assets";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <nav
        className={`py-3 fixed w-full top-0 z-50 ${
          scrolled ? "bg-yellow transition ease-in shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <motion.img
              src={logo}
              alt="logo"
              className={`h-14 ${
                scrolled
                  ? "ease-in brightness-0"
                  : "ease-in brightness-0 invert"
              }`}
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                duration: 1,
              }}
            />
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-5">
              <motion.li
                className="hover:cursor-pointer"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
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
                  duration={500}
                  className={`${
                    scrolled
                      ? "font-lexenddeco text-black hover:border-b-2 hover:border-black hover:transition hover:ease-in font-semibold uppercase"
                      : "font-lexenddeco text-white hover:border-b-2 hover:border-white hover:transition hover:ease-in font-semibold uppercase"
                  } `}
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                className="hover:cursor-pointer"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
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
                  className={`${
                    scrolled
                      ? "font-lexenddeco text-black hover:border-b-2 hover:border-black hover:transition hover:ease-in font-semibold uppercase"
                      : "font-lexenddeco text-white hover:border-b-2 hover:border-white hover:transition hover:ease-in font-semibold uppercase"
                  }`}
                  onClick={() => onUpdateActiveLink("tentang-kami")}
                >
                  Tentang Kami
                </Link>
              </motion.li>
              <motion.li
                className="hover:cursor-pointer"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
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
                  className={`${
                    scrolled
                      ? "font-lexenddeco text-black hover:border-b-2 hover:border-black hover:transition hover:ease-in font-semibold uppercase"
                      : "font-lexenddeco text-white hover:border-b-2 hover:border-white hover:transition hover:ease-in font-semibold uppercase"
                  } $()`}
                  onClick={() => onUpdateActiveLink("fasilitas")}
                >
                  Fasilitas
                </Link>
              </motion.li>
              <motion.li
                className="hover:cursor-pointer"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
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
                  className={`${
                    scrolled
                      ? "font-lexenddeco text-black hover:border-b-2 hover:border-black hover:transition hover:ease-in font-semibold uppercase"
                      : "font-lexenddeco text-white hover:border-b-2 hover:border-white hover:transition hover:ease-in font-semibold uppercase"
                  }`}
                  onClick={() => onUpdateActiveLink("kontak")}
                >
                  Kontak
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
