const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Harmoni</h2>
          <p className="text-sm text-gray-400">
            Creating unforgettable event experiences with style and simplicity.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-orange-400 transition">
                Events
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-orange-400 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Harmoni. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
