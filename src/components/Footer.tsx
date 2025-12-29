const Logo = ({ className = "h-36 w-full" }) => (
  <img
    src="/images/logo/stricklandPressure.svg"
    alt="Strickland Pressure Washing Services"
    className={className}
  />
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo className="h-36 w-64" />
            </div>
            <p className="text-gray-400">
              Portland's Professional Cleaning Solutions
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Phone: (503) 555-7673</p>
            <p className="text-gray-400 mb-2">Email: info@stricklandwash.com</p>
            <p className="text-gray-400">123 Main Street, Portland, OR 97201</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <p className="text-gray-400 mb-2">Mon-Fri: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-400 mb-2">Sat: 9:00 AM - 4:00 PM</p>
            <p className="text-gray-400">Sun: Closed</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Strickland Pressure Washing Services. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <span className="text-gray-600">·</span>
            <a href="#" className="text-gray-400 hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
