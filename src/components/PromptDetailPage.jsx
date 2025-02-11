import React from 'react';
import { useParams } from 'react-router-dom';

function PromptDetailPage() {
  const { promptId } = useParams();
  // For now, let's assume we have access to a prompts array or context
  // In a real app, you might fetch the prompt details based on promptId
  const prompts = JSON.parse(localStorage.getItem('prompts') || '[]');
  const prompt = prompts.find(p => p.id === parseInt(promptId));

  if (!prompt) {
    return <div>Prompt not found</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{prompt.title}</h2>
      <img src={prompt.imageUrl} alt={prompt.title} className="w-full rounded-md mb-4" />
      <p className="text-neon-accent font-bold mb-2">{prompt.price}</p>
      <div className="flex space-x-2 mb-4">
        {prompt.tags.map(tag => (
          <span key={tag} className="inline-block bg-dark-secondary text-white text-sm rounded-full px-3 py-1 font-semibold border border-light-border">{tag}</span>
        ))}
      </div>
      <p>Platform: {prompt.platform}</p>
      {/* Add more detailed information here if needed */}
    </div>
  );
}

export default PromptDetailPage;
