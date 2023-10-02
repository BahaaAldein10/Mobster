"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="w-full">
      <div className="container m-auto p-4 sm:w-[80%] w-[90%]">
        <div className="grid md:grid-cols-2 w-full">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-[10%]"
          >
            <h1 className="lg:text-2 text-1.5 text-color">Discover</h1>
            <h2 className="lg:text-3 lg:leading-3 text-2.5">Our Amazing App</h2>
            <h3 className="lg:text-1.2 lg:leading-3 text-1">
              Manage your finance easier with our mobile app.
            </h3>

            <Button
              title="Get App Now"
              url="/"
              style="text-color border-color hover:bg-color hover:text-white"
            />
          </motion.div>

          {/* Image */}
          <div className="md:mt-0 mt-8">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              src="/hero_image.png"
              alt="hero_image"
              className="m-auto w-[250px] h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
