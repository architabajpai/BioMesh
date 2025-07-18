import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m the BioMesh assistant. How can I help you learn about our smart wallet technology?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    'hello': 'Hello! Welcome to BioMesh. I can help you learn about our biometric authentication, AI fraud detection, and social recovery features.',
    'security': 'BioMesh uses military-grade biometric authentication including face recognition, fingerprint scanning, and voice authentication. All biometric data stays on your device and is encrypted at the hardware level.',
    'biometric': 'Our biometric system supports face recognition (99.97% accuracy), fingerprint scanning (99.95% accuracy), and voice authentication (99.8% accuracy). Your biometric data never leaves your device.',
    'fraud': 'Our AI fraud detection system monitors your behavior patterns in real-time, detects anomalies, and prevents fraudulent transactions before they happen with 99.9% accuracy.',
    'recovery': 'Social recovery allows you to regain access to your wallet through trusted contacts. You can set up 3-5 trusted contacts who can help verify your identity if you lose access.',
    'mobile': 'Our companion app offers wallet location tracking, remote management, financial insights, and security settings. Available for both iOS and Android.',
    'developers': 'We offer a comprehensive SDK for developers with gasless transactions, account abstraction, and simple integration. Check out our developer documentation for code examples.',
    'pricing': 'BioMesh is currently in beta. Sign up for early access to be among the first to experience the future of secure digital finance.',
    'contact': 'You can reach us at architabajpai07@gmail.com or through our contact form. We\'re based in Delhi, India and provide 24/7 support.',
    'team': 'BioMesh was founded by Archita Bajpai (CEO) and Granth Satsangi (CTO), both experts in security and blockchain technology.',
    'location': 'We\'re based in Delhi, India. Our team works globally to make secure digital finance accessible to everyone.',
    'default': 'I\'m here to help you learn about BioMesh! You can ask me about our security features, biometric authentication, AI fraud detection, social recovery, mobile app, or developer tools.'
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (key !== 'default' && message.includes(key)) {
        return response;
      }
    }
    
    // Check for common greetings
    if (message.includes('hi') || message.includes('hey') || message.includes('hello')) {
      return predefinedResponses.hello;
    }
    
    // Check for questions about features
    if (message.includes('how') || message.includes('what') || message.includes('why')) {
      if (message.includes('work') || message.includes('secure')) {
        return predefinedResponses.security;
      }
    }
    
    return predefinedResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    'Tell me about security',
    'How does biometric auth work?',
    'What is social recovery?',
    'Show me the mobile app',
    'Developer documentation'
  ];

  const handleQuickAction = (action: string) => {
    setInputText(action);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`bg-white rounded-lg shadow-2xl border transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-80 h-96'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 p-1 rounded-full">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">BioMesh Assistant</h3>
              <p className="text-xs text-blue-100">Online now</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
            >
              <Minimize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {message.sender === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                    </div>
                    <div className={`rounded-lg p-3 text-sm ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-xs">
                    <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">
                      <Bot className="w-3 h-3" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="text-xs text-gray-500 mb-2">Quick questions:</div>
                <div className="flex flex-wrap gap-1">
                  {quickActions.slice(0, 3).map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about BioMesh..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
