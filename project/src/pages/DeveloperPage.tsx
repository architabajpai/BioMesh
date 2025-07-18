import React, { useState } from 'react';
import { Code, Book, Download, Terminal, Zap, Shield, Copy, Check, ArrowRight } from 'lucide-react';

const DeveloperPage = () => {
  const [activeTab, setActiveTab] = useState('quickstart');
  const [copiedCode, setCopiedCode] = useState('');

  const tabs = [
    { id: 'quickstart', label: 'Quick Start', icon: Zap },
    { id: 'authentication', label: 'Authentication', icon: Shield },
    { id: 'transactions', label: 'Transactions', icon: Code },
    { id: 'recovery', label: 'Recovery', icon: Book },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Gasless Transactions',
      description: 'Users never pay gas fees - we handle all transaction costs',
      code: 'sdk.sendTransaction({ to, amount, gasless: true })'
    },
    {
      icon: Shield,
      title: 'Account Abstraction',
      description: 'Simplified onboarding without complex wallet management',
      code: 'sdk.createWallet({ biometric: true, recovery: contacts })'
    },
    {
      icon: Code,
      title: 'Simple Integration',
      description: 'Add BioMesh to any app with just a few lines of code',
      code: 'import { BioMesh } from "@biomesh/sdk"'
    },
    {
      icon: Book,
      title: 'Comprehensive Docs',
      description: 'Detailed documentation and examples for every feature',
      code: 'sdk.docs.getExample("biometric-auth")'
    },
  ];

  const codeExamples = {
    quickstart: `// Install the BioMesh SDK
npm install @biomesh/sdk

// Initialize the SDK
import { BioMesh } from '@biomesh/sdk';

const biomesh = new BioMesh({
  apiKey: 'your-api-key',
  network: 'mainnet', // or 'testnet'
});

// Create a new wallet
const wallet = await biomesh.createWallet({
  biometric: true,
  recovery: ['user1@email.com', 'user2@email.com']
});

console.log('Wallet created:', wallet.address);`,

    authentication: `// Set up biometric authentication
const auth = await biomesh.auth.setup({
  methods: ['face', 'fingerprint', 'voice'],
  fallback: 'pin'
});

// Authenticate user
const isAuthenticated = await biomesh.auth.verify({
  method: 'face',
  timeout: 30000
});

if (isAuthenticated) {
  console.log('User authenticated successfully');
}

// Multi-factor authentication
const mfa = await biomesh.auth.multiFactorAuth({
  primary: 'face',
  secondary: 'fingerprint'
});`,

    transactions: `// Send a gasless transaction
const transaction = await biomesh.transactions.send({
  to: '0x742d35Cc6634C0532925a3b8D0084C3A26e4F1E5',
  amount: '1.0',
  token: 'ETH',
  gasless: true
});

// Sign transaction with biometric
const signed = await biomesh.transactions.sign({
  transaction,
  biometric: true
});

// Monitor transaction status
const status = await biomesh.transactions.getStatus(signed.hash);
console.log('Transaction status:', status);`,

    recovery: `// Set up social recovery
const recovery = await biomesh.recovery.setup({
  contacts: [
    { email: 'friend1@email.com', weight: 1 },
    { email: 'friend2@email.com', weight: 1 },
    { email: 'family@email.com', weight: 2 }
  ],
  threshold: 3,
  timeout: 48 // hours
});

// Initiate recovery process
const recoveryRequest = await biomesh.recovery.initiate({
  reason: 'Lost device',
  contact: 'recovery@email.com'
});

// Check recovery status
const status = await biomesh.recovery.getStatus(recoveryRequest.id);`
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Terminal className="w-16 h-16 mx-auto mb-6 text-gray-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build with BioMesh
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Integrate advanced biometric security and gasless transactions into your app 
              with our powerful, developer-friendly SDK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                <Download className="mr-2 w-5 h-5" />
                Get Started
              </button>
              <button className="border-2 border-gray-300 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors inline-flex items-center">
                <Book className="mr-2 w-5 h-5" />
                Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features that make integration simple and secure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="bg-gray-900 text-gray-300 text-sm p-3 rounded-lg font-mono">
                  {feature.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Code Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real examples to get you started quickly
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600 bg-blue-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              <div className="relative">
                <div className="bg-gray-900 rounded-lg p-6 text-gray-300 font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{codeExamples[activeTab]}</pre>
                </div>
                <button
                  onClick={() => copyCode(codeExamples[activeTab])}
                  className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
                  title="Copy code"
                >
                  {copiedCode === codeExamples[activeTab] ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDK Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Developers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the growing community of developers building with BioMesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
              <div className="text-gray-600">Active Developers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Integrated Apps</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">API Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Developer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to integrate BioMesh into your application
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Get API Key</h3>
                <p className="text-gray-600">Sign up for a developer account and get your API key</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Install SDK</h3>
                <p className="text-gray-600">Add the BioMesh SDK to your project with npm or yarn</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Building</h3>
                <p className="text-gray-600">Follow our guides and start integrating BioMesh features</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                Start Building Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperPage;