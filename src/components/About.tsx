import { Heart, Clock, ChefHat } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-200 via-orange-200 to-emerald-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-emerald-400 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2VhNTgwYyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">O nama</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Napoli donosi autentičan ukus Italije u Srbiju već više od decenije ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 text-center group hover:-translate-y-1">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-9 w-9 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Sa ljubavlju ❤️</h3>
            <p className="text-gray-600 leading-relaxed">
              Svako jelo pripremamo sa pažnjom i posvećenošću tradicionalnim receptima
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 text-center group hover:-translate-y-1">
            <div className="bg-gradient-to-br from-green-600 to-green-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <ChefHat className="h-9 w-9 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Iskusni kuvari 👨‍🍳</h3>
            <p className="text-gray-600 leading-relaxed">
              Naš tim kulinara obučen je u najfinijoj italijanskoj tradiciji
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 text-center group hover:-translate-y-1">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-9 w-9 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Brza dostava 🚀</h3>
            <p className="text-gray-600 leading-relaxed">
              Garantujemo svežu i brzu dostavu vaših omiljenih jela
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-soft-lg p-10 md:p-16 border border-orange-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Naša priča 📖</h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Restoran Napoli osnovan je sa vizijom da donese autentičan italijanski ukus srpskim ljubiteljima dobre hrane. Inspirisani toplinom i gostoprimstvom južne Italije, trudimo se da svaki obrok bude poseban doživljaj.
              </p>
              <p>
                Koristimo samo najkvalitetnije sastojke, a naše pice pravimo po tradicionalnim receptima iz Napulja. Svaka pica, svaki specijalitet pripremljen je sa pažnjom kako bi vaš obrok bio savršen.
              </p>
              <p>
                Danas smo ponosni što možemo da vam pružimo mogućnost da uživate u našim specijalitetima u udobnosti vašeg doma, zahvaljujući našoj jednostavnoj online narudžbini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
