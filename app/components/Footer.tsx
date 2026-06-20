"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-AU", {
          timeZone: "Australia/Melbourne",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-6 grid-rows-3 gap-6">
      {/* Top left: live time */}
      <div className="col-span-3">
        <p className="text-sm text-gray-400 tracking-tight">
          Melbourne, {time}
        </p>
      </div>

      {/* Top right: CTA (Click to action) */}
      <div className="col-span-3">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">
          Let's build something together
        </h2>
        <a
          href="mailto:declankikyanto27@gmail.com"
          className="inline-block text-sm text-gray-500 bg-gray-100 border border-gray-200 px-3 py-1.5 hover:text-accent transition-colors rounded-full"
        >
          declankikyanto27@gmail.com
        </a>
      </div>

      {/* Bottom left: empty for now */}
      <div className="col-span-3 row-span-2 mt-6"></div>

      {/* Navigate to: */}
      <div className="col-span-1 mt-6">
        <p className="text-sm font-medium text-gray-900 mb-4">Pages</p>
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Empty for now */}
      <div className="col-span-1 mt-6"></div>

      {/* Connect: */}
      <div className="col-span-1 mt-6">
        <p className="text-sm font-medium text-gray-900 mb-4">Connect</p>
        <div className="flex flex-col gap-3">
          <a
            href="https://linkedin.com/in/declankikyanto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/imdeckik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="col-span-3 flex items-end justify-star">
        <span className="text-sm text-gray-400 tracking-tight">
          © 2026 · Designed and built by me
        </span>
      </div>
    </div>
  );
}
