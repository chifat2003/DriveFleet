"use client";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Car, ShieldCheck, Clock3, Star } from "lucide-react";

const Herobanner = () => {
    return (
        <div>
            <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 flex items-center">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            <Car className="h-4 w-4" />
            Premium Car Rental Service
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Drive Your
              <span className="text-blue-600"> Dream Car </span>
              Today
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Rent luxury, sports, and everyday vehicles with seamless
              booking, affordable pricing, and premium customer support.
              Experience comfort and performance like never before.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              as={Link}
              href="/cars"
              color="primary"
              size="lg"
              className="font-semibold"
            >
              Explore Cars
            </Button>

            <Button
              as={Link}
              href="/about"
              variant="bordered"
              size="lg"
              className="font-semibold"
            >
              Learn More
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600 h-8 w-8" />
              <div>
                <h3 className="font-bold text-gray-900">Safe Ride</h3>
                <p className="text-sm text-gray-500">Verified vehicles</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 className="text-blue-600 h-8 w-8" />
              <div>
                <h3 className="font-bold text-gray-900">24/7 Support</h3>
                <p className="text-sm text-gray-500">Always available</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Star className="text-blue-600 h-8 w-8" />
              <div>
                <h3 className="font-bold text-gray-900">Top Rated</h3>
                <p className="text-sm text-gray-500">Trusted by users</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          
          {/* Background Blur */}
          <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
            alt="Luxury Car"
            className="relative z-10 rounded-3xl shadow-2xl w-full max-w-2xl object-cover"
          />

        </div>

      </div>
    </section>
        </div>
    );
};

export default Herobanner;