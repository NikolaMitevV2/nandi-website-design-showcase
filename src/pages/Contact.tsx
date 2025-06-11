
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
    <div className="min-h-screen pt-20">
      <section className="py-32 px-6 relative overflow-hidden">
        <div ref={sectionRef} className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <Link to="/" className="animate-on-scroll inline-flex items-center space-x-2 text-space-purple-light hover:text-white transition-colors duration-300 mb-8">
              <ArrowLeft size={20} />
              <span className="font-lato font-light">Back to Home</span>
            </Link>
            
            <h1 className="animate-on-scroll font-montserrat font-bold text-5xl md:text-6xl text-white mb-8 tracking-tight">
              Get In Touch
            </h1>
            <p className="animate-on-scroll font-lato font-light text-xl text-body max-w-3xl leading-relaxed text-gray-50" style={{ animationDelay: '0.2s' }}>
              Ready to transform your digital presence? Let's discuss your project and create something amazing together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-on-scroll space-y-12" style={{ animationDelay: '0.3s' }}>
              <div className="space-y-8">
                <h2 className="font-montserrat font-bold text-3xl text-white mb-6">Contact Information</h2>
                
                <div className="flex items-center space-x-6">
                  <div className="p-6 rounded-2xl bg-space-purple/20">
                    <Mail size={32} className="text-space-purple-light" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-white mb-2 text-xl">Email</h3>
                    <p className="font-lato font-light text-body text-gray-300 text-lg">hello@ni-agency.com</p>
                    <p className="font-lato font-light text-body text-gray-400">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="p-6 rounded-2xl bg-space-purple/20">
                    <Phone size={32} className="text-space-purple-light" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-white mb-2 text-xl">Phone</h3>
                    <p className="font-lato font-light text-body text-gray-300 text-lg">+1 (555) 123-4567</p>
                    <p className="font-lato font-light text-body text-gray-400">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="p-6 rounded-2xl bg-space-purple/20">
                    <MapPin size={32} className="text-space-purple-light" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-white mb-2 text-xl">Location</h3>
                    <p className="font-lato font-light text-body text-gray-300 text-lg">New York, NY</p>
                    <p className="font-lato font-light text-body text-gray-400">Available for global projects</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-montserrat font-bold text-2xl text-white">Why Choose N&i?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-space-purple-light mt-3"></div>
                    <p className="font-lato font-light text-gray-300">Custom designs tailored to your brand</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-space-purple-light mt-3"></div>
                    <p className="font-lato font-light text-gray-300">Focus on lead generation and conversions</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-space-purple-light mt-3"></div>
                    <p className="font-lato font-light text-gray-300">SEO optimized and responsive across all devices</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-space-purple-light mt-3"></div>
                    <p className="font-lato font-light text-gray-300">Ongoing support and maintenance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll card-hover p-8 rounded-3xl" style={{ animationDelay: '0.4s' }}>
              <h2 className="font-montserrat font-bold text-2xl text-white mb-8">Send us a message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-montserrat font-medium text-white mb-3">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full p-4 rounded-2xl bg-space-dark/50 border border-space-purple/30 text-white placeholder-white/50 focus:border-space-purple focus:outline-none transition-colors duration-300" 
                      placeholder="John" 
                    />
                  </div>
                  <div>
                    <label className="block font-montserrat font-medium text-white mb-3">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full p-4 rounded-2xl bg-space-dark/50 border border-space-purple/30 text-white placeholder-white/50 focus:border-space-purple focus:outline-none transition-colors duration-300" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-montserrat font-medium text-white mb-3">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full p-4 rounded-2xl bg-space-dark/50 border border-space-purple/30 text-white placeholder-white/50 focus:border-space-purple focus:outline-none transition-colors duration-300" 
                    placeholder="john@example.com" 
                  />
                </div>

                <div>
                  <label className="block font-montserrat font-medium text-white mb-3">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    className="w-full p-4 rounded-2xl bg-space-dark/50 border border-space-purple/30 text-white placeholder-white/50 focus:border-space-purple focus:outline-none transition-colors duration-300" 
                    placeholder="+1 (555) 123-4567" 
                  />
                </div>

                <div>
                  <label className="block font-montserrat font-medium text-white mb-3">
                    Project Budget
                  </label>
                  <select className="w-full p-4 rounded-2xl bg-space-dark/50 border border-space-purple/30 text-white focus:border-space-purple focus:outline-none transition-colors duration-300">
                    <option value="">Select your budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block font-montserrat font-medium text-white mb-3">
                    Project Details *
                  </label>
                  <textarea 
                    rows={6} 
                    required
                    className="w-full p-4 rounded-2xl bg-space-dark/50 border border-space-purple/30 text-white placeholder-white/50 focus:border-space-purple focus:outline-none transition-colors duration-300 resize-none" 
                    placeholder="Tell us about your project, timeline, and any specific requirements..." 
                  />
                </div>

                <button type="submit" className="w-full neumorphic-btn text-white font-montserrat font-medium text-lg py-4">
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
    </div>
  );
};

export default Contact;
