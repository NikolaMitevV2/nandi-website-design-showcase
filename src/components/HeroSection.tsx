
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      <div ref={heroRef} className="text-center z-10 px-6">
        <h1 className="animate-on-scroll font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
          Luxury Web
          <br />
          <span className="bg-gradient-to-r from-space-purple via-space-purple-light to-space-purple bg-clip-text text-transparent">
            Development
          </span>
        </h1>
        
        <p className="animate-on-scroll font-lato font-light text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
          We create extraordinary digital experiences that elevate your brand and drive results
        </p>

        <button 
          onClick={scrollToContact}
          className="animate-on-scroll neumorphic-btn text-white font-montserrat font-medium text-lg tracking-wide"
          style={{ animationDelay: '0.4s' }}
        >
          Get Started
        </button>
      </div>

      {/* Hero Image */}
      <div className="animate-on-scroll mt-16 w-full max-w-6xl mx-auto px-6" style={{ animationDelay: '0.6s' }}>
        <div className="relative">
          <img 
            src="/lovable-uploads/7454071a-e5dd-413d-9fce-925fdaa9c4c4.png" 
            alt="Luxury Design Mockup"
            className="w-full h-auto rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-dark/50 to-transparent rounded-3xl" />
        </div>
      </div>

      {/* Orbital Decorations */}
      <div className="orbital-decoration w-32 h-32 top-20 left-10 opacity-30" />
      <div className="orbital-decoration w-48 h-48 top-40 right-20 opacity-20" style={{ animationDelay: '2s' }} />
      <div className="orbital-decoration w-24 h-24 bottom-32 left-1/4 opacity-25" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default HeroSection;
