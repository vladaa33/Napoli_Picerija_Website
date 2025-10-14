import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-3xl font-bold text-orange-500 mb-4 tracking-tight">Napoli</h3>
            <p className="text-gray-400 leading-relaxed">
              Autentična italijanska kuhinja u srcu Srbije
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-lg">Brzi linkovi</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-orange-500 transition-all duration-200 hover:translate-x-1 inline-block">
                  Početna
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-500 transition-all duration-200 hover:translate-x-1 inline-block">
                  Meni
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-500 transition-all duration-200 hover:translate-x-1 inline-block">
                  O nama
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition-all duration-200 hover:translate-x-1 inline-block">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-lg">Kontakt</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+38164 111 6 999" className="hover:text-orange-500 transition-colors">
                  +38164 111 6 999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@napolipizza.rs" className="hover:text-orange-500 transition-colors">
                  info@napolipizza.rs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-lg">Pratite nas</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 p-3.5 rounded-xl hover:bg-orange-600 transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 p-3.5 rounded-xl hover:bg-orange-600 transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Napoli. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
