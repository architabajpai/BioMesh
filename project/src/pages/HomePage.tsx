import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, Users, Smartphone, Zap, Eye, Fingerprint, Lock, ArrowRight, Check, Star } from 'lucide-react';

const HomePage = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [scanningProgress, setScanningProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  const demos = [
    { title: 'Biometric Authentication', icon: Fingerprint, description: 'Secure access with face, voice, and fingerprint recognition' },
    { title: 'AI Fraud Detection', icon: Brain, description: 'Real-time protection with machine learning algorithms' },
    { title: 'Social Recovery', icon: Users, description: 'Never lose access with trusted contact recovery' },
    { title: 'Mobile Companion', icon: Smartphone, description: 'Manage your wallet from anywhere' },
  ];

  const features = [
    { icon: Shield, title: 'Military-Grade Security', description: 'Advanced biometric authentication and encryption' },
    { icon: Brain, title: 'AI Fraud Protection', description: 'Machine learning prevents fraud before it happens' },
    { icon: Users, title: 'Social Recovery', description: 'Trusted contacts help you recover your wallet' },
    { icon: Smartphone, title: 'Mobile First', description: 'Seamless experience across all devices' },
    { icon: Zap, title: 'Gasless Transactions', description: 'No gas fees for users, simplified experience' },
    { icon: Lock, title: 'Privacy Focused', description: 'Your biometric data stays on your device' },
  ];

  const testimonials = [
    { name: 'Archita Bajpai', role: 'Product Manager', company: 'TechCorp', text: 'BioMesh completely changed how I think about wallet security. The biometric authentication is seamless.' },
    { name: 'Granth Satsangi', role: 'Developer', company: 'StartupXYZ', text: 'The SDK integration was incredibly smooth. Our users love the gasless transactions.' },
    { name: 'Mansi Kapse', role: 'Security Analyst', company: 'FinanceFirst', text: 'The AI fraud detection caught suspicious activity that traditional methods missed.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const startBiometricScan = () => {
    setIsScanning(true);
    setScanningProgress(0);
    const progressInterval = setInterval(() => {
      setScanningProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsScanning(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Wallet,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                {' '}Secured by You
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Experience the future of digital finance with advanced biometric authentication, 
              AI-powered fraud detection, and seamless social recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience BioMesh Security
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Interactive demonstrations of our cutting-edge security features
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {demos.map((demo, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeDemo === index
                      ? 'bg-blue-50 border-2 border-blue-200 shadow-lg'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeDemo === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      <demo.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{demo.title}</h3>
                      <p className="text-gray-600">{demo.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Biometric Scan Simulator</h3>
                <p className="text-gray-400">Try our secure authentication system</p>
              </div>

              <div className="relative">
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <div className="absolute inset-0 border-4 border-blue-600 rounded-full"></div>
                  <div className="absolute inset-4 border-2 border-blue-400 rounded-full opacity-60"></div>
                  <div className="absolute inset-8 border-2 border-blue-300 rounded-full opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Eye className="w-16 h-16 text-blue-400" />
                  </div>
                  {isScanning && (
                    <div className="absolute inset-0 rounded-full bg-blue-600 opacity-20 animate-pulse"></div>
                  )}
                </div>

                <div className="mb-6">
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Scan Progress</span>
                      <span className="text-sm text-blue-400">{scanningProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-200"
                        style={{ width: `${scanningProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {scanningProgress === 100 && (
                    <div className="text-center text-green-400 font-semibold">
                      <Check className="w-6 h-6 mx-auto mb-2" />
                      Authentication Successful
                    </div>
                  )}
                </div>

                <button
                  onClick={startBiometricScan}
                  disabled={isScanning}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isScanning ? 'Scanning...' : 'Start Biometric Scan'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BioMesh?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced security meets intuitive design for the ultimate digital wallet experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Innovators
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what early adopters are saying about BioMesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Digital Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of early adopters who are already experiencing the future of secure digital finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <Link to="/developers" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Developer Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;