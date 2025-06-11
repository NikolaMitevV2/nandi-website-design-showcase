import { useEffect, useRef } from 'react';
const StrengthsSection = () => {
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
  const strengths = [{
    icon: '🎨',
    title: 'Custom Design',
    description: 'Bespoke designs tailored to your brand identity and business goals.'
  }, {
    icon: '🚀',
    title: 'Lead Generation Focus',
    description: 'Websites optimized to convert visitors into valuable leads and customers.'
  }, {
    icon: '📱',
    title: 'Responsive',
    description: 'Perfect experience across all devices, from mobile to desktop.'
  }, {
    icon: '🔍',
    title: 'SEO Optimized',
    description: 'Built with search engine optimization at the core for maximum visibility.'
  }];
  return <section id="strengths" className="py-32 px-6 relative overflow-hidden">
      <div ref={sectionRef} className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll font-montserrat font-bold text-4xl md:text-5xl text-white mb-8 tracking-tight">
            Our Core Strengths
          </h2>
          <p style={{
          animationDelay: '0.2s'
        }} className="animate-on-scroll font-lato font-light text-xl text-body max-w-3xl mx-auto leading-relaxed text-gray-50">
            We combine technical expertise with creative vision to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => <div key={index} className="animate-on-scroll card-hover p-8 rounded-3xl text-center group" style={{
          animationDelay: `${0.3 + index * 0.1}s`
        }}>
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {strength.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-white mb-4 tracking-tight">
                {strength.title}
              </h3>
              <p className="font-lato font-light text-body leading-relaxed text-gray-50">
                {strength.description}
              </p>
            </div>)}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="orbital-decoration w-36 h-36 top-20 left-10 opacity-10" style={{
      animationDelay: '1s'
    }} />
      <div className="orbital-decoration w-24 h-24 bottom-32 right-20 opacity-15" style={{
      animationDelay: '5s'
    }} />
    </section>;
};
export default StrengthsSection;