export const Footer = () => {
    return (
      <footer className="border-t mt-20 bg-gray-50 text-gray-600 text-center py-6 text-base">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-1">© {new Date().getFullYear()} All rights reserved.</p>
          <p>
            Designed and Developed by{' '}
            <a
              href="https://kiranrajbadakambi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-900 hover:text-primary-1000 transition-colors font-medium"
            >
              Kiran Badakambi
            </a>
          </p>
        </div>
      </footer>
    );
  };
  