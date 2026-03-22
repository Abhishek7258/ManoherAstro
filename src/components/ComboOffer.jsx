import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ComboOffer = () => {
  const [selectedPlan, setSelectedPlan] = useState('STANDARD');

  const plans = [
    {
      id: 'BASIC',
      name: 'BASIC',
      price: '4,999/-',
      services: [
        { name: 'Name correction', frequency: 2 },
        { name: 'Lucky mobile or flat number', frequency: 2, subtitle: 'Lucky number (home/mobile/vehicle/bank)' },
        { name: 'Signature correction', frequency: 2 },
        { name: '30 min session of problem as per chart', frequency: 4 }
      ]
    },
    {
      id: 'STANDARD',
      name: 'STANDARD',
      price: '9,999/-',
      isPopular: true,
      services: [
        { name: 'Name correction', frequency: 3 },
        { name: 'Lucky mobile or flat number', frequency: 3, subtitle: 'Lucky number (home/mobile/vehicle/bank)' },
        { name: 'Signature correction', frequency: 3 },
        { name: '30 min session with chart along with vastu', frequency: 4 },
        { name: 'Handwriting analysis', frequency: 1 },
        { name: 'Brand and logo suggestion', frequency: 1 }
      ]
    },
    {
      id: 'PREMIUM',
      name: 'PREMIUM',
      price: '19,999/-',
      services: [
        { name: 'Name correction', frequency: 4 },
        { name: 'Lucky mobile or flat number', frequency: 4, subtitle: 'Lucky number (home/mobile/vehicle/bank)' },
        { name: 'Signature correction', frequency: 4 },
        { name: '30 min session with chart along with vastu', frequency: 6 },
        { name: 'Handwriting analysis', frequency: 2 },
        { name: 'Brand and logo suggestion', frequency: 1 },
        { name: 'Vastu visit', frequency: 1 }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Choose Your Perfect Plan
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive astrology and numerology services tailored to transform your life
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
              plan.isPopular ? 'ring-4 ring-purple-500 scale-105' : ''
            } ${selectedPlan === plan.id ? 'ring-2 ring-blue-500' : ''}`}
          >
            {/* Popular Badge */}
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  MOST POPULAR
                </span>
              </div>
            )}

            <div className="p-8">
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">₹{plan.price}</div>
                <Link to="/form">
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : selectedPlan === plan.id
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
                </Link>
              </div>

              {/* Services List */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg border-b pb-2">Services Included</h4>
                {plan.services.map((service, index) => (
                  <div key={index} className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 font-medium">{service.name}</span>
                      </div>
                      {service.subtitle && (
                        <p className="text-sm text-gray-500 ml-8 mt-1">{service.subtitle}</p>
                      )}
                    </div>
                    <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full ml-4">
                      {service.frequency}x
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Choosing a Plan?
          </h3>
          <p className="text-gray-600 mb-6">
            Book a free 10-minute intro call to discuss which plan works best for your needs.
          </p>
           <a 
              href={`tel:8441825354`}>
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl">
            Book Free Consultation
          </button>
          </a>
        </div>
      </div>

      {/* Features Comparison */}
      <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-8 py-6 bg-gray-50 border-b">
          <h3 className="text-2xl font-bold text-gray-900">Plan Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Standard</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                'Name correction',
                'Lucky mobile or flat number',
                'Signature correction',
                '30 min session with chart/vastu',
                'Handwriting analysis',
                'Brand and logo suggestion',
                'Vastu visit'
              ].map((service, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{service}</td>
                  <td className="px-6 py-4 text-center text-sm">
                    {plans[0].services.find(s => s.name.includes(service.split(' ')[0]))?.frequency || '–'}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {plans[1].services.find(s => s.name.includes(service.split(' ')[0]))?.frequency || '–'}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {plans[2].services.find(s => s.name.includes(service.split(' ')[0]))?.frequency || '–'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComboOffer;
