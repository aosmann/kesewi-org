import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { PromptContext } from '../context/PromptContext';

const initialPrompts = [
    {
        id: 1,
        title: 'Cyberpunk Cityscape',
        price: '$5',
        imageUrl: 'https://placekitten.com/300/200', // Placeholder image
        tags: ['Art', 'Cityscape', 'Futuristic'],
        platform: 'MidJourney',
    },
    {
        id: 2,
        title: 'Product Landing Page Copy',
        price: '$3',
        imageUrl: 'https://placekitten.com/301/201', // Placeholder image
        tags: ['Business', 'Marketing', 'Writing'],
        platform: 'ChatGPT',
    },
    {
        id: 3,
        title: 'Fantasy Character Design',
        price: '$7',
        imageUrl: 'https://placekitten.com/302/202', // Placeholder image
        tags: ['Art', 'Fantasy', 'Character'],
        platform: 'Stable Diffusion',
    },
    {
        id: 4,
        title: 'Python Code Snippet for Web Scraping',
        price: '$4',
        imageUrl: 'https://placekitten.com/303/203', // Placeholder image
        tags: ['Coding', 'Python', 'Web Dev'],
        platform: 'ChatGPT',
    },
    {
        id: 5,
        title: 'Abstract Neon Art',
        price: '$6',
        imageUrl: 'https://placekitten.com/304/204', // Placeholder image
        tags: ['Art', 'Abstract', 'Neon'],
        platform: 'DALL·E',
    },
    {
        id: 6,
        title: 'Startup Business Plan Outline',
        price: '$8',
        imageUrl: 'https://placekitten.com/305/205', // Placeholder image
        tags: ['Business', 'Startup', 'Planning'],
        platform: 'ChatGPT',
    },
];

const platformOptions = ['ChatGPT', 'MidJourney', 'DALL·E', 'Stable Diffusion'];
const categoryOptions = ['Art', 'Business', 'Writing', 'Coding'];


