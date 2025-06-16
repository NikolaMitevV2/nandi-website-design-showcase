import { useEffect, useRef } from "react";
const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
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
    return () => observer.disconnect();
  }, []);
  const processSteps = [
    {
      title: "Discovery & Strategy",
      description:
        "We begin by understanding your business goals, target audience, and project requirements to create a comprehensive strategy.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      number: "01",
    },
    {
      title: "Design & Prototyping",
      description:
        "Our design team creates stunning visual concepts and interactive prototypes that bring your vision to life.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      number: "02",
    },
    {
      title: "Development & Testing",
      description:
        "We build your website using cutting-edge technologies, ensuring optimal performance and thorough testing.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      number: "03",
    },
    {
      title: "Launch & Optimization",
      description:
        "After launch, we monitor performance and continuously optimize to ensure your website delivers exceptional results.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      number: "04",
    },
  ];
  return (
    <section
      ref={sectionRef}
      className="container mx-auto max-w-7xl px-6 relative py-20"
    >
      {/* Wrapper for sticky items, needs to have a height to allow scrolling */}
      <div className="min-h-[200vh] relative">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="animate-on-scroll sticky mb-8 last:mb-0"
            style={{
              top: "5rem",
              zIndex: index + 1,
            }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 min-h-[480px] bg-[linear-gradient(145deg,rgba(30,27,75,1),rgba(49,46,129,1))]">
                <div className="p-12 lg:p-16 flex flex-col justify-center relative z-10">
                  <h3 className="font-montserrat font-bold text-3xl lg:text-4xl text-white mb-6 tracking-tight text-center">
                    {step.title}
                  </h3>
                  <div className="relative overflow-hidden">
                    <p className="flex flex-col gap-6 items-center font-lato font-light text-lg text-body leading-relaxed mb-8 text-gray-50 text-center">
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

                <div className="relative order-first lg:order-last">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-space-dark/20" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="orbital-decoration w-44 h-44 top-40 right-10 opacity-10"
        style={{
          animationDelay: "2s",
        }}
      />
      <div
        className="orbital-decoration w-32 h-32 bottom-40 left-20 opacity-15"
        style={{
          animationDelay: "6s",
        }}
      />
    </section>
  );
};
export default ProcessSection;
