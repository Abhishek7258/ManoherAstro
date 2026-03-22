import { useState } from "react";
import { BookOpen, User, Star, DollarSign, StarIcon, TagIcon, BotIcon } from "lucide-react";
import Title from "../Utility/Title";
import { Link } from "react-router-dom";

export default function Kundli() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      <br />
      <br />
      <Title heading="Our Services" description="" />
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-orange-300"></div>
        <div className="absolute top-32 right-20 w-12 h-12 rounded-full bg-amber-400"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full bg-orange-200"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full bg-yellow-300"></div>
      </div>

      {/* Mystical geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern
              id="stars"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50,10 L52,18 L60,18 L54,24 L56,32 L50,26 L44,32 L46,24 L40,18 L48,18 Z"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#stars)"
            className="text-orange-200"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Hero image with mystical frame */}

          {/* Right side - Service cards */}
          <div className=" px-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === 1 ? "scale-110" : ""
                    }`}
                  >
                    <BookOpen className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Vastu
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Harmonize your home and workspace with the ancient science
                    of Vastu Shastra. Our experts help balance energy flow,
                    ensuring prosperity, peace, and positive vibes in your
                    surroundings.
                  </p>

                  <Link to="/service">
                    <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors duration-200 flex items-center gap-2 mx-auto">
                      Read More
                      <span className="text-xs">→</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === 2 ? "scale-110" : ""
                    }`}
                  >
                    <User className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Astrology
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Discover your destiny through personalized astrological
                    guidance. Uncover insights about your career, love life,
                    health, and more — based on your birth chart and planetary
                    positions.
                  </p>

                  <Link to="/service">
                    <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors duration-200 flex items-center gap-2 mx-auto">
                      Read More
                      <span className="text-xs">→</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === 3 ? "scale-110" : ""
                    }`}
                  >
                    <Star className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Kundali Reading
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Get detailed insights into your life through comprehensive
                    birth chart analysis. Discover your strengths, challenges,
                    and life path through ancient Vedic astrology.
                  </p>

                  <Link to="/service">
                    <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors duration-200 flex items-center gap-2 mx-auto">
                      Read More
                      <span className="text-xs">→</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 4 */}
              <div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
                onMouseEnter={() => setHoveredCard(4)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === 4 ? "scale-110" : ""
                    }`}
                  >
                    <DollarSign className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Numerology
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Decode the power of numbers in your life. Our numerology
                    readings reveal your life path, personality traits, and
                    future potential through your date of birth and name
                    vibrations.
                  </p>
                  <Link to="/service">
                    <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors duration-200 flex items-center gap-2 mx-auto">
                      Read More
                      <span className="text-xs">→</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* card 5 */}
              <div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === 2 ? "scale-110" : ""
                    }`}
                  >
                    <BotIcon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Graphology & Signature
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Discover what your handwriting and signature reveal about
                    your personality, destiny, and energy alignment. We combine
                    handwriting analysis with astrological insights to guide you
                    with personalized remedies and signature corrections for
                    success and positivity.
                  </p>

                  <Link to="/service">
                    <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors duration-200 flex items-center gap-2 mx-auto">
                      Read More
                      <span className="text-xs">→</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* card 6 */}
              <div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === 2 ? "scale-110" : ""
                    }`}
                  >
                    <StarIcon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Healing Remedies
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Beyond predictions, we offer powerful healing remedies to
                    restore balance and positivity in your life. Using trusted
                    methods like Reiki, Sabar Mantras, Quantum Shambhavi.
                  </p>

                  <Link to="/service">
                    <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors duration-200 flex items-center gap-2 mx-auto">
                      Read More
                      <span className="text-xs">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom text */}
          </div>
        </div>
      </div>
    </div>
  );
}
