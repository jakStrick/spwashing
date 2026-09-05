"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import TurnstileWidget from "@/components/TurnstileWidget";
import type { Service } from "@/lib/content";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  services: string[];
  message: string;
}

export default function ContactForm({
  formspreeId,
  services,
  turnstileSiteKey,
}: {
  formspreeId: string;
  services: Service[];
  turnstileSiteKey: string;
}) {
  const [state, handleFormspreeSubmit] = useForm(formspreeId);
  const [contactFormData, setFormData] = useState<ContactFormData>({
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
      !contactFormData.name ||
      !contactFormData.email ||
      !contactFormData.phone
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    const turnstileToken = new FormData(e.currentTarget).get(
      "cf-turnstile-response",
    );
    if (!turnstileToken) {
      alert("Please complete the verification challenge.");
      return;
    }
    try {
      await handleFormspreeSubmit(e);
    } finally {
      // Turnstile tokens are single-use; hand the widget back for a retry.
      window.turnstile?.reset();
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

  if (state.succeeded) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 text-center py-12">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Thank You!</h2>
        <p className="text-gray-600">
          We&apos;ll contact you within 24 hours with your free quote.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Check Availability
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
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
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
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
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
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
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
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
          {services.map((service) => (
            <label
              key={service.slug}
              className="flex items-center mb-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={contactFormData.services.includes(service.shortTitle)}
                onChange={() => handleServiceToggle(service.shortTitle)}
                className="mr-2 w-4 h-4 text-red-600"
              />
              <span>{service.shortTitle}</span>
            </label>
          ))}
          <input
            type="hidden"
            name="services"
            value={contactFormData.services.join(", ")}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
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
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <div className="mb-4">
          <TurnstileWidget siteKey={turnstileSiteKey} />
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
  );
}
