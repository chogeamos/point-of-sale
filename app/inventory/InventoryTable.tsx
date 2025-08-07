
'use client';

import { useState } from 'react';

interface InventoryTableProps {
  onStockAdjustment: (product: any) => void;
}

export default function InventoryTable({ onStockAdjustment }: InventoryTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [stockFilter, setStockFilter] = useState('All');

  const products = [
    {
      id: '1',
      name: 'Coca Cola 500ml',
      barcode: '1234567890123',
      category: 'Beverages',
      currentStock: 45,
      minStock: 50,
      maxStock: 200,
      costPrice: 1.50,
      sellingPrice: 2.50,
      supplier: 'Coca Cola Company',
      lastRestocked: '2024-01-15',
      status: 'low'
    },
    {
      id: '2',
      name: 'Doritos Nacho Cheese',
      barcode: '1234567890124',
      category: 'Snacks',
      currentStock: 82,
      minStock: 30,
      maxStock: 150,
      costPrice: 2.99,
      sellingPrice: 3.99,
      supplier: 'PepsiCo',
      lastRestocked: '2024-01-18',
      status: 'good'
    },
    {
      id: '3',
      name: 'Fresh Milk 1L',
      barcode: '1234567890125',
      category: 'Dairy',
      currentStock: 28,
      minStock: 25,
      maxStock: 100,
      costPrice: 3.25,
      sellingPrice: 4.25,
      supplier: 'Local Dairy Co',
      lastRestocked: '2024-01-20',
      status: 'good'
    },
    {
      id: '4',
      name: 'White Bread Loaf',
      barcode: '1234567890126',
      category: 'Bakery',
      currentStock: 8,
      minStock: 20,
      maxStock: 80,
      costPrice: 1.99,
      sellingPrice: 2.99,
      supplier: 'Fresh Bakery Ltd',
      lastRestocked: '2024-01-19',
      status: 'critical'
    },
    {
      id: '5',
      name: 'Red Apples 1kg',
      barcode: '1234567890127',
      category: 'Fruits',
      currentStock: 65,
      minStock: 30,
      maxStock: 120,
      costPrice: 4.50,
      sellingPrice: 5.99,
      supplier: 'Farm Fresh Produce',
      lastRestocked: '2024-01-17',
      status: 'good'
    }
  ];

  const categories = ['All', 'Beverages', 'Snacks', 'Dairy', 'Bakery', 'Fruits'];
  const stockStatuses = ['All', 'Good', 'Low', 'Critical'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.barcode.includes(searchTerm) ||
                         product.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    const matchesStock = stockFilter === 'All' || product.status === stockFilter.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesStock;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-100 text-green-800';
      case 'low':
        return 'bg-yellow-100 text-yellow-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                <i className="ri-search-line text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search products, barcodes, or suppliers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
            >
              {stockStatuses.map(status => (
                <option key={status} value={status}>{status} Stock</option>
              ))}
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium whitespace-nowrap">
              Export CSV
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Barcode
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Stock
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Min/Max
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost/Sell Price
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Supplier
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="py-4 px-6">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    <div className="text-xs text-gray-500">Last restocked: {product.lastRestocked}</div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900 font-mono">{product.barcode}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{product.category}</td>
                <td className="py-4 px-6">
                  <div className="text-sm font-medium text-gray-900">{product.currentStock}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className={`h-2 rounded-full ${
                        product.currentStock <= product.minStock ? 'bg-red-500' :
                        product.currentStock <= product.minStock * 1.5 ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}
                      style={{
                        width: `${Math.min((product.currentStock / product.maxStock) * 100, 100)}%`
                      }}
                    ></div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">
                  {product.minStock} / {product.maxStock}
                </td>
                <td className="py-4 px-6">
                  <div className="text-sm text-gray-900">${product.costPrice.toFixed(2)}</div>
                  <div className="text-sm font-medium text-gray-900">${product.sellingPrice.toFixed(2)}</div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">{product.supplier}</td>
                <td className="py-4 px-6">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusBadge(product.status)}`}>
                    {product.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onStockAdjustment(product)}
                      className="text-blue-600 hover:text-blue-800 p-1"
                      title="Adjust Stock"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-edit-line"></i>
                      </div>
                    </button>
                    <button className="text-green-600 hover:text-green-800 p-1" title="Reorder">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-shopping-cart-line"></i>
                      </div>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 p-1" title="View Details">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-eye-line"></i>
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <i className="ri-box-3-line text-2xl text-gray-400"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
