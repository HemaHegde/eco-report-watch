
import React from 'react';
import { Button } from "@/components/ui/button";
import { PlusIcon } from 'lucide-react';

interface ReportButtonProps {
  onClick: () => void;
}

const ReportButton: React.FC<ReportButtonProps> = ({ onClick }) => {
  return (
    <Button
      className="fixed bottom-6 right-6 shadow-lg rounded-full bg-green-600 hover:bg-green-700 w-14 h-14 p-0 z-10"
      onClick={onClick}
      aria-label="Report Issue"
    >
      <PlusIcon className="h-6 w-6" />
    </Button>
  );
};

export default ReportButton;
