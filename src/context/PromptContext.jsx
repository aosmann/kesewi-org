import React, { createContext, useState, useEffect } from 'react';

export const PromptContext = createContext();

export const PromptProvider = ({ children }) => {
  const initialPrompts = [
    { id: 1, title: 'Cyberpunk Cityscape', price: '$5', imageUrl: 'https://placekitten.com/300/200', tags: ['Art', 'Cityscape', 'Futuristic'], platform: 'MidJourney', category: 'Art' },
    { id: 2, title: 'Product Landing Page Copy', price: '$3', imageUrl: 'https://placekitten.com/301/201', tags: ['Business', 'Marketing', 'Writing'], platform: 'ChatGPT', category: 'Business' },
    { id: 3, title: 'Fantasy Character Design', price: '$7', imageUrl: 'https://placekitten.com/302/202', tags: ['Art', 'Fantasy', 'Character'], platform: 'Stable Diffusion', category: 'Art' },
    { id: 4, title: 'Python Code Snippet for Web Scraping', price: '$4', imageUrl: 'https://placekitten.com/303/203', tags: ['Coding', 'Python', 'Web Dev'], platform: 'ChatGPT', category: 'Coding' },
    { id: 5, title: 'Abstract Neon Art', price: '$6', imageUrl: 'https://placekitten.com/304/204', tags: ['Art', 'Abstract', 'Neon'], platform: 'DALL·E', category: 'Art' },
    { id: 6, title: 'Startup Business Plan Outline', price: '$8', imageUrl: 'https://placekitten.com/305/205', tags: ['Business', 'Startup', 'Planning'], platform: 'ChatGPT', category: 'Business' },
  ];
  const [prompts, setPrompts] = useState(() => {
    const storedPrompts = localStorage.getItem('prompts');
    const initial = storedPrompts ? JSON.parse(storedPrompts) : initialPrompts;
    console.log("PromptContext - useState initializer - Loaded prompts from localStorage:", initial); // Debug log on load
    return initial;
  });

  useEffect(() => {
    console.log("PromptContext - useEffect - Saving prompts to localStorage:", prompts); // Debug log on save
    localStorage.setItem('prompts', JSON.stringify(prompts));
  }, [prompts]);

  const addPrompt = (newPrompt) => {
    console.log("PromptContext - addPrompt - Adding new prompt:", newPrompt); // Debug log on add
    setPrompts(prevPrompts => [...prevPrompts, { ...newPrompt, id: Date.now() }]);
  };

  const updatePrompt = (updatedPrompt) => {
    console.log("PromptContext - updatePrompt - Updating prompt:", updatedPrompt); // Debug log on update
    setPrompts(prevPrompts =>
      prevPrompts.map(prompt => prompt.id === updatedPrompt.id ? updatedPrompt : prompt)
    );
  };

  const deletePrompt = (promptId) => {
    console.log("PromptContext - deletePrompt - Deleting prompt ID:", promptId); // Debug log on delete
    setPrompts(prevPrompts => prevPrompts.filter(prompt => prompt.id !== promptId));
  };

  const value = {
    prompts,
    addPrompt,
    updatePrompt,
    deletePrompt,
  };

  console.log("PromptContext - Provider Value:", value); // Debug log for provider value

  return (
    <PromptContext.Provider value={value}>
      {children}
    </PromptContext.Provider>
  );
};
