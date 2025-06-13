import { useEffect, useRef } from "react";
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="about"
      className="relative z-10 py-32 px-6 overflow-hidden bg-purple-100"
      style={{ marginTop: "100vh" }} // This creates space for the hero section
    >
      <div ref={sectionRef} className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll font-montserrat font-bold text-4xl md:text-5xl text-gray-900 mb-8 tracking-tight">
            What defines our purpose?
          </h2>

          {/* Aesthetic Line */}
          <div
            className="animate-on-scroll flex justify-center mb-16"
            style={{
              animationDelay: "0.2s",
            }}
          >
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-space-purple to-transparent" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="animate-on-scroll"
            style={{
              animationDelay: "0.3s",
            }}
          >
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xlrounded-xl ">
                <img
                  src="../../public/lovable-uploads/eddited.PNG"
                  alt="Web Development Process"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-contain rounded-xl"
                />
                <img
                  src="https://placehold.co/112x112/CCEEFF/223344?text=Small+Top"
                  alt="Small decorative image"
                  className="absolute
                     top-[-0.5rem] sm:top-[-1rem] md:top-[-1.5rem]
                     right-[-1rem] sm:right-[-2rem] md:right-[-3rem]
                     w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
                     object-cover rounded-xl shadow-md"
                />
                <img
                  src="https://placehold.co/224x224/FFAAEE/552244?text=Large+Bottom"
                  alt="Another decorative image"
                  className="absolute
                     bottom-[-1rem] sm:bottom-[-1.5rem] md:bottom-[-2rem]
                     left-[-2rem] sm:left-[-3rem] md:left-[-4rem]
                     w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56
                     object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="lg:hidden flex justify-center my-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-space-purple/50 to-transparent" />
          </div>

          <div
            className="animate-on-scroll space-y-8"
            style={{
              animationDelay: "0.4s",
            }}
          >
            <h3 className="font-montserrat font-semibold text-3xl text-gray-900 tracking-tight">
              Crafting Digital Excellence
            </h3>

            <div className="space-y-6 font-lato font-light text-lg leading-relaxed">
              <p className="text-gray-700">
                N&i is a premium web development company dedicated to creating
                extraordinary digital experiences. We combine cutting-edge
                technology with artistic vision to deliver websites that don't
                just look stunning—they perform exceptionally.
              </p>

              <p className="text-gray-700">
                Our mission is to transform your digital presence into a
                powerful business asset. Every project we undertake is crafted
                with meticulous attention to detail, ensuring your brand stands
                out in the digital landscape.
              </p>

              <p className="text-gray-700">
                From concept to launch, we work closely with our clients to
                understand their unique vision and translate it into a digital
                masterpiece that drives engagement and delivers results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
