import Image from "next/image";
import type { Metadata } from "next";
import { Award, Shield, Star } from "lucide-react";
import { getAboutContent, getTestimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us | Strickland Pressure Washing Services",
  description:
    "Serving the Portland community since 2010 with professional, eco-friendly pressure washing for homes and businesses.",
};

export default function AboutPage() {
  const about = getAboutContent();
  const testimonials = getTestimonials();

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          About Strickland Pressure Washing Services
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/images/me/me.webp"
              alt="Pressure washing team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-120 object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {about.heading}
            </h2>
            <div
              className="text-gray-700 [&>p+p]:mt-4"
              dangerouslySetInnerHTML={{ __html: about.bodyHtml }}
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="text-red-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Quality
              </h3>
              <p className="text-gray-600">
                We never compromise on the quality of our work or materials
              </p>
            </div>
            <div className="text-center">
              <Shield className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Integrity
              </h3>
              <p className="text-gray-600">
                Honest pricing and transparent communication with every client
              </p>
            </div>
            <div className="text-center">
              <Star className="text-yellow-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Reliability
              </h3>
              <p className="text-gray-600">
                We show up on time and complete every job on schedule — no
                surprises
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Customer Reviews
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((review) => (
              <div
                key={review.slug}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star
                        key={index}
                        className="text-yellow-400 fill-yellow-400"
                        size={20}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                    ✓ Verified Review
                  </span>
                </div>
                <div
                  className="text-gray-700 mb-3 italic"
                  dangerouslySetInnerHTML={{ __html: review.textHtml }}
                />
                <p className="font-semibold text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
