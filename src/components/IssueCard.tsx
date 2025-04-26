
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Issue } from '@/utils/mockData';
import { ArrowUpIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface IssueCardProps {
  issue: Issue;
  onStatusChange?: (id: string, newStatus: 'Open' | 'In Progress' | 'Resolved') => void;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue, onStatusChange }) => {
  const [upvotes, setUpvotes] = useState(issue.upvotes);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleUpvote = () => {
    if (!hasUpvoted) {
      setUpvotes(upvotes + 1);
      setHasUpvoted(true);
      toast.success('Issue upvoted successfully!');
    } else {
      setUpvotes(upvotes - 1);
      setHasUpvoted(false);
      toast.info('Upvote removed.');
    }
  };

  const handleStatusChange = (newStatus: 'Open' | 'In Progress' | 'Resolved') => {
    if (onStatusChange) {
      onStatusChange(issue.id, newStatus);
      toast.success(`Issue status updated to ${newStatus}`);
    }
  };

  return (
    <Card className="issue-card overflow-hidden">
      {issue.imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={issue.imageUrl} 
            alt={issue.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge 
            className={cn(
              "px-2 py-1",
              issue.status === 'Open' ? "bg-red-100 text-red-800 hover:bg-red-100" : 
              issue.status === 'In Progress' ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" : 
              "bg-green-100 text-green-800 hover:bg-green-100"
            )}
          >
            {issue.status}
          </Badge>
          <Badge 
            className={cn(
              "px-2 py-1",
              issue.priority === 'Low' ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : 
              issue.priority === 'Medium' ? "bg-amber-100 text-amber-800 hover:bg-amber-100" : 
              "bg-red-100 text-red-800 hover:bg-red-100"
            )}
          >
            {issue.priority} Priority
          </Badge>
        </div>
        
        <CardTitle className="text-lg font-semibold">{issue.title}</CardTitle>
        
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span>{issue.location}</span>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="mb-2">
          <Badge variant="outline" className="bg-secondary text-secondary-foreground">
            {issue.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">{issue.description}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <ClockIcon className="h-4 w-4 mr-1" />
          <span>Reported {formatDate(issue.createdAt)}</span>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className={cn(
            "flex items-center gap-1", 
            hasUpvoted && "text-green-600 border-green-600"
          )}
          onClick={handleUpvote}
        >
          <ArrowUpIcon className="h-4 w-4" />
          <span>{upvotes}</span>
        </Button>
      </CardFooter>
      
      {onStatusChange && (
        <div className="px-6 pb-4 pt-0 flex gap-2">
          <Button 
            size="sm" 
            variant={issue.status === 'Open' ? "default" : "outline"}
            className={issue.status === 'Open' ? "bg-green-600 hover:bg-green-700" : ""}
            onClick={() => handleStatusChange('Open')}
          >
            Open
          </Button>
          <Button 
            size="sm"
            variant={issue.status === 'In Progress' ? "default" : "outline"}
            className={issue.status === 'In Progress' ? "bg-green-600 hover:bg-green-700" : ""}
            onClick={() => handleStatusChange('In Progress')}
          >
            In Progress
          </Button>
          <Button 
            size="sm"
            variant={issue.status === 'Resolved' ? "default" : "outline"}
            className={issue.status === 'Resolved' ? "bg-green-600 hover:bg-green-700" : ""}
            onClick={() => handleStatusChange('Resolved')}
          >
            Resolved
          </Button>
        </div>
      )}
    </Card>
  );
};

export default IssueCard;
