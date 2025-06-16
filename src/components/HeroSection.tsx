import { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.3;
      const offset = -(scrolled * parallaxSpeed);

      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${offset}px)`;
      }
      if (splineRef.current) {
        splineRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="fixed top-0 left-0 w-full min-h-screen flex flex-col pt-20 overflow-hidden z-0"
    >
      {/* Fullscreen responsive Spline background with parallax */}
      <div
        ref={splineRef}
        className="absolute top-0 left-0 w-full h-[130vh] -z-10"
        style={{ willChange: "transform" }}
      >
        <iframe
          src="https://my.spline.design/glowingplanetparticles-5qSfykJ958pk09NZnFexIdME/"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="w-full h-full"
          style={{
            pointerEvents: "none",
            display: "block", // Avoid iframe bottom spacing in some browsers
          }}
        />
      </div>

      {/* Foreground content */}
      <div ref={heroRef} className="text-left z-10 px-6 flex flex-col">
        <h1 className="font-montserrat font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-6 tracking-tight">
          Websites
          <br />
          <span className="bg-gradient-to-r w-fit from-space-purple via-space-purple-light to-space-purple bg-clip-text text-transparent">
            &lt;/&gt;That Drive
          </span>
          <br />
          <span>Revenue</span>
        </h1>

        <div>
          <p
            className="font-lato opacity-90 text-base md:text-xl text-white/70 mb-12 max-w-2xl leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            We build high-performing websites engineered to convert visitors
            into customers and accelerate your business growth.
          </p>

          <button
            onClick={scrollToContact}
            className="neumorphic-btn text-white font-montserrat font-medium text-base tracking-wide w-fit"
            style={{ animationDelay: "0.4s" }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Orbital Decorations */}
      <div className="orbital-decoration w-32 h-32 top-20 left-10 opacity-30" />
      <div
        className="orbital-decoration w-48 h-48 top-40 right-20 opacity-20"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="orbital-decoration w-24 h-24 bottom-32 left-1/4 opacity-25"
        style={{ animationDelay: "4s" }}
      />
    </section>
  );
};

export default HeroSection;
