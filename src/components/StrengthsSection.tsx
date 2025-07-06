import { Check, Magnet, Palette, Search, Smartphone } from "lucide-react";
import { useEffect, useRef } from "react";

const StrengthsSection = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const strengths = [
    {
      icon: <Palette className="text-space-purple" size={40} />,
      title: "Custom Design",
      description:
        "Bespoke designs tailored to your brand identity and business goals.",
      background:
        "https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <Magnet className="text-space-purple" size={40} />,
      title: "Lead Generation Focus",
      description:
        "Websites optimized to convert visitors into valuable leads and customers.",
      background: "",
    },
    {
      icon: <Smartphone className="text-space-purple" size={40} />,
      title: "Responsive",
      description:
        "Perfect experience across all devices, from mobile to desktop.",
      background: "",
    },
    {
      icon: <Search className="text-space-purple" size={40} />,
      title: "SEO Optimized",
      description:
        "Built with search engine optimization at the core for maximum visibility.",
      background: "",
    },
  ];

  return (
    <section id="strengths" className="pb-32 relative overflow-hidden sm:px-6">
      <div
        ref={sectionRef}
        className="mx-auto bg-purple-100 rounded-b-3xl w-full h-fit sm:p-20 p-5 py-20"
      >
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll font-montserrat font-bold text-4xl md:text-5xl text-gray-900 mb-8 tracking-tight">
            Our Core Strengths
          </h2>
          <p
            className="animate-on-scroll font-lato font-light text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            We combine technical expertise with creative vision to deliver
            exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {strengths.map((strength, index) => (
            <div
              key={index} // Added a unique key for list rendering
              className="relative md:max-w-[300px] h-[60vh] md:h-96 rounded-lg overflow-hidden shadow-lg group transform transition-all duration-300 hover:scale-105  hover:shadow-2xl hover:shadow-space-purple/20 "
            >
              {/* Custom Border Design */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {/* Top-left borders */}
                <div className="absolute top-0 left-0 w-1/2 group-hover:w-full h-1.5 bg-space-purple rounded-lg transition-all duration-300"></div>
                <div className="absolute top-0 left-0 w-1.5 h-1/2 group-hover:h-full bg-space-purple rounded-lg transition-all duration-300"></div>

                {/* Bottom-right borders */}
                <div className="absolute bottom-0 right-0 w-1/2 group-hover:w-full h-1.5 bg-space-purple rounded-lg transition-all duration-300"></div>
                <div className="absolute bottom-0 right-0 w-1.5 h-1/2 group-hover:h-full bg-space-purple rounded-lg transition-all duration-300"></div>

                <div className="relative flex items-center justify-center w-5 h-5 group cursor-pointer m-5">
                  <div className="absolute inset-0 rounded-full border-2 border-space-purple opacity-30 animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full border border-space-purple opacity-20 transition-all duration-500 ease-out group-hover:scale-[2] group-hover:opacity-0"></div>
                  <div className="w-2.5 h-2.5 bg-space-purple rounded-full transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-md group-hover:shadow-space-purple/40"></div>
                </div>
              </div>
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center text-center bg-[linear-gradient(145deg,rgba(30,27,75,1),rgba(49,46,129,1))] group-hover:bg-[linear-gradient(145deg,rgba(30,27,75,0.7),rgba(49,46,129,0.8))] transition-all duration-300 ">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {strength.title}
                </h3>
                <span className="m-5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-110">
                  {strength.icon}
                </span>
                <p className="text-white text-sm leading-relaxed opacity-90">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
