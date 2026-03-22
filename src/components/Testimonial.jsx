import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState('right');
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: 'Rohit Singh',
      title: 'Life Coach & Wellness Expert',
      text: 'Manohar Ji’s astrology reading gave me clarity about my career path. His predictions were surprisingly accurate, and his remedies really worked for me.',
      rating: 5,
      image: './Images/t1.png',
      location: 'Delhi,India',
      service: 'Birth Chart Reading'
    },
    {
      name: 'Bipin Chaube',
      title: 'Business Entrepreneur',
      text: 'We were facing constant health and financial issues. After applying Manohar Ji’s Vastu remedies, things began to shift positively within a few weeks.',
      rating: 5,
      image: './Images/t4.png',
      location: 'Bihar,India',
      service: 'Monthly Horoscope'
    },
    {
      name: 'Rani Gupta',
      title: 'Creative Director',
      text: 'The Kundali matching helped us move ahead with our marriage confidently. It highlighted both strengths and challenges honestly.',
      rating: 5,
      image: './Images/t2.png',
      location: 'Banglore , India',
      service: 'Kundli Reading'
    },
    {
      name: 'Ashish Tiwari',
      title: 'Spiritual Seeker',
      text: 'Changing my mobile number and business logo based on numerology brought unexpected success. Highly recommended!',
      rating: 5,
      image: './Images/t3.png',
      location: 'Mumbai, India',
      service: 'Number Correction'
    },
    {
      name: 'Sakshi Jha',
      title: 'Yoga Instructor',
      text: "I was stuck in a cycle of bad decisions and confusion. Manohar Ji's astrology session felt like a light in the dark. His accurate reading and practical remedies brought real changes in my mindset and daily life. I now feel more confident and aligned with my purpose.",
      rating: 5,
      image: './Images/t5.png',
      location: 'Jharkhand, India',
      service: 'Vedic Astrology'
    }
  ];

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setSlideDirection('right');
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setSlideDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Sparkles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            <Sparkles 
              className="text-yellow-300/20" 
              size={Math.random() * 16 + 8}
            />
          </div>
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-medium text-sm">Client Testimonials</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Cosmic Stories
            </span>
            <br />
            <span className="text-white/90">of Transformation</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover how our mystical guidance has illuminated paths and transformed lives across the universe
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-5xl mx-auto mb-12">
          <div 
            className="relative group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Testimonial Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
              {/* Decorative Quote */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-yellow-400/30" />
              <Quote className="absolute bottom-6 right-6 w-12 h-12 text-yellow-400/30 rotate-180" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Profile Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-yellow-400/30 shadow-xl">
                      <img
                        src={testimonials[currentSlide].image}
                        alt={testimonials[currentSlide].name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iNzUiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNNzUgNzVDODcuNDI2NCA3NSA5Ny41IDY0LjkyNjQgOTcuNSA1Mi41Uzg3LjQyNjQgMzAgNzUgMzBTNTIuNSA0MC4wNzM2IDUyLjUgNTIuNVM2Mi41NzM2IDc1IDc1IDc1WiIgZmlsbD0iIzlDQTNBRiIvPjxwYXRoIGQ9Ik03NSA5MEMxMDAuNDA1IDkwIDEyMSAxMDUgMTIxIDEyM1YxNTBIMjlWMTIzQzI5IDEwNSA0OS41OTUgOTAgNzUgOTBaIiBmaWxsPSIjOUNBM0FGIi8+PC9zdmc+';
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-2">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {testimonials[currentSlide].name}
                    </h3>
                    <p className="text-yellow-400 font-medium mb-2">
                      {testimonials[currentSlide].title}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-white/60">
                      <span>{testimonials[currentSlide].location}</span>
                      <span>•</span>
                      <span>{testimonials[currentSlide].service}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center md:justify-start mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-6 h-6 text-yellow-400 fill-current animate-pulse" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic text-center md:text-left">
                  "{testimonials[currentSlide].text}"
                </blockquote>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-12 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full' 
                  : 'w-3 h-3 bg-white/30 rounded-full hover:bg-white/50 hover:scale-125'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              {currentSlide === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
          >
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="text-sm font-medium">
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </span>
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;