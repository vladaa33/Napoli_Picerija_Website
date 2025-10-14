import { CheckCircle, Home } from 'lucide-react';

interface OrderSuccessProps {
  isOpen: boolean;
  orderNumber: string;
  onClose: () => void;
}

export default function OrderSuccess({ isOpen, orderNumber, onClose }: OrderSuccessProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Hvala vam!</h2>
          <p className="text-lg text-gray-600">
            Vaša porudžbina je uspešno primljena
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <p className="text-sm text-gray-600 mb-2">Broj porudžbine:</p>
          <p className="text-2xl font-bold text-red-600">{orderNumber}</p>
        </div>

        <div className="space-y-3 text-sm text-gray-600 mb-6">
          <p>Potvrdu ćete dobiti na email adresu.</p>
          <p>Očekivano vreme dostave je 30-45 minuta.</p>
          <p className="font-medium">Kontaktirat ćemo vas ukoliko postoje pitanja.</p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
        >
          <Home className="h-5 w-5" />
          Nazad na početnu
        </button>
      </div>
    </div>
  );
}
