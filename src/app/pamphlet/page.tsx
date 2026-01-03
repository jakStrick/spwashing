"use client";

import { useState } from "react";

export default function PamphletPage() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 py-8 px-4">
      {/* Print Button */}
      <div className="max-w-[8.5in] mx-auto mb-4 flex justify-end gap-4 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="w-[8.5in] min-h-[11in] mx-auto bg-white shadow-2xl flex flex-col print:w-full print:shadow-none">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-red-600 to-red-800 p-8 text-center text-white overflow-hidden">
          <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>

          {/* Guarantee Badge */}
          <div className="absolute top-5 right-5 bg-white text-red-600 w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center font-bold shadow-xl border-4 border-yellow-300">
            <span className="text-3xl">100%</span>
            <span className="text-[11px] text-center">
              SATISFACTION GUARANTEE
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-2 relative drop-shadow-lg">
            STRICKLAND
          </h1>
          <div className="text-xl mb-5 relative">
            Portland's #1 Professional Pressure Washing
          </div>
          <div className="text-4xl font-bold bg-white text-red-600 py-4 px-8 rounded-xl inline-block shadow-lg relative">
            ☎ (503) 555-7673
          </div>
        </div>

        {/* Content */}
        <div className="p-8 pt-12 grid gap-6 flex-1">
          {/* Special Offer */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-400 border-[3px] border-dashed border-red-600 p-5 text-center rounded-xl shadow-md mt-8">
            <h2 className="text-red-600 text-3xl mb-2">
              🎉 SPECIAL NEIGHBOR DISCOUNT! 🎉
            </h2>
            <p className="text-lg text-gray-800">
              <strong>SAVE 10%</strong> When You Mention This Flyer!
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-100 p-4 rounded-lg">
              <span className="text-4xl font-bold text-red-600 block">15+</span>
              <span className="text-xs text-gray-600 mt-1">
                YEARS OF SERVICE
              </span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <span className="text-4xl font-bold text-red-600 block">
                50K+
              </span>
              <span className="text-xs text-gray-600 mt-1">
                SATISFIED CUSTOMERS
              </span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <span className="text-4xl font-bold text-red-600 block">A+</span>
              <span className="text-xs text-gray-600 mt-1">BBB RATING</span>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "🏠",
                title: "House Washing",
                desc: "Safe, effective cleaning that restores your home's beauty",
              },
              {
                icon: "🚗",
                title: "Driveway & Concrete",
                desc: "Remove years of dirt and grime from all concrete surfaces",
              },
              {
                icon: "🏢",
                title: "Roof Treatment",
                desc: "Eliminate moss, algae, and black streaks safely",
              },
              {
                icon: "🪵",
                title: "Deck & Fence",
                desc: "Revive wooden structures with specialized cleaning",
              },
              {
                icon: "🏭",
                title: "Commercial",
                desc: "Professional services for businesses and buildings",
              },
              {
                icon: "🛡️",
                title: "Concrete Sealing",
                desc: "Protect surfaces from weather and extend lifespan",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 border-l-4 border-red-600 p-4 rounded"
              >
                <h3 className="text-red-600 text-base mb-2">
                  {service.icon} {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-snug">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-blue-800 text-white p-5 rounded-xl">
            <h2 className="text-2xl mb-4 text-center">
              Why Choose Strickland?
            </h2>
            <ul className="grid grid-cols-2 gap-2 list-none">
              {[
                "Fully Insured & Bonded",
                "Trained Professionals",
                "Eco-Friendly Products",
                "Free Estimates",
                "Same-Week Service",
                "Satisfaction Guaranteed",
              ].map((benefit, index) => (
                <li key={index} className="pl-6 relative text-sm">
                  <span className="absolute left-0 font-bold text-lg">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white p-5 grid grid-cols-2 gap-5 items-center">
          <div>
            <h3 className="text-lg mb-2">📍 Contact Us Today!</h3>
            <p className="text-sm leading-relaxed mb-1">
              <strong>Phone:</strong> (503) 555-7673
            </p>
            <p className="text-sm leading-relaxed mb-1">
              <strong>Email:</strong> info@stricklandwash.com
            </p>
            <p className="text-sm leading-relaxed mb-1">
              <strong>Address:</strong> 123 Main Street, Portland, OR 97201
            </p>
            <p className="text-sm leading-relaxed">
              <strong>Hours:</strong> Mon-Fri 8AM-6PM, Sat 9AM-4PM
            </p>
          </div>
          <div className="text-right">
            <div className="bg-red-600 text-white py-4 px-8 rounded-lg text-lg font-bold inline-block mb-2 shadow-lg">
              GET YOUR FREE QUOTE!
            </div>
            <div className="text-base text-yellow-300">
              www.stricklandpressurewasher.com
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          html,
          body {
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
          }
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
          }
        }
        @page {
          size: letter;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
