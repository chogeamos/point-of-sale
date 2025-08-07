
'use client';

import { useState } from 'react';

interface StockAdjustmentModalProps {
  product: any;
  onClose: () => void;
  onSave: () => void;
}

export default function StockAdjustmentModal({ product, onClose, onSave }: StockAdjustmentModalProps) {
  const [adjustmentType, setAdjustmentType] = useState('add');
  const [quantity, setQuantity] = useState('');
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');

  const reasons = [
    'Stock received from supplier',
    'Stock returned from customer',
    'Stock damaged/expired',
    'Stock theft/loss',
    'Inventory count correction',
    'Transfer to another location',
    'Other'
  ];

  const handleSave = () => {
    // Here you would typically send the adjustment to your backend
    console.log('Stock adjustment:', {
      productId: product.id,
      type: adjustmentType,
      quantity: parseInt(quantity),
      reason,
      notes
    });
    onSave();
  };

  const newStock = adjustmentType === 'add' 
    ? product.currentStock + parseInt(quantity || '0')
    : product.currentStock - parseInt(quantity || '0');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Adjust Stock</h2>
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
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900">{product.name}</h3>
              <div className="text-sm text-gray-600 mt-1">
                Current Stock: <span className="font-medium">{product.currentStock}</span>
              </div>
              <div className="text-sm text-gray-600">
                Barcode: <span className="font-mono">{product.barcode}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Adjustment Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setAdjustmentType('add')}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    adjustmentType === 'add'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                    adjustmentType === 'add' ? 'bg-green-500 text-white' : 'bg-gray-100'
                  }`}>
                    <i className="ri-add-line"></i>
                  </div>
                  <div className="text-sm font-medium">Add Stock</div>
                </button>
                <button
                  onClick={() => setAdjustmentType('subtract')}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    adjustmentType === 'subtract'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                    adjustmentType === 'subtract' ? 'bg-red-500 text-white' : 'bg-gray-100'
                  }`}>
                    <i className="ri-subtract-line"></i>
                  </div>
                  <div className="text-sm font-medium">Remove Stock</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              >
                <option value="">Select a reason</option>
                {reasons.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Notes (Optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any additional notes..."
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {quantity && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex justify-between text-sm">
                  <span>Current Stock:</span>
                  <span className="font-medium">{product.currentStock}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Adjustment:</span>
                  <span className={`font-medium ${adjustmentType === 'add' ? 'text-green-600' : 'text-red-600'}`}>
                    {adjustmentType === 'add' ? '+' : '-'}{quantity}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-blue-200 pt-2 mt-2">
                  <span>New Stock:</span>
                  <span className={newStock < 0 ? 'text-red-600' : 'text-blue-600'}>
                    {newStock}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!quantity || !reason || newStock < 0}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              Save Adjustment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
