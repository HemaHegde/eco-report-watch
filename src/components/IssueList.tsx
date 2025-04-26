
import React from 'react';
import IssueCard from './IssueCard';
import { Issue } from '@/utils/mockData';

interface IssueListProps {
  issues: Issue[];
  onStatusChange?: (id: string, newStatus: 'Open' | 'In Progress' | 'Resolved') => void;
}

const IssueList: React.FC<IssueListProps> = ({ issues, onStatusChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {issues.length === 0 ? (
        <div className="col-span-full text-center py-12 bg-secondary rounded-lg">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="mx-auto h-12 w-12 text-muted-foreground" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium">No issues found</h3>
          <p className="mt-2 text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        issues.map(issue => (
          <IssueCard 
            key={issue.id} 
            issue={issue} 
            onStatusChange={onStatusChange}
          />
        ))
      )}
    </div>
  );
};

export default IssueList;
