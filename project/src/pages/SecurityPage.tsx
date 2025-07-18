import React, { useState } from 'react';
import { Shield, Eye, Fingerprint, Mic, Brain, Lock, AlertTriangle, CheckCircle } from 'lucide-react';

const SecurityPage = () => {
  const [activeTab, setActiveTab] = useState('biometric');
  const [threatLevel, setThreatLevel] = useState('low');

  const biometricFeatures = [
    {
      icon: Eye,
      title: 'Face Recognition',
      description: 'Advanced facial recognition technology using 3D depth mapping',
      security: 'Military-grade encryption',
      accuracy: '99.97%'
    },
    {
      icon: Fingerprint,
      title: 'Fingerprint Scanning',
      description: 'Multi-finger authentication with liveness detection',
      security: 'Secure enclave storage',
      accuracy: '99.95%'
    },
    {
      icon: Mic,
      title: 'Voice Authentication',
      description: 'Voice pattern recognition with anti-spoofing technology',
      security: 'Edge processing only',
      accuracy: '99.8%'
    },
  ];

  const aiFeatures = [
    {
      title: 'Real-time Monitoring',
      description: 'Continuous analysis of transaction patterns and user behavior',
      status: 'active'
    },
    {
      title: 'Anomaly Detection',
      description: 'Machine learning algorithms identify suspicious activities',
      status: 'active'
    },
    {
      title: 'Predictive Analysis',
      description: 'Prevents fraud before it happens using behavioral patterns',
      status: 'active'
    },
    {
      title: 'Adaptive Learning',
      description: 'System learns from your usage patterns for better security',
      status: 'learning'
    },
  ];

  const securityMetrics = [
    { label: 'Fraud Prevention Rate', value: '99.9%', color: 'text-green-600' },
    { label: 'False Positive Rate', value: '0.01%', color: 'text-blue-600' },
    { label: 'Response Time', value: '<100ms', color: 'text-purple-600' },
    { label: 'Data Encryption', value: 'AES-256', color: 'text-orange-600' },
  ];

  const threatLevels = {
    low: { color: 'text-green-600', bg: 'bg-green-100', label: 'Low Risk' },
    medium: { color: 'text-yellow-600', bg: 'bg-yellow-100', label: 'Medium Risk' },
    high: { color: 'text-red-600', bg: 'bg-red-100', label: 'High Risk' },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Military-Grade Security
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Advanced biometric authentication and AI-powered fraud detection 
              work together to create an impenetrable security layer.
            </p>
          </div>
        </div>
      </section>

      {/* Security Dashboard */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Security Status Dashboard</h3>
                <div className="grid grid-cols-2 gap-4">
                  {securityMetrics.map((metric, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Threat Level</h3>
                <AlertTriangle className="w-5 h-5 text-gray-400" />
              </div>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${threatLevels[threatLevel].bg} ${threatLevels[threatLevel].color}`}>
                {threatLevels[threatLevel].label}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Your account is secure with no detected threats
              </p>
            </div>
          </div>

          {/* Security Features Tabs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('biometric')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'biometric'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Biometric Authentication
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'ai'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  AI Fraud Detection
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'biometric' && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Multi-Modal Biometric Authentication
                    </h3>
                    <p className="text-gray-600">
                      Your biometric data never leaves your device and is encrypted at the hardware level
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {biometricFeatures.map((feature, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                          <feature.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Security</span>
                            <span className="text-sm font-medium text-gray-900">{feature.security}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Accuracy</span>
                            <span className="text-sm font-medium text-green-600">{feature.accuracy}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      AI-Powered Fraud Detection
                    </h3>
                    <p className="text-gray-600">
                      Advanced machine learning algorithms protect you from fraud in real-time
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {aiFeatures.map((feature, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            feature.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {feature.status === 'active' ? (
                              <CheckCircle className="w-3 h-3 mr-1" />
                            ) : (
                              <Brain className="w-3 h-3 mr-1" />
                            )}
                            {feature.status}
                          </div>
                        </div>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 mt-8">
                    <h4 className="text-lg font-semibold text-blue-900 mb-3">How It Works</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-600 text-white rounded-full p-1 mt-1">
                          <span className="text-xs font-bold px-2">1</span>
                        </div>
                        <p className="text-blue-800">Continuous monitoring of transaction patterns and user behavior</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-600 text-white rounded-full p-1 mt-1">
                          <span className="text-xs font-bold px-2">2</span>
                        </div>
                        <p className="text-blue-800">Machine learning algorithms analyze data for anomalies</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-600 text-white rounded-full p-1 mt-1">
                          <span className="text-xs font-bold px-2">3</span>
                        </div>
                        <p className="text-blue-800">Instant alerts and automatic protection when threats are detected</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              BioMesh meets the highest security standards and compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-gray-600">Security controls audit</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 27001</h3>
              <p className="text-sm text-gray-600">Information security management</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">PCI DSS</h3>
              <p className="text-sm text-gray-600">Payment card industry standards</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GDPR</h3>
              <p className="text-sm text-gray-600">Data protection regulation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;