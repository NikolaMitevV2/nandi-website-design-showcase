import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<Record<string, number>>({});

  const portfolioItems = [
    {
      title: "Digital Branding",
      image: "/lovable-uploads/site1.png",
      category: "Branding",
      description:
        "A modern e-commerce platform with advanced filtering, payment integration, and user management.",
      mainStatDescription: "DC",
      stats: {
        performance: 92,
        accessibility: 98,
        bestPractices: 95,
        seo: 90,
      },
      projectLink: "https://digicraft.vercel.app/",
    },
    {
      title: "Template Design",
      image: "/lovable-uploads/site2.png",
      category: "Web Design",
      description:
        "A sleek and professional online presence designed for large enterprises, focusing on brand identity and lead generation.",
      mainStatDescription: "Template Forge",
      stats: {
        performance: 88,
        accessibility: 95,
        bestPractices: 92,
        seo: 94,
      },
      projectLink: "https://templateforge.vercel.app/",
    },
    {
      title: "Web Design",
      image: "/lovable-uploads/site4.png",
      category: "3D Web Design",
      description:
        "An intuitive and scalable Software-as-a-Service solution, enhancing user productivity and workflow automation.",
      mainStatDescription: "KlackX",
      stats: {
        performance: 95,
        accessibility: 96,
        bestPractices: 98,
        seo: 92,
      },
      projectLink: "/project/saas-platform",
    },
    {
      title: "Startup Identity",
      image: "/lovable-uploads/site3.png",
      category: "Branding",
      description:
        "A personal portfolio website showcasing creative works with elegant design and seamless navigation.",
      mainStatDescription: "Elite Roofing",
      stats: {
        performance: 97,
        accessibility: 99,
        bestPractices: 99,
        seo: 97,
      },
      projectLink: "https://elite-roofing-sigma.vercel.app/",
    },
  ];

  // Animate numbers from 0 to target value
  const animateNumber = useCallback((targetValue: number, key: string, slideIndex: number) => {
    const startTime = Date.now();
    const duration = 1500; // 1.5 seconds
    const startValue = 0;
    
    const updateNumber = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
      
      setAnimatedStats(prev => ({
        ...prev,
        [`${slideIndex}-${key}`]: currentValue
      }));
      
      if (progress < 1) {
        animationRefs.current[`${slideIndex}-${key}`] = requestAnimationFrame(updateNumber);
      }
    };
    
    animationRefs.current[`${slideIndex}-${key}`] = requestAnimationFrame(updateNumber);
  }, []);

  // Handle mouse enter - start animations
  const handleMouseEnter = useCallback((slideIndex: number) => {
    setHoveredSlide(slideIndex);
    const item = portfolioItems[slideIndex];
    
    // Clear any existing animations
    Object.values(animationRefs.current).forEach((animationId: number) => {
      if (animationId) cancelAnimationFrame(animationId);
    });
    
    // Start new animations with slight delays
    setTimeout(() => animateNumber(item.stats.performance, 'performance', slideIndex), 100);
    setTimeout(() => animateNumber(item.stats.accessibility, 'accessibility', slideIndex), 200);
    setTimeout(() => animateNumber(item.stats.bestPractices, 'bestPractices', slideIndex), 300);
    setTimeout(() => animateNumber(item.stats.seo, 'seo', slideIndex), 400);
  }, [animateNumber, portfolioItems]);

  // Handle mouse leave - clear animations
  const handleMouseLeave = useCallback(() => {
    setHoveredSlide(null);
    // Clear all animations
    Object.values(animationRefs.current).forEach((animationId: number) => {
      if (animationId) cancelAnimationFrame(animationId);
    });
    setAnimatedStats({});
  }, []);

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

  // Cleanup animations on unmount
  useEffect(() => {
    return () => {
      Object.values(animationRefs.current).forEach((animationId: number) => {
        if (animationId) cancelAnimationFrame(animationId);
      });
    };
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

  // Get animated value or default to 0
  const getAnimatedValue = (slideIndex: number, key: string) => {
    return animatedStats[`${slideIndex}-${key}`] || 0;
  };

  return (
    <>
      <style>{`
        .stats-grid-enter {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        
        .stats-grid-enter-active {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .stats-grid-exit {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .stats-grid-exit-active {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          transition: all 0.3s ease-in-out;
        }
        
        .progress-bar {
          transition: width 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .number-counter {
          font-variant-numeric: tabular-nums;
          transition: all 0.3s ease;
        }
        
        .hover-overlay {
          transition: all 0.3s ease;
        }
        
        .slide-item:hover .hover-overlay {
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.7) 100%
          );
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .animate-slide-up-delay-1 {
          animation: slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s forwards;
          opacity: 0;
        }
        
        .animate-slide-up-delay-2 {
          animation: slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s forwards;
          opacity: 0;
        }
        
        .animate-slide-up-delay-3 {
          animation: slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s forwards;
          opacity: 0;
        }
      `}</style>
      
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
                    <div 
                      key={index} 
                      className="w-full flex-shrink-0 relative slide-item"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 via-transparent to-transparent hover-overlay" />

                      {/* Short Description & Project Link for Small Screens */}
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

                      {/* Detailed Stats Box for Medium and Larger Screens - Only show on hover */}
                      <div
                        className={`absolute bottom-6 left-6 right-6
                                      p-4 md:p-4 lg:p-6
                                      bg-gray-950/95 backdrop-blur-sm rounded-2xl shadow-2xl
                                      w-auto
                                      md:w-[clamp(400px,40vw,700px)]
                                      flex-col gap-3 md:gap-y-3 lg:gap-y-4
                                      hidden md:flex
                                      transition-all duration-400 ease-out
                                      ${hoveredSlide === index 
                                        ? 'opacity-100 translate-y-0 scale-100' 
                                        : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
                      >
                        {/* Top section: Main stat description and decorative elements */}
                        <div className={`flex items-center justify-between mb-2 ${hoveredSlide === index ? 'animate-slide-up' : ''}`}>
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
                          <div className={`col-span-2 ${hoveredSlide === index ? 'animate-slide-up' : ''}`}>
                            <p className="text-gray-400 text-sm">Performance</p>
                            <div className="flex items-center">
                              <span className="font-montserrat font-bold text-4xl text-white mr-2 number-counter">
                                {getAnimatedValue(index, 'performance')}%
                              </span>
                              <div className="w-24 h-3 rounded-full bg-gray-700 overflow-hidden">
                                <div
                                  className={`h-full progress-bar ${getScoreColor(item.stats.performance)}`}
                                  style={{
                                    width: `${getAnimatedValue(index, 'performance')}%`,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          
                          {/* Other stats - Smaller */}
                          <div className={`flex flex-col ${hoveredSlide === index ? 'animate-slide-up-delay-1' : ''}`}>
                            <p className="text-gray-400 text-sm">Accessibility</p>
                            <div className="flex items-center">
                              <span className="font-lato font-bold text-lg text-white mr-1 number-counter">
                                {getAnimatedValue(index, 'accessibility')}%
                              </span>
                              <div className="w-16 h-2 rounded-full bg-gray-700 overflow-hidden">
                                <div
                                  className={`h-full progress-bar ${getScoreColor(item.stats.accessibility)}`}
                                  style={{
                                    width: `${getAnimatedValue(index, 'accessibility')}%`,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className={`flex flex-col ${hoveredSlide === index ? 'animate-slide-up-delay-2' : ''}`}>
                            <p className="text-gray-400 text-sm">Best Practices</p>
                            <div className="flex items-center">
                              <span className="font-lato font-bold text-lg text-white mr-1 number-counter">
                                {getAnimatedValue(index, 'bestPractices')}%
                              </span>
                              <div className="w-16 h-2 rounded-full bg-gray-700 overflow-hidden">
                                <div
                                  className={`h-full progress-bar ${getScoreColor(item.stats.bestPractices)}`}
                                  style={{
                                    width: `${getAnimatedValue(index, 'bestPractices')}%`,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className={`flex flex-col ${hoveredSlide === index ? 'animate-slide-up-delay-3' : ''}`}>
                            <p className="text-gray-400 text-sm">SEO</p>
                            <div className="flex items-center">
                              <span className="font-lato font-bold text-lg text-white mr-1 number-counter">
                                {getAnimatedValue(index, 'seo')}%
                              </span>
                              <div className="w-16 h-2 rounded-full bg-gray-700 overflow-hidden">
                                <div
                                  className={`h-full progress-bar ${getScoreColor(item.stats.seo)}`}
                                  style={{ width: `${getAnimatedValue(index, 'seo')}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Project Title & Category at the bottom for large screens */}
                        <div className={`mt-3 pt-3 border-t border-gray-800 ${hoveredSlide === index ? 'animate-slide-up-delay-3' : ''}`}>
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
    </>
  );
};

export default PortfolioSection;