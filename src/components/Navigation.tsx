
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Work', href: '/portfolio' },
    { name: 'Why Us', href: '/#strengths' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      // Handle anchor links on homepage
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-blur py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="font-montserrat font-bold text-2xl text-white tracking-tight">
            N&i
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="font-lato font-light text-white/80 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="font-lato font-light text-white/80 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
             onClick={() => setIsMobileMenuOpen(false)} />
        
        <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-space-dark/95 backdrop-blur-xl border-l border-space-purple/20 transform transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-20 px-8">
            {navItems.map((item, index) => (
              item.href.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`font-lato text-lg text-white/80 hover:text-white transition-all duration-300 py-4 text-left border-b border-space-purple/10 last:border-b-0 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-lato text-lg text-white/80 hover:text-white transition-all duration-300 py-4 text-left border-b border-space-purple/10 last:border-b-0 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
