import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      className="py-16"
      style={{ backgroundColor: '#DC2626' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="text-white">
            <h3 
              className="text-3xl mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Kunjungi Kami
            </h3>
            <div 
              className="space-y-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Jl. Letda Tantular No.7</p>
                  <p className="opacity-90">Dangin Puri Klod, Denpasar Timur, Bali 80234</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>+62 812-3456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>info@kedaimendua.com</p>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Jam Buka</p>
                  <p className="opacity-90">Senin - Minggu</p>
                  <p className="opacity-90">11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div>
            <div 
              className="overflow-hidden w-full h-full min-h-[300px] bg-white/10"
              style={{ borderRadius: '8px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3315750035043!2d115.22772237583648!3d-8.660351291387214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2410053df1be7%3A0xd06ddf9eb0bb19ab!2sKedai%20mendua!5e0!3m2!1sen!2sid!4v1716196000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kedai Mendua"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="mt-12 pt-8 border-t border-white/20 text-center text-white/80"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p className="text-sm">
            © 2026 Kedai Mendua. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}