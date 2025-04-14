import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, Star, Heart } from 'lucide-react';
import { getProductsByCategory } from '../data/products';

export const CategoryPage = () => {
  const { type } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const products = getProductsByCategory(type || 'women');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold capitalize">{type}'s Collection</h1>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <motion.div
          initial={false}
          animate={{ width: isFilterOpen ? 'auto' : 0, opacity: isFilterOpen ? 1 : 0 }}
          className={`${isFilterOpen ? 'w-64' : 'w-0'} flex-shrink-0 overflow-hidden`}
        >
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Price Range</h3>
              <input type="range" className="w-full" />
              <div className="flex justify-between mt-2">
                <span>₹0</span>
                <span>₹1000</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button
                    key={size}
                    className="px-3 py-2 border rounded hover:bg-primary-50 hover:border-primary-300"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Color</h3>
              <div className="grid grid-cols-4 gap-2">
                {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-gray-500', 'bg-black'].map(color => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full ${color} hover:ring-2 ring-offset-2 ring-gray-400`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Brand</h3>
              <div className="space-y-2">
                {['Summer Vibes', 'Elegance', 'Casual Chic', 'Party Glam'].map(brand => (
                  <label key={brand} className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600" />
                    <span className="ml-2">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-end mb-6">
            <div className="relative">
              <select className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8">
                <option>Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Popular</option>
              </select>
              <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">₹{product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};