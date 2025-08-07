
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: 'ri-dashboard-line' },
    { name: 'Point of Sale', href: '/pos', icon: 'ri-shopping-cart-line' },
    { name: 'Inventory', href: '/inventory', icon: 'ri-box-3-line' },
    { name: 'Products', href: '/products', icon: 'ri-price-tag-3-line' },
    { name: 'Sales Reports', href: '/reports', icon: 'ri-bar-chart-line' },
    { name: 'Customers', href: '/customers', icon: 'ri-user-3-line' },
    { name: 'Suppliers', href: '/suppliers', icon: 'ri-truck-line' },
    { name: 'Staff Management', href: '/staff', icon: 'ri-team-line' },
    { name: 'Settings', href: '/settings', icon: 'ri-settings-3-line' },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`fixed left-0 top-16 h-full bg-white w-64 transform transition-transform duration-200 ease-in-out z-40 shadow-lg border-r border-gray-200 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <nav className="mt-6 px-4">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <div className="w-5 h-5 mr-3 flex items-center justify-center">
                      <i className={`${item.icon} text-lg`}></i>
                    </div>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-2">
              <i className="ri-vip-crown-line text-lg"></i>
            </div>
            <h3 className="font-semibold text-sm">Upgrade to Pro</h3>
            <p className="text-xs opacity-90 mt-1">Access advanced features and analytics</p>
            <button className="bg-white text-blue-600 px-3 py-1 rounded text-xs font-medium mt-2 whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
