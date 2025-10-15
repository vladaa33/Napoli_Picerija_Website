interface HeroProps {
  onOrderClick: () => void;
  onCartClick: () => void;
}

export default function Hero({ onOrderClick, onCartClick }: HeroProps) {
  return (
    <section className="relative text-white pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden min-h-[600px] sm:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/WhatsApp Image 2025-10-14 at 20.19.39_8878c8d6.jpg')"
        }}
      ></div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tighter leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            Dobrodošli u Napoli 🍕
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            Autentična italijanska kuhinja u srcu Srbije
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            Tradicionalne recepte donosimo pravo do vaših vrata. Svaka pica, svaki obrok pripremljen sa ljubavlju i pažnjom. ❤️
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              onClick={onCartClick}
              className="bg-[#FF6B35] text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#e55a2a] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 min-h-[48px]"
            >
              Poručite odmah
            </button>
            <button
              onClick={onOrderClick}
              className="bg-[#4CAF50] backdrop-blur-sm text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#3d8b40] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border-2 border-white/20 min-h-[48px]"
            >
              Pogledajte meni
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
    </section>
  );
}