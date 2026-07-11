"use client";
import Image from "next/image";

export default function PamphletPage() {
  const handlePrint = () => {
    window.print();
  };

  const services = [
    {
      icon: "🏠",
      title: "House Washing",
      desc: "Safe, effective cleaning that restores your home's exterior beauty and protects the surface.",
    },
    {
      icon: "🛣️",
      title: "Driveway & Concrete",
      desc: "Remove years of dirt and grime from driveways, sidewalks, and all concrete surfaces.",
    },
    {
      icon: "🪵",
      title: "Deck & Fence",
      desc: "Revive wooden structures with our specialized pressure washing process.",
    },
    {
      icon: "🧱",
      title: "Outdoor Siding",
      desc: "Remove mold, mildew, and buildup from all exterior siding types safely.",
    },
    {
      icon: "🚘",
      title: "Vehicle Washing",
      desc: "Low-pressure exterior wash for cars, trucks, RVs, and fleet vehicles.",
    },
    {
      icon: "🛡️",
      title: "Concrete Sealing",
      desc: "Protect your concrete surfaces from weathering and extend their lifespan.",
    },
  ];

  const benefits = [
    "Trained Professionals",
    "Eco-Friendly Products",
    "Free Estimates",
    "Same-Week Service",
    "Satisfaction Guaranteed",
  ];

  return (
    <div className="bg-gray-200 py-8 px-4">
      {/* Print Button */}
      <div className="max-w-[8.5in] mx-auto mb-4 flex justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg"
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="w-[8.5in] min-h-[11in] mx-auto bg-white shadow-2xl flex flex-col print:w-full print:shadow-none">
        {/* Header: Logo + Guarantee */}
        <div className="bg-white px-10 pt-6 pb-4 flex items-center justify-between border-b-4 border-red-600">
          <Image
            src="/images/logo/stricklandPressure.svg"
            alt="Strickland Pressure Washing Services"
            width={850}
            height={100}
            className="h-20 w-auto"
            priority
          />
          <Image
            src="/images/logo/DCSS_Guarantee.svg"
            alt="100% Satisfaction Guarantee"
            width={300}
            height={300}
            className="h-24 w-auto"
            priority
          />
        </div>

        {/* Red phone banner */}
        <div className="bg-red-600 text-white text-center py-4">
          <p className="text-sm font-semibold tracking-widest uppercase mb-1">
            Call Now for Your Free Quote
          </p>
          <p className="text-4xl font-bold tracking-wide">(503) 812-9841</p>
        </div>

        {/* Body */}
        <div className="flex-1 px-8 py-6 flex flex-col gap-6">
          {/* Services */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-l-4 border-red-600 pl-3">
              Our Services
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200"
                >
                  <span className="text-2xl flex-shrink-0">{service.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-snug">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-blue-900 text-white rounded-xl p-5">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
              Why Choose Strickland?
            </h2>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm">
                  <span className="text-white font-bold text-base flex-shrink-0">
                    ✓
                  </span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 text-center">
            <h3 className="text-red-700 font-bold text-2xl mb-1">
              Special Offer — Save 10%!
            </h3>
            <p className="text-gray-700 text-sm">
              Mention this flyer when you call and receive 10% off any service.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-900 text-white px-8 py-5 flex items-center justify-between">
          <div className="text-sm space-y-1">
            <p className="font-bold text-base mb-2">Contact Us Today</p>
            <p>
              <span className="text-gray-300">Phone: </span>(503) 812-9841
            </p>
            <p>
              <span className="text-gray-300">Email: </span>
              stricklandpwashing@gmail.com
            </p>
            <p>
              <span className="text-gray-300">Address: </span>17692 SW Falling
              Leaf Ct., Beaverton, OR 97003
            </p>
            <p>
              <span className="text-gray-300">Hours: </span>Mon–Fri 8AM–6PM
              &nbsp;·&nbsp; Sat 9AM–4PM
            </p>
          </div>
          <div className="text-right flex flex-col items-end gap-2">
            <div className="bg-red-600 text-white py-3 px-6 rounded-lg font-bold text-lg shadow-lg">
              GET YOUR FREE QUOTE!
            </div>
            <p className="text-gray-300 text-sm">
              www.stricklandpressurewashing.com
            </p>
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
          }
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
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
