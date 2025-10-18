import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Marko Jovanović",
    rating: 5,
    text: "Najbolja pica u gradu! Testo je savršeno, sastojci su svježi, a dostava brza. Naručujem redovno i nikada nisam bio razočaran.",
    date: "prije 2 sedmice"
  },
  {
    id: 2,
    name: "Ana Petrović",
    rating: 5,
    text: "Odličan restoran sa autentičnim italijanskim jelima. Pasta carbonara je bila fantastična, a osoblje veoma ljubazno. Toplo preporučujem!",
    date: "prije 1 mesec"
  },
  {
    id: 3,
    name: "Stefan Nikolić",
    rating: 5,
    text: "Ambijent je divan, hrana je ukusna i cene su pristupačne. Posebno su mi se dopale pice sa tankim testom. Definitivno ću se vratiti!",
    date: "prije 3 sedmice"
  },
  {
    id: 4,
    name: "Jelena Đorđević",
    rating: 5,
    text: "Jako sam zadovoljna! Naručila sam picu Quattro Formaggi i bila je vrhunska. Brza dostava i topla pica. Hvala vam!",
    date: "prije 1 sedmicu"
  },
  {
    id: 5,
    name: "Nikola Stojanović",
    rating: 5,
    text: "Izvrsna hrana i profesionalna usluga. Probao sam njihove specijalitete i svaki zalogaj je bio užitak. Pet zvezdica!",
    date: "prije 2 meseca"
  },
  {
    id: 6,
    name: "Milica Ilić",
    rating: 5,
    text: "Apsolutno najbolje mesto za poručivanje hrane! Kvalitet je uvek na visokom nivou, a cene su fer. Preporučujem svima!",
    date: "prije 4 sedmice"
  }
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerView = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(reviews.length / itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 7000);

      return () => clearInterval(interval);
    }
  }, [isHovered, nextSlide]);

  const visibleReviews = reviews.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  return (
    <div className="bg-[#2A2A2A] rounded-2xl shadow-soft-lg p-6 md:p-10 border border-[#FF6B35]/20">
      <div className="max-w-7xl mx-auto">
        <h3
          className="text-3xl md:text-4xl font-bold text-white mb-3 text-center tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Šta kažu naši gosti
        </h3>
        <p className="text-gray-300 text-center mb-8 md:mb-12">
          Pročitajte iskustva naših zadovoljnih kupaca ⭐
        </p>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-[#FF6B35] hover:bg-[#e55a2a] text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 focus:ring-offset-[#2A2A2A]"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <div className="overflow-hidden px-2 md:px-4">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 transition-all duration-500 ease-in-out"
            >
              {visibleReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-[#1A1A1A] rounded-xl p-6 md:p-8 border border-[#FF6B35]/10 hover:border-[#FF6B35]/30 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-md hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg mb-2">{review.name}</h4>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#FF6B35] text-[#FF6B35]" />
                        ))}
                      </div>
                      <p className="text-gray-500 text-xs">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-[#FF6B35] hover:bg-[#e55a2a] text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 focus:ring-offset-[#2A2A2A]"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 mt-8 md:mt-10">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 focus:ring-offset-[#2A2A2A] ${
                index === currentIndex
                  ? 'w-8 bg-[#FF6B35]'
                  : 'w-2.5 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <a
            href="https://www.google.com/maps/place/Bulevar+Zorana+Đinđića+85,+Beograd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2 focus:ring-offset-[#2A2A2A]"
          >
            Pročitajte sve naše Google recenzije
            <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
