import { Separator } from "@heroui/react";
import Link from "next/link";
import { Car } from "lucide-react";

import {
  LogoGithub,
  LogoFacebook,
  LogoLinkedin,
  LogoTelegram,
} from "@gravity-ui/icons";

import { navLinks } from "./navlinks";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 px-6 py-10">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto text-center">

        {/* Logo */}
        <div className="flex justify-center items-center gap-2 text-3xl md:text-4xl font-bold text-blue-600">
          <Car className="h-10 w-10 md:h-12 md:w-12" />
          <span>
            Drive<span className="text-gray-900">Fleet</span>
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Unlocking premium mobility. PrimeDrive offers a top-tier fleet
          of vehicles and effortless booking for drivers who expect more
          from their rental experience.
        </p>

        <Separator className="my-8" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-4">
              Quick Links
            </h2>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 transition duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-4">
              Social Links
            </h2>

            <div className="flex justify-center gap-5 text-blue-600">
              <Link href="https://github.com" target="_blank">
                <LogoGithub className="h-6 w-6 hover:scale-110 transition" />
              </Link>

              <Link href="https://facebook.com" target="_blank">
                <LogoFacebook className="h-6 w-6 hover:scale-110 transition" />
              </Link>

              <Link href="https://linkedin.com" target="_blank">
                <LogoLinkedin className="h-6 w-6 hover:scale-110 transition" />
              </Link>

              <Link href="https://telegram.org" target="_blank">
                <LogoTelegram className="h-6 w-6 hover:scale-110 transition" />
              </Link>
            </div>
          </div>

          {/* Source */}
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-4">
              Contact
            </h2>

            <p className="text-gray-600">
                For inquiries, support, or feedback,<br></br> please reach out to us at <a href="mailto:info@drivefleet.com" className="text-blue-600 hover:underline">
                  info@drivefleet.com
                </a>

            </p>
          </div>

        </div>

        {/* Bottom */}
        <Separator className="my-8" />

        <p className="text-sm text-gray-500">
          © 2026 DriveFleet. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;