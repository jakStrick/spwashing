import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { getBusinessInfo, getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Request A Free Quote | Strickland Pressure Washing Services",
  description:
    "Get a free pressure washing quote in Portland, OR. We respond within 24 hours.",
};

export default function ContactPage() {
  const businessInfo = getBusinessInfo();
  const services = getServices();

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Request Your Free Quote
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Fill out the form below, and one of our pressure washing experts will
          reach out to you with a quote in the next 24 hours!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information column */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Get In Touch
            </h2>
            <p className="text-gray-700 mb-8">
              Have a question or ready to schedule a service? Reach out to us
              and we&apos;ll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="text-red-600 mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a
                    href={businessInfo.phoneHref}
                    className="text-red-600 font-bold text-lg hover:text-red-700"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-red-600 mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">{businessInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-red-600 mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    {businessInfo.address.street}
                    <br />
                    {businessInfo.address.city}, {businessInfo.address.state}{" "}
                    {businessInfo.address.zip}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-gray-900">
                Business Hours
              </h3>
              <p className="text-gray-700">
                Monday - Friday: {businessInfo.hours.weekday}
              </p>
              <p className="text-gray-700">
                Saturday: {businessInfo.hours.saturday}
              </p>
              <p className="text-gray-700">Sunday: {businessInfo.hours.sunday}</p>
            </div>

            <div className="mt-8 bg-red-50 border-2 border-red-200 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2 text-red-700">
                Special Offer!
              </h3>
              <p className="text-gray-700">
                Get 10% off when you mention this website!
              </p>
            </div>
          </div>

          {/* Contact Form column */}
          <ContactForm
            formspreeId={businessInfo.formspreeId}
            services={services}
            turnstileSiteKey={businessInfo.turnstileSiteKey}
          />
        </div>
      </div>
    </div>
  );
}
