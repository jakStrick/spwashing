"use client";
import { useState } from "react";
import { ChevronRight, Star } from "lucide-react";
import type { Testimonial } from "@/lib/content";

export default function ReviewCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const review = testimonials[current];

  return (
    <div className="bg-gray-50 rounded-lg p-8 shadow-lg relative">
      <div className="flex justify-center mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
        ))}
      </div>

      <div
        className="text-xl text-gray-700 text-center mb-6 italic"
        dangerouslySetInnerHTML={{ __html: review.textHtml }}
      />

      <p className="text-center font-semibold text-gray-900">{review.author}</p>
      <p className="text-center text-gray-600 mb-6">{review.location}</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous review"
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          <ChevronRight size={24} className="rotate-180" />
        </button>
        <button
          onClick={next}
          aria-label="Next review"
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
