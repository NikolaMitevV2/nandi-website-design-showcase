import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  SquareArrowOutUpRight, // For the "view project" link
  // Plus, // No longer needed as "Mehr Erfahren" is removed
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
      mainStatDescription: "Umsatzsteigerung um",
      stats: {
        performance: 92,
        accessibility: 98,
        bestPractices: 95,
        seo: 90,
      },
      projectLink: "/project/e-commerce-platform", // Example link
    },
    {
      title: "Corporate Website",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Corporate",
      description:
        "A sleek and professional online presence designed for large enterprises, focusing on brand identity and lead generation.",
      mainStatDescription: "Markenbekanntheit erhöht um",
      stats: {
        performance: 88,
        accessibility: 95,
        bestPractices: 92,
        seo: 94,
      },
      projectLink: "/project/corporate-website",
    },
    {
      title: "SaaS Platform",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "SaaS",
      description:
        "An intuitive and scalable Software-as-a-Service solution, enhancing user productivity and workflow automation.",
      mainStatDescription: "Prozessoptimierung um",
      stats: {
        performance: 95,
        accessibility: 96,
        bestPractices: 98,
        seo: 92,
      },
      projectLink: "/project/saas-platform",
    },
    {
      title: "Portfolio Site",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Portfolio",
      description:
        "A personal portfolio website showcasing creative works with elegant design and seamless navigation.",
      mainStatDescription: "Besucherbindung gesteigert um",
      stats: {
        performance: 97,
        accessibility: 99,
        bestPractices: 99,
        seo: 97,
      },
      projectLink: "/project/portfolio-site",
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

  // Helper function to get color based on score (e.g., for progress bars)
  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 px-6 relative overflow-hidden"
    >
      <div ref={sectionRef} className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="animate-on-scroll font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:mb-8 tracking-tight">
            Sneak Peek Into Our Portfolio
          </h2>
          <p
            style={{
              animationDelay: "0.2s",
            }}
            className="animate-on-scroll font-lato font-light text-base md:text-xl text-body max-w-3xl mx-auto leading-relaxed text-gray-50 px-4"
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
            <div className="overflow-hidden rounded-3xl">
              {/* Navigations for Desktop - Visible only on md and larger */}
              <div className="absolute top-0 left-0 hidden md:flex w-full items-center justify-between mt-4 bg-transparent px-4 z-10">
                {/* Arrows and slide counter */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={prevSlide}
                    className="p-3 md:p-4 rounded-full border bg-space-gradient-start border-space-purple/30 text-white hover:bg-space-purple/50 transition-colors duration-300"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 md:p-4 rounded-full border bg-space-gradient-start border-space-purple/30 text-white hover:bg-space-purple/50 transition-colors duration-300"
                  >
                    <ArrowRight size={18} />
                  </button>
                  <div className="font-montserrat font-bold text-white text-base md:text-lg">
                    {String(currentSlide + 1).padStart(2, "0")} /{" "}
                    {String(portfolioItems.length).padStart(2, "0")}
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Arrows - Positioned left/right of slider */}
              <div className="absolute inset-y-0 flex items-center justify-between w-full px-4 z-10 md:hidden">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full border bg-space-gradient-start border-space-purple/30 text-white hover:bg-space-purple/50 transition-colors duration-300"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full border bg-space-gradient-start border-space-purple/30 text-white hover:bg-space-purple/50 transition-colors duration-300"
                >
                  <ArrowRight size={18} />
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
                      className="w-full h-full object-cover min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 via-transparent to-transparent" />

                    {/* Short Description & Project Link for Small Screens (perfect as is) */}
                    <div className="absolute bottom-6 left-6 right-6 bg-gray-950/80 backdrop-blur-sm rounded-2xl p-4 text-white md:hidden">
                      <h3 className="font-montserrat font-semibold text-xl text-white mb-1">
                        {item.title}
                      </h3>
                      <span className="font-lato text-sm text-space-purple-light mb-2 block">
                        {item.category}
                      </span>
                      <p className="font-lato text-sm mb-4">
                        {item.description}
                      </p>
                      <Link
                        to={item.projectLink}
                        className="flex items-center gap-2 text-purple-400 font-semibold text-lg hover:text-purple-300 transition-colors duration-200 group"
                      >
                        VIEW PROJECT
                        <SquareArrowOutUpRight
                          className="group-hover:translate-x-1 transition-transform duration-200"
                          size={20}
                        />
                      </Link>
                    </div>

                    {/* Detailed Stats Box for Medium and Larger Screens */}
                    <div
                      className="absolute bottom-6 left-6 right-6
                                    p-4 md:p-4 lg:p-6 // Adjusted padding for medium screens, more on large
                                    bg-gray-950 rounded-2xl shadow-lg
                                    w-auto
                                    md:w-[clamp(400px,40vw,700px)] // Clamp for flexible width on larger screens
                                    flex-col gap-3 md:gap-y-3 lg:gap-y-4 // Adjusted gap-y for medium screens
                                    hidden md:flex"
                    >
                      {/* Top section: Main stat description and decorative elements */}
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-gray-300 font-lato text-base md:text-lg">
                          {item.mainStatDescription}
                        </p>
                        <div className="flex space-x-2">
                          <div className="h-6 w-6 bg-[#212137] rounded-md" />
                          <Link
                            to={item.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded-md bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors duration-300"
                          >
                            <SquareArrowOutUpRight size={20} />
                          </Link>
                        </div>
                      </div>
                      {/* Grid for all stats */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:gap-y-3">
                        {" "}
                        {/* Further adjusted gap-y for stats grid */}
                        {/* Performance - Most prominent */}
                        <div className="col-span-2">
                          <p className="text-gray-400 text-sm">Performance</p>
                          <div className="flex items-center">
                            <span className="font-montserrat font-bold text-4xl text-white mr-2">
                              {item.stats.performance}%
                            </span>
                            <div className="w-24 h-3 rounded-full bg-gray-700 overflow-hidden">
                              <div
                                className={`h-full ${getScoreColor(
                                  item.stats.performance
                                )}`}
                                style={{
                                  width: `${item.stats.performance}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        {/* Other stats - Smaller */}
                        <div className="flex flex-col">
                          <p className="text-gray-400 text-sm">Accessibility</p>
                          <div className="flex items-center">
                            <span className="font-lato font-bold text-lg text-white mr-1">
                              {item.stats.accessibility}%
                            </span>
                            <div className="w-16 h-2 rounded-full bg-gray-700 overflow-hidden">
                              <div
                                className={`h-full ${getScoreColor(
                                  item.stats.accessibility
                                )}`}
                                style={{
                                  width: `${item.stats.accessibility}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-gray-400 text-sm">
                            Best Practices
                          </p>
                          <div className="flex items-center">
                            <span className="font-lato font-bold text-lg text-white mr-1">
                              {item.stats.bestPractices}%
                            </span>
                            <div className="w-16 h-2 rounded-full bg-gray-700 overflow-hidden">
                              <div
                                className={`h-full ${getScoreColor(
                                  item.stats.bestPractices
                                )}`}
                                style={{
                                  width: `${item.stats.bestPractices}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-gray-400 text-sm">SEO</p>
                          <div className="flex items-center">
                            <span className="font-lato font-bold text-lg text-white mr-1">
                              {item.stats.seo}%
                            </span>
                            <div className="w-16 h-2 rounded-full bg-gray-700 overflow-hidden">
                              <div
                                className={`h-full ${getScoreColor(
                                  item.stats.seo
                                )}`}
                                style={{ width: `${item.stats.seo}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Project Title & Category at the bottom for large screens */}
                      <div className="mt-3 pt-3 border-t border-gray-800">
                        {" "}
                        {/* Reduced mt and pt */}
                        <h3 className="font-montserrat font-semibold text-xl text-white mb-1">
                          {item.title}
                        </h3>
                        <span className="font-lato text-sm text-space-purple-light block">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
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
