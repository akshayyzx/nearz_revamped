import React from 'react';
import { Star } from 'lucide-react';

export default function NearzTestimonialSection() {
  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-6 h-6 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                TRUSTED BY 5K+ SALON CLIENTS
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                beauty meets
                <br />
                <span className="text-rose-500">convenience</span>
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Book your perfect salon appointment in seconds. From haircuts to spa treatments, 
                discover trusted salons near you with real reviews and instant booking.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Instant Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Verified Salons</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Real Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Ratings */}
          <div className="flex sm:flex-row  gap-15 lg:gap-12">
            {/* App Store Rating */}
            <div className="text-center lg:text-left">
              <StarRating rating={5} />
              <div className="mt-4 space-y-2">
                <div className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900">
                  4.7<span className="text-3xl sm:text-4xl lg:text-7xl text-gray-500">/5</span>
                </div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  APP STORE
                </p>
              </div>
            </div>

            {/* Google Play Rating */}
            <div className="text-center lg:text-left">
              <StarRating rating={5} />
              <div className="mt-4 space-y-2">
                <div className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900">
                  4.7<span className="text-3xl sm:text-4xl lg:text-7xl text-gray-500">/5</span>
                </div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  GOOGLE PLAY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}