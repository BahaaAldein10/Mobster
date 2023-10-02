"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";
import Title from "@/components/Title";
import { pricing } from "@/constants";
import Image from "next/image";

function Pricing() {
  return (
    <section className="relative mt-8 w-full lg:h-screen" id="pricing">
      <div className="container m-auto p-4 sm:w-[80%] w-[90%]">
        {/* Title */}
        <Title span="Our" h1="Pricing" />

        {/* Pricing */}
        <div className="relative grid lg:grid-cols-3 gap-4 mt-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h1 className="text-2 text-black">Pricing Plan</h1>
              <h2 className="mt-4 text-1 text-black">
                Invest in the future of your business with our app's&apos;
                pricing plans. They enable you to streamline operations, &apos;
                boost efficiency, and gain a competitive edge.
              </h2>
            </div>

            <Image
              src="/pricing_hero.png"
              alt="pricing_hero"
              width={400}
              height={400}
              className="lg:block hidden"
            />
          </motion.div>

          {pricing.map((item, index) => (
            <motion.div
              key={`pricing-${index}`}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="p-8 rounded-2xl bg-[url('/pricing_image.png')] bg-cover box_shadow"
            >
              <h1 className="mt-4 text-1.5 text-color">{item.title}</h1>
              <h2 className="text-2 text-b">{item.price}</h2>
              <ul className="mt-4">
                {item.features.map((item, index) => (
                  <li
                    key={`item-${index}`}
                    className="flex items-center gap-2 py-2"
                  >
                    <Image
                      src="/tick.png"
                      alt="tick"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <h1 className="text-1">{item}</h1>
                  </li>
                ))}
              </ul>
              <Button
                title={item.button}
                url="/"
                style="text-color border-color hover:bg-color hover:text-white"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
