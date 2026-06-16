import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="sections bg-[#0C0C12] px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <section>
            <h1 className="font-semibold text-3xl mb-3 text-secondary">
              BrewCafe.
            </h1>
            <address className="not-italic text-gray-300 leading-relaxed">
              145 Riverside Market Road Rajaddur Road, Near Clock Tower
              Dehradun, Uttarakhand 248001 India
            </address>
          </section>

          {/* Newsletter */}
          <section className="grid lg:col-span-2">
            <h3 className="font-semibold mb-3 text-[#b08ee0] ">
              Get Exclusive Deals in your Inbox
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                autoComplete="off"
                className="flex-1 px-4 py-2 border-none outline-none bg-gray-900/70 rounded-xl"
              />

              <button className="px-5 py-2 rounded-full bg-secondary text-background font-semibold">
                Subscribe
              </button>
            </div>

            <p className="my-4 text-sm">
              We won't spam, read our{" "}
              <Link to="#" className="underline">
                email policy
              </Link>
            </p>

            <div className="flex gap-2 flex-wrap">
              <Link to="http://instagram.com/mahesh.codes">
                <IconBrandInstagram size={36} stroke={1} />
              </Link>

              <Link to="#">
                <IconBrandFacebook size={36} stroke={1} />
              </Link>

              <Link to="https://www.linkedin.com/in/codebymahesh/">
                <IconBrandLinkedin size={36} stroke={1} />
              </Link>

              <Link to="https://x.com/mr7_code">
                <IconBrandX size={36} stroke={1} />
              </Link>
            </div>
          </section>

          {/* Legal */}
          <section>
            <h3 className="font-semibold text-[#b08ee0] mb-3">Legal Pages</h3>

            <div className="flex flex-col gap-2">
              <a className="legal-pages-links">Terms & Conditions</a>
              <a className="legal-pages-links">Privacy</a>
              <a className="legal-pages-links">Cookies</a>
              <a className="legal-pages-links">Modern Slavery Statement</a>
            </div>
          </section>

          {/* Important Links */}
          <section>
            <h3 className="font-semibold text-[#b08ee0] mb-3">
              Important Links
            </h3>

            <div className="flex flex-col gap-2">
              <a className="footer-important-links">Get Help</a>
              <a className="footer-important-links">Add Your Restaurant</a>
              <a className="footer-important-links">Sign up to Deliver</a>
              <a className="footer-important-links">
                Create a Business Account
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900/70 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left text-sm">
            BrewCafe Copyright 2026, All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
            <a className="footer-bottom-link">Privacy & Policy</a>
            <a className="footer-bottom-link">Terms</a>
            <a className="footer-bottom-link">Pricing</a>
            <a className="footer-bottom-link">
              Do not sell my personal information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
