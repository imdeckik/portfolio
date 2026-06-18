"use client";

import { useState } from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabSwitcherProps = {
  tabs: Tab[];
};

export default function TabSwitcher({ tabs }: TabSwitcherProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-3 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2 text-sm font-medium tracking-tight rounded-xl border transition-colors ${
              activeTab === index
                ? "border-gray-500 text-gray-800"
                : "border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      {tabs[activeTab].content}
    </div>
  );
}
