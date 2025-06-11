import { useEffect, useRef } from 'react';
import { Check, Star } from 'lucide-react';
const PricingSection = () => {
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
  const plans = [{
    name: 'Starter',
    description: 'Perfect for small businesses just getting started',
    price: 'Free Consultation',
    features: ['Initial consultation', 'Basic website audit', 'Strategy recommendations', 'Project timeline', 'Cost estimation'],
    recommended: false
  }, {
    name: 'Professional',
    description: 'Ideal for growing businesses ready to scale',
    price: 'Custom Quote',
    features: ['Custom design & development', 'Mobile-responsive design', 'SEO optimization', 'Content management system', '3 months support', 'Performance optimization', 'Analytics integration'],
    recommended: true
  }, {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: 'Contact Us',
    features: ['Everything in Professional', 'Advanced functionality', 'Custom integrations', 'Priority support', '12 months maintenance', 'Dedicated project manager', 'Training sessions', 'Scalable architecture'],
    recommended: false
  }];
  return <section className="py-32 px-6 relative overflow-hidden">
      <div ref={sectionRef} className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll font-montserrat font-bold text-4xl md:text-5xl text-white mb-8 tracking-tight">
            Investment Plans
          </h2>
          <p className="animate-on-scroll font-lato font-light text-xl text-body max-w-3xl mx-auto leading-relaxed" style={{
          animationDelay: '0.2s'
        }}>
            Choose the perfect plan that aligns with your business goals and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => <div key={index} className={`animate-on-scroll card-hover p-8 rounded-3xl relative ${plan.recommended ? 'scale-105 border-2 border-space-purple' : ''}`} style={{
          animationDelay: `${0.3 + index * 0.1}s`
        }}>
              {plan.recommended && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-space-purple text-white px-6 py-2 rounded-full font-montserrat font-medium text-sm flex items-center space-x-1">
                    <Star size={16} fill="currentColor" />
                    <span>Recommended</span>
                  </div>
                </div>}

              <div className="text-center mb-8">
                <h3 className="font-montserrat font-bold text-2xl text-white mb-4 tracking-tight">
                  {plan.name}
                </h3>
                <p className="font-lato font-light text-body mb-6 leading-relaxed text-gray-50">
                  {plan.description}
                </p>
                <div className="font-montserrat font-semibold text-3xl text-space-purple-light">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start space-x-3">
                    <Check size={20} className="text-space-purple-light mt-0.5 flex-shrink-0" />
                    <span className="font-lato font-light text-body text-gray-50">{feature}</span>
                  </li>)}
              </ul>

              <button className="w-full neumorphic-btn text-white font-montserrat font-medium">
                Get Started
              </button>
            </div>)}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="orbital-decoration w-36 h-36 top-20 right-10 opacity-10" style={{
      animationDelay: '2s'
    }} />
      <div className="orbital-decoration w-24 h-24 bottom-32 left-20 opacity-15" style={{
      animationDelay: '7s'
    }} />
    </section>;
};
export default PricingSection;