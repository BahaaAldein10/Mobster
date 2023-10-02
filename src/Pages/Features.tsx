"use client";

import Button from "@/components/Button";
import Title from "@/components/Title";
import { features } from "@/constants";
import { motion } from "framer-motion";

function Features() {
  return (
    <section className="mt-8 w-full" id="features">
      <div className="container m-auto p-4 sm:w-[80%] w-[90%]">
        {/* Title */}
        <Title span="Our" h1="Features" />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-8 text-center w-full">
          {features.map((item, index) => (
            <motion.div
              key={`card-${index}`}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="p-8 bg-white box_shadow rounded-2xl"
            >
              <img src={item.image} alt={item.title} className="m-auto" />
              <h1 className="mt-4 text-1.5 text-color">{item.title}</h1>
              <h2 className="text-1 text-black">{item.description}</h2>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-4 mt-8 text-center w-full">
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              src="/feature_image.png"
              alt="feature_image"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mt-[10%]"
          >
            <h1 className="text-2">All kind of business tools integration</h1>
            <h2 className="text-1">
              The All kind of business tools integration app is the easiest way
              to connect all your business tools in one place. With our app, you
              can automate tasks and workflows, get real-time insights into your
              business, and save time and money.
            </h2>

            <Button
              title="See Addons"
              url="/"
              style="text-color border-color hover:bg-color hover:text-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Features;
