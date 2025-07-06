import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sectionRect, setSectionRect] = useState<DOMRect | null>(null);

  // Refs for the images
  const codeGradientRef = useRef<HTMLImageElement>(null);
  const chartRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    // Update section dimensions on mount and resize
    const updateSectionRect = () => {
      if (sectionRef.current) {
        setSectionRect(sectionRef.current.getBoundingClientRect());
      }
    };

    updateSectionRect(); // Initial calculation
    window.addEventListener("resize", updateSectionRect);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSectionRect);
    };
  }, []);

  // Mouse move effect for parallax and 3D rotation
  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      // Defer state update to next animation frame for smoothness
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const calculateTransform = (
    imageElement: HTMLImageElement | null,
    moveFactorX: number,
    moveFactorY: number,
    rotateFactorX: number
  ) => {
    if (!imageElement || !sectionRect) {
      return {};
    }

    const sectionCenterX = sectionRect.left + sectionRect.width / 2;
    const sectionCenterY = sectionRect.top + sectionRect.height / 2;

    const relativeX = mousePosition.x - sectionCenterX;
    const relativeY = mousePosition.y - sectionCenterY;

    // Movement (Parallax)
    const translateX = relativeX * moveFactorX;
    const translateY = relativeY * moveFactorY;

    const rotateXDeg = relativeY * rotateFactorX;

    return {
      transform: `perspective(1000px) translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateXDeg}deg)`,
    };
  };

  return (
    <section
      id="about"
      className="relative z-10 overflow-hidden sm:pt-32 sm:px-6"
      style={{ marginTop: "100vh" }} // This creates space for the hero section
    >
      <div
        ref={sectionRef}
        // Increased vertical padding (py-40) for a bigger section, from p-20
        className="mx-auto bg-purple-100 w-full h-fit sm:p-20 p-5 sm:py-40 py-20  rounded-t-3xl flex flex-col justify-center items-center "
      >
        <div className="text-center">
          <h2 className="animate-on-scroll font-montserrat font-bold text-4xl md:text-5xl text-gray-900  tracking-tight">
            What defines our purpose?
          </h2>

          {/* Aesthetic Line */}
          <div
            className="animate-on-scroll flex justify-center mb-16"
            style={{
              animationDelay: "0.2s",
            }}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="animate-on-scroll"
            style={{
              animationDelay: "0.3s",
            }}
          >
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded-xl ">
                <img
                  src="/lovable-uploads/eddited.PNG"
                  alt="Web Development Process"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-contain rounded-xl"
                />
                <img
                  ref={codeGradientRef}
                  src="/lovable-uploads/code-gradient.png"
                  alt="Small decorative image"
                  className="absolute
                      top-[-0.5rem] sm:top-[-1rem] md:top-[-1.5rem]
                      right-[-1rem] sm:right-[-2rem] md:right-[-3rem]
                      w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
                      object-cover rounded-xl"
                  style={calculateTransform(
                    codeGradientRef.current,
                    0.01, // moveFactorX (moves with mouse horizontally)
                    0.01, // moveFactorY (moves with mouse vertically)
                    0.01 // rotateFactorX (tips towards/away based on vertical mouse pos)
                  )}
                />
                <img
                  ref={chartRef}
                  src="/lovable-uploads/chart.png"
                  alt="Another decorative image"
                  className="absolute
                      bottom-[-1rem] sm:bottom-[-1.5rem] md:bottom-[-2rem]
                      left-[-2rem] sm:left-[-3rem] md:left-[-4rem]
                      w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56
                      object-cover rounded-xl shadow-xl"
                  style={calculateTransform(
                    chartRef.current,
                    -0.02, // moveFactorX (moves opposite mouse horizontally)
                    -0.02, // moveFactorY (moves opposite mouse vertically)
                    -0.02 // rotateFactorX (tips opposite towards/away based on vertical mouse pos)
                  )}
                />
              </div>
            </div>
          </div>

          <div
            className="animate-on-scroll space-y-8 shadow-xl p-8 rounded-lg bg-cover bg-center relative" // Added 'relative' for absolute overlay
            style={{
              backgroundImage: "url('/lovable-uploads/planet.png')",
              animationDelay: "0.4s",
            }}
          >
            <div className="absolute inset-0 bg-white opacity-70 rounded-lg sm:"></div>{" "}
            <h3 className="font-montserrat font-semibold text-3xl text-gray-900 tracking-tight relative z-10">
              Crafting Digital Excellence
            </h3>
            <div className="space-y-6 font-lato font-normal text-lg leading-relaxed relative z-10">
              <ul className="list-disc pl-5 text-purple-500">
                <li>
                  <p className="text-gray-700">
                    N&i is a premium web development company dedicated to
                    creating extraordinary digital experiences. We combine
                    cutting-edge technology with artistic vision to deliver
                    websites that don't just look stunning—they perform
                    exceptionally.
                  </p>
                </li>
                <li>
                  <p className="text-gray-700">
                    Our mission is to transform your digital presence into a
                    powerful business asset. Every project we undertake is
                    crafted with meticulous attention to detail, ensuring your
                    brand stands out in the digital landscape.
                  </p>
                </li>
                <li>
                  <p className="text-gray-700">
                    From concept to launch, we work closely with our clients to
                    understand their unique vision and translate it into a
                    digital masterpiece that drives engagement and delivers
                    results.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
