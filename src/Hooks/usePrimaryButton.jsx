import React from "react";

const usePrimaryButton = (name) => {
  return (
    <button className="bg-gradient-to-r from-indigo-700 from-10% via-sky-700 via-30% to-emerald-700 to-90% text-white font-semibold btn">
      {name}
    </button>
  );
};

export default usePrimaryButton;
