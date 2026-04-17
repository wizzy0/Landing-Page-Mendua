export function TrustedBy() {
  // Minimalist monochrome logos represented as text for this demo
  const partners = [
    { name: 'HALAL CERTIFIED', width: '140px' },
    { name: 'FRESH DAILY', width: '130px' },
    { name: 'PREMIUM INGREDIENTS', width: '180px' },
    { name: 'LOCAL FAVORITE', width: '140px' },
    { name: 'HYGIENE STANDARD', width: '160px' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p 
          className="text-center text-sm uppercase tracking-widest mb-12 opacity-60"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Dipercaya Oleh Ribuan Pelanggan
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="opacity-40 hover:opacity-70 transition-opacity duration-300"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.1em',
                fontSize: '14px',
                width: partner.width,
                textAlign: 'center',
              }}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
