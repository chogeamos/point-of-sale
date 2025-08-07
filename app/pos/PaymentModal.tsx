
'use client';

import { useState } from 'react';

interface PaymentModalProps {
  total: number;
  onClose: () => void;
  onPaymentComplete: () => void;
}

export default function PaymentModal({ total, onClose, onPaymentComplete }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [cashReceived, setCashReceived] = useState('');
  const [processing, setProcessing] = useState(false);
  const [receiptEmail, setReceiptEmail] = useState('');
  const [customerName, setCustomerName] = useState('');

  const cashAmount = parseFloat(cashReceived) || 0;
  const change = cashAmount - total;

  const handlePayment = async () => {
    setProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setProcessing(false);
    onPaymentComplete();
  };

  const paymentMethods = [
    { id: 'cash', name: 'Cash', icon: 'ri-money-dollar-circle-line' },
    { id: 'card', name: 'Credit/Debit Card', icon: 'ri-bank-card-line' },
    { id: 'mpesa', name: 'M-Pesa', icon: 'ri-smartphone-line' },
    { id: 'split', name: 'Split Payment', icon: 'ri-split-cells-horizontal' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Process Payment</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-close-line text-xl"></i>
              </div>
            </button>
          </div>

          <div className="mb-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-gray-900">${total.toFixed(2)}</div>
              <div className="text-sm text-gray-600 mt-1">Total Amount</div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
            <div className="grid grid-cols-2 gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    paymentMethod === method.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                    paymentMethod === method.id ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}>
                    <i className={method.icon}></i>
                  </div>
                  <div className="text-sm font-medium text-gray-900">{method.name}</div>
                </button>
              ))}
            </div>
          </div>

          {paymentMethod === 'cash' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Cash Received</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</div>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={cashReceived}
                  onChange={(e) => setCashReceived(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-medium"
                />
              </div>
              {cashAmount > 0 && (
                <div className="mt-3 p-3 bg-green-50 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span>Amount Due:</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cash Received:</span>
                    <span className="font-medium">${cashAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t border-green-200 pt-2 mt-2">
                    <span>Change:</span>
                    <span className={change >= 0 ? 'text-green-600' : 'text-red-600'}>
                      ${Math.abs(change).toFixed(2)} {change < 0 && '(Short)'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {paymentMethod === 'card' && (
            <div className="mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-blue-500 rounded-full flex items-center justify-center">
                  <i className="ri-bank-card-line text-2xl text-white"></i>
                </div>
                <p className="text-blue-800 font-medium">Insert or tap card</p>
                <p className="text-blue-600 text-sm mt-1">Please follow the prompts on the card terminal</p>
              </div>
            </div>
          )}

          {paymentMethod === 'mpesa' && (
            <div className="mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="ri-smartphone-line text-2xl text-white"></i>
                </div>
                <p className="text-green-800 font-medium">M-Pesa Payment</p>
                <p className="text-green-600 text-sm mt-1">Customer will receive STK push notification</p>
              </div>
            </div>
          )}

          <div className="mb-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name (Optional)</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter customer name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Receipt Email (Optional)</label>
              <input
                type="email"
                value={receiptEmail}
                onChange={(e) => setReceiptEmail(e.target.value)}
                placeholder="customer@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              onClick={handlePayment}
              disabled={processing || (paymentMethod === 'cash' && change < 0)}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {processing ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </div>
              ) : (
                'Complete Payment'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
