import { useState } from 'react';
// import useTalents from '../hooks/useTalents';
import Talent from '../page/Talent';
// import useDebounce from '../hooks/useDebounce';
import useDebounce from '../hook/useDebounce';
import SearchInput from '../components/SearchInput';
import TalentCard from '../components/TalentCard';
import Pagination from '../components/Pagination';
import SkeletonCard from '../components/SkeletonCard';

const ITEMS_PER_PAGE = 10;

const Talents = () => {
  const { talents, loading, error } = Talent();
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearch = useDebounce(search);

  const filteredTalents = talents.filter((talent) =>
    talent.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // Pagination 
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTalents = filteredTalents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredTalents.length / ITEMS_PER_PAGE);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Talents</h1>

      <SearchInput value={search} onChange={setSearch} />

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {!loading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {paginatedTalents.map((talent) => (
              <TalentCard key={talent.id} talent={talent} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Talents;
