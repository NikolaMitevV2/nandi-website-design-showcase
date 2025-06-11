
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
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
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div ref={sectionRef} className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll font-montserrat font-bold text-4xl md:text-5xl text-white mb-8 tracking-tight">
            Let's Create Something Amazing
          </h2>
          <p className="animate-on-scroll font-lato font-light text-xl text-body max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Ready to transform your digital presence? Get in touch and let's discuss your project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-on-scroll space-y-8" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-2xl bg-space-purple/20">
                  <Mail size={24} className="text-space-purple-light" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-white mb-1">Email</h3>
                  <p className="font-lato font-light text-body">hello@ni-agency.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-2xl bg-space-purple/20">
                  <Phone size={24} className="text-space-purple-light" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-white mb-1">Phone</h3>
                  <p className="font-lato font-light text-body">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-2xl bg-space-purple/20">
                  <MapPin size={24} className="text-space-purple-light" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-white mb-1">Location</h3>
                  <p className="font-lato font-light text-body">New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll card-hover p-8 rounded-3xl" style={{ animationDelay: '0.4s' }}>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-montserrat font-medium text-white mb-2">
                    First Name
                  </label>
                  <input 
                    type="text"
                    className="w-full p-4 rounded-2xl bg-space-dark/50 border border-space-purple/30 text-white placeholder-white/50 focus:border-space-purple focus:outline-none transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block font-montserrat font-medium text-white mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text"
                    className="w-full p-4 rounded-2xl bg-space-dark/50 border border-space-purple/30 text-white placeholder-white/50 focus:border-space-purple focus:outline-none transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block font-montserrat font-medium text-white mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  className="w-full p-4 rounded-2xl bg-space-dark/50 border border-space-purple/30 text-white placeholder-white/50 focus:border-space-purple focus:outline-none transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block font-montserrat font-medium text-white mb-2">
                  Project Details
                </label>
                <textarea 
                  rows={6}
                  className="w-full p-4 rounded-2xl bg-space-dark/50 border border-space-purple/30 text-white placeholder-white/50 focus:border-space-purple focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="w-full neumorphic-btn text-white font-montserrat font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="orbital-decoration w-44 h-44 top-10 right-10 opacity-10" style={{ animationDelay: '2s' }} />
      <div className="orbital-decoration w-28 h-28 bottom-40 left-20 opacity-15" style={{ animationDelay: '6s' }} />
    </section>
  );
};

export default ContactSection;
