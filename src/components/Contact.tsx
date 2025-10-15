import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#FF6B35] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4CAF50] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#FF6B35] rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9IiNmYjkyM2MiIGZpbGwtb3BhY2l0eT0iLjA4Ii8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Kontakt 📞</h2>
          <p className="text-lg text-gray-300">
            Rado ćemo odgovoriti na sva vaša pitanja 👋
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 text-center group hover:-translate-y-1 border border-[#FF6B35]/20">
            <div className="bg-gradient-to-br from-[#4CAF50] to-[#3d8b40] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-white mb-3 text-lg tracking-tight">Telefon 📱</h3>
            <a href="+38164 111 6 999" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
              +38164 111 6 999
            </a>
          </div>

          <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 text-center group hover:-translate-y-1 border border-[#FF6B35]/20">
            <div className="bg-gradient-to-br from-[#4CAF50] to-[#3d8b40] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-white mb-3 text-lg tracking-tight">Email ✉️</h3>
            <a href="mailto:info@napolipizza.rs" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
              info@napolipizza.rs
            </a>
          </div>

          <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 text-center group hover:-translate-y-1 border border-[#FF6B35]/20">
            <div className="bg-gradient-to-br from-[#4CAF50] to-[#3d8b40] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-white mb-3 text-lg tracking-tight">Adresa 📍</h3>
            <p className="text-gray-300">
              Bulevar Zorana Đinđića 85<br />
            </p>
          </div>

          <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 text-center group hover:-translate-y-1 border border-[#FF6B35]/20">
            <div className="bg-gradient-to-br from-[#4CAF50] to-[#3d8b40] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-white mb-3 text-lg tracking-tight">Radno vreme ⏰</h3>
            <p className="text-gray-300">
              Svakog dana<br />
              09:00 - 00:01
            </p>
          </div>
        </div>

        <div className="bg-[#2A2A2A] rounded-2xl shadow-soft-lg p-10 md:p-14 border border-[#FF6B35]/20 mb-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pošaljite nam poruku ✉️
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3.5 border border-[#FF6B35]/20 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all duration-200 placeholder:text-gray-500 bg-[#1A1A1A] text-white"
                    placeholder="Vaše ime"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-3.5 border border-[#FF6B35]/20 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all duration-200 placeholder:text-gray-500 bg-[#1A1A1A] text-white"
                    placeholder="vas@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Poruka
                </label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-3.5 border border-[#FF6B35]/20 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none transition-all duration-200 placeholder:text-gray-500 bg-[#1A1A1A] text-white"
                  placeholder="Vaša poruka..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4CAF50] text-white py-4 rounded-xl font-bold hover:bg-[#3d8b40] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Pošalji poruku 🚀
              </button>
            </form>
          </div>
        </div>

        <div className="bg-[#2A2A2A] rounded-2xl shadow-soft-lg overflow-hidden border border-[#FF6B35]/20">
          <div className="p-6 md:p-8">
            <h3 className="text-3xl font-bold text-white mb-6 text-center tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pronađite nas 🗺️
            </h3>
            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <iframe
               src="https://www.google.com/maps/place/Napoli+Picerija/@44.8159881,20.4158339,618m/data=!3m1!1e3!4m15!1m8!3m7!1s0x475a6563c1cc8b0b:0x44962b4dee8120!2sBulevar+Zorana+%C4%90in%C4%91i%C4%87a+85,+Beograd+11159!3b1!8m2!3d44.8160617!4d20.4184968!16s%2Fg%2F11nnk_tbfy!3m5!1s0x475a65f6d0a1bf63:0x9742b3c5cc457ff9!8m2!3d44.816026!4d20.4186769!16s%2Fg%2F11thp3l7jp?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D,+Beograd,+Serbia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Napoli Restaurant Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
