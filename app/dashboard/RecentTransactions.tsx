
'use client';

export default function RecentTransactions() {
  const transactions = [
    {
      id: 'TXN-001',
      customer: 'Sarah Johnson',
      items: 5,
      amount: 127.50,
      paymentMethod: 'Card',
      time: '2 minutes ago',
      status: 'completed'
    },
    {
      id: 'TXN-002',
      customer: 'Michael Chen',
      items: 3,
      amount: 89.25,
      paymentMethod: 'Cash',
      time: '8 minutes ago',
      status: 'completed'
    },
    {
      id: 'TXN-003',
      customer: 'Emma Wilson',
      items: 12,
      amount: 234.75,
      paymentMethod: 'M-Pesa',
      time: '15 minutes ago',
      status: 'completed'
    },
    {
      id: 'TXN-004',
      customer: 'David Brown',
      items: 2,
      amount: 45.00,
      paymentMethod: 'Card',
      time: '23 minutes ago',
      status: 'refunded'
    },
    {
      id: 'TXN-005',
      customer: 'Lisa Garcia',
      items: 8,
      amount: 156.80,
      paymentMethod: 'Cash',
      time: '35 minutes ago',
      status: 'completed'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          <p className="text-gray-600 text-sm">Latest sales activity</p>
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium whitespace-nowrap">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Items
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="py-4 px-2">
                  <div className="text-sm font-medium text-gray-900">{transaction.id}</div>
                </td>
                <td className="py-4 px-2">
                  <div className="text-sm text-gray-900">{transaction.customer}</div>
                </td>
                <td className="py-4 px-2">
                  <div className="text-sm text-gray-900">{transaction.items}</div>
                </td>
                <td className="py-4 px-2">
                  <div className="text-sm font-medium text-gray-900">${transaction.amount.toFixed(2)}</div>
                </td>
                <td className="py-4 px-2">
                  <div className="text-sm text-gray-900">{transaction.paymentMethod}</div>
                </td>
                <td className="py-4 px-2">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                      transaction.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="py-4 px-2">
                  <div className="text-sm text-gray-500">{transaction.time}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
