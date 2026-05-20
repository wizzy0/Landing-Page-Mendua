import { motion } from 'framer-motion';
import bakmieImg from '../../assets/images/Bakmie.jpg';
import dimsumImg from '../../assets/images/Dimsum.jpg';
import nasiGorengImg from '../../assets/images/Nasi Goreng.jpg';

export function MenuShowcase() {
  const menuItems = [
    {
      name: 'Bakmi Chilli Oil',
      description: 'Mie kuning khas dengan saus chilli oil pedas yang menggugah selera, dilengkapi topping ayam suwir dan sayuran segar',
      price: 'Rp 25.000',
      image: bakmieImg,
    },
    {
      name: 'Dimsum Mentai',
      description: 'Dimsum premium dengan saus mentai creamy yang lumer di mulut, perpaduan sempurna rasa gurih dan sedikit manis',
      price: 'Rp 20.000',
      image: dimsumImg,
    },
    {
      name: 'Nasi Goreng Bumbu Bali',
      description: 'Nasi goreng dengan bumbu rempah khas Bali yang aromatis, dilengkapi dengan ayam, telur mata sapi, dan kerupuk',
      price: 'Rp 25.000',
      image: nasiGorengImg,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
          >
            Menu Andalan
          </h2>
          <p 
            className="text-lg opacity-70 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sajian mie dan dimsum terbaik yang dibuat dengan resep rahasia turun temurun
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 
                    className="text-2xl"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
                  >
                    {item.name}
                  </h3>
                  <span 
                    className="text-xl whitespace-nowrap ml-2"
                    style={{ fontFamily: "'Inter', sans-serif", color: '#DC2626', fontWeight: 600 }}
                  >
                    {item.price}
                  </span>
                </div>
                <p 
                  className="opacity-70 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px' }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}