import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // Reference to the main section
  const heroRef = useRef<HTMLDivElement>(null); // Reference to the foreground content
  const splineRef = useRef<HTMLDivElement>(null); // Reference to the Spline iframe container
  const statsGridRef = useRef<HTMLDivElement>(null); // Reference for the stats/values grid

  useEffect(() => {
    if (!sectionRef.current || !heroRef.current || !splineRef.current) {
      return;
    }

    // 1. Animate the opacity of the entire HeroSection to fade it out
    gsap.to(sectionRef.current, {
      opacity: 0, // Make the entire fixed section fade out
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom center", // Start fading when the bottom of the section hits the center of the viewport
        end: "bottom top", // Fully faded when the bottom of the section hits the top of the viewport
        scrub: true,
      },
    });

    // 2. Parallax animation for the foreground content (text and button)
    gsap.to(heroRef.current, {
      y: (index, target) => -target.offsetHeight * 0.3, // Parallax effect
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current, // Trigger based on the parent section
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // 3. Parallax animation for the Spline iframe (background)
    gsap.to(splineRef.current, {
      y: (index, target) => -target.offsetHeight * 0.3, // Parallax effect
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current, // Trigger based on the parent section
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Parallax animation for the Stats/Values Grid
    if (statsGridRef.current) {
      gsap.to(statsGridRef.current, {
        y: (index, target) => -target.offsetHeight * 0.2, // Slightly less parallax than hero/spline
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate("/contact");
  };

  return (
    <section
      id="home"
      ref={sectionRef} // Attach ref to the main section
      className="fixed top-0 left-0 w-full min-h-screen flex flex-col pt-20 overflow-hidden z-0"
    >
      <div
        ref={splineRef}
        className="absolute top-0 left-0 w-full h-[130vh] -z-10" // Spline height is unchanged
        style={{ willChange: "transform" }}
      >
        <iframe
          src="https://my.spline.design/glowingplanetparticles-5qSfykJ958pk09NZnFexIdME/"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="w-full h-full"
          style={{
            pointerEvents: "none",
            display: "block",
          }}
        />
      </div>

      {/* Foreground content */}
      <div
        ref={heroRef}
         className="z-20 px-6 flex flex-col flex-grow relative min-h-0
             text-center lg:text-left
             items-center md:items-center lg:items-start
             justify-center md:justify-center lg:justify-start
             pt-8 pl-0 md:pl-0 lg:pl-24 sm:pt-0"
      >
        <h1 className="font-montserrat font-bold text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] text-white mb-6 tracking-tight">
          Websites
          <br />
          <span className="bg-gradient-to-r from-space-purple via-space-purple-light to-space-purple bg-clip-text text-transparent w-fit">
            &lt;/&gt;That Drive
          </span>
          <br />
          <span>Revenue</span>
        </h1>
        <div className="flex flex-col items-center lg:items-start">
          <p
            className="font-lato opacity-90 text-base md:text-xl text-white/70 mb-12 max-w-2xl leading-relaxed" // Paragraph text size unchanged from original for mobile
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

        {/* Dynamic Grid Element for Key Values - Hidden on smallest screens */}
        <div
          ref={statsGridRef}
          className="npm hidden static mt-8 mx-auto md:mx-auto lg:absolute lg:bottom-6 lg:right-4 lg:mr-16 lg:mt-0
             w-[240px] xs:w-[300px] sm:w-[514px] md:w-[537px] lg:w-[580px] xl:w-[700px] xl:m-auto h-auto p-2 rounded-2xl
             bg-gray-900/30 backdrop-blur-md opacity-95 overflow-hidden
             sm:grid  // Only becomes visible at sm:640px
             grid-cols-4 grid-rows-4 gap-2 md:gap-3
             auto-rows-fr
             pointer-events-none
             border border-white/10"
          style={{ transform: "translateZ(0)", willChange: "transform" }}
        >
          {/* Hero Statement - Top spanning element that tells the story */}
          <div
            className="col-span-4 row-span-1 p-2 sm:p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white/95
                       flex flex-col justify-center items-center text-center shadow-lg border border-purple-400/20
                       hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 mb-0.5">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-montserrat font-bold text-sm sm:text-base lg:text-lg">
                Ready to Build Revenue-Driving Websites
              </h3>
            </div>
            <p className="font-lato text-xs text-white/70">
              From concept to conversion - we handle the complete journey
            </p>
          </div>

          {/* Our Process - Left side story flow */}
          <div
            className="col-span-2 row-span-2 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-white/90
                       flex flex-col justify-between shadow-lg border border-blue-400/20
                       hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h3 className="font-montserrat font-bold text-base sm:text-lg">
                  Our Process
                </h3>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-xs">
                  <span className="w-4 h-4 bg-purple-500/30 rounded-full flex items-center justify-center text-[0.6rem] font-bold">
                    1
                  </span>
                  <span className="font-lato text-white/80">
                    Discovery & Strategy
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span className="w-4 h-4 bg-purple-500/30 rounded-full flex items-center justify-center text-[0.6rem] font-bold">
                    2
                  </span>
                  <span className="font-lato text-white/80">
                    Design & Prototyping
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span className="w-4 h-4 bg-purple-500/30 rounded-full flex items-center justify-center text-[0.6rem] font-bold">
                    3
                  </span>
                  <span className="font-lato text-white/80">
                    Development & Testing
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span className="w-4 h-4 bg-purple-500/30 rounded-full flex items-center justify-center text-[0.6rem] font-bold">
                    4
                  </span>
                  <span className="font-lato text-white/80">
                    Launch & Optimization
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-2 p-1 bg-white/5 rounded-lg">
              <p className="font-lato text-xs text-white/70 p-2">
                Transparent communication every step of the way
              </p>
            </div>
          </div>

          {/* Tech Stack - Prominent but refined */}
          <div
            className="col-span-2 row-span-1 p-2 sm:p-3 rounded-xl bg-gradient-to-r from-violet-500/15 to-pink-500/15 text-white/90
                       flex flex-col justify-center shadow-lg border border-violet-400/20
                       hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-1">
              <svg
                className="w-4 h-4 text-violet-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <h3 className="font-montserrat font-bold text-base sm:text-lg">
                Modern Tech Stack
              </h3>
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              <span className="px-1.5 py-0.5 bg-blue-500/20 rounded-md text-[0.65rem] sm:text-xs font-medium">
                React
              </span>
              <span className="px-1.5 py-0.5 bg-green-500/20 rounded-md text-[0.65rem] sm:text-xs font-medium">
                Node.js
              </span>
              <span className="px-1.5 py-0.5 bg-purple-500/20 rounded-md text-[0.65rem] sm:text-xs font-medium">
                Tailwind
              </span>
            </div>
          </div>

          {/* Why Choose Us - Value proposition */}
          <div
            className="col-span-2 row-span-1 p-2 sm:p-3 rounded-xl bg-gradient-to-r from-emerald-500/15 to-teal-500/15 text-white/90
                       flex flex-col justify-center shadow-lg border border-emerald-400/20
                       hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-1">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-montserrat font-bold text-base sm:text-lg">
                Why Choose Us
              </h3>
            </div>
            <p className="font-lato text-xs text-white/80">
              <span className="text-emerald-300 font-semibold">
                Fast delivery
              </span>
              ,
              <span className="text-emerald-300 font-semibold">
                {" "}
                scalable code
              </span>
              ,
              <span className="text-emerald-300 font-semibold">
                {" "}
                ongoing support
              </span>
            </p>
          </div>

          {/* Team Credentials - Building trust */}
          <div
            className="col-span-1 row-span-1 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-orange-500/15 to-red-500/15 text-white/90
                       flex flex-col justify-center items-center text-center shadow-lg border border-orange-400/20
                       hover:scale-[1.05] transition-all duration-300"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-orange-500/30 rounded-full flex items-center justify-center mb-1">
              <svg
                className="w-3 h-3 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <h4 className="font-montserrat font-semibold text-xs mb-0.5">
              Expert Team
            </h4>
            <p className="font-lato text-[0.6rem] text-white/70">
              7+ years combined experience
            </p>
          </div>

          {/* Guarantee/Promise */}
          <div
            className="col-span-1 row-span-1 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-pink-500/15 to-rose-500/15 text-white/90
                       flex flex-col justify-center items-center text-center shadow-lg border border-pink-400/20
                       hover:scale-[1.05] transition-all duration-300"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-pink-500/30 rounded-full flex items-center justify-center mb-1">
              <svg
                className="w-3 h-3 text-pink-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="font-montserrat font-semibold text-xs mb-0.5">
              Quick Start
            </h4>
            <p className="font-lato text-[0.6rem] text-white/70">
              Projects start within 48hrs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
