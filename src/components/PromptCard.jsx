import React from 'react';
import { Link } from 'react-router-dom';

function PromptCard({ prompt }) {
  return (
    <Link to={`/prompts/${prompt.id}`} className="block">
      <div className="rounded-lg overflow-hidden border border-light-border hover:border-light-gray-border transition-border duration-300 relative"> {/* Make container relative for absolute positioning */}
        
        <div className="absolute top-2 left-2 flex space-x-2"> {/* Pill container with absolute positioning */}
          <span className="inline-block bg-dark-secondary text-white text-xs rounded-full px-2 py-1 font-semibold border border-light-border">
            {prompt.platform}
          </span>
          <span className="inline-block bg-dark-secondary text-white text-xs rounded-full px-2 py-1 font-semibold border border-light-border">
            {prompt.category}
          </span>
        </div>


        <img src={prompt.imageUrl} alt={prompt.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{prompt.title}</h3>
          <p className="text-neon-accent font-bold">{prompt.price}</p>
          <div className="flex space-x-2 mt-2">
            {prompt.tags.map(tag => (
              <span key={tag} className="inline-block bg-glass-light text-white text-sm rounded-full px-3 py-1 font-semibold">{tag}</span>
            ))}
          </div>

          {/* Removed Platform and Category from here */}

          <div className="mt-4 flex justify-between items-center">
            <button className="bg-neon-accent text-dark-bg font-bold py-2 px-4 rounded hover:bg-opacity-80 transition-colors">
              Buy Prompt
            </button>
            <button className="text-white hover:text-neon-accent transition-colors">
              Preview
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PromptCard;
