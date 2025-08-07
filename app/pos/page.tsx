
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ProductGrid from './ProductGrid';
import CartPanel from './CartPanel';
import PaymentModal from './PaymentModal';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  barcode: string;
  category: string;
}

export default function POSSystem() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 lg:ml-64 p-6 pt-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 h-full">
              <div className="flex-1">
                <ProductGrid onAddToCart={addToCart} />
              </div>
              <div className="w-full lg:w-96">
                <CartPanel
                  items={cartItems}
                  onUpdateQuantity={updateQuantity}
                  onClearCart={clearCart}
                  subtotal={subtotal}
                  tax={tax}
                  total={total}
                  onCheckout={() => setPaymentModalOpen(true)}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {paymentModalOpen && (
        <PaymentModal
          total={total}
          onClose={() => setPaymentModalOpen(false)}
          onPaymentComplete={() => {
            setPaymentModalOpen(false);
            clearCart();
          }}
        />
      )}
    </div>
  );
}
