
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-xl font-bold text-green-700">GreenWatch</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <Button variant="link" className="text-green-700 hover:text-green-900">Dashboard</Button>
          <Button variant="link" className="text-green-700 hover:text-green-900">My Reports</Button>
          <Button variant="link" className="text-green-700 hover:text-green-900">About</Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">Login</Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
