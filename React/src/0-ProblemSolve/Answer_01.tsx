// 🟩 ১) সাধারণ number state ব্যবহার

// প্রশ্ন:
// একটি বাটন বানাও, যেটি ক্লিক করলে counter +1 হবে। Counter এর মান স্ক্রিনে দেখাবে।
// -----------------------------------------------
import { useState } from "react";
import React from "react";

const Answer_01: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => {
      const next = prev + 1;
      console.log(next);
      return next; // value return করতে হবে
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      {" "}
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        {count}
      </h2>{" "}
      <button
        onClick={increment}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-colors"
      >
        Increment{" "}
      </button>{" "}
    </div>
  );
};

export default Answer_01;
