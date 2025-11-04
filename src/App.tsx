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

const translations = {
  sr: {
    menu: "Meni",
    ourMenu: "Naš Meni",
    chooseCategory: "Izaberite kategoriju i istražite našu ponudu",
    backToCategories: "Nazad na kategorije",
    chooseAndAdd: "Izaberite jelo i dodajte ga u korpu",
    noItemsAvailable: "Trenutno nema dostupnih jela u ovoj kategoriji.",
    checkLater: "Molimo vas da proverite kasnije ili kontaktirajte restoran.",
    size: "Veličina:",
    addToCart: "Dodaj u korpu",
    yourCart: "Vaša korpa",
    cartEmpty: "Korpa je prazna",
    addSomething: "Dodajte nešto ukusno iz našeg menija!",
    viewMenu: "Pogledajte meni",
    removeFromCart: "Ukloni iz korpe",
    note: "Napomena:",
    increaseQuantity: "Povećaj količinu",
    decreaseQuantity: "Smanji količinu",
    total: "Ukupno",
    items: "stavki",
    item: "stavka",
    continueOrder: "Nastavite sa narudžbinom",
    addons: "Dodaci",
    pasta: "Pasta:",
    pastaRequired: "Obavezan izbor testenine:",
    nothingOffered: "Ništa od ponuđenog",
    free: "Besplatno",
    perAddon: "po dodatku",
    quantity: "Količina:",
    spagete: "Špagete",
    taljatele: "Taljatele",
    pene: "Pene",
    fusili: "Fusili",
    close: "Zatvori"
  },
  en: {
    menu: "Menu",
    ourMenu: "Our Menu",
    chooseCategory: "Choose a category and explore our offerings",
    backToCategories: "Back to categories",
    chooseAndAdd: "Choose a dish and add it to your cart",
    noItemsAvailable: "Currently no dishes available in this category.",
    checkLater: "Please check back later or contact the restaurant.",
    size: "Size:",
    addToCart: "Add to Cart",
    yourCart: "Your Cart",
    cartEmpty: "Cart is empty",
    addSomething: "Add something delicious from our menu!",
    viewMenu: "View Menu",
    removeFromCart: "Remove from cart",
    note: "Note:",
    increaseQuantity: "Increase quantity",
    decreaseQuantity: "Decrease quantity",
    total: "Total",
    items: "items",
    item: "item",
    continueOrder: "Continue with order",
    addons: "Add-ons",
    pasta: "Pasta:",
    pastaRequired: "Required pasta selection:",
    nothingOffered: "Nothing from offered",
    free: "Free",
    perAddon: "per add-on",
    quantity: "Quantity:",
    spagete: "Spaghetti",
    taljatele: "Tagliatelle",
    pene: "Penne",
    fusili: "Fusilli",
    close: "Close"
  }
};

function App() {
  const [language, setLanguage] = useState('sr');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

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

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#1A1A1A]">
        <Header onCartClick={() => setIsCartOpen(true)} onMenuClick={scrollToSection} language={language} setLanguage={setLanguage} translations={translations} />

        <main>
          <div ref={homeRef}>
            <Hero onOrderClick={() => scrollToSection('menu')} onCartClick={() => setIsCartOpen(true)} />
          </div>

          <div ref={menuRef}>
            <MenuSection language={language} translations={translations} />
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
          onMenuClick={() => {
            setIsCartOpen(false);
            setTimeout(() => scrollToSection('menu'), 100);
          }}
          language={language}
          translations={translations}
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
      </div>
    </CartProvider>
  );
}

export default App;
