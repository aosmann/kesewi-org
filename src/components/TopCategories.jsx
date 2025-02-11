import React from 'react';

const topCategories = [
    { name: 'Art', value: 'art' },
    { name: 'Business', value: 'business' },
    { name: 'Writing', value: 'writing' },
    { name: 'Coding', value: 'coding' },
];

function TopCategories() {
    return (
        <div className="mb-8 border-b border-light-border pb-4">
            <h2 className="text-xl font-semibold mb-4">Top Categories</h2>
            <div className="flex space-x-4 overflow-x-auto">
                {topCategories.map(category => (
                    <button
                        key={category.value}
                        className="bg-dark-secondary border border-light-border rounded-md px-4 py-2 text-white hover:border-light-gray-border transition-border duration-300"
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TopCategories;
