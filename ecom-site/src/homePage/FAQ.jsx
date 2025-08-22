import React from "react";

const FAQ = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Q1: What is this website about?</h2>
        <p>This website helps users learn and connect with our services.</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Q2: How can I contact support?</h2>
        <p>You can use the Contact Us page to reach out to our team.</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Q3: How do I give feedback?</h2>
        <p>Go to the Feedback page and submit your comments.</p>
      </div>
    </div>
  );
};

export default FAQ;
