"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

interface Referral {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
}

const referrals: Referral[] = [
  {
    id: "1",
    name: "Strickland Pressure Washing",
    url: "https://www.stricklandpressurewasher.com",
    description: "Portland's Top Pressure Washer",
    category: "Pressure Washing Business",
  },
  {
    id: "2",
    name: "Upper Nehalem Watershed Council",
    url: "https://www.unwc.org",
    description:
      "The UNWC, as part of the Nehalem Basin Partnership, presents the Nehalem Landowner Engagement Initiative.",
    category: "Land Management",
  },
];

export default function ReferralsPage() {
  const categories = [...new Set(referrals.map((r) => r.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Referral Partners
          </h1>
          <p className="text-lg text-gray-600">
            Trusted websites and services I recommend
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {category}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {referrals
                  .filter((r) => r.category === category)
                  .map((referral) => (
                    <ReferralCard key={referral.id} referral={referral} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReferralCard({ referral }: { referral: Referral }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {referral.name}
      </h3>

      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {referral.description}
      </p>

      <a
        href={referral.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition"
      >
        Visit Website
        <ExternalLink size={16} />
      </a>
    </div>
  );
}
