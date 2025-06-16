import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BoxIcon,
  ChevronLeft,
  ChevronRight,
  SquareArrowOutUpRight,
  SquareArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "E-Commerce",
      description:
        "A modern e-commerce platform with advanced filtering, payment integration, and user management.",
    },
    {
      title: "Corporate Website",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Corporate",
      description:
        "A modern e-commerce platform with advanced filtering, payment integration, and user management.",
    },
    {
      title: "SaaS Platform",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "SaaS",
      description:
        "A modern e-commerce platform with advanced filtering, payment integration, and user management.",
    },
    {
      title: "Portfolio Site",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Portfolio",
      description:
        "A modern e-commerce platform with advanced filtering, payment integration, and user management.",
    },
  ];
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
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length
    );
  };
  return (
    <section id="portfolio" className="py-32 px-6 relative overflow-hidden">
      <div ref={sectionRef} className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll font-montserrat font-bold text-4xl md:text-5xl text-white mb-8 tracking-tight">
            Sneak Peek Into Our Portfolio
          </h2>
          <p
            style={{
              animationDelay: "0.2s",
            }}
            className="animate-on-scroll font-lato font-light text-xl text-body max-w-3xl mx-auto leading-relaxed text-gray-50"
          >
            Discover some of our recent projects that showcase our expertise and
            creativity
          </p>
        </div>

        <div
          className="animate-on-scroll"
          style={{
            animationDelay: "0.3s",
          }}
        >
          <div className="relative w-full md:w-5/6 mx-auto">
            <div className="overflow-hidden rounded-3xl h-[80%]">
              {/* Navigations */}
              <div className="absolute top-0 left-0 flex w-full items-center justify-between mt-4 bg-transparent px-4 z-10">
                {/* Arrows for larger screens */}
                <div className="hidden md:flex items-center space-x-4">
                  <button
                    onClick={prevSlide}
                    className="p-4 rounded-full border bg-space-gradient-start border-space-purple/30 text-white hover:bg-space-purple/50 transition-colors duration-300"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-4 ml-0 rounded-full border bg-space-gradient-start border-space-purple/30 text-white hover:bg-space-purple/50 transition-colors duration-300"
                  >
                    <ArrowRight size={20} />
                  </button>
                  <div className="font-montserrat font-bold text-white text-lg">
                    {String(currentSlide + 1).padStart(2, "0")} /{" "}
                    {String(portfolioItems.length).padStart(2, "0")}
                  </div>
                </div>

                <button className="hidden md:block text-white/70 bg-space-purple/60 hover:bg-white/10 hover:shadow-lg hover:shadow-space-purple/20 transition-all duration-300 p-2.5 rounded-md backdrop-blur-sm">
                  <SquareArrowOutUpRight size={25} />
                </button>
              </div>

              {/* Content */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {portfolioItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover min-h-[300px] md:min-h-[400px] lg:min-h-[500px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 bg-gray-950 w-auto md:w-3/4 h-auto rounded-2xl p-3">
                      <h3 className="font-montserrat font-semibold text-xl text-white">
                        <div className="flex items-center justify-between">
                          {item.title}{" "}
                          <div className="h-7 w-7 bg-blue-500 rounded-sm"></div>
                        </div>
                      </h3>
                      <span className="font-lato text-sm text-space-purple-light mb-2 block">
                        {item.category}
                      </span>
                      <p className="hidden md:block text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Arrows and current slide for small screens */}
            <div className="flex justify-between items-center mt-6 md:hidden px-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full border bg-space-gradient-start border-space-purple/30 text-white hover:bg-space-purple/50 transition-colors duration-300"
              >
                <ArrowLeft size={18} />
              </button>
              <div className="font-montserrat font-bold text-white text-base">
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(portfolioItems.length).padStart(2, "0")}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full border bg-space-gradient-start border-space-purple/30 text-white hover:bg-space-purple/50 transition-colors duration-300"
              >
                <ArrowRight size={18} />
              </button>
            </div>
            {/* View project button for small screens */}
            <div className="flex justify-end mt-4 md:hidden px-4">
              <button className="text-white/70 bg-space-purple/60 hover:bg-white/10 hover:shadow-lg hover:shadow-space-purple/20 transition-all duration-300 p-2 rounded-md backdrop-blur-sm">
                <SquareArrowOutUpRight size={20} />
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="neumorphic-btn text-white font-montserrat font-medium"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div
        className="orbital-decoration w-40 h-40 top-20 left-10 opacity-10"
        style={{
          animationDelay: "1s",
        }}
      />
      <div
        className="orbital-decoration w-28 h-28 bottom-20 right-20 opacity-15"
        style={{
          animationDelay: "4s",
        }}
      />
    </section>
  );
};
export default PortfolioSection;
