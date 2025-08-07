
'use client';

import { CartItem } from './page';

interface CartPanelProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onClearCart: () => void;
  subtotal: number;
  tax: number;
  total: number;
  onCheckout: () => void;
}

export default function CartPanel({
  items,
  onUpdateQuantity,
  onClearCart,
  subtotal,
  tax,
  total,
  onCheckout
}: CartPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Current Sale</h2>
        {items.length > 0 && (
          <button
            onClick={onClearCart}
            className="text-red-600 hover:text-red-700 text-sm font-medium whitespace-nowrap"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
        {items.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <i className="ri-shopping-cart-line text-2xl text-gray-400"></i>
            </div>
            <p className="text-gray-500">No items in cart</p>
            <p className="text-sm text-gray-400 mt-1">Start scanning or selecting products</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                <p className="text-xs text-gray-500">${item.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-200 rounded-l-lg"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-subtract-line text-sm"></i>
                    </div>
                  </button>
                  <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-200 rounded-r-lg"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-add-line text-sm"></i>
                    </div>
                  </button>
                </div>
                <div className="text-right min-w-[4rem]">
                  <span className="text-sm font-semibold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => onUpdateQuantity(item.id, 0)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-delete-bin-line text-sm"></i>
                  </div>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <>
          <div className="border-t border-gray-200 pt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax (8%)</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button
              onClick={onCheckout}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Process Payment
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button className="text-gray-600 border border-gray-300 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-50 whitespace-nowrap">
                Hold Sale
              </button>
              <button className="text-gray-600 border border-gray-300 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-50 whitespace-nowrap">
                Apply Discount
              </button>
            </div>
          </div>
        </>
      )}

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="text-xs text-gray-500 space-y-1">
          <div className="flex justify-between">
            <span>Cashier:</span>
            <span>Admin User</span>
          </div>
          <div className="flex justify-between">
            <span>Register:</span>
            <span>POS-001</span>
          </div>
          <div className="flex justify-between">
            <span suppressHydrationWarning={true}>Time:</span>
            <span suppressHydrationWarning={true}>{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
