
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const faqs = [
    {
      question: 'What makes N&i different from other web development agencies?',
      answer: 'We combine luxury design with cutting-edge technology, focusing on both aesthetics and performance. Our personalized approach ensures every project reflects your unique brand identity while delivering exceptional user experiences.'
    },
    {
      question: 'How long does a typical web development project take?',
      answer: 'Project timelines vary based on complexity and requirements. A standard business website typically takes 6-8 weeks, while more complex e-commerce or custom applications can take 12-16 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes, we offer comprehensive post-launch support including regular updates, security monitoring, performance optimization, and technical assistance. Our support plans are tailored to your specific needs and business requirements.'
    },
    {
      question: 'Can you help improve our existing website?',
      answer: 'Absolutely! We offer website redesign, optimization, and enhancement services. Whether you need a complete overhaul or specific improvements, we can help modernize your existing digital presence.'
    },
    {
      question: 'What technologies do you use for development?',
      answer: 'We use modern, industry-leading technologies including React, Next.js, TypeScript, and various CMS platforms. Our tech stack is chosen based on your specific requirements to ensure optimal performance and scalability.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div ref={sectionRef} className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll font-montserrat font-bold text-4xl md:text-5xl text-white mb-8 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="animate-on-scroll font-lato font-light text-xl text-body leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Get answers to the most common questions about our services
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="animate-on-scroll card-hover rounded-3xl overflow-hidden"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-8 text-left flex items-center justify-between group"
              >
                <h3 className="font-montserrat font-semibold text-lg md:text-xl text-white pr-4 tracking-tight">
                  {faq.question}
                </h3>
                <ChevronDown 
                  size={24} 
                  className={`text-space-purple-light transition-transform duration-300 flex-shrink-0 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-8">
                  <p className="font-lato font-light text-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="orbital-decoration w-32 h-32 top-20 left-10 opacity-10" style={{ animationDelay: '1s' }} />
      <div className="orbital-decoration w-40 h-40 bottom-20 right-20 opacity-15" style={{ animationDelay: '5s' }} />
    </section>
  );
};

export default FAQSection;
