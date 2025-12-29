import { Award, Shield, Star } from "lucide-react";

// About Page
export default function AboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          About Strickland Pressure Washing Services
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop"
              alt="Pressure washing team"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">
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
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="text-red-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our work or materials
              </p>
            </div>
            <div className="text-center">
              <Shield className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                Honest pricing and transparent communication with every client
              </p>
            </div>
            <div className="text-center">
              <Star className="text-yellow-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Using the latest techniques and equipment for best results
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Customer Reviews
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="text-yellow-400 fill-yellow-400"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic">
                  "Outstanding service! The team was professional and the
                  results were amazing. Highly recommend Strickland Pressure
                  Washing Services!"
                </p>
                <p className="font-semibold text-gray-900">Customer Name</p>
                <p className="text-sm text-gray-600">Portland, OR</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
