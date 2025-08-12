import React from "react";

export default function ReportsPage() {
  // TODO: Fetch your sales data here
  const salesData = [
    { date: "2025-08-01", total: 1200, transactions: 15 },
    { date: "2025-08-02", total: 950, transactions: 10 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sales Reports</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Total Sales</th>
            <th className="border p-2">Transactions</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((report, idx) => (
            <tr key={idx}>
              <td className="border p-2">{report.date}</td>
              <td className="border p-2">${report.total}</td>
              <td className="border p-2">{report.transactions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

