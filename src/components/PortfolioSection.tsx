import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const portfolioItems = [{
    title: 'E-Commerce Platform',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'E-Commerce'
  }, {
    title: 'Corporate Website',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Corporate'
  }, {
    title: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'SaaS'
  }, {
    title: 'Portfolio Site',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Portfolio'
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % portfolioItems.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };
  return <section id="portfolio" className="py-32 px-6 relative overflow-hidden">
      <div ref={sectionRef} className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll font-montserrat font-bold text-4xl md:text-5xl text-white mb-8 tracking-tight">
            Sneak Peek Into Our Portfolio
          </h2>
          <p style={{
          animationDelay: '0.2s'
        }} className="animate-on-scroll font-lato font-light text-xl text-body max-w-3xl mx-auto leading-relaxed text-gray-50">
            Discover some of our recent projects that showcase our expertise and creativity
          </p>
        </div>

        <div className="animate-on-scroll" style={{
        animationDelay: '0.3s'
      }}>
          <div className="flex items-center  mb-8">
            <div className="flex items-center space-x-4">
              <button onClick={prevSlide} className="p-3 rounded-full border border-space-purple/30 text-space-purple hover:bg-space-purple/20 transition-colors duration-300">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextSlide} className="p-3 rounded-full border border-space-purple/30 text-space-purple hover:bg-space-purple/20 transition-colors duration-300">
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="font-montserrat text-white/60 mx-[18px]">
              {String(currentSlide + 1).padStart(2, '0')} / {String(portfolioItems.length).padStart(2, '0')}
            </div>
          </div>

          <div className="relative w-1/2 mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
                {portfolioItems.map((item, index) => <div key={index} className="w-full flex-shrink-0 relative">
                    <img src={item.image} alt={item.title} className="w-full h-96 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="font-lato text-sm text-space-purple-light mb-2 block">
                        {item.category}
                      </span>
                      <h3 className="font-montserrat font-semibold text-xl text-white">
                        {item.title}
                      </h3>
                    </div>
                    
                    {/* Shadow effect */}
                    <div className="absolute -bottom-8 left-8 right-8 h-8 bg-gradient-to-b from-space-purple/20 to-transparent blur-xl rounded-full" />
                  </div>)}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="neumorphic-btn text-white font-montserrat font-medium">
              View Full Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="orbital-decoration w-40 h-40 top-20 left-10 opacity-10" style={{
      animationDelay: '1s'
    }} />
      <div className="orbital-decoration w-28 h-28 bottom-20 right-20 opacity-15" style={{
      animationDelay: '4s'
    }} />
    </section>;
};
export default PortfolioSection;