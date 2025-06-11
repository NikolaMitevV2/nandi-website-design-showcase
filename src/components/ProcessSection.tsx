import { useEffect, useRef } from 'react';
const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
  const processSteps = [{
    title: 'Discovery & Strategy',
    description: 'We begin by understanding your business goals, target audience, and project requirements to create a comprehensive strategy.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    number: '01'
  }, {
    title: 'Design & Prototyping',
    description: 'Our design team creates stunning visual concepts and interactive prototypes that bring your vision to life.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    number: '02'
  }, {
    title: 'Development & Testing',
    description: 'We build your website using cutting-edge technologies, ensuring optimal performance and thorough testing.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    number: '03'
  }, {
    title: 'Launch & Optimization',
    description: 'After launch, we monitor performance and continuously optimize to ensure your website delivers exceptional results.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    number: '04'
  }];
  return <section className="py-32 relative overflow-hidden">
      <div ref={sectionRef} className="container mx-auto max-w-7xl px-6">
        {processSteps.map((step, index) => <div key={index} className="animate-on-scroll sticky top-20 mb-8 last:mb-0" style={{
        animationDelay: `${index * 0.2}s`,
        zIndex: processSteps.length - index
      }}>
            <div className="card-hover rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 min-h-[600px]">
                {/* Content */}
                <div className="p-12 lg:p-16 flex flex-col justify-center sticky ">
                  <h3 className="font-montserrat font-bold text-3xl lg:text-4xl text-white mb-6 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-lato font-light text-lg text-body leading-relaxed mb-8 text-gray-50">
                    {step.description}
                  </p>
                  <div className="font-montserrat font-bold text-6xl lg:text-8xl text-space-purple/30">
                    {step.number}
                  </div>
                </div>

                {/* Image */}
                <div className="relative order-first lg:order-last">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-space-dark/20" />
                </div>
              </div>
            </div>
          </div>)}
      </div>

      {/* Background Decorations */}
      <div className="orbital-decoration w-44 h-44 top-40 right-10 opacity-10" style={{
      animationDelay: '2s'
    }} />
      <div className="orbital-decoration w-32 h-32 bottom-40 left-20 opacity-15" style={{
      animationDelay: '6s'
    }} />
    </section>;
};
export default ProcessSection;