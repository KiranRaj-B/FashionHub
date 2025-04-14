import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, MapPin } from 'lucide-react';
import { useStore } from '../store';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const { cart, user, toggleCart } = useStore();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">FashionHub</span>
          </Link>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <MapPin className="h-5 w-5" />
              <span className="ml-1">Bangalore</span>
            </button>

            {user ? (
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900">
                  <User className="h-5 w-5" />
                  <span className="ml-1">{user.name}</span>
                </button>
                <div className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</Link>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                </div>
              </div>
            ) : (
              <Link to="/signin" className="text-gray-700 hover:text-gray-900">Hi, Kiran</Link>
            )}

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative"
              onClick={toggleCart}
            >
              <ShoppingBag className="h-6 w-6 text-gray-700" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};