import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { localDataService } from '../lib/localDataService';
import type { Category, MenuItem } from '../types';

export default function Admin() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
    category_id: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const categoriesData = localDataService.getCategories();
    const itemsData = localDataService.getMenuItems();

    setCategories(categoriesData);
    if (categoriesData.length > 0 && !selectedCategory) {
      setSelectedCategory(categoriesData[0].id);
    }
    setMenuItems(itemsData);
  };

  const openModal = (item?: MenuItem) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        name: item.name,
        description: item.description,
        price: item.price.toString(),
        image_url: item.image_url,
        category_id: item.category_id
      });
    } else {
      setEditingItem(null);
      setFormData({
        name: '',
        description: '',
        price: '',
        image_url: '',
        category_id: selectedCategory
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setFormData({
      name: '',
      description: '',
      price: '',
      image_url: '',
      category_id: ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const itemData = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      image_url: formData.image_url,
      category_id: formData.category_id,
      is_available: true,
      is_featured: false,
      display_order: menuItems.length + 1
    };

    if (editingItem) {
      localDataService.updateMenuItem(editingItem.id, itemData);
    } else {
      localDataService.addMenuItem(itemData);
    }

    loadData();
    closeModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('Da li ste sigurni da želite da obrišete ovu stavku?')) {
      localDataService.deleteMenuItem(id);
      loadData();
    }
  };

  const toggleAvailability = (item: MenuItem) => {
    localDataService.updateMenuItem(item.id, { is_available: !item.is_available });
    loadData();
  };

  const filteredItems = selectedCategory
    ? menuItems.filter(item => item.category_id === selectedCategory)
    : menuItems;

  return (
    <div className="min-h-screen bg-[#1A1A1A] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2A2A2A] rounded-xl shadow-lg p-6 mb-6 border border-[#FF6B35]/20">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-white">Admin Panel - Upravljanje Menijem</h1>
            <button
              onClick={() => openModal()}
              className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg hover:bg-[#e55a2a] transition-colors flex items-center gap-2"
            >
              <Plus className="h-5 w-5" />
              Dodaj stavku
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#FF6B35] text-white shadow-lg'
                    : 'bg-[#1A1A1A] text-gray-300 hover:bg-[#3A3A3A] border border-[#FF6B35]/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#FF6B35]/20">
                  <th className="text-left py-3 px-4 text-gray-300">Naziv</th>
                  <th className="text-left py-3 px-4 text-gray-300">Opis</th>
                  <th className="text-left py-3 px-4 text-gray-300">Cena</th>
                  <th className="text-left py-3 px-4 text-gray-300">Status</th>
                  <th className="text-right py-3 px-4 text-gray-300">Akcije</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map(item => (
                  <tr key={item.id} className="border-b border-[#FF6B35]/20 hover:bg-[#1A1A1A]">
                    <td className="py-3 px-4 font-medium text-white">{item.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-300 max-w-xs truncate">
                      {item.description}
                    </td>
                    <td className="py-3 px-4 text-gray-300">{item.price.toFixed(2)} RSD</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => toggleAvailability(item)}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.is_available
                            ? 'bg-[#4CAF50]/20 text-[#4CAF50] border border-[#4CAF50]/40'
                            : 'bg-[#FF6B35]/20 text-[#FF6B35] border border-[#FF6B35]/40'
                        }`}
                      >
                        {item.is_available ? 'Dostupno' : 'Nedostupno'}
                      </button>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => openModal(item)}
                        className="text-[#4CAF50] hover:text-[#3d8b40] p-2"
                        aria-label="Izmeni"
                      >
                        <Pencil className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-[#FF6B35] hover:text-[#e55a2a] p-2"
                        aria-label="Obriši"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredItems.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                Nema stavki u ovoj kategoriji. Kliknite "Dodaj stavku" da dodate novu.
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#2A2A2A] rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#FF6B35]/20">
            <div className="sticky top-0 bg-[#2A2A2A] border-b border-[#FF6B35]/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {editingItem ? 'Izmeni stavku' : 'Dodaj novu stavku'}
              </h2>
              <button onClick={closeModal} className="p-2 hover:bg-[#FF6B35]/10 rounded-full text-gray-300">
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kategorija *
                </label>
                <select
                  required
                  value={formData.category_id}
                  onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                  className="w-full px-4 py-2 border border-[#FF6B35]/20 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent bg-[#1A1A1A] text-white"
                >
                  <option value="">Izaberite kategoriju</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Naziv *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-[#FF6B35]/20 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent bg-[#1A1A1A] text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Opis
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-[#FF6B35]/20 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none bg-[#1A1A1A] text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cena (RSD) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2 border border-[#FF6B35]/20 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent bg-[#1A1A1A] text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  URL slike
                </label>
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-2 border border-[#FF6B35]/20 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent bg-[#1A1A1A] text-white"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-[#1A1A1A] text-gray-300 py-3 rounded-lg font-semibold hover:bg-[#3A3A3A] transition-colors border border-[#FF6B35]/20"
                >
                  Otkaži
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#4CAF50] text-white py-3 rounded-lg font-semibold hover:bg-[#3d8b40] transition-colors"
                >
                  {editingItem ? 'Sačuvaj izmene' : 'Dodaj stavku'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
