import { categories, menuItems } from '../data/menuData';
import type { Category, MenuItem, Order, OrderItem, Customer } from '../types';

class LocalDataService {
  private categories: Category[] = [...categories];
  private menuItems: MenuItem[] = [...menuItems];
  private orders: Order[] = [];
  private orderItems: OrderItem[] = [];
  private customers: Customer[] = [];

  getCategories(filters?: { is_active?: boolean }) {
    let filteredCategories = [...this.categories];

    if (filters?.is_active !== undefined) {
      filteredCategories = filteredCategories.filter(cat => cat.is_active === filters.is_active);
    }

    return filteredCategories.sort((a, b) => a.display_order - b.display_order);
  }

  getMenuItems(filters?: { category_id?: string; is_available?: boolean }) {
    let filteredItems = [...this.menuItems];

    if (filters?.category_id) {
      filteredItems = filteredItems.filter(item => item.category_id === filters.category_id);
    }

    if (filters?.is_available !== undefined) {
      filteredItems = filteredItems.filter(item => item.is_available === filters.is_available);
    }

    return filteredItems.sort((a, b) => a.display_order - b.display_order);
  }

  getMenuItemById(id: string): MenuItem | undefined {
    return this.menuItems.find(item => item.id === id);
  }

  addMenuItem(item: Omit<MenuItem, 'id' | 'created_at' | 'updated_at'>) {
    const newItem: MenuItem = {
      ...item,
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    this.menuItems.push(newItem);
    this.saveToLocalStorage();
    return newItem;
  }

  updateMenuItem(id: string, updates: Partial<MenuItem>) {
    const index = this.menuItems.findIndex(item => item.id === id);
    if (index !== -1) {
      this.menuItems[index] = {
        ...this.menuItems[index],
        ...updates,
        updated_at: new Date().toISOString()
      };
      this.saveToLocalStorage();
      return this.menuItems[index];
    }
    return null;
  }

  deleteMenuItem(id: string) {
    this.menuItems = this.menuItems.filter(item => item.id !== id);
    this.saveToLocalStorage();
    return true;
  }

  createOrder(order: Omit<Order, 'id' | 'order_number' | 'created_at' | 'updated_at'>, items: Omit<OrderItem, 'id' | 'order_id'>[]) {
    const orderNumber = `ORD-${Date.now()}`;
    const newOrder: Order = {
      ...order,
      id: `order-${Date.now()}`,
      order_number: orderNumber,
      status: 'pending',
      payment_status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    this.orders.push(newOrder);

    items.forEach(item => {
      const newOrderItem: OrderItem = {
        ...item,
        id: `order-item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        order_id: newOrder.id!
      };
      this.orderItems.push(newOrderItem);
    });

    this.saveToLocalStorage();
    return { order: newOrder, items: this.orderItems.filter(item => item.order_id === newOrder.id) };
  }

  private saveToLocalStorage() {
    try {
      localStorage.setItem('menuItems', JSON.stringify(this.menuItems));
      localStorage.setItem('orders', JSON.stringify(this.orders));
      localStorage.setItem('orderItems', JSON.stringify(this.orderItems));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  private loadFromLocalStorage() {
    try {
      const savedMenuItems = localStorage.getItem('menuItems');
      const savedOrders = localStorage.getItem('orders');
      const savedOrderItems = localStorage.getItem('orderItems');

      if (savedMenuItems) {
        this.menuItems = JSON.parse(savedMenuItems);
      }
      if (savedOrders) {
        this.orders = JSON.parse(savedOrders);
      }
      if (savedOrderItems) {
        this.orderItems = JSON.parse(savedOrderItems);
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    }
  }

  constructor() {
    this.loadFromLocalStorage();
  }
}

export const localDataService = new LocalDataService();
