export function MenuShowcase() {
  const menuItems = [
    {
      name: 'Bakmi Chilli Oil',
      description: 'Mie kuning khas dengan saus chilli oil pedas yang menggugah selera, dilengkapi topping ayam suwir dan sayuran segar',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1685209743819-dab6a8a853e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbm9vZGxlcyUyMGJha21pZXxlbnwxfHx8fDE3NzE5Mjk1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Dimsum Mentai',
      description: 'Dimsum premium dengan saus mentai creamy yang lumer di mulut, perpaduan sempurna rasa gurih dan sedikit manis',
      price: 'Rp 20.000',
      image: 'https://images.unsplash.com/photo-1753179253638-65a35859db6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW1zdW0lMjBzdGVhbWVkJTIwZHVtcGxpbmdzfGVufDF8fHx8MTc3MTkyOTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Nasi Goreng Bumbu Bali',
      description: 'Nasi goreng dengan bumbu rempah khas Bali yang aromatis, dilengkapi dengan ayam, telur mata sapi, dan kerupuk',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1559948271-7d5c98d2e951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b250b24lMjBzb3VwJTIwYXNpYW58ZW58MXx8fHwxNzcxOTI5NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
            Menu Andalan
          </h2>
          <p 
            className="text-lg opacity-70 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sajian mie dan dimsum terbaik yang dibuat dengan resep rahasia turun temurun
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}