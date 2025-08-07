
'use client';

export default function QuickStats() {
  const stats = [
    {
      title: 'Total Sales Today',
      value: '$12,847',
      change: '+12.5%',
      changeType: 'positive',
      icon: 'ri-money-dollar-circle-line',
      color: 'bg-green-500'
    },
    {
      title: 'Total Transactions',
      value: '342',
      change: '+8.2%',
      changeType: 'positive',
      icon: 'ri-shopping-bag-line',
      color: 'bg-blue-500'
    },
    {
      title: 'Average Order Value',
      value: '$37.56',
      change: '+5.1%',
      changeType: 'positive',
      icon: 'ri-bar-chart-line',
      color: 'bg-purple-500'
    },
    {
      title: 'Low Stock Items',
      value: '23',
      change: '+3 items',
      changeType: 'negative',
      icon: 'ri-alert-line',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
              <i className={`${stat.icon} text-white text-xl`}></i>
            </div>
            <span
              className={`text-sm font-medium px-2 py-1 rounded-full ${
                stat.changeType === 'positive'
                  ? 'text-green-700 bg-green-100'
                  : 'text-red-700 bg-red-100'
              }`}
            >
              {stat.change}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
          <p className="text-gray-600 text-sm">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
