import { Link, Outlet } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">Intuition Demo</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/" className="block px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700">Home</Link>
          <Link to="/demo-attestations" className="block px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700">Demo Attestations</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <ConnectButton showBalance={false} />
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}