"use client";

import { pricing } from "@/constants";
import { features } from "@/constants";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Image from "next/image";
import Title from "@/components/Title";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="w-full md:h-screen bg-[url('/hero_bg.png')] bg-cover bg-center">
        <Navbar />
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
                <h2 className="lg:text-3 lg:leading-3 text-2.5">
                  Our Amazing App
                </h2>
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
      </main>
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
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="m-auto"
                />
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
                The All kind of business tools integration app is the easiest
                way to connect all your business tools in one place. With our
                app, you can automate tasks and workflows, get real-time
                insights into your business, and save time and money.
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
                  Invest in the future of your business with our app's pricing
                  plans. They enable you to streamline operations, boost
                  efficiency, and gain a competitive edge.
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
      <section className="relative mt-8 w-full md:h-screen" id="contact">
        <div className="container m-auto p-4 sm:w-[80%] w-[90%]">
          {/* Title */}
          <Title span="Get" h1="In Touch" />

          <div className="grid md:grid-cols-2 gap-4 mt-8 w-full">
            <div>
              {/* Contacts */}
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
              >
                <form className="pt-2 w-full rounded-2xl">
                  <div className="flex justify-center items-center gap-4 w-full">
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      maxLength={20}
                      placeholder="First Name"
                      className="p-4 w-[50%] text-1 bg-[#eeeeee] outline-none rounded-lg"
                    />

                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      maxLength={20}
                      placeholder="Last Name"
                      className="p-4 w-[50%] text-1 bg-[#eeeeee] outline-none rounded-lg"
                    />
                  </div>

                  <div className="mt-4 w-full">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="p-4 w-full text-1 bg-[#eeeeee] outline-none rounded-lg"
                    />
                  </div>

                  <div className="mt-4 w-full">
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      placeholder="Message.."
                      className="p-4 w-full text-1 bg-[#eeeeee] outline-none resize-none rounded-lg"
                    />
                  </div>

                  <Button
                    title="Submit"
                    type="submit"
                    url="/"
                    style="text-color border-color hover:bg-color hover:text-white"
                  />
                </form>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:block hidden"
            >
              <div>
                <h1 className="text-2 text-black">Contact Us</h1>
                <h2 className="mt-4 text-1 text-black">
                  Feel free to reach out to us for any inquiries, assistance, or
                  feedback.
                </h2>
              </div>

              <Image
                src="/contact_image.png"
                alt="contact_image"
                width={400}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
