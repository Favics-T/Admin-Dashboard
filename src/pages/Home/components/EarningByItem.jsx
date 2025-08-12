
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Card from '../../../components/Card';

const items = [
  { name: 'Bento 3D Kit', type: 'Illustration', color: 'bg-purple-100', iconColor: 'bg-purple-500' },
  { name: 'Bento 3D Kit', type: 'Coded Template', color: 'bg-green-100', iconColor: 'bg-green-500' },
  { name: 'Bento 3D Kit', type: 'Illustration', color: 'bg-red-100', iconColor: 'bg-red-500' },
];

const EarningByItem = () => {
  return (
    
    <div>
      <Card>
        <div className="bg-white  rounded-lg  h-96 p-4 ">
      <h2 className="text-sm font-semibold mb-4">Earnings by item</h2>
      <div className="flex flex-col gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`${item.color} p-2 rounded-lg`}>
                <div className={`${item.iconColor} w-5 h-5 rounded`}></div>
              </div>
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">{item.type}</p>
              </div>
            </div> 
            <ChevronRight size={16} className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
      </Card>
    </div>
  );
};

export default EarningByItem;
