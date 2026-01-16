import { useState } from 'react';
import Talent from '../page/Talent';
import SearchInput from '../components/SearchInput';
import TalentCard from './TalentCard';

const TalentTable = () => {
  const { talents, loading, error } = Talent();
  const [search, setSearch] = useState('');

  const filteredTalents = talents.filter((talent) =>
    talent.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
        <div className='flex items-center'>
 <h1 className="text-2xl font-bold mb-4 bg-purple-500 w-44 rounded-xl text-center p-2 text-white ">Hire Talents</h1>
        </div>
     

     <div className='bg-white p-12 rounded-2xl'>

<SearchInput value={search} onChange={setSearch} />

      {loading && <p className="mt-4">Loading talents...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {!loading && filteredTalents.length === 0 && (
        <p className="mt-4 text-gray-500">No talents found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {filteredTalents.map((talent) => (
          <TalentCard key={talent.id} talent={talent} />
        ))}
      </div>

     </div>

      
    </div>
  );
};

export default TalentTable;
