import { links, socials } from "@/constants";
import Link from "next/link";
import Button from "./Button";

function Footer() {
  return (
    <footer className="mt-8 w-full bg-[url('/footer_image.png')] bg-cover bg-center">
      <div className="container m-auto p-4 sm:w-[80%] w-[90%]">
        <div className="grid md:grid-cols-3 gap-4 mt-8 w-full">
          <div>
            {/* Logo */}
            <Link href={"/"} className="flex items-center gap-2">
              <img src="/logo2.png" alt="logo" className="w-10" />
              <h1 className="text-2 text-white">Mobster</h1>
            </Link>

            {/* Socials */}
            <ul className="flex gap-2 mt-8">
              {socials.map((item, index) => (
                <Link
                  key={`card-${index}`}
                  href="/"
                  className="p-2 bg-white rounded-full cursor-pointer glow_shadow duration-300"
                >
                  <img src={item.img} alt={item.name} className="w-6" />
                </Link>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-2 text-white">Pages</h1>
            <ul className="block mt-4">
              {links.map((link, index) => (
                <li key={`link-${index}`} className="py-2 w-fit">
                  <Link href={link.url} className="flex items-center gap-2">
                    <img src="/arrow.png" alt="arrow" className="w-4" />
                    <h1 className="text-1 text-white hover:text-color duration-300">
                      {link.title}
                    </h1>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-2 text-white">Subscribe</h1>
            <h2 className="text-1 text-white">
              Get some offers, news, or update features of application.
            </h2>

            <div className="mt-4 text-center w-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="p-4 w-full text-1 bg-white outline-none rounded-lg"
              />
            </div>

            <Button
              title="Subscribe"
              url="/"
              style="text-white border-white hover:bg-white hover:text-color"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
