import React from "react";
import { Button } from "@/components/ui/button";

const SocialLogin = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => console.log("Google login")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
        Google
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => console.log("Microsoft login")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        </svg>
        Microsoft
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => console.log("Apple login")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
          <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
        Apple
      </Button>
    </div>
  );
};

export default SocialLogin;
