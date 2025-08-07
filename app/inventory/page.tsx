
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import InventoryTable from './InventoryTable';
import StockAdjustmentModal from './StockAdjustmentModal';

export default function Inventory() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adjustmentModalOpen, setAdjustmentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleStockAdjustment = (product: any) => {
    setSelectedProduct(product);
    setAdjustmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 lg:ml-64 p-6 pt-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
              <p className="text-gray-600 mt-2">Track and manage your store inventory</p>
            </div>
            
            <InventoryTable onStockAdjustment={handleStockAdjustment} />
          </div>
        </main>
      </div>

      {adjustmentModalOpen && (
        <StockAdjustmentModal
          product={selectedProduct}
          onClose={() => {
            setAdjustmentModalOpen(false);
            setSelectedProduct(null);
          }}
          onSave={() => {
            setAdjustmentModalOpen(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
}
