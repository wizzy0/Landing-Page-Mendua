import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rina Wijaya',
      role: 'Food Blogger',
      image: 'https://images.unsplash.com/photo-1606877012646-e7de458820cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZWF0aW5nfGVufDF8fHx8MTc3MTkyOTkyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'Bakmie nya enak banget! Tekstur mie nya pas, kuahnya gurih, dan topping nya melimpah. Dimsum nya juga juara, kulitnya tipis dan isian nya banyak. Recommended!',
    },
    {
      name: 'Budi Santoso',
      role: 'Pelanggan Setia',
      image: 'https://images.unsplash.com/photo-1575433287483-8ec588f72417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzE5Mjk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'Sudah langganan di sini sejak pertama buka. Rasa nya konsisten, harga nya terjangkau, pelayanan nya ramah. Tempat favorit keluarga untuk makan bareng!',
    },
    {
      name: 'Lisa Tan',
      role: 'Content Creator',
      image: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
      text: 'Suasana kedai nya cozy dan instagramable! Makanan nya gak cuma enak tapi juga cantik buat difoto. Wajib coba dimsum platter nya, worth it banget!',
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
            Kata Pelanggan Kami
          </h2>
          <p 
            className="text-lg opacity-70 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Testimoni dari ribuan pelanggan yang puas dengan layanan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 transition-all duration-300 hover:-translate-y-2 relative"
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Quote Icon */}
              <div 
                className="absolute top-6 right-6 opacity-10"
              >
                <Quote 
                  className="w-12 h-12"
                  style={{ color: '#DC2626' }}
                />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: '#F59E0B' }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p 
                className="opacity-80 leading-relaxed mb-6"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px' }}
              >
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 
                    className="font-medium"
                    style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}
                  >
                    {testimonial.name}
                  </h4>
                  <p 
                    className="text-sm opacity-60"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div 
          className="mt-16 text-center p-8 mx-auto max-w-2xl"
          style={{
            borderRadius: '12px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <span 
              className="text-5xl"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                color: '#DC2626',
              }}
            >
              4.9
            </span>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: '#F59E0B' }}
                  />
                ))}
              </div>
              <p 
                className="text-sm opacity-60"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Berdasarkan 2,547 ulasan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}