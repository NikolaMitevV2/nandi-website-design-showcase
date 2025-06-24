
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const portfolioItems = [
    {
      title: 'Digi Craft',
      image: '/portfolioHero/1.png',
      category: 'Web Design Agency',
      description: 'A company that design modern websites.'
    },
    {
      title: 'Template Forge',
      image: '/portfolioHero/2.png',
      category: 'Template Design Agency',
      description: 'Professional corporate website that creates templates with custom CMS and responsive design across all devices.'
    },
    {
      title: 'Elite Roofing',
      image: '/portfolioHero/3.png',
      category: 'Roofing Company',
      description: 'A roofing company based in SF'
    },
    {
      title: 'KlackX',
      image: '/portfolioHero/4.png',
      category: 'Crypto Website',
      description: 'A website showing various exchanges between crypto currencies'
    },
    {
      title: 'N&I Portfolio - Old',
      image: '/portfolioHero/5.png',
      category: 'Portfolio Website',
      description: 'Website for an Agency based in Macedonia'
    },
    {
      title: 'Soleginx',
      image: '/portfolioHero/6.png',
      category: 'Solar Panel Installation',
      description: 'A Website for a Solar Panel Installation company'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <div className="min-h-screen ">
      <section className="py-32 px-6 relative overflow-hidden">
        <div ref={sectionRef} className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <Link to="/" className="animate-on-scroll inline-flex items-center space-x-2 text-space-purple-light hover:text-white transition-colors duration-300 mb-8">
              <ArrowLeft size={20} />
              <span className="font-lato font-light">Back to Home</span>
            </Link>
            
            <h1 className="animate-on-scroll font-montserrat font-bold text-5xl md:text-6xl text-white mb-8 tracking-tight">
              Our Portfolio
            </h1>
            <p className="animate-on-scroll font-lato font-light text-xl text-body max-w-3xl leading-relaxed text-gray-50" style={{ animationDelay: '0.2s' }}>
              Explore our collection of premium web development projects that showcase our expertise and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll card-hover rounded-3xl overflow-hidden"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                   
                    <h3 className="font-montserrat font-semibold text-xl text-white mb-2">
                      {item.title}
                    </h3>
                 
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: '0.8s' }}>
            <div className="text-center mb-8">
              <h2 className="font-montserrat font-bold text-3xl text-white mb-4">Featured Project</h2>
              <p className="font-lato font-light text-body text-gray-50 mb-8">
                Take a closer look at one of our standout projects
              </p>
            </div>

            <div className="flex items-center mb-8">
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

            <div className="relative w-2/3 mx-auto">
              <div className="overflow-hidden rounded-3xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {portfolioItems.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                      <img src={item.image} alt={item.title} className="w-full h-96 object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="font-lato text-sm text-space-purple-light mb-2 block">
                          {item.category}
                        </span>
                        <h3 className="font-montserrat font-semibold text-xl text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="font-lato font-light text-gray-300">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="absolute -bottom-8 left-8 right-8 h-8 bg-gradient-to-b from-space-purple/20 to-transparent blur-xl rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="orbital-decoration w-40 h-40 top-20 left-10 opacity-10" style={{ animationDelay: '1s' }} />
        <div className="orbital-decoration w-28 h-28 bottom-20 right-20 opacity-15" style={{ animationDelay: '4s' }} />
      </section>
    </div>
  );
};

export default Portfolio;
