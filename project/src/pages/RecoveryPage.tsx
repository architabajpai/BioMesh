import React, { useState } from 'react';
import { Users, Shield, CheckCircle, UserPlus, Mail, Smartphone, Key, ArrowRight } from 'lucide-react';

const RecoveryPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedContacts, setSelectedContacts] = useState(0);

  const recoverySteps = [
    {
      step: 1,
      title: 'Add Trusted Contacts',
      description: 'Invite 3-5 trusted contacts who can help you recover your wallet',
      icon: UserPlus,
      status: 'completed'
    },
    {
      step: 2,
      title: 'Verify Contacts',
      description: 'Contacts verify their identity using biometric authentication',
      icon: Shield,
      status: 'completed'
    },
    {
      step: 3,
      title: 'Set Recovery Rules',
      description: 'Define how many contacts are needed for recovery approval',
      icon: Key,
      status: 'current'
    },
    {
      step: 4,
      title: 'Emergency Recovery',
      description: 'Use social recovery when you lose access to your wallet',
      icon: Users,
      status: 'upcoming'
    },
  ];

  const contacts = [
    { name: 'Shruti Jain', email: 'shruti@email.com', status: 'verified', avatar: 'SJ' },
    { name: 'Vaishnavi Parashar', email: 'vaishnavi@email.com', status: 'verified', avatar: 'VP' },
    { name: 'Preeti Dwivedi', email: 'preeti@email.com', status: 'pending', avatar: 'PD' },
    { name: 'Kavita Sharma', email: 'kavita@email.com', status: 'invited', avatar: 'KS' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Decentralized Recovery',
      description: 'No single point of failure - your recovery depends on multiple trusted contacts',
      benefits: ['Distributed security', 'No central authority', 'Tamper-proof process']
    },
    {
      icon: Users,
      title: 'Trusted Network',
      description: 'Build a network of verified contacts who can vouch for your identity',
      benefits: ['Biometric verification', 'Multi-factor authentication', 'Consensus-based approval']
    },
    {
      icon: Smartphone,
      title: 'Mobile Recovery',
      description: 'Initiate and manage recovery processes directly from your mobile device',
      benefits: ['Real-time notifications', 'Secure communication', 'Step-by-step guidance']
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'current': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Never Lose Access Again
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Social recovery ensures you can always regain access to your wallet 
              through a network of trusted contacts, without compromising security.
            </p>
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Social Recovery Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, secure process that puts you back in control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {recoverySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-4 ${
                  step.status === 'completed' ? 'bg-green-600' :
                  step.status === 'current' ? 'bg-blue-600' : 'bg-gray-400'
                } text-white`}>
                  {step.status === 'completed' ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-6 h-6" />
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < recoverySteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 transform translate-x-6 w-full h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <h2 className="text-2xl font-bold mb-2">Recovery Dashboard</h2>
              <p className="text-blue-100">Manage your trusted contacts and recovery settings</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Trusted Contacts</h3>
                  <div className="space-y-4">
                    {contacts.map((contact, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {contact.avatar}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                            <p className="text-sm text-gray-600">{contact.email}</p>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          contact.status === 'verified' ? 'bg-green-100 text-green-800' :
                          contact.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {contact.status}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add New Contact
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Recovery Settings</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-blue-800">Required Approvals</span>
                        <span className="text-sm font-medium text-blue-900">3 of 4</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-blue-800">Recovery Timeout</span>
                        <span className="text-sm font-medium text-blue-900">48 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-blue-800">Status</span>
                        <span className="text-sm font-medium text-green-600">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Security Score</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex-1 bg-green-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-medium text-green-900">85%</span>
                    </div>
                    <p className="text-sm text-green-800">Add one more verified contact to reach 100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Social Recovery is Superior
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Traditional recovery methods are vulnerable to single points of failure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Recovery CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Set Up Social Recovery Today
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Set up your trusted contact network and 
            ensure you never lose access to your digital assets.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center">
            Start Recovery Setup
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default RecoveryPage;