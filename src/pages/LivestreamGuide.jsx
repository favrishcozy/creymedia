import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaYoutube, FaVideo, FaCheckCircle, FaDownload } from 'react-icons/fa';

const LivestreamGuide = () => {
  const steps = [
    {
      title: 'Set Up YouTube Live',
      description: 'Create a YouTube channel and enable live streaming in your account settings.',
      icon: <FaYoutube className="text-red-500" />,
      details: [
        'Go to YouTube Studio',
        'Enable live streaming in channel settings',
        'Verify your account if required',
        'Set up stream key and settings'
      ]
    },
    {
      title: 'Prepare Your Content',
      description: 'Plan your live session content and prepare any materials needed.',
      icon: <FaVideo className="text-blue-500" />,
      details: [
        'Choose a compelling topic',
        'Prepare talking points or agenda',
        'Test your equipment (camera, microphone, lighting)',
        'Have backup content ready'
      ]
    },
    {
      title: 'Go Live',
      description: 'Start your live stream and engage with your audience.',
      icon: <FaCheckCircle className="text-green-500" />,
      details: [
        'Click "Go Live" in YouTube Studio',
        'Enter stream title and description',
        'Set privacy settings',
        'Start streaming and monitor chat'
      ]
    }
  ];

  const tips = [
    'Test your stream 30 minutes before going live',
    'Engage with viewers in the chat',
    'Have good lighting and clear audio',
    'Promote your stream in advance',
    'Save your stream for later viewing',
    'Analyze performance after the stream'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Livestream Guide</h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about going live on our platform
            </p>
          </div>

          {/* Steps */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to Go Live</h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pro Tips</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Download Guide */}
          <div className="text-center">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <FaDownload className="text-orange-500 text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Download Complete Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Get our comprehensive PDF guide with detailed instructions and checklists.
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                Download PDF Guide
              </button>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Need help? Contact our support team at{' '}
              <a href="mailto:support@creymedia.com" className="text-orange-500 hover:text-orange-600">
                support@creymedia.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LivestreamGuide;
