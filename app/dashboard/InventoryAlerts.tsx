
'use client';

export default function InventoryAlerts() {
  const alerts = [
    {
      id: 1,
      product: 'Coca Cola 500ml',
      currentStock: 12,
      minStock: 50,
      category: 'Beverages',
      priority: 'high'
    },
    {
      id: 2,
      product: 'Bread Loaf White',
      currentStock: 8,
      minStock: 25,
      category: 'Bakery',
      priority: 'high'
    },
    {
      id: 3,
      product: 'Milk 1L',
      currentStock: 18,
      minStock: 30,
      category: 'Dairy',
      priority: 'medium'
    },
    {
      id: 4,
      product: 'Bananas',
      currentStock: 15,
      minStock: 40,
      category: 'Fruits',
      priority: 'medium'
    },
    {
      id: 5,
      product: 'Rice 5kg',
      currentStock: 6,
      minStock: 20,
      category: 'Grains',
      priority: 'high'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Inventory Alerts</h3>
          <p className="text-gray-600 text-sm">Items running low on stock</p>
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium whitespace-nowrap">
          Manage Inventory
        </button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                alert.priority === 'high' ? 'bg-red-500' : 'bg-orange-500'
              }`}>
                <i className="ri-alert-line text-white"></i>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{alert.product}</h4>
                <p className="text-xs text-gray-500">{alert.category}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">{alert.currentStock} left</div>
                <div className="text-xs text-gray-500">Min: {alert.minStock}</div>
              </div>
              
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 whitespace-nowrap">
                Reorder
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Total low stock items</span>
          <span className="font-medium text-red-600">23 items</span>
        </div>
      </div>
    </div>
  );
}
