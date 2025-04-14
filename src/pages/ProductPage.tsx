import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, Truck, Shield, ArrowRight } from 'lucide-react';
import { useStore } from '../store';
import { getProductById } from '../data/products';

export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const product = getProductById(id || '');

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [error, setError] = useState('');

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      setError('Please select both size and color');
      return;
    }
    setError('');
    addToCart(product, selectedSize, selectedColor, 1);
    navigate('/cart');
  };

  return (
    <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-square overflow-hidden rounded-lg"
          >
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-primary-800' : ''
                }`}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500">{product.brand}</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>
            <button className="flex items-center text-gray-600 hover:text-primary-600">
              <Heart className="h-5 w-5" />
              <span className="ml-1">Add to Wishlist</span>
            </button>
          </div>

          <div className="text-3xl font-bold">₹{product.price}</div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <div>
            <h3 className="font-medium mb-4">Select Size</h3>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 rounded-lg border ${
                    selectedSize === size
                      ? 'border-primary-600 bg-primary-50 text-primary-600'
                      : 'border-gray-300 hover:border-primary-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Select Color</h3>
            <div className="grid grid-cols-3 gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`py-2 px-4 rounded-lg border ${
                    selectedColor === color
                      ? 'border-primary-600 bg-primary-50 text-primary-600'
                      : 'border-gray-300 hover:border-primary-600'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full py-3 px-6 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                handleAddToCart();
                navigate('/checkout');
              }}
              className="w-full py-3 px-6 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Buy Now
            </button>
          </div>

          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <Truck className="h-6 w-6 text-gray-400" />
              <div>
                <h4 className="font-medium">Free Delivery</h4>
                <p className="text-sm text-gray-500">Enter your postal code for delivery availability</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Shield className="h-6 w-6 text-gray-400" />
              <div>
                <h4 className="font-medium">Return Delivery</h4>
                <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Product Description</h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
          <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};