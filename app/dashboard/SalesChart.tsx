
'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 2400, transactions: 45 },
  { name: 'Tue', sales: 1398, transactions: 38 },
  { name: 'Wed', sales: 9800, transactions: 72 },
  { name: 'Thu', sales: 3908, transactions: 55 },
  { name: 'Fri', sales: 4800, transactions: 68 },
  { name: 'Sat', sales: 8200, transactions: 89 },
  { name: 'Sun', sales: 6300, transactions: 76 },
];

export default function SalesChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Sales Overview</h3>
          <p className="text-gray-600 text-sm">Weekly sales performance</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full whitespace-nowrap">
            7 Days
          </button>
          <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-full whitespace-nowrap">
            30 Days
          </button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#3B82F6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#salesGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
