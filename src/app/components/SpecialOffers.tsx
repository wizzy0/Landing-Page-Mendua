export function SpecialOffers() {
  const offers = [
    {
      title: 'Paket Silver',
      description: 'Bakmie Manis 50 Pcs + Bakmi Chilli Oil 50 Pcs',
      price: 'Rp 2.400.000',
      badge: 'Silver',
    },
    {
      title: 'Paket Gold',
      description: 'Bakmie Manis 100 Pcs + Bakmi Chilli Oil 100 Pcs',
      price: 'Rp 4.800.000',
      badge: 'Gold',
    },
    {
      title: 'Paket Platinum',
      description: 'Bakmie Manis 200 Pcs + Bakmi Chilli Oil 200 Pcs',
      price: 'Rp 9.600.000',
      badge: 'Platinum',
    },
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#DC2626' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Paket Kemitraan
          </h2>
          <p 
            className="text-lg text-white/90 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Pilih paket kemitraan yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
              style={{ borderRadius: '12px' }}
            >
              <div 
                className="absolute top-4 right-4 px-3 py-1 text-white text-sm"
                style={{ 
                  backgroundColor: '#DC2626',
                  borderRadius: '20px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                {offer.badge}
              </div>
              
              <h3 
                className="text-2xl mb-3 mt-4"
                style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
              >
                {offer.title}
              </h3>
              
              <p 
                className="opacity-70 mb-6 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px' }}
              >
                {offer.description}
              </p>
              
              <div className="mb-6">
                <span 
                  className="text-3xl"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    color: '#DC2626',
                  }}
                >
                  {offer.price}
                </span>
              </div>
              
              <button 
                className="w-full py-3 text-white transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#DC2626',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  borderRadius: '6px',
                }}
              >
                Hubungi Kami
              </button>
            </div>
          ))}
        </div>

        {/* Terms */}
        <div className="mt-12 text-center">
          <p 
            className="text-white/90 text-sm max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Seluruh paket sudah termasuk pajak, packaging premium, dan kualitas rasa yang konsisten.
          </p>
        </div>
      </div>
    </section>
  );
}