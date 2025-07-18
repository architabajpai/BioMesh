import React, { useState } from 'react';
import { Smartphone, MapPin, Bell, BarChart3, Shield, Download, Star, ArrowRight } from 'lucide-react';

const MobileAppPage = () => {
  const [activeFeature, setActiveFeature] = useState('tracking');

  const features = [
    {
      id: 'tracking',
      icon: MapPin,
      title: 'Find My Wallet',
      description: 'Never lose your wallet again with precise location tracking',
      details: [
        'Real-time GPS tracking',
        'Last known location history',
        'Proximity alerts',
        'Remote sound activation'
      ]
    },
    {
      id: 'management',
      icon: Shield,
      title: 'Remote Management',
      description: 'Control your wallet settings from anywhere',
      details: [
        'Lock/unlock wallet remotely',
        'Update security settings',
        'Manage trusted contacts',
        'Emergency freeze wallet'
      ]
    },
    {
      id: 'insights',
      icon: BarChart3,
      title: 'Financial Insights',
      description: 'Understand your spending patterns with AI-powered analytics',
      details: [
        'Spending category analysis',
        'Budget recommendations',
        'Savings insights',
        'Investment opportunities'
      ]
    },
    {
      id: 'notifications',
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Stay informed about your wallet activity',
      details: [
        'Transaction alerts',
        'Security notifications',
        'Budget warnings',
        'Recovery requests'
      ]
    },
  ];

  const appScreens = [
    {
      title: 'Dashboard',
      description: 'Overview of your wallet status and recent activity',
      features: ['Balance overview', 'Recent transactions', 'Security status', 'Quick actions']
    },
    {
      title: 'Location',
      description: 'Track your wallet location in real-time',
      features: ['Live GPS tracking', 'Location history', 'Proximity alerts', 'Sound activation']
    },
    {
      title: 'Security',
      description: 'Manage your security settings and trusted contacts',
      features: ['Biometric settings', 'Contact management', 'Recovery options', 'Security alerts']
    },
    {
      title: 'Analytics',
      description: 'Detailed insights into your spending patterns',
      features: ['Spending breakdown', 'Budget tracking', 'Savings goals', 'Investment advice']
    },
  ];

  const testimonials = [
    {
      name: 'Shruti Jain',
      role: 'Business Owner',
      rating: 5,
      text: 'The location tracking saved me when I left my wallet at a restaurant. Found it in minutes!',
      avatar: 'SJ'
    },
    {
      name: 'Vaishnavi Parashar',
      role: 'Software Engineer',
      rating: 5,
      text: 'The financial insights help me understand my spending better than any other app.',
      avatar: 'VP'
    },
    {
      name: 'Preeti Dwivedi',
      role: 'Marketing Manager',
      rating: 5,
      text: 'Remote management gives me peace of mind. I can secure my wallet from anywhere.',
      avatar: 'PD'
    },
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '4.9', label: 'App Store Rating' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Smartphone className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Wallet, Always Connected
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
              The BioMesh companion app puts complete control of your smart wallet 
              right in your pocket with advanced tracking and management features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center">
                <Download className="mr-2 w-5 h-5" />
                Download for iOS
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center">
                <Download className="mr-2 w-5 h-5" />
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* App Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features in Your Pocket
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your BioMesh wallet from your smartphone
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      activeFeature === feature.id
                        ? 'bg-indigo-50 border-2 border-indigo-200'
                        : 'bg-white border-2 border-transparent hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        activeFeature === feature.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="bg-indigo-600 p-4 rounded-full inline-block mb-4">
                    {React.createElement(features.find(f => f.id === activeFeature)?.icon || MapPin, {
                      className: "w-8 h-8 text-white"
                    })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {features.find(f => f.id === activeFeature)?.title}
                  </h3>
                  <p className="text-gray-600">
                    {features.find(f => f.id === activeFeature)?.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.find(f => f.id === activeFeature)?.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Try This Feature
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Intuitive Design, Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the clean, modern interface designed for everyday use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {appScreens.map((screen, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="bg-indigo-600 rounded-lg h-64 mb-4 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Smartphone className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-sm font-medium">{screen.title} Screen</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{screen.title}</h3>
                <p className="text-gray-600 mb-4">{screen.description}</p>
                <ul className="space-y-1">
                  {screen.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1 h-1 bg-indigo-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Users Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from BioMesh mobile app users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Control?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Download the BioMesh mobile app and experience the future of wallet management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center">
              <Download className="mr-2 w-5 h-5" />
              Download for iOS
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center">
              <Download className="mr-2 w-5 h-5" />
              Download for Android
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppPage;