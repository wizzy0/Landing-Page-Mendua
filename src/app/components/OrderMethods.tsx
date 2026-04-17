import { Smartphone, Store, Bike, Users } from 'lucide-react';

export function OrderMethods() {
  const methods = [
    {
      icon: Smartphone,
      title: 'Online Delivery',
      description: 'Pesan melalui aplikasi GoFood untuk kemudahan delivery langsung ke lokasi Anda',
      cta: 'Pesan via GoFood',
      bgColor: 'bg-green-50',
      iconColor: '#10B981',
    },
    {
      icon: Bike,
      title: 'Takeaway',
      description: 'Order lewat WhatsApp dan ambil langsung di kedai',
      cta: 'WhatsApp Kami',
      bgColor: 'bg-blue-50',
      iconColor: '#3B82F6',
    },
    {
      icon: Store,
      title: 'Dine-in',
      description: 'Reservasi tempat untuk pengalaman makan yang nyaman',
      cta: 'Reservasi Meja',
      bgColor: 'bg-purple-50',
      iconColor: '#8B5CF6',
    },
    {
      icon: Users,
      title: 'Catering',
      description: 'Layanan catering untuk acara kantor atau keluarga',
      cta: 'Hubungi Kami',
      bgColor: 'bg-orange-50',
      iconColor: '#F97316',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
          >
            Cara Pemesanan
          </h2>
          <p 
            className="text-lg opacity-70 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Pilih cara paling mudah untuk menikmati hidangan favorit Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div 
                key={index}
                className="p-6 transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                style={{
                  borderRadius: '12px',
                  border: '2px solid #f0f0f0',
                  backgroundColor: 'white',
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: method.iconColor + '15' }}
                >
                  <Icon 
                    className="w-8 h-8"
                    style={{ color: method.iconColor }}
                  />
                </div>
                
                <h3 
                  className="text-xl mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
                >
                  {method.title}
                </h3>
                
                <p 
                  className="opacity-70 mb-5 leading-relaxed text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {method.description}
                </p>
                
                <button 
                  className="text-sm transition-colors duration-300 flex items-center gap-2 group-hover:gap-3"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    color: '#DC2626',
                  }}
                >
                  {method.cta}
                  <span className="transition-transform duration-300">→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Popular Delivery Apps */}
        <div className="mt-16 text-center">
          <p 
            className="text-sm uppercase tracking-widest mb-6 opacity-60"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Pesan Online Via
          </p>
          <div className="flex items-center justify-center">
            <div 
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 text-2xl tracking-wider"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: '#10B981' }}
            >
              GOFOOD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}