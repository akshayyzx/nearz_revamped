import partner1 from '/partners/partner1.jpg';
import partner2 from '/partners/partner2.jpg';
import partner3 from '/partners/partner3.jpg';
import partner4 from '/partners/partner4.jpg';
import partner5 from '/partners/partner5.jpg';
import partner6 from '/partners/partner6.jpg';

const Partners = () => {
  const logos = [partner1, partner2, partner3, partner4, partner5, partner6];

  return (
    <section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by 1000+ Premium Salons
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partnered with the best salons, spas, and beauty centers across the country
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-6 items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-25">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
