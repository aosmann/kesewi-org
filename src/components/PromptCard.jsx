import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function PromptCard({ prompt }) {
  return (
    <Link to={`/prompts/${prompt.id}`} className="block"> {/* Wrap PromptCard in Link */}
      <div className="rounded-lg overflow-hidden border border-light-border hover:border-light-gray-border transition-border duration-300">
        <img src={prompt.imageUrl} alt={prompt.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{prompt.title}</h3>
          <p className="text-neon-accent font-bold">{prompt.price}</p>
          <div className="flex space-x-2 mt-2">
            {prompt.tags.map(tag => (
              <span key={tag} className="inline-block bg-dark-secondary text-white text-sm rounded-full px-3 py-1 font-semibold border border-light-border"></span>
            ))}
          </div>
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
