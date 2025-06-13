import { useEffect, useRef, useState } from "react";

const StrengthsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardRotations, setCardRotations] = useState<{
    [key: number]: { rotateX: number; rotateY: number };
  }>({});

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15; // Max 10 degrees
    const rotateY = ((x - centerX) / centerX) * 15; // Max 10 degrees

    setCardRotations((prev) => ({
      ...prev,
      [index]: { rotateX, rotateY },
    }));
  };

  const handleMouseLeave = (index: number) => {
    setCardRotations((prev) => ({
      ...prev,
      [index]: { rotateX: 0, rotateY: 0 },
    }));
  };

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

  const strengths = [
    {
      icon: "🎨",
      title: "Custom Design",
      description:
        "Bespoke designs tailored to your brand identity and business goals.",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=600&fit=crop",
    },
    {
      icon: "🚀",
      title: "Lead Generation Focus",
      description:
        "Websites optimized to convert visitors into valuable leads and customers.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
    },
    {
      icon: "📱",
      title: "Responsive",
      description:
        "Perfect experience across all devices, from mobile to desktop.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop",
    },
    {
      icon: "🔍",
      title: "SEO Optimized",
      description:
        "Built with search engine optimization at the core for maximum visibility.",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=600&fit=crop",
    },
  ];

  return (
    <section
      id="strengths"
      className="py-32 px-6 relative overflow-hidden bg-purple-100"
    >
      <style>{`
        .consulting-card {
          background: #030712;
          border-radius: 20px;
          height: 320px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .consulting-card:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
        }
        
        .card-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 2;
          transition: all 0.4s ease;
        }
        
        .card-image {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 50%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: all 0.4s ease;
          border-radius: 0 20px 20px 0;
        }
        
        .consulting-card:hover .card-image {
          opacity: 0.3;
        }
        
        .consulting-card:hover .card-content {
          width: 50%;
        }
        
        .card-title {
          font-size: 24px;
          font-weight: 600;
          color: white;
          line-height: 1.2;
          margin-bottom: 16px;
          font-family: 'Inter', sans-serif;
        }
        
        .card-description {
          font-size: 14px;
          color:white;
          line-height: 1.5;
          font-weight: 400;
          font-family: 'Inter', sans-serif;
        }
        
        .services-label {
          position: absolute;
          top: 32px;
          right: 32px;
          font-size: 12px;
          color: rgba(3, 7, 18, 0.6);
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div ref={sectionRef} className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll font-bold text-4xl md:text-5xl text-gray-900 mb-8 tracking-tight">
            Our Core Strengths
          </h2>
          <p
            style={{ animationDelay: "0.2s" }}
            className="animate-on-scroll text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            We combine technical expertise with creative vision to deliver
            exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="animate-on-scroll consulting-card"
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
                transform: `perspective(1000px) rotateX(${
                  cardRotations[index]?.rotateX || 0
                }deg) rotateY(${
                  cardRotations[index]?.rotateY || 0
                }deg) translateY(-8px)`,
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="services-label">Services</div>

              <div className="card-content">
                <div>
                  <h3 className="card-title ">{strength.title}</h3>
                  <p className="card-description">{strength.description}</p>
                </div>
              </div>

              <div
                className="card-image"
                style={{ backgroundImage: `url(${strength.image})` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute w-36 h-36 top-20 left-10 opacity-10 bg-blue-500 rounded-full blur-xl" />
      <div className="absolute w-24 h-24 bottom-32 right-20 opacity-15 bg-purple-500 rounded-full blur-xl" />
    </section>
  );
};

export default StrengthsSection;
