import React from 'react';
import { Link } from 'react-router-dom';

const StarsCTAComponent = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4 py-8">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <div className="text-center">
          {/* Main Heading with Star Icon */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-yellow-400 text-4xl md:text-5xl drop-shadow-lg">⭐</span>
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              Let the Stars Work for You – Choose Your Plan
            </h1>
          </div>
          
          {/* Call to Action Button */}
          <Link to="/offer">
          <button className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white px-8 py-4 rounded-full text-xl md:text-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Click here
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StarsCTAComponent;
