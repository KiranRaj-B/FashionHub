import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

// const fadeInUp = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.5 }
// };

export const HomePage = () => {
  return (
    <div className="space-y-">
      <section className="relative h-[320px] overflow-hidden flex items-center justify-center">
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
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Explore the Latest Trends</h1>
            <p className="text-lg sm:text-xl mb-6">
              Discover the latest trends in fashion and explore our new collection.
            </p>
            <Link
              to="/category/women"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white-900 rounded-full font-medium hover:bg-primary-700 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            title: "Women's Fashion",
            image: "/womes/women-main_photo.png",
            link: "/category/women"
          }, {
            title: "Men's Collection",
            image: "/mens/mens-classic.png",
            link: "/category/men"
          }, {
            title: "Kids' Wear",
            image: "/home_page_images/kids-home_image.avif",
            link: "/category/kids"
          }].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[350px] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
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

      {/* Trending Now */}
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
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
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

      {/* Promotions (Flash Sale or Discounts) */}
      <section className="relative bg-primary-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Flash Sale: Up to 50% Off!</h2>
            <p className="text-xl">Grab your favorite items at unbeatable prices while they last.</p>
            <Link
              to="/category/men"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Shop the Sale
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in Touch</h2>
          <p className="text-lg text-gray-600 mb-6">Subscribe to our newsletter for exclusive offers and updates.</p>
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
        </div>
      </section>

    </div>
  );
};
