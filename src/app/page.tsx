"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Award,
  Star,
  Check,
  Shield,
  Phone,
} from "lucide-react";

const Guarantee = ({ className = "h-36 w-full" }) => (
  <img
    src="/images/logo/DCSS_Guarantee.svg"
    alt="100% Guarantee Tag"
    className={className}
  />
);

export default function HomePage() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      text: "We have used Strickland Pressure Washing for several years. It always looks great when they are finished. Would recommend their services to anyone!",
      author: "Sarah M.",
      location: "Portland, OR",
    },
    {
      text: "Outstanding service! The team was professional, on time, and did an amazing job. My house looks brand new!",
      author: "Mike R.",
      location: "Beaverton, OR",
    },
    {
      text: "I can't say enough good things about Strickland. They transformed my driveway and deck. Highly recommended!",
      author: "Jennifer L.",
      location: "Lake Oswego, OR",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                alt="Professional pressure washing team"
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight">
                #1 Professional
                <br />
                <span className="text-red-600">PRESSURE WASHING</span>
                <br />
                COMPANY
              </h1>
              <div className="mb-6">
                <p className="text-2xl font-semibold text-gray-700 mb-2">
                  PRESSURE WASHING SERVICES PROVIDED BY
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  TRAINED PROFESSIONALS
                </p>
                <p className="text-lg text-gray-600 mt-2">
                  We do it right the first time!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-red-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-colors shadow-lg text-center"
                >
                  Schedule Now To Save 10%
                </Link>
                <a
                  href="tel:503-555-7673"
                  className="bg-blue-900 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-800 transition-colors shadow-lg text-center"
                >
                  (503) 555-7673
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Quick Links */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              {
                name: "House Wash",
                img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop",
              },
              {
                name: "Concrete Wash",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop",
              },
              {
                name: "Commercial",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop",
              },
              {
                name: "Roof Treatment",
                img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300&h=200&fit=crop",
              },
              {
                name: "Deck & Patio",
                img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=200&fit=crop",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Your Home to the Pros */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Trust Your Home to the Pros
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="text-blue-900" size={60} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">CALL</h3>
              <p className="text-gray-600">
                Our friendly power washing experts are available to help 7 days
                a week.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="text-blue-900" size={60} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                SCHEDULE
              </h3>
              <p className="text-gray-600">
                We answer all your questions and schedule your service, all over
                the phone.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Check className="text-blue-900" size={60} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">ENJOY</h3>
              <p className="text-gray-600">
                Enjoy your perfectly clean home. Guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Certifications */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Awards & Certifications
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md h-24 flex items-center justify-center">
                <div>
                  <Award className="text-yellow-500 mx-auto mb-1" size={32} />
                  <p className="text-xs font-semibold">Best of Portland</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md h-24 flex items-center justify-center">
                <div>
                  <Star className="text-blue-600 mx-auto mb-1" size={32} />
                  <p className="text-xs font-semibold">BBB A+ Rating</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md h-24 flex items-center justify-center">
                <div>
                  <Shield className="text-green-600 mx-auto mb-1" size={32} />
                  <p className="text-xs font-semibold">Insured & Bonded</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md h-24 flex items-center justify-center">
                <div>
                  <Award className="text-red-600 mx-auto mb-1" size={32} />
                  <p className="text-xs font-semibold">HomeAdvisor Elite</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md h-24 flex items-center justify-center">
                <div>
                  <Star className="text-yellow-500 mx-auto mb-1" size={32} />
                  <p className="text-xs font-semibold">5-Star Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 100% Satisfaction Guarantee Badge */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Guarantee className="h-98 w-full p-4" />
          <p className="text-xl text-gray-700 mt-8 max-w-2xl mx-auto p-4">
            At Strickland Pressure Washing Services, we guarantee to deliver the
            best results possible for your property using our safe and effective
            processes!
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=600&fit=crop)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white mb-12">
            <div>
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-xl">YEARS OF SERVICE</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">50,000+</p>
              <p className="text-xl">SATISFIED CUSTOMERS</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-xl">SATISFACTION GUARANTEE</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500 fill-yellow-500" size={24} />
                <span className="font-semibold">BBB A+</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Award className="text-blue-600" size={24} />
                <span className="font-semibold">HomeAdvisor</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Shield className="text-green-600" size={24} />
                <span className="font-semibold">Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=333&fit=crop"
                alt="House Wash"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  House Wash
                </h3>
                <p className="text-gray-600 mb-4">
                  Thoroughly clean your home's exterior with safe pressure and
                  biodegradable cleansers.
                </p>
                <Link
                  href="/services"
                  className="text-red-600 font-semibold hover:text-red-700 flex items-center"
                >
                  Learn More <ChevronRight size={20} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=333&fit=crop"
                alt="Concrete Wash"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Concrete Wash & Seal
                </h3>
                <p className="text-gray-600 mb-4">
                  Extract dirt and grime from your concrete and help prevent
                  seasonal cracking and chipping.
                </p>
                <Link
                  href="/services"
                  className="text-red-600 font-semibold hover:text-red-700 flex items-center"
                >
                  Learn More <ChevronRight size={20} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=500&h=333&fit=crop"
                alt="Roof Treatment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Roof Treatment
                </h3>
                <p className="text-gray-600 mb-4">
                  Restore the look of your roof and help prevent damage by
                  eliminating black streaks, algae, and moss.
                </p>
                <Link
                  href="/services"
                  className="text-red-600 font-semibold hover:text-red-700 flex items-center"
                >
                  Learn More <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Benefits of Routine Pressure Washing
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="text-blue-600" size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Prevent Costly Repairs
              </h3>
              <p className="text-blue-100">
                Regular cleaning prevents buildup that can cause damage
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="text-blue-600" size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Maintain Property Value
              </h3>
              <p className="text-blue-100">
                Keep your home looking its best year-round
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <Star className="text-blue-600" size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Preserve Curb Appeal
              </h3>
              <p className="text-blue-100">
                Make a great first impression every day
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block"
            >
              Enroll Today
            </Link>
          </div>
        </div>
      </div>

      {/* Before/After Testimonial */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                alt="Before and after pressure washing"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Results You Have To See To Believe
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                With over 50,000 jobs completed, our professionals have the
                knowledge and experience to thoroughly clean your outdoor
                surfaces. Don't settle for anything less than perfect.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
                >
                  Schedule Now
                </Link>
                <a
                  href="tel:503-555-7673"
                  className="bg-gray-200 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors"
                >
                  (503) 555-7673
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Carousel */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What Our Customers Have to Say
          </h2>

          <div className="bg-gray-50 rounded-lg p-8 shadow-lg relative">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 fill-yellow-400"
                  size={24}
                />
              ))}
            </div>

            <p className="text-xl text-gray-700 text-center mb-6 italic">
              "{reviews[currentReview].text}"
            </p>

            <p className="text-center font-semibold text-gray-900">
              {reviews[currentReview].author}
            </p>
            <p className="text-center text-gray-600 mb-6">
              {reviews[currentReview].location}
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={prevReview}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <ChevronRight size={24} className="rotate-180" />
              </button>
              <button
                onClick={nextReview}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/about"
              className="text-red-600 font-semibold hover:text-red-700 text-lg"
            >
              View More Testimonials →
            </Link>
          </div>
        </div>
      </div>

      {/* Final CTA with Promotion */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Save 10% Today!</h2>
          <p className="text-2xl mb-8">
            Contact us today to get 10% off all pressure washing services!
          </p>
          <Link
            href="/contact"
            className="bg-white text-red-600 px-10 py-4 rounded-md font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Get A Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
