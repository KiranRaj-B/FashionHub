import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, ArrowRight, Printer } from 'lucide-react';

export const OrderConfirmationPage = () => {
  const location = useLocation();
  const { orderId, orderDetails } = location.state || {
    orderId: 'ORD123456789',
    orderDetails: {
      items: [],
      total: 0,
      shipping: {
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001'
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600">
          Thank you for your purchase. Your order has been confirmed.
        </p>
      </motion.div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Order Details</h2>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <Printer className="h-5 w-5 mr-2" />
              Print
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Order Number</p>
              <p className="font-medium">{orderId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Order Date</p>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="p-6 border-b">
          <h3 className="font-bold mb-4">Items Ordered</h3>
          <div className="space-y-4">
            {orderDetails.items.map((item: any) => (
              <div key={item.id} className="flex items-center">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h4 className="font-medium">{item.product.name}</h4>
                  <p className="text-sm text-gray-500">
                    Size: {item.size} | Color: {item.color} | Qty: {item.quantity}
                  </p>
                </div>
                <div className="font-medium">
                ₹{(item.product.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-b">
          <h3 className="font-bold mb-4">Shipping Address</h3>
          <address className="not-italic">
            <p>
              {orderDetails.shipping.firstName} {orderDetails.shipping.lastName}
            </p>
            <p>{orderDetails.shipping.address}</p>
            <p>
              {orderDetails.shipping.city}, {orderDetails.shipping.zipCode}
            </p>
          </address>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between text-lg font-bold">
            <span>Total Paid</span>
            <span>₹{orderDetails.total?.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg flex items-start">
          <Package className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <h4 className="font-medium text-blue-900">Tracking Information</h4>
            <p className="text-sm text-blue-700">
              You will receive an email with tracking information once your order ships.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            Continue Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};