"use client";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

interface contactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  services: string[];
  message: string;
}

export default function ContactPage() {
  const [state, handleFormspreeSubmit] = useForm("mpqgbzlv"); // <-- new
  const [contactFormData, setFormData] = useState<contactFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: [] as string[],
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      contactFormData.name &&
      contactFormData.email &&
      contactFormData.phone
    ) {
      await handleFormspreeSubmit(e); // <-- sends to Formspree instead of alert
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...contactFormData,
      [name]: value,
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  // Show thank-you message once Formspree confirms success
  if (state.succeeded) {
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Thank You!</h1>
          <p className="text-gray-600">
            We'll contact you within 24 hours with your free quote.
          </p>
        </div>
      </div>
    );
  }

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

        {/* Contact Info column stays exactly the same */}
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Check Availability
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="name"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactFormData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="phone"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={contactFormData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={contactFormData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  What Are We Cleaning For You? *
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  Select multiple services & save 10%!
                </p>
                {[
                  "House",
                  "Driveway",
                  "Deck/Patio",
                  "Outdoor Siding",
                  "Vehicle Washing",
                ].map((service) => (
                  <label
                    key={service}
                    className="flex items-center mb-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={contactFormData.services.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="mr-2 w-4 h-4 text-red-600"
                    />
                    <span>{service}</span>
                  </label>
                ))}
                {/* Hidden field so Formspree actually receives the services array */}
                <input
                  type="hidden"
                  name="services"
                  value={contactFormData.services.join(", ")}
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="message"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactFormData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                {state.submitting ? "Sending..." : "Get My Free Quote"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
