import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import flw1 from '../../assets/images/follow-us section/flwus 1.jpg';
import flw2 from '../../assets/images/follow-us section/flwus 2.jpg';
import flw3 from '../../assets/images/follow-us section/flwus 3.jpg';
import flw4 from '../../assets/images/follow-us section/flwus 4.jpg';
import flw5 from '../../assets/images/follow-us section/flwus 5.jpg';
import flw6 from '../../assets/images/follow-us section/flwus 6.jpg';

export function SocialFeed() {
  const photos = [
    { url: flw1, likes: 234 },
    { url: flw2, likes: 189 },
    { url: flw3, likes: 321 },
    { url: flw4, likes: 276 },
    { url: flw5, likes: 198 },
    { url: flw6, likes: 167 },
  ];

  // Duplicate photos for seamless infinite scroll
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram 
              className="w-8 h-8"
              style={{ color: '#DC2626' }}
            />
            <h2 
              className="text-5xl md:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
            >
              Follow Kami
            </h2>
          </div>
          <p 
            className="text-lg opacity-70 max-w-2xl mx-auto mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Lihat kreasi menu terbaru dan momen spesial dari pelanggan kami
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 transition-colors duration-300"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: '#DC2626',
            }}
          >
            @kedaimendua
          </a>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex gap-4 px-4"
          animate={{ x: [0, '-50%'] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }
          }}
          style={{ width: 'max-content' }}
        >
          {duplicatedPhotos.map((photo, index) => (
            <div 
              key={index}
              className="relative w-64 aspect-square overflow-hidden cursor-pointer"
              style={{ borderRadius: '8px' }}
            >
              <img 
                src={photo.url}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay on hover */}
              <div 
                className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <div 
                  className="text-white text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Instagram className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">{photo.likes} likes</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <button 
          className="px-8 py-3 text-white transition-all duration-300 hover:scale-105"
          style={{ 
            backgroundColor: '#DC2626',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            borderRadius: '6px',
          }}
        >
          Lihat Lebih Banyak
        </button>
      </div>
    </section>
  );
}