import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-dark-bg border-b border-light-border sticky top-0 z-10"> {/* Removed glass-dark, added border */}
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold neon-accent">AI Prompt Marketplace</h1>
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-neon-accent transition-colors">Browse</Link>
                    <Link to="/admin" className="hover:text-neon-accent transition-colors">Admin Panel</Link>
                    <a href="#" className="hover:text-neon-accent transition-colors">Create</a>
                    <a href="#" className="hover:text-neon-accent transition-colors">Account</a>
                </nav>
                <div className="md:hidden">
                    {/* Mobile menu icon */}
                    <button className="text-white hover:text-neon-accent focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