function AdminPanel() {
    const [editingPromptId, setEditingPromptId] = useState(null);
    const [editedPrompt, setEditedPrompt] = useState({});
    const [isAddingPrompt, setIsAddingPrompt] = useState(false);
    const [newPrompt, setNewPrompt] = useState({
        title: '',
        price: '',
        imageUrl: '',
        platform: platformOptions[0], // Default to first platform option
        category: categoryOptions[0], // Default to first category option
        tags: [],
    });
    const location = useLocation();
    const { prompts, addPrompt, updatePrompt, deletePrompt } = useContext(PromptContext);


    const handleEdit = (promptId) => {
        setEditingPromptId(promptId);
        const promptToEdit = prompts.find(prompt => prompt.id === promptId);
        setEditedPrompt({ ...promptToEdit });
    };

    const handleSave = () => {
        updatePrompt(editedPrompt);
        setEditingPromptId(null);
        setEditedPrompt({});
    };

    const handleDelete = (promptId) => {
        deletePrompt(promptId);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (isAddingPrompt) {
            setNewPrompt(prevState => ({
              ...prevState,
              [name]: value
            }));
          } else if (editingPromptId) {
            setEditedPrompt(prevState => ({
              ...prevState,
              [name]: value
            }));
          }
    };

    const handleAddNewPrompt = () => {
        addPrompt(newPrompt);
        setNewPrompt({
            title: '',
            price: '',
            imageUrl: '',
            platform: platformOptions[0], // Reset to default platform
            category: categoryOptions[0], // Reset to default category
            tags: [],
        });
        setIsAddingPrompt(false);
    };

    const handleAddButtonClick = () => {
        setIsAddingPrompt(!isAddingPrompt);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Admin Panel - Manage Prompts</h2>

            <button onClick={handleAddButtonClick} className="bg-neon-accent text-dark-bg font-bold py-2 px-4 rounded hover:bg-opacity-80 transition-colors mb-4">
                {isAddingPrompt ? 'Cancel Add Prompt' : 'Add New Prompt'}
            </button>

            {isAddingPrompt && (
                <div className="mb-8 p-6 bg-dark-secondary border border-light-border rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Add New Prompt</h3>
                    <div className="mb-2">
                        <label htmlFor="new-title" className="block text-sm font-medium text-white mb-1">Title</label>
                        <input type="text" id="new-title" name="title" value={newPrompt.title} onChange={handleInputChange} className="bg-dark-bg text-white rounded-md px-2 py-1 focus:outline-none w-full border border-light-border" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="new-price" className="block text-sm font-medium text-white mb-1">Price</label>
                        <input type="text" id="new-price" name="price" value={newPrompt.price} onChange={handleInputChange} className="bg-dark-bg text-white rounded-md px-2 py-1 focus:outline-none w-full border border-light-border" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="new-imageUrl" className="block text-sm font-medium text-white mb-1">Image URL</label>
                        <input type="text" id="new-imageUrl" name="imageUrl" value={newPrompt.imageUrl} onChange={handleInputChange} className="bg-dark-bg text-white rounded-md px-2 py-1 focus:outline-none w-full border border-light-border" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="new-platform" className="block text-sm font-medium text-white mb-1">Platform</label>
                        <select id="new-platform" name="platform" value={newPrompt.platform} onChange={handleInputChange} className="w-full bg-dark-bg text-white rounded-md px-4 py-2 focus:outline-none border border-light-border">
                          {platformOptions.map(platform => (
                            <option key={platform} value={platform}>{platform}</option>
                          ))}
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="new-category" className="block text-sm font-medium text-white mb-1">Category</label>
                        <select id="new-category" name="category" value={newPrompt.category} onChange={handleInputChange} className="w-full bg-dark-bg text-white rounded-md px-4 py-2 focus:outline-none border border-light-border">
                          {categoryOptions.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="new-tags" className="block text-sm font-medium text-white mb-1">Tags (comma-separated)</label>
                        <input type="text" id="new-tags" name="tags" value={newPrompt.tags.join(', ')} onChange={(e) => handleInputChange({ target: { name: 'tags', value: e.target.value.split(',').map(tag => tag.trim()) } })} className="bg-dark-bg text-white rounded-md px-2 py-1 focus:outline-none w-full border border-light-border" />
                    </div>
                    <button onClick={handleAddNewPrompt} className="bg-neon-accent text-dark-bg font-bold py-2 px-4 rounded hover:bg-opacity-80 transition-colors">
                        Add Prompt
                    </button>
                </div>
            )}

            <div className="overflow-x-auto border border-light-border rounded-lg">
                <table className="min-w-full divide-y divide-light-border">
                    <thead className="bg-dark-secondary border-b border-light-border">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Platform</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Tags</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-light-border">
                        {prompts.length > 0 ? (
                            prompts.map(prompt => (
                                <tr key={prompt.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{editingPromptId === prompt.id ? (
                                        <input type="text" name="title" value={editedPrompt.title || ''} onChange={handleInputChange} className="bg-dark-bg text-white rounded-md px-2 py-1 focus:outline-none w-full border border-light-border" />
                                    ) : prompt.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{editingPromptId === prompt.id ? (
                                        <input type="text" name="price" value={editedPrompt.price || ''} onChange={handleInputChange} className="bg-dark-bg text-white rounded-md px-2 py-1 focus:outline-none w-full border border-light-border" />
                                    ) : prompt.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{editingPromptId === prompt.id ? (
                                        <input type="text" name="platform" value={editedPrompt.platform || ''} onChange={handleInputChange} className="bg-dark-bg text-white rounded-md px-2 py-1 focus:outline-none w-full border border-light-border" />
                                    ) : platformToOption(prompt.platform)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{editingPromptId === prompt.id ? (
                                        <input type="text" name="category" value={editedPrompt.category || ''} onChange={handleInputChange} className="bg-dark-bg text-white rounded-md px-2 py-1 focus:outline-none w-full border border-light-border" />
                                    ) : categoryToOption(prompt.category)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{editingPromptId === prompt.id ? (
                                        <input type="text" name="tags" value={editedPrompt.tags ? editedPrompt.tags.join(', ') : ''} onChange={(e) => handleInputChange({ target: { name: 'tags', value: e.target.value.split(',').map(tag => tag.trim()) } })} className="bg-dark-bg text-white rounded-md px-2 py-1 focus:outline-none w-full border border-light-border" />
                                    ) : prompt.tags.join(', ')}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                                        {editingPromptId === prompt.id ? (
                                            <>
                                                <button onClick={handleSave} className="neon-accent hover:text-white transition-colors mr-2">Save</button>
                                                <button onClick={() => setEditingPromptId(null)} className="text-white hover:text-neon-accent transition-colors">Cancel</button>
                                            </>
                                        ) : (
                                            <>
                                                <button onClick={() => handleEdit(prompt.id)} className="neon-accent hover:text-white transition-colors mr-2">Edit</button>
                                                <button onClick={() => handleDelete(prompt.id)} className="text-red-500 hover:text-red-300 transition-colors">Delete</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-center" colSpan="6">No prompts available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {editingPromptId && (
                <div className="mt-8 p-6 bg-dark-secondary border border-light-border rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Edit Prompt</h3>
                    <div className="mb-4">
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-white mb-2">Image Preview URL</label>
                        {editedPrompt.imageUrl && <img src={editedPrompt.imageUrl} alt="Prompt Preview" className="w-48 h-auto rounded-md mb-2" />}
                        <input type="text" id="imageUrl" name="imageUrl" value={editedPrompt.imageUrl || ''} onChange={handleInputChange} className="bg-dark-bg text-white rounded-md px-2 py-1 focus:outline-none w-full border border-light-border" />
                    </div>
                    {/* More edit fields can be added here */}
                </div>
            )}
        </div>
    );
}

// Helper functions to render options in table (non-editable view)
function platformToOption(platformValue) {
  return (
    <select value={platformValue} disabled className="bg-dark-bg text-white rounded-md px-4 py-2 focus:outline-none border border-light-border">
      {platformOptions.map(platform => (
        <option key={platform} value={platform}>{platform}</option>
      ))}
    </select>
  );
}

function categoryToOption(categoryValue) {
  return (
    <select value={categoryValue} disabled className="bg-dark-bg text-white rounded-md px-4 py-2 focus:outline-none border border-light-border">
      {categoryOptions.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
}


export default AdminPanel;
