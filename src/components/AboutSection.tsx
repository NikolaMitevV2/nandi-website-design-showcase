
import { useEffect, useRef } from 'react';

const AboutSection = () => {
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

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div ref={sectionRef} className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll font-montserrat font-bold text-4xl md:text-5xl text-white mb-8 tracking-tight">
            What defines our purpose?
          </h2>
          
          {/* Aesthetic Line */}
          <div className="animate-on-scroll flex justify-center mb-16" style={{ animationDelay: '0.2s' }}>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-space-purple to-transparent" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Web Development Process"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-space-purple/20 to-transparent rounded-3xl" />
            </div>
          </div>

          {/* Lighter Dividing Line */}
          <div className="lg:hidden flex justify-center my-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-space-purple/50 to-transparent" />
          </div>

          <div className="animate-on-scroll space-y-8" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-montserrat font-semibold text-3xl text-white tracking-tight">
              Crafting Digital Excellence
            </h3>
            
            <div className="space-y-6 font-lato font-light text-lg text-body leading-relaxed">
              <p>
                N&i is a premium web development company dedicated to creating extraordinary digital experiences. 
                We combine cutting-edge technology with artistic vision to deliver websites that don't just look 
                stunning—they perform exceptionally.
              </p>
              
              <p>
                Our mission is to transform your digital presence into a powerful business asset. Every project 
                we undertake is crafted with meticulous attention to detail, ensuring your brand stands out 
                in the digital landscape.
              </p>
              
              <p>
                From concept to launch, we work closely with our clients to understand their unique vision 
                and translate it into a digital masterpiece that drives engagement and delivers results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="orbital-decoration w-40 h-40 top-10 right-10 opacity-10" />
      <div className="orbital-decoration w-28 h-28 bottom-20 left-20 opacity-15" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default AboutSection;
