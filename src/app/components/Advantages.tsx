import { Award, ShieldCheck, TrendingUp, Users } from 'lucide-react';

export function Advantages() {
  const advantages = [
    {
      icon: Award,
      title: 'Riset Mendalam',
      description: 'Menu dirancang berdasarkan riset pasar yang komprehensif untuk memastikan kesesuaian dengan selera lokal',
    },
    {
      icon: ShieldCheck,
      title: 'Kualitas Terjamin',
      description: 'Bahan baku premium dan proses produksi dengan standar tinggi untuk konsistensi rasa',
    },
    {
      icon: TrendingUp,
      title: 'Konsep Inovatif',
      description: 'Perpaduan tradisi dan modernitas yang relevan dengan gaya hidup masa kini',
    },
    {
      icon: Users,
      title: 'Dukungan Penuh',
      description: 'Pelatihan, panduan operasional, dan support berkelanjutan untuk kesuksesan mitra',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
          >
            Keunggulan
          </h2>
          <p 
            className="text-lg opacity-80 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Produk kami telah dirancang melalui proses riset mendalam, untuk menghasilkan konsep usaha dan menu-menu yang sejalan dengan citarasa masyarakat Indonesia. Berikut ini beberapa hal yang merupakan keunggulan kami:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 transition-all duration-300 hover:-translate-y-2 group text-center"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 mx-auto transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: '#DC2626' + '15' }}
                >
                  <Icon 
                    className="w-8 h-8"
                    style={{ color: '#DC2626' }}
                  />
                </div>
                
                <h3 
                  className="text-xl mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
                >
                  {advantage.title}
                </h3>
                
                <p 
                  className="opacity-70 leading-relaxed text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
