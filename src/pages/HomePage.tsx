import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, ShoppingBag } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src="/home_page_images/banner_image.avif"
            alt="Fashion Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Summer Collection 2025</h1>
            <p className="text-xl mb-8">Discover the latest trends in fashion and explore our new collection.</p>
            <Link
              to="/category/women"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Women's Fashion",
              image: "/womes/women-main_photo.png",
              link: "/category/women"
            },
            {
              title: "Men's Collection",
              image: "/mens/mens-classic.png",
              link: "/category/men"
            },
            {
              title: "Kids' Wear",
              image: "/home_page_images/kids-home_image.avif",
              link: "/category/kids"
            }
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-96 overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  to={category.link}
                  className="text-white text-2xl font-bold hover:underline"
                >
                  {category.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link
            to="/category/featured"
            className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
          >
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Summer Dress",
              price: 800,
              image: "/home_page_images/Summer_dress.jpg",
              rating: 4.5
            },
            {
              name: "Casual Blazer",
              price: 750,
              image: "/home_page_images/CasualBlazer.jpg",
              rating: 4.8
            },
            {
              name: "Denim Collection",
              price: 850,
              image: "/home_page_images/denim.avif",
              rating: 4.3
            },
            {
              name: "Evening Gown",
              price: 1200,
              image: "/home_page_images/evening.avif",
              rating: 4.9
            }
          ].map((product, index) => (
            <motion.div
              key={product.name}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag className="h-5 w-5 text-gray-900" />
                </button>
              </div>
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">₹{product.price}</span>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <TrendingUp className="h-8 w-8 text-primary-600 mr-3" />
            <h2 className="text-3xl font-bold">Trending Now</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Summer Essentials",
              "Workwear Edit",
              "Party Collection",
              "Sustainable Fashion"
            ].map((trend, index) => (
              <motion.div
                key={trend}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-medium">{trend}</h3>
                <Link
                  to={`/category/${trend.toLowerCase().replace(' ', '-')}`}
                  className="text-primary-600 text-sm hover:underline mt-2 inline-block"
                >
                  Explore More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay in Touch</h2>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter for exclusive offers and updates</p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};