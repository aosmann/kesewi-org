import React from 'react';

function Sidebar({ platforms, categories, platformFilter, categoryFilter, onPlatformFilterChange, onCategoryFilterChange, prompts }) {
  console.log("Sidebar - platformFilter prop:", platformFilter); // Debug log for platformFilter
  console.log("Sidebar - categoryFilter prop:", categoryFilter); // Debug log for categoryFilter

  return (
    <aside className="bg-dark-bg border-r border-light-border w-64 p-6">
      <div className="mb-4 bg-dark-secondary p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-2">AI Platforms</h3>
        <ul className="space-y-2">
          {platforms.map(platform => {
            const promptCount = platform.value === 'all' ? prompts.length : prompts.filter(prompt => prompt.platform === platform.value).length;
            return (
              <li key={platform.value}>
                <button
                  className={`block w-full text-left py-2 px-4 rounded-md hover:border-light-gray-border hover:text-neon-accent transition-colors border border-dark-bg hover:border-light-gray-border 
                    ${platformFilter === platform.value 
                      ? 'border-neon-accent text-neon-accent' // --- ACTIVE STYLE: NEON BORDER ---
                      : 'bg-dark-secondary'                // --- INACTIVE STYLE: DEFAULT BACKGROUND ---
                    }`}
                  onClick={() => onPlatformFilterChange(platform.value)}
                >
                  {platform.name} ({promptCount})
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-dark-secondary p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <ul className="space-y-2">
          {categories.map(category => {
            const promptCount = category.value === 'all' ? prompts.length : prompts.filter(prompt => prompt.category === category.value).length;
            return (
              <li key={category.value}>
                <button
                  className={`block w-full text-left py-2 px-4 rounded-md hover:border-light-gray-border hover:text-neon-accent transition-colors border border-dark-bg hover:border-light-gray-border 
                    ${categoryFilter === category.value 
                      ? 'border-neon-accent text-neon-accent' // --- ACTIVE STYLE: NEON BORDER ---
                      : 'bg-dark-secondary'                // --- INACTIVE STYLE: DEFAULT BACKGROUND ---
                    }`}
                  onClick={() => onCategoryFilterChange(category.value)}
                >
                  {category.name} ({promptCount})
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
