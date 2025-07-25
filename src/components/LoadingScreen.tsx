
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto opacity-60" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Bestha Lakshmi Narasimha</h1>
        <p className="text-purple-300 animate-pulse">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
