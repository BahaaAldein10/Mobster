"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  title: string;
  style: string;
  type?: "button" | "submit";
  url: string;
}

function Button({ title, type, url, style }: Props) {
  return (
    <Link href={url}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        type={type}
        className={`mt-6 px-4 py-2.5 text-[1.2rem] font-bold ${style} bg-transparent border-2 rounded-full glow_shadow`}
      >
        {title}
      </motion.button>
    </Link>
  );
}

export default Button;
