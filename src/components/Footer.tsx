const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-16 px-6 border-t border-space-purple/20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-8">
          <div className="font-montserrat font-bold text-3xl text-white tracking-tight">
            N&i
          </div>

          <p className="font-lato font-light text-body max-w-2xl mx-auto leading-relaxed text-gray-50">
            Crafting luxury digital experiences that elevate brands and drive
            exceptional results. Your vision, our expertise.
          </p>

          <div className="flex justify-center space-x-8">
            <a
              href="#home"
              className="font-lato font-light text-body text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="font-lato font-light text-body text-gray-300 hover:text-white transition-colors duration-300"
            >
              Our Work
            </a>
            <a
              href="#strengths"
              className="font-lato font-light text-body text-gray-300 hover:text-white transition-colors duration-300"
            >
              Why Us
            </a>
            <a
              href="#about"
              className="font-lato font-light text-body text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="font-lato font-light text-body text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <div className="pt-8 border-t border-space-purple/20">
            <p className="font-lato font-light text-body text-sm text-gray-300">
              © {currentYear} N&i. All rights reserved. Crafted with passion and
              precision.
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="orbital-decoration w-32 h-32 top-10 left-10 opacity-10" />
      <div
        className="orbital-decoration w-20 h-20 bottom-10 right-20 opacity-15"
        style={{
          animationDelay: "3s",
        }}
      />
    </footer>
  );
};
export default Footer;
