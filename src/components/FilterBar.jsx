import React from 'react';

function FilterBar() {
    return (
        <div className="flex justify-between items-center mb-6 border-b border-light-border pb-4"> {/* Added border */}
            <div className="flex space-x-4">
                <select className="bg-dark-secondary text-white rounded-md px-4 py-2 focus:outline-none border border-light-border"> {/* Added border */}
                    <option>Sort by: Relevance</option>
                    <option>Sort by: Price (Low to High)</option>
                    <option>Sort by: Price (High to Low)</option>
                    <option>Sort by: Rating</option>
                    <option>Sort by: Trending</option>
                </select>
                <select className="bg-dark-secondary text-white rounded-md px-4 py-2 focus:outline-none border border-light-border"> {/* Added border */}
                    <option>Filter by: Category</option>
                    <option>Category: Art</option>
                    <option>Category: Business</option>
                    <option>Category: Writing</option>
                    <option>Category: Coding</option>
                </select>
            </div>
            <div className="flex items-center space-x-2">
                <input type="text" placeholder="Search prompts..." className="bg-dark-secondary text-white rounded-md px-4 py-2 focus:outline-none border border-light-border" /> {/* Added border */}
                <button className="bg-neon-accent text-dark-bg font-bold py-2 px-4 rounded hover:bg-opacity-80 transition-colors">
                    Search
                </button>
            </div>
        </div>
    );
}

export default FilterBar;
