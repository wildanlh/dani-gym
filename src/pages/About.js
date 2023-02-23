import { motion } from "framer-motion";
import { border, locationFront } from "../assets/assets";

const About = () => {
  return (
    <div className="about" id="tentang-kami">
      <div className="bg-black min-h-screen flex justify-center items-center">
        <div className="container mx-auto">
          <div className="flex flex-col items-center lg:flex-row py-5">
            <div className="lg:w-1/2 px-4 py-10 lg:p-20 text-center lg:text-left">
              <motion.h1
                className="font-lexenddeco text-4xl font-bold mb-10 text-white"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-yellow">Tentang</span> Kami
              </motion.h1>
              <motion.p
                className="font-opensans text-white mb-6 text-justify"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, ease: "easeInOut", duration: 0.5 }}
                viewport={{ once: true }}
              >
                Sebagai salah satu pusat kebugaran terbaik di Sumedang, Dani GYM
                berusaha memberikan pelayanan terbaik dengan menjangkau semua
                kalangan masyarakat mulai dari bawah, menengah dan atas dengan
                berbagai program latihan yang efektif ditunjang dengan
                penyediaan suplemen yang lengkap, alat fitness lengkap serta
                yang lebih penting adalah biaya latihan yang sangat terjangkau
                untuk semua lapisan masyarakat di daerah Paseh khususnya dan
                radius ke Sumedang kota pada umumnya.
              </motion.p>
              <motion.p
                className="font-opensans text-white text-justify"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, ease: "easeInOut", duration: 0.5 }}
                viewport={{ once: true }}
              >
                Dani GYM punya area parkir yang cukup luas baik untuk mobil dan
                motor. Khusus untuk kendaraan bermotor bisa naik ke atas teras
                atau yang lebih private juga tersedia.
              </motion.p>
            </div>
            <div class="md:w-1/2 md:p-3 p-3 relative">
              <motion.img
                src={border}
                alt="border"
                className="block w-full h-full "
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
                whileHover={{ x: -10, y: -10 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={locationFront}
                alt="location"
                className="absolute bottom-7 right-7 rounded-lg md:w-full md:h-full w-11/12 h-11/12"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, ease: "easeInOut", duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
