interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 text-white pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tighter leading-tight">
            Dobrodošli u Napoli 🍕
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-orange-50 font-medium">
            Autentična italijanska kuhinja u srcu Srbije
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-10 text-orange-100 max-w-2xl mx-auto leading-relaxed px-2">
            Tradicionalne recepte donosimo pravo do vaših vrata. Svaka pica, svaki obrok pripremljen sa ljubavlju i pažnjom. ❤️
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              onClick={onOrderClick}
              className="bg-white text-orange-600 px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-orange-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 min-h-[48px]"
            >
              Poručite odmah
            </button>
            <button
              onClick={onOrderClick}
              className="bg-orange-800/80 backdrop-blur-sm text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-orange-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border-2 border-white/20 min-h-[48px]"
            >
              Pogledajte meni
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}