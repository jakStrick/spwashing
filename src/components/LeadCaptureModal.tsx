"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import TurnstileWidget from "@/components/TurnstileWidget";

const SESSION_KEY = "spw_lead_modal_shown";
const TIME_TRIGGER_MS = 45000; // pop up after ~45s of engaged time on page
const EXIT_INTENT_ARM_DELAY_MS = 8000; // ignore stray cursor moves right after load
const SUPPRESSED_PATHS = ["/contact", "/flyer", "/pamphlet"];

export default function LeadCaptureModal({
  formspreeId,
  turnstileSiteKey,
}: {
  formspreeId: string;
  turnstileSiteKey: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [state, handleFormspreeSubmit] = useForm(formspreeId);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const shownRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

  useEffect(() => {
    if (SUPPRESSED_PATHS.includes(pathname)) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const trigger = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
    };

    const armedAt = Date.now();

    const onMouseLeave = (e: MouseEvent) => {
      if (Date.now() - armedAt < EXIT_INTENT_ARM_DELAY_MS) return;
      // Cursor exiting toward the top of the viewport (tabs/address bar) reads as "about to leave"
      if (e.clientY <= 0) trigger();
    };

    const timeoutId = setTimeout(trigger, TIME_TRIGGER_MS);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="print:hidden fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-heading"
        className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        {state.succeeded ? (
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              You&apos;re all set!
            </h2>
            <p className="text-gray-600">
              We&apos;ll reach out within 24 hours with your free quote.
            </p>
          </div>
        ) : (
          <>
            <h2
              id="lead-modal-heading"
              className="text-2xl font-bold text-gray-900 mb-2 pr-6"
            >
              Wait — Get 10% Off Your First Wash!
            </h2>
            <p className="text-gray-600 mb-6">
              Leave your name and number and we&apos;ll reach out with a free,
              no-obligation quote.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="source" value="exit-intent-modal" />
              <div>
                <label htmlFor="modal-name" className="sr-only">
                  Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="modal-phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>
              <TurnstileWidget siteKey={turnstileSiteKey} />
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                {state.submitting ? "Sending..." : "Get My Free Quote"}
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              No spam — we&apos;ll only use this to follow up about your quote.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
