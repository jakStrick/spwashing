"use client";
import Image from "next/image";
import { Phone, Check, Star } from "lucide-react";

export default function FlyerPage() {
  const services = [
    "House Washing",
    "Driveway Cleaning",
    "Deck & Fence Cleaning",
    "Concrete Sealing",
    "Outdoor Siding",
    "Vehicle Washing",
  ];

  const credentials = [
    { value: "100%", label: "Guarantee" },

    { value: "5-Star", label: "Reviewed" },
  ];

  return (
    <>
      <style>{`
        @media print {
          @page { size: letter; margin: 0.35in; }
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
      `}</style>

      {/* On-screen print button */}
      <div className="print:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.print()}
          className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-blue-800 transition-colors text-base"
        >
          Print Flyer
        </button>
      </div>

      {/* Gray backdrop on screen so the paper edge is visible */}
      <div className="bg-gray-300 min-h-screen flex justify-center py-10 print:p-0 print:bg-white print:block">
        <div className="bg-white w-full max-w-[8.5in] shadow-2xl print:shadow-none print:max-w-full">
          {/* ── HEADER ── */}
          <div className="bg-blue-900 text-white px-8 py-5 flex items-center justify-between">
            <div>
              <div className="text-3xl font-black tracking-tight leading-none">
                STRICKLAND
              </div>
              <div className="text-sm font-bold tracking-[0.2em] text-blue-200 mt-0.5">
                PRESSURE WASHING SERVICES
              </div>
              <div className="text-xs text-blue-300 mt-1">PORTLAND, OR</div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-2">
                <Phone size={16} className="text-blue-300" />
                <span className="text-3xl font-black">(503) 812-9841</span>
              </div>
              <div className="text-xs text-blue-300 mt-1">
                AVAILABLE 7 DAYS A WEEK
              </div>
            </div>
          </div>

          {/* ── OFFER BANNER ── */}
          <div className="bg-red-600 text-white text-center py-2.5 px-4">
            <span className="text-xl font-black">SAVE 10% TODAY!</span>
            <span className="text-sm font-semibold ml-3">
              Mention this flyer when you call — limited time offer
            </span>
          </div>

          {/* ── HEADLINE ── */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <Image
                src="/images/me/me.webp"
                alt="David Strickland"
                width={72}
                height={72}
                className="rounded w-40 h-40 object-cover flex-shrink-0"
              />
              <div>
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">
                  #1 PRESSURE WASHING IN PORTLAND
                </h1>
                <p className="text-base font-semibold text-blue-900 mt-0.5">
                  We Do It Right The First Time!
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Serving Portland, Beaverton, Lake Oswego, Tigard, Hillsboro &amp;
                  surrounding areas
                </p>
              </div>
            </div>
          </div>

          {/* ── BEFORE / AFTER PHOTOS ── */}
          <div className="px-6 pt-4 pb-3">
            <p className="text-[10px] font-bold text-center text-gray-400 uppercase tracking-widest mb-3">
              Real Results From Your Neighbors
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  before: "/images/portfolio/spw11.webp",
                  after: "/images/portfolio/spw10.webp",
                },
                {
                  before: "/images/portfolio/spw5.webp",
                  after: "/images/portfolio/spw7.webp",
                },
              ].map((pair, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded overflow-hidden"
                >
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="relative">
                      <span className="absolute top-1 left-1 z-10 bg-blue-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                        BEFORE
                      </span>
                      <Image
                        src={pair.before}
                        alt="Before pressure washing"
                        width={300}
                        height={180}
                        className="w-full h-28 object-cover"
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute top-1 left-1 z-10 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                        AFTER
                      </span>
                      <Image
                        src={pair.after}
                        alt="After pressure washing"
                        width={300}
                        height={180}
                        className="w-full h-28 object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SERVICES ── */}
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
            <p className="text-[10px] font-bold text-center text-gray-400 uppercase tracking-widest mb-3">
              Our Services
            </p>
            <div className="grid grid-cols-3 gap-2">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white border border-gray-100 rounded px-3 py-2"
                >
                  <Check size={13} className="text-blue-900 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── TESTIMONIAL ── */}
          <div className="px-10 py-4 border-t border-gray-100 text-center">
            <div className="flex justify-center gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-600 italic text-sm leading-relaxed">
              &ldquo;We have used Strickland Pressure Washing for several years.
              It always looks great when they are finished. Would recommend
              their services to anyone!&rdquo;
            </p>
            <p className="text-xs font-bold text-gray-700 mt-1">
              — Sarah M., Portland, OR
            </p>
          </div>

          {/* ── CREDENTIALS BAR ── */}
          <div className="bg-blue-900 text-white px-6 py-3">
            <div className="flex justify-around text-center">
              {credentials.map((c, i) => (
                <div key={i}>
                  <div className="text-sm font-black">{c.value}</div>
                  <div className="text-[10px] text-blue-300">{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── FOOTER CTA ── */}
          <div className="px-6 pt-6 pb-8 text-center border-t-4 border-red-600">
            <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-2">
              Ready for a cleaner home? Call or book online!
            </p>
            <div className="text-5xl font-black text-blue-900 mb-4">
              (503) 812-9841
            </div>
            <div className="flex justify-center gap-3">
              <span className="bg-red-600 text-white text-xs font-bold px-4 py-2 rounded">
                FREE QUOTES
              </span>
              <span className="bg-blue-900 text-white text-xs font-bold px-4 py-2 rounded">
                7 DAYS A WEEK
              </span>
              <span className="bg-gray-800 text-white text-xs font-bold px-4 py-2 rounded">
                NO CONTRACTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
