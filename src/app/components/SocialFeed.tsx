import { Instagram } from 'lucide-react';

export function SocialFeed() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1685209743819-dab6a8a853e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbm9vZGxlcyUyMGJha21pZXxlbnwxfHx8fDE3NzE5Mjk1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      likes: 234,
    },
    {
      url: 'https://images.unsplash.com/photo-1753179253638-65a35859db6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW1zdW0lMjBzdGVhbWVkJTIwZHVtcGxpbmdzfGVufDF8fHx8MTc3MTkyOTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      likes: 189,
    },
    {
      url: 'https://images.unsplash.com/photo-1757715375693-a98372cde4e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBwbGF0aW5nfGVufDF8fHx8MTc3MTkyOTkyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      likes: 321,
    },
    {
      url: 'https://images.unsplash.com/photo-1649173284332-9d95b317fbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW1lbiUyMG5vb2RsZXMlMjBjbG9zZXVwfGVufDF8fHx8MTc3MTkyOTkyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      likes: 276,
    },
    {
      url: 'https://images.unsplash.com/photo-1670300522639-ce378e5d23a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW1wbGluZ3MlMjBmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzcxOTI5OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      likes: 198,
    },
    {
      url: 'https://images.unsplash.com/photo-1559948271-7d5c98d2e951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b250b24lMjBzb3VwJTIwYXNpYW58ZW58MXx8fHwxNzcxOTI5NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      likes: 167,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
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
            @kedaimiekita
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="relative aspect-square overflow-hidden group cursor-pointer"
              style={{ borderRadius: '8px' }}
            >
              <img 
                src={photo.url}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div 
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
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
      </div>
    </section>
  );
}