import React from 'react';
import { Loader2 } from 'lucide-react';

const PageLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full">
      <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
    </div>
  );
};

export default PageLoader;
