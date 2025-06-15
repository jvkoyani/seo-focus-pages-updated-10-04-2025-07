
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const SideButton = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <Link
        to="/case-studies"
        className="bg-seo-blue hover:bg-seo-blue-light text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        title="View Case Studies"
      >
        <FileText className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </Link>
    </div>
  );
};

export default SideButton;
