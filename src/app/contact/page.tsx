"use client";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

interface contactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  services: string[];
  message: string;
}
// Contact Page
export default function ContactPage() {
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
      alert(
        "Thank you for your request! We will contact you within 24 hours with your free quote."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        services: [],
        message: "",
      });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          Request Your Free Quote
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Fill out the form below, and one of our pressure washing experts will
          reach out to you with a quote in the next 24 hours!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-8">
              Have a question or ready to schedule a service? Reach out to us
              and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="text-red-600 mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a
                    href="tel:503-555-7673"
                    className="text-red-600 font-bold text-lg hover:text-red-700"
                  >
                    (503) 555-7673
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-red-600 mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@stricklandwash.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-red-600 mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 Main Street
                    <br />
                    Portland, OR 97201
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-700">
                Monday - Friday: 8:00 AM - 6:00 PM
              </p>
              <p className="text-gray-700">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
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

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Check Availability</h2>

            <div>
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
                    "Roof",
                    "Driveway",
                    "Deck/Patio",
                    "Commercial",
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
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
                >
                  Get My Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
