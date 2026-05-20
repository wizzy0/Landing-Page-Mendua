export function OurStory() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
          >
            Cerita Kami
          </h2>
        </div>

        {/* Image on Top - Landscape */}
        <div className="mb-12">
          <div 
            className="overflow-hidden w-full"
            style={{
              borderRadius: '8px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1758354465013-847ebb9e5390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE4MTcxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Interior Kedai"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>



        {/* Three Columns Text Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Berawal dari Sebuah Inovasi */}
          <div>
            <h3 
              className="text-2xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
            >
              Berawal dari Sebuah Inovasi
            </h3>
            <p 
              className="leading-relaxed opacity-80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Kedai Mendua lahir pada tahun 2025 sebagai jawaban atas kerinduan masyarakat akan kuliner yang tidak hanya lezat, tetapi juga penuh kreativitas dan kualitas tinggi. Kami percaya bahwa menikmati bakmie bukan sekadar soal rasa, melainkan tentang sebuah pengalaman yang menyenangkan.
            </p>
          </div>
          
          {/* Column 2 - Menjaga Tradisi, Memeluk Modernisasi */}
          <div>
            <h3 
              className="text-2xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
            >
              Menjaga Tradisi, Memeluk Modernisasi
            </h3>
            <p 
              className="leading-relaxed opacity-80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Sejak awal berdiri, fokus utama kami adalah menyajikan bakmie sebagai menu unggulan yang diolah secara autentik. Dengan standar kualitas yang ketat dan bahan baku pilihan, kami mempertahankan keaslian rasa tradisional namun tetap memberikan sentuhan inovasi yang unik dan menarik bagi selera pasar saat ini.
            </p>
          </div>
          
          {/* Column 3 - Lebih dari Sekadar Kedai */}
          <div>
            <h3 
              className="text-2xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
            >
              Lebih dari Sekadar Kedai
            </h3>
            <p 
              className="leading-relaxed opacity-80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Kami telah melalui proses riset mendalam untuk memastikan setiap produk kami sejalan dengan lidah masyarakat Indonesia. Melalui konsep yang instagramable dan pelayanan yang hangat, Kedai Mendua hadir untuk semua kalangan—dari pecinta kuliner yang mencari rasa baru hingga mereka yang menginginkan sajian cepat saji berkualitas.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            className="px-8 py-3 transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#DC2626',
              color: 'white',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              borderRadius: '4px',
            }}
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
}