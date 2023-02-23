import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

const Form = () => {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label class="block">
        <span class="block text-base font-lexenddeco font-medium text-black">
          Nama
        </span>
        <input type="text" class="w-full px-2 py-2" />
        <p class="mt-2 invisible peer-invalid:visible text-red text-sm">
          Masukkan alamat email yang valid.
        </p>
      </label>

      <label class="block">
        <span class="block text-base font-lexenddeco font-medium text-black">
          Email
        </span>
        <input type="email" class="peer ... w-full px-2 py-2" />
        <p class="mt-2 invisible peer-invalid:visible text-red text-sm">
          Masukkan alamat email yang valid.
        </p>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </label>

      <label class="block">
        <span class="block text-2lg font-lexenddeco font-medium text-black">
          Pesan
        </span>
        <textarea id="message" name="message" className="w-full px-2 py-2" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </label>

      <motion.button
        type="submit"
        className="bg-yellow px-5 py-3 mt-5 text-black font-bold rounded-lg items-center"
        disabled={state.submitting}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        Kirim Pesan
      </motion.button>
    </form>
  );
};

export default Form;
