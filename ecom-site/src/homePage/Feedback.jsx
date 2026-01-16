import React from "react";

const Feedback = () => {
  return (
    <div className="w-[80vw] v-[40vh] flex justify-center items-center">
    <div className="bg-[#b2ddc2] w-[50rem] ml-64 mt-32 px-32 py-16 border-25 border-black rounded-3xl border-solid ">
      <h1 className="text-3xl font-bold mb-4">Feedback</h1>
      <p className="text-lg mb-4">
        We value your feedback! Please share your thoughts to help us improve.
      </p>
      <textarea
        className="w-full border rounded-lg p-2 mb-4"
        rows="5"
        placeholder="Write your feedback here..."
      />
      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
        Submit
      </button>
    </div>
    </div>
  );
};

export default Feedback;
