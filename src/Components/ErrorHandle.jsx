import React from "react";
import { IoAlertCircle } from "react-icons/io5";

import { Link } from "react-router-dom";

const ErrorHandle = () => {
  return (
    <main className="bg-[#0f0f1a]">
      <div className="text-center h-[100svh] pt-[10rem]">
        <div className="flex justify-center">
          <IoAlertCircle color="red" fontSize={150} />
        </div>

        <h1 className="text-2xl font-bold text-white pb-4">
          Something went wrong
        </h1>
        <p className="text-white px-5 pb-4 text-lg">
          There was a problem processing the request. Please try again
        </p>
        <Link to="/" className="text-white underline">
          Return to home
        </Link>
      </div>
    </main>
  );
};

export default ErrorHandle;
