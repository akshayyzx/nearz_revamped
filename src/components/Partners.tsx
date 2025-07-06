
const Partners = () => {
  const partners = [
    { name: "Naturals", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "VLCC", logo: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=120&h=60&fit=crop" },
    { name: "Lakme", logo: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=120&h=60&fit=crop" },
    { name: "Bodycraft", logo: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=120&h=60&fit=crop" },
    { name: "Enrich", logo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=120&h=60&fit=crop" },
    { name: "Glow", logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=60&fit=crop" }
  ];

  return (
    <section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by 1000+ Premium Salons
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with the best salons, spas, and beauty centers across the country
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 w-32 h-16 bg-gray-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
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
