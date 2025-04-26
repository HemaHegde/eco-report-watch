
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import IssueList from '@/components/IssueList';
import IssueFilter from '@/components/IssueFilter';
import IssueForm from '@/components/IssueForm';
import ReportButton from '@/components/ReportButton';
import { mockIssues, Issue } from '@/utils/mockData';
import { toast } from 'sonner';

const Index = () => {
  const [issues, setIssues] = useState<Issue[]>(mockIssues);
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>(mockIssues);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const handleFilterChange = (filters: {
    status: string;
    category: string;
    priority: string;
    searchQuery: string;
  }) => {
    let result = [...issues];
    
    if (filters.status) {
      result = result.filter(issue => issue.status === filters.status);
    }
    
    if (filters.category) {
      result = result.filter(issue => issue.category === filters.category);
    }
    
    if (filters.priority) {
      result = result.filter(issue => issue.priority === filters.priority);
    }
    
    if (filters.searchQuery) {
      const searchLower = filters.searchQuery.toLowerCase();
      result = result.filter(issue => 
        issue.title.toLowerCase().includes(searchLower) ||
        issue.location.toLowerCase().includes(searchLower) ||
        issue.description.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredIssues(result);
  };

  const handleStatusChange = (id: string, newStatus: 'Open' | 'In Progress' | 'Resolved') => {
    const updatedIssues = issues.map(issue => 
      issue.id === id ? { ...issue, status: newStatus } : issue
    );
    setIssues(updatedIssues);
    setFilteredIssues(updatedIssues);
  };
  
  const handleFormSubmit = (formData: Omit<Issue, 'id' | 'upvotes' | 'createdAt'>) => {
    const newIssue: Issue = {
      ...formData,
      id: `${issues.length + 1}`,
      upvotes: 0,
      createdAt: new Date().toISOString(),
    };
    
    const updatedIssues = [newIssue, ...issues];
    setIssues(updatedIssues);
    setFilteredIssues(updatedIssues);
    
    toast.success('New issue reported successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-bold text-green-800">Community Environmental Reports</h1>
          <p className="text-muted-foreground mt-2">
            Help keep our community clean and sustainable by reporting and tracking environmental issues.
          </p>
        </div>
        
        <IssueFilter onFilterChange={handleFilterChange} />
        
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-green-700">Recent Reports</h2>
            <p className="text-sm text-muted-foreground">
              Showing {filteredIssues.length} {filteredIssues.length === 1 ? 'issue' : 'issues'}
            </p>
          </div>
          
          <Button 
            className="bg-green-600 hover:bg-green-700 hidden md:flex"
            onClick={() => setIsFormOpen(true)}
          >
            Report New Issue
          </Button>
        </div>
        
        <IssueList 
          issues={filteredIssues} 
          onStatusChange={handleStatusChange}
        />
        
        {filteredIssues.length === 0 && (
          <div className="mt-6 text-center">
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => setIsFormOpen(true)}
            >
              Report New Issue
            </Button>
          </div>
        )}
      </main>
      
      <IssueForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
      />
      
      <ReportButton onClick={() => setIsFormOpen(true)} />
    </div>
  );
};

export default Index;
