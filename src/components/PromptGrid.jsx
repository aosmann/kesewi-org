import React, { useContext, useMemo } from 'react';
import PromptCard from './PromptCard';
import { PromptContext } from '../context/PromptContext';

function PromptGrid({ platformFilter, categoryFilter }) {
    const { prompts } = useContext(PromptContext);

    const filteredPrompts = useMemo(() => {
        let filtered = [...prompts]; // Start with all prompts

        if (platformFilter !== 'all') {
            filtered = filtered.filter(prompt => prompt.platform === platformFilter);
        }

        if (categoryFilter !== 'all') {
            filtered = filtered.filter(prompt => prompt.category === categoryFilter);
        }

        return filtered;
    }, [prompts, platformFilter, categoryFilter]); // Re-run filter when prompts or filters change

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map(prompt => (
                <PromptCard key={prompt.id} prompt={prompt} />
            ))}
        </div>
    );
}

export default PromptGrid;
