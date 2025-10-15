import { useState, useRef } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import Admin from './components/Admin';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs = {
      home: homeRef,
      menu: menuRef,
      about: aboutRef,
      contact: contactRef
    };

    const targetRef = refs[section as keyof typeof refs];
    if (targetRef?.current) {
      const offset = 80;
      const elementPosition = targetRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = (orderNum: string) => {
    setOrderNumber(orderNum);
    setIsCheckoutOpen(false);
    setIsSuccessOpen(true);
  };

  const handleSuccessClose = () => {
    setIsSuccessOpen(false);
    scrollToSection('home');
  };

  if (showAdmin) {
    return (
      <div>
        <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
          <button
            onClick={() => setShowAdmin(false)}
            className="bg-white text-gray-700 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-soft-lg hover:bg-gray-100 transition-all duration-200 font-semibold hover:-translate-y-0.5 text-sm sm:text-base min-h-[44px] active:scale-95"
          >
            Nazad na sajt
          </button>
        </div>
        <Admin />
      </div>
    );
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#1A1A1A]">
        <Header onCartClick={() => setIsCartOpen(true)} onMenuClick={scrollToSection} />

        <main>
          <div ref={homeRef}>
            <Hero onOrderClick={() => scrollToSection('menu')} onCartClick={() => setIsCartOpen(true)} />
          </div>

          <div ref={menuRef}>
            <MenuSection />
          </div>

          <div ref={aboutRef}>
            <About />
          </div>

          <div ref={contactRef}>
            <Contact />
          </div>
        </main>

        <Footer />

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />

        <Checkout
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          onSuccess={handleOrderSuccess}
        />

        <OrderSuccess
          isOpen={isSuccessOpen}
          orderNumber={orderNumber}
          onClose={handleSuccessClose}
        />

        <button
          onClick={() => setShowAdmin(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#FF6B35] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl shadow-soft-lg hover:bg-[#e55a2a] transition-all duration-300 text-xs sm:text-sm font-semibold z-40 hover:-translate-y-1 min-h-[44px] active:scale-95"
        >
          Admin
        </button>
      </div>
    </CartProvider>
  );
}

export default App;
