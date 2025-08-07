
'use client';

import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  barcode: string;
  category: string;
  stock: number;
  image: string;
}

interface ProductGridProps {
  onAddToCart: (product: Omit<Product, 'stock' | 'image'>) => void;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [barcodeInput, setBarcodeInput] = useState('');

  const categories = ['All', 'Beverages', 'Snacks', 'Dairy', 'Bakery', 'Fruits', 'Vegetables', 'Meat', 'Grains'];

  const products: Product[] = [
    { id: '1', name: 'Coca Cola 500ml', price: 2.50, barcode: '1234567890123', category: 'Beverages', stock: 45, image: 'https://readdy.ai/api/search-image?query=coca%20cola%20bottle%20on%20white%20background%20product%20photography%20clean%20minimal&width=300&height=300&seq=1&orientation=squarish' },
    { id: '2', name: 'Doritos Nacho Cheese', price: 3.99, barcode: '1234567890124', category: 'Snacks', stock: 32, image: 'https://readdy.ai/api/search-image?query=doritos%20nacho%20cheese%20chips%20bag%20on%20white%20background%20product%20photography%20clean%20minimal&width=300&height=300&seq=2&orientation=squarish' },
    { id: '3', name: 'Fresh Milk 1L', price: 4.25, barcode: '1234567890125', category: 'Dairy', stock: 28, image: 'https://readdy.ai/api/search-image?query=milk%20carton%20one%20liter%20on%20white%20background%20product%20photography%20clean%20minimal&width=300&height=300&seq=3&orientation=squarish' },
    { id: '4', name: 'White Bread Loaf', price: 2.99, barcode: '1234567890126', category: 'Bakery', stock: 15, image: 'https://readdy.ai/api/search-image?query=white%20bread%20loaf%20wrapped%20on%20white%20background%20product%20photography%20clean%20minimal&width=300&height=300&seq=4&orientation=squarish' },
    { id: '5', name: 'Red Apples 1kg', price: 5.99, barcode: '1234567890127', category: 'Fruits', stock: 22, image: 'https://readdy.ai/api/search-image?query=red%20apples%20fresh%20fruit%20bag%20on%20white%20background%20product%20photography%20clean%20minimal&width=300&height=300&seq=5&orientation=squarish' },
    { id: '6', name: 'Carrots 500g', price: 1.99, barcode: '1234567890128', category: 'Vegetables', stock: 18, image: 'https://readdy.ai/api/search-image?query=fresh%20carrots%20vegetables%20bag%20on%20white%20background%20product%20photography%20clean%20minimal&width=300&height=300&seq=6&orientation=squarish' },
    { id: '7', name: 'Chicken Breast 1kg', price: 12.99, barcode: '1234567890129', category: 'Meat', stock: 8, image: 'https://readdy.ai/api/search-image?query=chicken%20breast%20meat%20package%20on%20white%20background%20product%20photography%20clean%20minimal&width=300&height=300&seq=7&orientation=squarish' },
    { id: '8', name: 'Basmati Rice 2kg', price: 8.50, barcode: '1234567890130', category: 'Grains', stock: 12, image: 'https://readdy.ai/api/search-image?query=basmati%20rice%20bag%20package%20on%20white%20background%20product%20photography%20clean%20minimal&width=300&height=300&seq=8&orientation=squarish' },
    { id: '9', name: 'Orange Juice 1L', price: 3.75, barcode: '1234567890131', category: 'Beverages', stock: 25, image: 'https://readdy.ai/api/search-image?query=orange%20juice%20carton%20bottle%20on%20white%20background%20product%20photography%20clean%20minimal&width=300&height=300&seq=9&orientation=squarish' },
    { id: '10', name: 'Chocolate Cookies', price: 4.50, barcode: '1234567890132', category: 'Snacks', stock: 30, image: 'https://readdy.ai/api/search-image?query=chocolate%20cookies%20package%20on%20white%20background%20product%20photography%20clean%20minimal&width=300&height=300&seq=10&orientation=squarish' },
    { id: '11', name: 'Greek Yogurt 500g', price: 5.25, barcode: '1234567890133', category: 'Dairy', stock: 20, image: 'https://readdy.ai/api/search-image?query=greek%20yogurt%20container%20on%20white%20background%20product%20photography%20clean%20minimal&width=300&height=300&seq=11&orientation=squarish' },
    { id: '12', name: 'Croissants 6pk', price: 6.99, barcode: '1234567890134', category: 'Bakery', stock: 14, image: 'https://readdy.ai/api/search-image?query=croissants%20pastry%20package%20on%20white%20background%20product%20photography%20clean%20minimal&width=300&height=300&seq=12&orientation=squarish' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.barcode.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  const handleBarcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = products.find(p => p.barcode === barcodeInput);
    if (product) {
      onAddToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        barcode: product.barcode,
        category: product.category
      });
      setBarcodeInput('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <div className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                <i className="ri-search-line text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>
          <form onSubmit={handleBarcodeSubmit} className="flex gap-2">
            <div className="relative">
              <div className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                <i className="ri-barcode-line text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Scan barcode"
                value={barcodeInput}
                onChange={(e) => setBarcodeInput(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-40"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap text-sm"
            >
              Add
            </button>
          </form>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onAddToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              barcode: product.barcode,
              category: product.category
            })}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover object-top rounded-md mb-3"
            />
            <h3 className="font-medium text-sm text-gray-900 mb-1">{product.name}</h3>
            <p className="text-xs text-gray-500 mb-2">{product.category}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                product.stock > 20 ? 'bg-green-100 text-green-800' :
                product.stock > 10 ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {product.stock} left
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <i className="ri-search-line text-2xl text-gray-400"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your search or category filter</p>
        </div>
      )}
    </div>
  );
}
