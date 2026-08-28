import Image from "next/image";
import type { BusinessInfo } from "@/lib/content";

const Logo = ({ className = "h-36 w-full" }) => (
  <Image
    src="/images/logo/stricklandPressure.svg"
    alt="Strickland Pressure Washing Services"
    width={850}
    height={100}
    className={className}
  />
);

export default function Footer({
  businessInfo,
}: {
  businessInfo: BusinessInfo;
}) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo className="h-36 w-64" />
            </div>
            <p className="text-gray-400">
              Portland&apos;s Professional Cleaning Solutions
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Phone: {businessInfo.phone}</p>
            <p className="text-gray-400 mb-2">Email: {businessInfo.email}</p>
            <p className="text-gray-400">
              {businessInfo.address.street}, {businessInfo.address.city},{" "}
              {businessInfo.address.state} {businessInfo.address.zip}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <p className="text-gray-400 mb-2">
              Mon-Fri: {businessInfo.hours.weekday}
            </p>
            <p className="text-gray-400 mb-2">
              Sat: {businessInfo.hours.saturday}
            </p>
            <p className="text-gray-400">Sun: {businessInfo.hours.sunday}</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} {businessInfo.name}. All rights
            reserved.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <span className="text-gray-400">·</span>
            <a href="#" className="text-gray-400 hover:text-white">
              Sitemap
            </a>
          </div>
          <p className="mt-4 text-gray-500 text-xs">
            Site designed & developed by{" "}
            <a
              href="https://www.dcsswebdev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              DCSS Web Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
