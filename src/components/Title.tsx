"use client";

import { motion } from "framer-motion";

interface Props {
  h1: string;
  span: string;
}

function Title({ h1, span }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
      className="text-center"
    >
      <h1 className="text-2 text-black">
        <span className="text-2 text-color">{span} </span>
        {h1}
      </h1>
    </motion.div>
  );
}

export default Title;
