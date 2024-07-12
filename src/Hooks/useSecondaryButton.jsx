import React from "react";

const useSecondaryButton = (name) => {
  return (
    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold btn">
      {name}
    </button>
  );
};

export default useSecondaryButton;
