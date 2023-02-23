import { motion } from "framer-motion";
import { fullGym } from "../assets/assets";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div id="home">
      <div className="relative w-full h-screen">
        <img
          className="w-full h-full object-cover"
          src={fullGym}
          alt="Background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.h1
            className="font-lexenddeco text-4xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <span className="text-yellow">Dani GYM</span> Fitness Center
            Sumedang
          </motion.h1>
          <motion.p
            className="font-opensans text-xl text-white mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            Pusat Kebugaran Terlengkap, Termurah & Terbaik
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.button
              className="text-white font-lexenddeco font-bold rounded-full mt-6 m-0 flex items-center mx-auto"
              whileHover={{ x: 10 }}
            >
              Hubungi Kami
              <span className="ml-2">
                <AiOutlineArrowRight />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
