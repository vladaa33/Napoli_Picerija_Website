import { useState } from 'react';
import { X, CreditCard, Banknote } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { localDataService } from '../lib/localDataService';
import PostalCodeSelector from './PostalCodeSelector';
import type { Customer, Order, OrderItem } from '../types';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (orderNumber: string) => void;
}

export default function Checkout({ isOpen, onClose, onSuccess }: CheckoutProps) {
  const { items, totalAmount, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');

  const [formData, setFormData] = useState<Customer>({
    email: '',
    full_name: '',
    phone: '',
    address: '',
    city: '',
    postal_code: ''
  });

  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const deliveryAddress = `${formData.address}, ${formData.city} ${formData.postal_code}`;

      const orderData: Order = {
        total_amount: totalAmount,
        delivery_address: deliveryAddress,
        customer_notes: notes,
        payment_method: paymentMethod,
        payment_status: paymentMethod === 'cash' ? 'pending' : 'pending',
        status: 'pending'
      };

      const orderItems: Omit<OrderItem, 'id' | 'order_id'>[] = items.map(item => ({
        menu_item_id: item.menuItem.id,
        quantity: item.quantity,
        unit_price: item.selectedSize?.price || item.menuItem.price,
        subtotal: (item.selectedSize?.price || item.menuItem.price) * item.quantity,
        special_instructions: item.specialInstructions || ''
      }));

      const { order } = localDataService.createOrder(orderData, orderItems);

      clearCart();
      onSuccess(order.order_number!);
    } catch (error) {
      console.error('Order error:', error);
      alert('Došlo je do greške pri kreiranju porudžbine. Molimo pokušajte ponovo.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <form
  name="checkout"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  className="p-4 sm:p-6 space-y-5 sm:space-y-6"
>
  {/* Netlify essentials */}
  <input type="hidden" name="form-name" value="checkout" />
  <input type="hidden" name="bot-field" />

  {/* Hidden mirrors for non-text UI/state */}
  <input type="hidden" name="payment_method" value={paymentMethod} />
  <input type="hidden" name="total_amount" value={totalAmount.toFixed(2)} />
  <input
    type="hidden"
    name="delivery_address"
    value={`${formData.address}, ${formData.city} ${formData.postal_code}`}
  />
  {/* PostalCodeSelector nema name -> mirror */}
  <input type="hidden" name="postal_code" value={formData.postal_code} />
  {/* Serijalizuj stavke porudžbine (plain HTML payload) */}
  <input
    type="hidden"
    name="order_items"
    value={JSON.stringify(
      items.map((item) => {
        const unit = item.selectedSize?.price ?? item.menuItem.price;
        return {
          menu_item_id: item.menuItem.id,
          name: item.menuItem.name,
          size: item.selectedSize?.label ?? null,
          quantity: item.quantity,
          unit_price: unit,
          subtotal: unit * item.quantity,
          special_instructions: item.specialInstructions ?? "",
        };
      })
    )}
  />
  {/* Statusi ako želiš da ih vidiš u submissionu */}
  <input type="hidden" name="payment_status" value={paymentMethod === 'cash' ? 'pending' : 'pending'} />
  <input type="hidden" name="status" value="pending" />

  <div className="space-y-3 sm:space-y-4">
    <h3 className="text-base sm:text-lg font-semibold text-white">Vaši podaci</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
          Ime i prezime *
        </label>
        <input
          type="text"
          name="full_name"
          required
          value={formData.full_name}
          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
          className="w-full px-4 py-3 sm:py-2.5 border border-[#FF6B35]/20 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-base min-h-[48px] bg-[#1A1A1A] text-white"
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
          Telefon *
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 sm:py-2.5 border border-[#FF6B35]/20 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-base min-h-[48px] bg-[#1A1A1A] text-white"
        />
      </div>
    </div>

    <div>
      <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
        Email *
      </label>
      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full px-4 py-3 sm:py-2.5 border border-[#FF6B35]/20 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-base min-h-[48px] bg-[#1A1A1A] text-white"
      />
    </div>
  </div>

  <div className="space-y-3 sm:space-y-4">
    <h3 className="text-base sm:text-lg font-semibold text-white">Adresa dostave</h3>

    <div>
      <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
        Ulica i broj *
      </label>
      <input
        type="text"
        name="address"
        required
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="w-full px-4 py-3 sm:py-2.5 border border-[#FF6B35]/20 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-base min-h-[48px] bg-[#1A1A1A] text-white"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
          Grad *
        </label>
        <input
          type="text"
          name="city"
          required
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="w-full px-4 py-3 sm:py-2.5 border border-[#FF6B35]/20 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-base min-h-[48px] bg-[#1A1A1A] text-white"
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
          Poštanski broj *
        </label>
        {/* Komponenta bez name — OK, imamo hidden mirror iznad */}
        <PostalCodeSelector
          value={formData.postal_code}
          onChange={(value) => setFormData({ ...formData, postal_code: value })}
          required
        />
      </div>
    </div>
  </div>

  <div>
    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
      Napomena (opciono)
    </label>
    <textarea
      name="customer_notes"
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
      rows={3}
      placeholder="Dodatne instrukcije za dostavu..."
      className="w-full px-4 py-3 sm:py-2.5 border border-[#FF6B35]/20 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none text-base min-h-[80px] bg-[#1A1A1A] text-white placeholder:text-gray-500"
    />
  </div>

  <div className="space-y-3 sm:space-y-4">
    <h3 className="text-base sm:text-lg font-semibold text-white">Način plaćanja</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
      <button
        type="button"
        onClick={() => setPaymentMethod('card')}
        className={`p-4 border-2 rounded-lg transition-all min-h-[80px] active:scale-95 ${
          paymentMethod === 'card'
            ? 'border-[#FF6B35] bg-[#FF6B35]/10'
            : 'border-[#FF6B35]/20 hover:border-[#FF6B35]/40 bg-[#1A1A1A]'
        }`}
      >
        <CreditCard
          className={`h-8 w-8 mx-auto mb-2 ${
            paymentMethod === 'card' ? 'text-[#FF6B35]' : 'text-gray-400'
          }`}
        />
        <span className="block font-medium text-sm sm:text-base text-white">
          Kartica online
        </span>
      </button>

      <button
        type="button"
        onClick={() => setPaymentMethod('cash')}
        className={`p-4 border-2 rounded-lg transition-all ${
          paymentMethod === 'cash'
            ? 'border-[#FF6B35] bg-[#FF6B35]/10'
            : 'border-[#FF6B35]/20 hover:border-[#FF6B35]/40 bg-[#1A1A1A]'
        }`}
      >
        <Banknote
          className={`h-8 w-8 mx-auto mb-2 ${
            paymentMethod === 'cash' ? 'text-[#FF6B35]' : 'text-gray-400'
          }`}
        />
        <span className="block font-medium text-sm sm:text-base text-white">
          Gotovina
        </span>
      </button>
    </div>
  </div>

  <div className="border-t border-[#FF6B35]/20 pt-5 sm:pt-6">
    <div className="flex justify-between items-center text-lg sm:text-xl font-bold mb-5 sm:mb-6">
      <span className="text-white">Ukupno:</span>
      <span className="text-[#FF6B35]">{totalAmount.toFixed(2)} RSD</span>
    </div>

    <button
      type="submit"
      className="w-full bg-[#4CAF50] text-white py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#3d8b40] transition-colors shadow-lg hover:shadow-xl min-h-[52px] active:scale-98"
    >
      {paymentMethod === 'card' ? 'Plati i poruči' : 'Potvrdi porudžbinu'}
    </button>
  </div>
</form>
  );
}
