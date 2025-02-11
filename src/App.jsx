import React, { useState, useContext, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PromptGrid from './components/PromptGrid';
import FilterBar from './components/FilterBar';
import AdminPanel from './components/AdminPanel';
import TopCategories from './components/TopCategories';
import PromptDetailPage from './components/PromptDetailPage';
import { Routes, Route } from 'react-router-dom';
import { PromptContext } from './context/PromptContext';

function App() {
  const { prompts } = useContext(PromptContext);
  const [platformFilter, setPlatformFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const availablePlatforms = useMemo(() => {
    const uniquePlatforms = Array.from(new Set(prompts.map(prompt => prompt.platform)));
    return [
      { name: 'All Platforms', value: 'all' },
      ...uniquePlatforms.map(platform => ({ name: platform, value: platform }))
    ];
  }, [prompts]);

  const availableCategories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(prompts.map(prompt => prompt.category)));
    return [
      { name: 'All Categories', value: 'all' },
      ...uniqueCategories.map(category => ({ name: category, value: category }))
    ];
  }, [prompts]);


  const handlePlatformFilterChange = (value) => {
    setPlatformFilter(value);
  };

  const handleCategoryFilterChange = (value) => {
    setCategoryFilter(value);
  };


  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar
          platforms={availablePlatforms}
          categories={availableCategories}
          platformFilter={platformFilter}
          categoryFilter={categoryFilter}
          onPlatformFilterChange={handlePlatformFilterChange}
          onCategoryFilterChange={handleCategoryFilterChange}
          prompts={prompts} // Pass prompts data to Sidebar
        />
        <div className="flex-1 p-6 border-l border-light-border">
          <Routes>
            <Route path="/" element={
              <>
                <TopCategories />
                <FilterBar />
                <PromptGrid
                  platformFilter={platformFilter}
                  categoryFilter={categoryFilter}
                />
              </>
            } />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/prompts/:promptId" element={<PromptDetailPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
