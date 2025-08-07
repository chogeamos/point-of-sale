
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-['Pacifico'] text-blue-600 mb-4">RetailPOS</h1>
          <p className="text-xl text-gray-600 mb-8">Modern Point of Sale System for Retail Businesses</p>
          <p className="text-lg text-gray-500">Streamline your sales, manage inventory, and grow your business with our comprehensive POS solution</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link href="/dashboard" className="group">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <i className="ri-dashboard-line text-2xl text-blue-600"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Dashboard</h2>
              <p className="text-gray-600 mb-4">View sales analytics, inventory alerts, and business performance metrics</p>
              <div className="flex items-center text-blue-600 font-medium">
                Access Dashboard 
                <div className="w-4 h-4 ml-2 flex items-center justify-center">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/pos" className="group">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <i className="ri-shopping-cart-line text-2xl text-green-600"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Point of Sale</h2>
              <p className="text-gray-600 mb-4">Process sales, scan barcodes, and handle payments with multiple methods</p>
              <div className="flex items-center text-green-600 font-medium">
                Start Selling 
                <div className="w-4 h-4 ml-2 flex items-center justify-center">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-box-3-line text-xl text-purple-600"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Inventory Management</h3>
            <p className="text-gray-600 text-sm">Real-time stock tracking with low stock alerts</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-bar-chart-line text-xl text-orange-600"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Sales Analytics</h3>
            <p className="text-gray-600 text-sm">Detailed reports and performance insights</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-user-3-line text-xl text-teal-600"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Customer Management</h3>
            <p className="text-gray-600 text-sm">Track customers and build loyalty programs</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h3>
              <p className="text-gray-600">Choose your preferred way to begin using RetailPOS</p>
            </div>
            <div className="flex gap-4">
              <Link href="/dashboard" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors whitespace-nowrap">
                View Dashboard
              </Link>
              <Link href="/pos" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
                Start New Sale
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
