import React from 'react';

function PromptPreviewModal({ prompt, onClose }) {
    if (!prompt) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-dark-bg bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-dark-secondary border border-light-border rounded-lg p-8 max-w-lg"> {/* Removed glass-dark, added border */}
                <h2 className="text-xl font-bold mb-4">{prompt.title}</h2>
                <img src={prompt.imageUrl} alt={prompt.title} className="w-full rounded-md mb-4" />
                <p className="mb-4">Prompt details and full preview will be displayed here.</p>
                <div className="flex justify-end">
                    <button className="bg-neon-accent text-dark-bg font-bold py-2 px-4 rounded hover:bg-opacity-80 transition-colors mr-2">
                        Buy Prompt
                    </button>
                    <button onClick={onClose} className="text-white hover:text-neon-accent transition-colors">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PromptPreviewModal;
