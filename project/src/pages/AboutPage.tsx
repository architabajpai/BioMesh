import React from 'react';
import { Users, Target, Award, Globe, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Archita Bajpai',
      role: 'CEO & Co-Founder',
      bio: 'Former Head of Security at major fintech company. 10+ years in cryptography and biometric systems.',
      image: 'AB'
    },
    {
      name: 'Granth Satsangi',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer specializing in AI/ML. Led development of fraud detection systems at scale.',
      image: 'GS'
    },
  ];

  const values = [
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'We believe security should be seamless and accessible to everyone, not just tech experts.'
    },
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We continuously push the boundaries of what\'s possible in digital wallet security.'
    },
    {
      icon: Award,
      title: 'Security Excellence',
      description: 'We never compromise on security, implementing military-grade protection standards.'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'We\'re building for a global audience, making secure finance accessible worldwide.'
    },
  ];

  const milestones = [
    {
      year: '2022',
      title: 'Company Founded',
      description: 'BioMesh was founded by a team of security and blockchain experts'
    },
    {
      year: '2023',
      title: 'Seed Funding',
      description: 'Raised $5M in seed funding from leading VCs and angel investors'
    },
    {
      year: '2024',
      title: 'Beta Launch',
      description: 'Launched beta version with 1,000 early adopters and developers'
    },
    {
      year: '2025',
      title: 'Public Launch',
      description: 'Full public launch with advanced biometric and AI features'
    },
  ];

  const stats = [
    { value: '50+', label: 'Team Members' },
    { value: '10+', label: 'Countries' },
    { value: '99.9%', label: 'Security Score' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About BioMesh
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're building the future of secure digital finance by combining advanced biometric 
              authentication with AI-powered fraud detection to create the most secure and 
              user-friendly wallet experience ever.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To make secure digital finance accessible to everyone by eliminating the complexity 
                and vulnerability of traditional wallet systems through innovative biometric technology 
                and AI-powered security.
              </p>
              <p className="text-gray-600">
                We believe that security shouldn't come at the cost of usability. Our goal is to 
                create a wallet that's so secure and intuitive that anyone can use it confidently, 
                regardless of their technical expertise.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                A world where digital finance is secure, accessible, and seamless for everyone. 
                Where losing access to your funds is a thing of the past, and fraud is prevented 
                before it happens.
              </p>
              <p className="text-gray-600">
                We envision a future where biometric authentication is the standard for all digital 
                transactions, and where AI proactively protects users from emerging threats in 
                real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to secure digital finance
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              World-class experts in security, blockchain, AI, and user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our vision of 
            making digital finance secure and accessible for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;