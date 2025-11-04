import { useState, useRef, useEffect } from 'react';
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

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('napoli-language') || 'sr';
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    localStorage.setItem('napoli-language', language);
  }, [language]);

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

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#1A1A1A]">
        <Header
          onCartClick={() => setIsCartOpen(true)}
          onMenuClick={scrollToSection}
          language={language}
          onLanguageChange={setLanguage}
        />

        <main>
          <div ref={homeRef}>
            <Hero onOrderClick={() => scrollToSection('menu')} onCartClick={() => setIsCartOpen(true)} language={language} />
          </div>

          <div ref={menuRef}>
            <MenuSection language={language} />
          </div>

          <div ref={aboutRef}>
            <About language={language} />
          </div>

          <div ref={contactRef}>
            <Contact language={language} />
          </div>
        </main>

        <Footer />

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
          onMenuClick={() => {
            setIsCartOpen(false);
            setTimeout(() => scrollToSection('menu'), 100);
          }}
          language={language}
        />

        <Checkout
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          onSuccess={handleOrderSuccess}
          language={language}
        />

        <OrderSuccess
          isOpen={isSuccessOpen}
          orderNumber={orderNumber}
          onClose={handleSuccessClose}
          language={language}
        />
      </div>
    </CartProvider>
  );
}

export default App;
