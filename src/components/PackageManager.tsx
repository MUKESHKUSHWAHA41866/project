import React, { useState } from 'react';
import { Package } from 'lucide-react';

const PackageManager: React.FC = () => {
  const [packageName, setPackageName] = useState('');
  const [packages, setPackages] = useState<string[]>([]);

  const handleAddPackage = () => {
    if (packageName && !packages.includes(packageName)) {
      setPackages([...packages, packageName]);
      setPackageName('');
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex items-center mb-4">
        <Package className="w-5 h-5 mr-2" />
        <h2 className="text-lg font-semibold">Package Manager</h2>
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
          placeholder="Enter package name"
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddPackage}
          className="px-1 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {packages.map((pkg) => (
          <div key={pkg} className="flex items-center justify-between bg-white p-2 rounded-md">
            <span>{pkg}</span>
            <button
              onClick={() => setPackages(packages.filter((p) => p !== pkg))}
              className="text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageManager;