import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";
import { logo } from "../../assets/assets";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
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
          <motion.div
            className="md:hidden"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 1.5,
            }}
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${
                scrolled ? "text-black" : "text-white"
              } focus:outline-none hover:text-black transition ease-in`}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color={`${scrolled ? "dark" : "white"}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color={`${scrolled ? "dark" : "white"}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </motion.div>
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
        {menuOpen && (
          <div className="md:hidden">
            <ul className="mt-2 px-4">
              <motion.li
                className="hover:cursor-pointer"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
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
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
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
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
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
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
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
        )}
      </nav>
    </Router>
  );
};

export default Navbar;
