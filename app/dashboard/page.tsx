
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import QuickStats from './QuickStats';
import SalesChart from './SalesChart';
import RecentTransactions from './RecentTransactions';
import InventoryAlerts from './InventoryAlerts';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 lg:ml-64 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-2">Overview of your store performance</p>
            </div>
            
            <QuickStats />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <SalesChart />
              <InventoryAlerts />
            </div>
            
            <RecentTransactions />
          </div>
        </main>
      </div>
    </div>
  );
}
