"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { motion } from "framer-motion";

function Contact() {
  return (
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

            <Image src="/contact_image.png" alt="contact_image" width={400} height={400} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
