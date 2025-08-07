import { NextResponse } from 'next/server';

export async function GET() {
  const mockProducts = [
    { id: 1, name: 'Maize Flour', price: 120, stock: 30 },
    { id: 2, name: 'Sugar', price: 150, stock: 10 },
    { id: 3, name: 'Soap', price: 80, stock: 25 },
  ];

  return NextResponse.json(mockProducts);
}

