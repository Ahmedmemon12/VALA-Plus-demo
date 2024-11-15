"use client"

import React, { useState } from 'react';
import { Home, ClipboardList, MessageCircle, BookOpen, Settings, Mic, Bell } from 'lucide-react';

const FeedbackForm = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [appPerformanceRating, setAppPerformanceRating] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    feedbackText: false,
    appPerformanceRating: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;

    if (!feedbackText) {
      setValidationErrors((prev) => ({ ...prev, feedbackText: true }));
      hasErrors = true;
    } else {
      setValidationErrors((prev) => ({ ...prev, feedbackText: false }));
    }

    if (appPerformanceRating === 0) {
      setValidationErrors((prev) => ({ ...prev, appPerformanceRating: true }));
      hasErrors = true;
    } else {
      setValidationErrors((prev) => ({ ...prev, appPerformanceRating: false }));
    }

    if (!hasErrors) {
      // Handle form submission logic here
      setShowConfirmation(true);
    }
  };

  const handleReset = () => {
    setFeedbackType('');
    setFeedbackText('');
    setAppPerformanceRating(0);
    setShowConfirmation(false);
    setValidationErrors({
      feedbackText: false,
      appPerformanceRating: false,
    });
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-8 h-8 ${i <= appPerformanceRating ? 'text-zinc-900' : 'text-gray-300'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          onClick={() => setAppPerformanceRating(i)}
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col">
      {/* Header */}

      {/* Feedback Form */}
      <div className="flex-1 bg-white p-6 pb-24">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          {/* Feedback Type Dropdown */}
          <div className="mb-6">
            <label htmlFor="feedbackType" className="block mb-2 font-medium text-gray-800">
              Feedback Type
            </label>
            <select
              id="feedbackType"
              value={feedbackType}
              onChange={(e) => setFeedbackType(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-peach-500 focus:ring-opacity-50"
            >
              <option value="">Select a feedback type</option>
              <option value="app_speed">App Speed</option>
              <option value="feature_issues">Feature Issues</option>
              <option value="user_interface">User Interface</option>
              <option value="usability">Usability</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Feedback Text Box */}
          <div className="mb-6">
            <label htmlFor="feedbackText" className="block mb-2 font-medium text-gray-800">
              Describe the Issue or Suggestion
            </label>
            <textarea
              id="feedbackText"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-peach-500 focus:ring-opacity-50 text-gray-800 ${
                validationErrors.feedbackText ? 'border-red-500' : ''
              }`}
              rows={5}
              placeholder="Please provide your feedback here..."
            />
            {validationErrors.feedbackText && (
              <p className="text-red-500 mt-2">Please provide feedback text.</p>
            )}
          </div>

          {/* App Performance Rating */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-800">Rate App Performance</label>
            <div className="flex items-center gap-3">{renderStars()}</div>
            {validationErrors.appPerformanceRating && (
              <p className="text-red-500 mt-2">Please select an app performance rating.</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!feedbackType || !feedbackText || appPerformanceRating === 0}
            className="w-full bg-zinc-900 text-white rounded-md px-4 py-2 hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-peach-500 focus:ring-opacity-50"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Confirmation Message */}
      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full bg-mint-200 text-mint-800 px-4 py-3 flex justify-between items-center">
          <span>Thank you for your feedback!</span>
          <button onClick={handleReset} className="text-mint-800 hover:text-mint-600 transition-colors">
            Close
          </button>
        </div>
      )}

      {/* Footer */}
    </div>
  );
};

export default FeedbackForm;