import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressBarFillRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const processSteps = [
    {
      title: "Discovery & Strategy",
      description:
        "We begin by understanding your business goals, target audience, and project requirements to create a comprehensive strategy.",
      image: "/designstrat/1.jpg",
      number: "01",
    },
    {
      title: "Design & Prototyping",
      description:
        "Our design team creates stunning visual concepts and interactive prototypes that bring your vision to life.",
      image: "/designstrat/2.jpg",
      number: "02",
    },
    {
      title: "Development & Testing",
      description:
        "We build your website using cutting-edge technologies, ensuring optimal performance and thorough testing.",
      image: "/designstrat/3.jpg",
      number: "03",
    },
    {
      title: "Launch & Optimization",
      description:
        "After launch, we monitor performance and continuously optimize to ensure your website delivers exceptional results.",
      image: "/designstrat/4.jpg",
      number: "04",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !progressBarFillRef.current) {
      return;
    }

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onUpdate: (self) => {
        gsap.to(progressBarFillRef.current, {
          height: `${self.progress * 100}%`,
          ease: "none",
          duration: 0.05,
        });
      },
    });

    processSteps.forEach((_, index) => {
      const stepElement = sectionRef.current?.querySelector(
        `[data-step-index="${index}"]`
      );

      if (stepElement) {
        ScrollTrigger.create({
          trigger: stepElement,
          start: "top center+=10%",
          end: "bottom center-=10%",
          onEnter: () => {
            setCurrentStep(index);
            stepElement.classList.add("visible");
          },
          onEnterBack: () => {
            setCurrentStep(index);
            stepElement.classList.add("visible");
          },
        });
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl px-2 relative py-20 sm:px-6"
    >
      {/* PROGRES BAR */}
      <div className="hidden lg:block absolute -left-14 top-1/2 -translate-y-1/2 h-[calc(100%-80px)] w-2 bg-gray-700/40 rounded-full z-20 ml-6 shadow-inner">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-purple/10 to-transparent rounded-full"></div>
        <div
          ref={progressBarFillRef}
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-space-purple via-space-purple to-space-purple/80 rounded-full shadow-sm"
          style={{
            height: `0%`,
            boxShadow:
              "0 0 8px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent rounded-full opacity-60 animate-pulse"></div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col justify-between h-full py-3">
          {processSteps.map((_, index) => {
            const isActive = index <= currentStep;
            const isCurrent = index === currentStep;

            return (
              <div
                key={index}
                className={`relative w-5 h-5 rounded-full border-2 transition-all duration-500 ease-out transform
                  ${
                    isActive
                      ? "border-space-purple bg-space-purple scale-110 shadow-lg"
                      : "border-gray-500 bg-gray-700/50 hover:border-space-purple/60"
                  }
                  ${
                    isCurrent
                      ? "ring-2 ring-space-purple/30 ring-offset-1 ring-offset-transparent"
                      : ""
                  }
                `}
                style={{
                  boxShadow: isActive
                    ? "0 0 12px rgba(139, 92, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                    : "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                {isActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`bg-white rounded-full transition-all duration-300 ease-out
                        ${isCurrent ? "w-2 h-2 animate-pulse" : "w-1.5 h-1.5"}
                      `}
                    ></div>
                  </div>
                )}
                {isCurrent && (
                  <div className="absolute inset-0 rounded-full border-2 border-space-purple animate-ping opacity-30"></div>
                )}
                <div className="absolute inset-0 rounded-full bg-space-purple/0 transition-all duration-300 ease-out hover:bg-space-purple/10"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="min-h-[200vh] relative">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="animate-on-scroll sticky mb-8 last:mb-0 "
            style={{
              top: "5rem",
              zIndex: index + 1,
            }}
            data-step-index={index}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl ">
              <div className="grid lg:grid-cols-2 min-h-[485px] bg-[linear-gradient(145deg,rgba(30,27,75,1),rgba(49,46,129,1))] ">
                <div className="p-2 lg:p-16 flex flex-col justify-center relative z-10 sm:p-12">
                  <h3 className="font-montserrat font-bold text-3xl lg:text-4xl text-white mb-6 tracking-tight text-center">
                    {step.title}
                  </h3>
                  <div className="relative overflow-hidden">
                    <p className="flex flex-col gap-6 items-center font-lato font-light text-lg text-body leading-relaxed mb-8 text-gray-50 text-center">
                      {/* Circle under title  */}
                      <div className="relative flex items-center justify-center w-8 h-8 group cursor-pointer">
                        <div className="absolute inset-0 rounded-full border-2 border-space-purple opacity-30 animate-pulse"></div>
                        <div className="absolute inset-0 rounded-full border border-space-purple opacity-20 transition-all duration-500 ease-out group-hover:scale-[2] group-hover:opacity-0"></div>
                        <div className="w-2.5 h-2.5 bg-space-purple rounded-full transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-md group-hover:shadow-space-purple/40"></div>
                      </div>
                      {step.description}
                    </p>
                    <div className="font-montserrat font-bold text-6xl lg:text-8xl text-space-purple/30 flex items-center justify-center ">
                      {step.number}
                    </div>
                  </div>
                </div>

                <div className="order-first lg:order-last p-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Orbital Decorations - placed here so they persist */}
      <div className="orbital-decoration w-32 h-32 top-20 left-10 opacity-30 animate-spin-slow z-50" />
      <div
        className="orbital-decoration fixed w-48 h-48 top-40 right-20 opacity-20 animate-spin-medium z-50"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="orbital-decoration fixed w-24 h-24 bottom-32 left-1/4 opacity-25 animate-spin-fast z-50"
        style={{ animationDelay: "4s" }}
      />
    </section>
  );
};

export default ProcessSection;
