import { useState } from 'react';
import { X, CreditCard, Banknote } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabase';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: customer, error: customerError } = await supabase
        .from('customers')
        .upsert({
          email: formData.email,
          full_name: formData.full_name,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postal_code: formData.postal_code
        }, {
          onConflict: 'email'
        })
        .select()
        .single();

      if (customerError) throw customerError;

      const deliveryAddress = `${formData.address}, ${formData.city} ${formData.postal_code}`;

      const orderData: Order = {
        customer_id: customer.id,
        total_amount: totalAmount,
        delivery_address: deliveryAddress,
        customer_notes: notes,
        payment_method: paymentMethod,
        payment_status: paymentMethod === 'cash' ? 'pending' : 'pending',
        status: 'pending'
      };

      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert(orderData)
        .select()
        .single();

      if (orderError) throw orderError;

      const orderItems: OrderItem[] = items.map(item => ({
        order_id: order.id!,
        menu_item_id: item.menuItem.id,
        quantity: item.quantity,
        unit_price: item.menuItem.price,
        subtotal: item.menuItem.price * item.quantity,
        special_instructions: item.specialInstructions || ''
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

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
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-0 sm:p-4"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-none sm:rounded-xl shadow-2xl max-w-2xl w-full h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b p-4 sm:p-6 flex items-center justify-between z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Završite porudžbinu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Zatvori"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Vaši podaci</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Ime i prezime *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full px-4 py-3 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base min-h-[48px]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base min-h-[48px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base min-h-[48px]"
                />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Adresa dostave</h3>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Ulica i broj *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base min-h-[48px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Grad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base min-h-[48px]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Poštanski broj *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postal_code}
                    onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })}
                    className="w-full px-4 py-3 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base min-h-[48px]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Napomena (opciono)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Dodatne instrukcije za dostavu..."
                className="w-full px-4 py-3 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-base min-h-[80px]"
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Način plaćanja</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border-2 rounded-lg transition-all min-h-[80px] active:scale-95 ${
                    paymentMethod === 'card'
                      ? 'border-orange-600 bg-orange-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <CreditCard className={`h-8 w-8 mx-auto mb-2 ${
                    paymentMethod === 'card' ? 'text-orange-600' : 'text-gray-600'
                  }`} />
                  <span className="block font-medium text-sm sm:text-base">Kartica online</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cash')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    paymentMethod === 'cash'
                      ? 'border-orange-600 bg-orange-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Banknote className={`h-8 w-8 mx-auto mb-2 ${
                    paymentMethod === 'cash' ? 'text-orange-600' : 'text-gray-600'
                  }`} />
                  <span className="block font-medium text-sm sm:text-base">Gotovina</span>
                </button>
              </div>
            </div>

            <div className="border-t pt-5 sm:pt-6">
              <div className="flex justify-between items-center text-lg sm:text-xl font-bold mb-5 sm:mb-6">
                <span>Ukupno:</span>
                <span className="text-orange-600">{totalAmount.toFixed(2)} RSD</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl min-h-[52px] active:scale-98"
              >
                {loading ? 'Obrada...' : paymentMethod === 'card' ? 'Plati i poruči' : 'Potvrdi porudžbinu'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
