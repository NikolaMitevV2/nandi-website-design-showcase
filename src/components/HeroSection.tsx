import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        // pin: true, // You can uncomment this if you want the section to "pin" for a while before fading
        // pinSpacing: false, // Prevents adding extra scroll space if pin is true
        // markers: true, // Uncomment for debugging ScrollTrigger
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

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef} // Attach ref to the main section
      className="fixed top-0 left-0 w-full min-h-screen flex flex-col pt-20 overflow-hidden z-0"
    >
      <div
        ref={splineRef}
        className="absolute top-0 left-0 w-full h-[130vh] -z-10" // Spline as fixed background
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
        className="text-left z-20 px-6 flex flex-col flex-grow relative"
      >
        <h1 className="font-montserrat font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] text-white mb-6 tracking-tight">
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

        {/* Dynamic Grid Element for Key Values - Designed to match image_b0aee7.png */}
        <div
          ref={statsGridRef}
          className="absolute bottom-10 right-6
                     w-[280px] sm:w-[400px] md:w-[560px] lg:w-[680px] xl:w-[800px] h-auto p-2 rounded-lg
                     bg-gray-900/20 backdrop-blur-sm opacity-70 overflow-hidden
                     hidden sm:grid                       
                     grid-cols-3 grid-rows-3 gap-2 md:gap-3 
                     auto-rows-fr
                     pointer-events-none"
          style={{
            transform: "translateZ(0)", // Optimize for hardware acceleration with GSAP
            willChange: "transform", // Hint for browser optimization
          }}
        >
          {/* Item 1: Drive Revenue (Corresponds to large green block, 2x2, Top-Left) */}
          <div className="col-span-2 row-span-2 p-3 md:p-4 rounded-md bg-white/5 text-white/90 flex flex-col justify-center">
            <h3 className="font-montserrat font-semibold text-lg sm:text-xl lg:text-2xl mb-1">
              Drive Revenue
            </h3>
            <p className="font-lato text-xs sm:text-sm text-white/70">
              Websites engineered for maximum conversions and accelerated
              growth.
            </p>
          </div>

          {/* Item 2: Agile Development (Corresponds to top-right light blue block, 1x1) */}
          {/* Explicitly positioned: col-start-3, row-start-1 */}
          <div className="col-start-3 row-start-1 p-3 md:p-4 rounded-md bg-white/5 text-white/90 flex flex-col justify-center">
            <h3 className="font-montserrat font-semibold text-base sm:text-lg mb-1">
              Agile Development
            </h3>
            <p className="font-lato text-[0.6rem] sm:text-xs text-white/70">
              Flexible, iterative, and rapid delivery.
            </p>
          </div>

          {/* Item 3: Modern Tech Stack (Corresponds to middle-right orange block, 1x2) */}
          {/* Explicitly positioned: col-start-3, row-start-2 */}
          <div className="col-start-3 row-start-2 row-span-2 p-3 md:p-4 rounded-md bg-white/5 text-white/90 flex flex-col justify-center">
            <h3 className="font-montserrat font-semibold text-base sm:text-lg mb-1">
              Modern Tech Stack
            </h3>
            <p className="font-lato text-[0.6rem] sm:text-xs text-white/70">
              Leveraging cutting-edge technologies for robust solutions.
            </p>
          </div>

          {/* Item 4: Transparent Process (Corresponds to bottom-left pink block, 1x1) */}
          {/* Explicitly positioned: col-start-1, row-start-3 */}
          <div className="col-start-1 row-start-3 p-3 md:p-4 rounded-md bg-white/5 text-white/90 flex flex-col justify-center">
            <h3 className="font-montserrat font-semibold text-base sm:text-lg mb-1">
              Transparent Process
            </h3>
            <p className="font-lato text-[0.6rem] sm:text-xs text-white/70">
              Clear communication & collaborative partnerships.
            </p>
          </div>

          {/* Item 5: User-Centric Design (Corresponds to bottom-middle dark grey block, 1x1) */}
          {/* Explicitly positioned: col-start-2, row-start-3 */}
          <div className="col-start-2 row-start-3 p-3 md:p-4 rounded-md bg-white/5 text-white/90 flex flex-col justify-center">
            <h3 className="font-montserrat font-semibold text-base sm:text-lg mb-1">
              User-Centric Design
            </h3>
            <p className="font-lato text-[0.6rem] sm:text-xs text-white/70">
              Crafting intuitive experiences that delight your audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
