import Image from "next/image";
import { Award, Shield, Star } from "lucide-react";

// About Page
export default function AboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          About Strickland Pressure Washing Services
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop"
              alt="Pressure washing team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-80 object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Proudly Serving Portland
            </h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010, Strickland Pressure Washing Services has been
              serving the Portland community for over a decade. We started with
              a simple mission: to provide exceptional pressure washing services
              that exceed our customers' expectations while doing it right the
              first time.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of trained professionals uses state-of-the-art equipment
              and eco-friendly cleaning solutions to deliver outstanding results
              for both residential and commercial properties.
            </p>
            <p className="text-gray-700">
              We take pride in our attention to detail, reliability, and
              commitment to customer satisfaction. Every project is approached
              with the same level of care and professionalism.
            </p>
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
            {[
              {
                text: "I would recommend Strickland Pressure Washing to anyone in Portland. They did an amazing job and were so professional throughout the entire process.",
                author: "Olivia T.",
                location: "Vernonia, OR",
              },
              {
                text: "They showed up on time and were very professional. I would definitely recommend them to anyone looking for pressure washing services.",
                author: "Susan P.",
                location: "Portland, OR",
              },
              {
                text: "Strickland transformed our home's exterior. The siding and concrete work were superb. Fair pricing and excellent communication throughout.",
                author: "Jennifer L.",
                location: "Lake Oswego, OR",
              },
              {
                text: "They did a great job washing my truck and it looked great. Highly recommend!",
                author: "DCSS Customer",
                location: "Beaverton, OR",
              },
            ].map((review) => (
              <div
                key={review.author}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
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
                <p className="text-gray-700 mb-3 italic">"{review.text}"</p>
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
