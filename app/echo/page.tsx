'use client';

import { useState } from 'react';

/**
 * Echo Page
 * Interactive AI-powered interface placeholder
 * Future: Integrate with Claude API or other AI services
 */

export default function Echo() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // [AI_INTEGRATION_POINT] Future Echo API integration will go here
    // This is where calls to Claude API or other AI services will be made

    // Placeholder response
    setResponse(`Echo: "${input}"`);
    setInput('');
  };

  return (
    <div className="container-brutalist">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8">Echo</h1>

        <div className="card mb-8">
          <p className="text-xl mb-6">
            An interactive space for AI-powered conversations and explorations.
          </p>
          <p className="opacity-70">
            Future integration with Claude API will enable dynamic responses,
            content generation, and intelligent interactions.
          </p>
        </div>

        {/* Interactive Form */}
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="echo-input"
                className="block text-lg font-semibold mb-3"
              >
                Your Message
              </label>
              <textarea
                id="echo-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full p-4 border-2 border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-black bg-white"
                rows={4}
                placeholder="Type something to echo..."
                aria-label="Message input"
              />
            </div>

            <button
              type="submit"
              disabled={!input.trim()}
              className="px-8 py-4 bg-black text-white font-bold rounded-2xl hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Send message"
            >
              Send
            </button>
          </form>

          {/* Response Display */}
          {response && (
            <div className="mt-8 p-6 bg-light-gray border-2 border-black rounded-2xl">
              <h3 className="mb-4">Response:</h3>
              <p className="text-lg">{response}</p>
            </div>
          )}
        </div>

        {/* Technical Notes */}
        <div className="mt-8 card bg-white">
          <h2 className="mb-4">Integration Notes</h2>
          <p className="mb-4">
            To connect this page to an AI service:
          </p>
          <ol className="space-y-2 list-decimal list-inside opacity-70">
            <li>Create API route at <code>/app/api/echo/route.ts</code></li>
            <li>Add environment variables for API keys</li>
            <li>Implement fetch logic in the handleSubmit function</li>
            <li>Add streaming support for real-time responses</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
