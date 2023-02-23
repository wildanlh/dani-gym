import { motion } from "framer-motion";
import {
  airWalker,
  barbellPlates,
  dubmbellPec,
  dumbellHexagonal,
  dumbellRegular,
  interior1,
  interior2,
  interior3,
  interior4,
  interior5,
  interior6,
  shoulderPress,
} from "../assets/assets";

const Facility = () => {
  return (
    <div className="facility" id="fasilitas">
      <div className="bg-black h-auto">
        <div className="container mx-auto">
          <motion.h1
            className="font-lexenddeco text-4xl font-bold py-10 text-white text-center"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow">Fasilitas</span> Kami
          </motion.h1>
          <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:p-0 p-3 gap-8">
            <motion.div
              className="cursor-pointer"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, ease: "easeInOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative flex items-center">
                <img
                  src={airWalker}
                  alt=""
                  className="w-full h-96 object-cover rounded-lg"
                />
                <motion.div
                  className="absolute top-0 left-0 content-center w-full h-full rounded-lg flex flex-col items-center justify-center z-10"
                  whileHover={{ y: -10 }}
                >
                  <h1 className="font-lexenddeco text-2xl font-bold mb-3 text-white text-center">
                    <span className="text-yellow">Air </span> <br />
                    Walker
                  </h1>
                </motion.div>
                <div className="absolute top-0 left-0 content-center w-full h-full rounded-lg flex flex-col items-center justify-center bg-black opacity-50"></div>
              </div>
            </motion.div>
            <motion.div
              className="cursor-pointer"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, ease: "easeInOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative flex items-center">
                <img
                  src={barbellPlates}
                  alt=""
                  className="w-full h-96 object-cover rounded-lg"
                />
                <motion.div
                  className="absolute top-0 left-0 content-center w-full h-full rounded-lg flex flex-col items-center justify-center z-10"
                  whileHover={{ y: -10 }}
                >
                  <h1 className="font-lexenddeco text-2xl font-bold mb-3 text-white text-center">
                    <span className="text-yellow">Barbell </span> <br />
                    Plates
                  </h1>
                </motion.div>
                <div className="absolute top-0 left-0 content-center w-full h-full rounded-lg flex flex-col items-center justify-center bg-black opacity-50"></div>
              </div>
            </motion.div>
            <motion.div
              className="cursor-pointer"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, ease: "easeInOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative flex items-center">
                <img
                  src={dumbellRegular}
                  alt=""
                  className="w-full h-96 object-cover rounded-lg"
                />
                <motion.div
                  className="absolute top-0 left-0 content-center w-full h-full rounded-lg flex flex-col items-center justify-center z-10"
                  whileHover={{ y: -10 }}
                >
                  <h1 className="font-lexenddeco text-2xl font-bold mb-3 text-white text-center">
                    <span className="text-yellow">Dumbbell Plates </span> <br />
                    Regular
                  </h1>
                </motion.div>
                <div className="absolute top-0 left-0 content-center w-full h-full rounded-lg flex flex-col items-center justify-center bg-black opacity-50"></div>
              </div>
            </motion.div>
            <motion.div
              className="cursor-pointer"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, ease: "easeInOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative flex items-center">
                <img
                  src={dumbellHexagonal}
                  alt=""
                  className="w-full h-96 object-cover rounded-lg"
                />
                <motion.div
                  className="absolute top-0 left-0 content-center w-full h-full rounded-lg flex flex-col items-center justify-center z-10"
                  whileHover={{ y: -10 }}
                >
                  <h1 className="font-lexenddeco text-2xl font-bold mb-3 text-white text-center">
                    <span className="text-yellow">Dumbbell Plates </span> <br />
                    Hexagonal
                  </h1>
                </motion.div>
                <div className="absolute top-0 left-0 content-center w-full h-full rounded-lg flex flex-col items-center justify-center bg-black opacity-50"></div>
              </div>
            </motion.div>
            <motion.div
              className="cursor-pointer"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, ease: "easeInOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative flex items-center">
                <img
                  src={dubmbellPec}
                  alt=""
                  className="w-full h-96 object-cover rounded-lg"
                />
                <motion.div
                  className="absolute top-0 left-0 content-center w-full h-full rounded-lg flex flex-col items-center justify-center z-10"
                  whileHover={{ y: -10 }}
                >
                  <h1 className="font-lexenddeco text-2xl font-bold mb-3 text-white text-center">
                    <span className="text-yellow">Dumbbell Pec Deck </span>{" "}
                    <br />
                    Machine
                  </h1>
                </motion.div>
                <div className="absolute top-0 left-0 content-center w-full h-full rounded-lg flex flex-col items-center justify-center bg-black opacity-50"></div>
              </div>
            </motion.div>
            <motion.div
              className="place-self-center"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, ease: "easeInOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="font-opensans text-white text-justify text-base">
                <b>Dumbbell Pec Deck Machine</b> model terbaru sangat membantu
                untuk variasi latihan otot dada, menggantikan metode manual yang
                biasanya menggunakan dumbbell. Jadi bisa lebih aman juga dalam
                melakukan aktivitas tersebut.
              </p>
              <motion.div
                className="border-yellow border-b-4 pb-3"
                whileHover={{ y: -10 }}
              ></motion.div>
            </motion.div>
            <motion.div
              className="cursor-pointer"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, ease: "easeInOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative flex items-center">
                <img
                  src={shoulderPress}
                  alt=""
                  className="w-full h-96 object-cover rounded-lg"
                />
                <motion.div
                  className="absolute top-0 left-0 content-center w-full h-full rounded-lg flex flex-col items-center justify-center z-10"
                  whileHover={{ y: -10 }}
                >
                  <h1 className="font-lexenddeco text-2xl font-bold mb-3 text-white text-center">
                    <span className="text-yellow">Shoulder Press + </span>
                    <br />
                    Side Lateral
                  </h1>
                </motion.div>
                <div className="absolute top-0 left-0 content-center w-full h-full rounded-lg flex flex-col items-center justify-center bg-black opacity-50"></div>
              </div>
            </motion.div>
            <motion.div
              className="place-self-center"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, ease: "easeInOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="font-opensans text-white text-justify text-base">
                Kita juga memiliki
                <b> Shoulder Press & Side Lateral machine</b> atau biasa disebut
                sebagai mesin bahu, sangat membantu sekali dalam melatih otot
                bahu depan dan samping serta otot trapesius (karena mempunyai 2
                fungsi dalam satu alat). Alat ini juga bisa memperbaiki postur
                tubuh agar lebih tegap atau lurus, biasanya untuk membantu
                terapi tulang belakang.
              </p>
              <motion.div
                className="border-yellow border-b-4 pb-3"
                whileHover={{ y: -10 }}
              ></motion.div>
            </motion.div>
          </div>

          <motion.h1
            className="font-lexenddeco text-4xl font-bold pb-10 pt-40 text-white text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow">Fasilitas</span> Lainnya
          </motion.h1>

          <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 grid-cols-1 py-10 md:px-0 px-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, ease: "easeIn", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={interior1}
                alt="interior"
                className="rounded-lg h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, ease: "easeIn", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={interior2}
                alt="interior"
                className="rounded-lg h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, ease: "easeIn", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={interior3}
                alt="interior"
                className="rounded-lg h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, ease: "easeIn", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={interior4}
                alt="interior"
                className="rounded-lg h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, ease: "easeIn", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={interior5}
                alt="interior"
                className="rounded-lg h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.4, ease: "easeIn", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={interior6}
                alt="interior"
                className="rounded-lg h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
