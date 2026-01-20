import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import useTalents from '../hooks/useTalents';
import SearchInput from '../components/SearchInput';
import TalentCard from '../components/TalentCard';
import Pagination from '../components/Pagination';
import SkeletonCard from '../components/SkeletonCard';

const ITEMS_PER_PAGE = 10;

const Talents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ role: '' });

  const debouncedSearch = useDebounce(search, 500);

  const { talents, total, loading, error } = useTalents(
    currentPage,
    ITEMS_PER_PAGE,
    debouncedSearch,
    filters
  );

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Talents</h1>

      {/* Search input */}
      <SearchInput
        value={search}
        onChange={(val) => {
          setSearch(val);
          setCurrentPage(1);
        }}
      />

      {/* Role filter */}
      <select
        className="border rounded p-2 mt-4"
        value={filters.role}
        onChange={(e) => {
          setFilters({ ...filters, role: e.target.value });
          setCurrentPage(1); // reset page
        }}
      >
        <option value="">All Roles</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Fullstack Developer">Fullstack Developer</option>
        <option value="Designer">Designer</option>
      </select>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {!loading && talents.length === 0 && (
        <p className="mt-4 text-gray-500">No talents found.</p>
      )}

      {!loading && talents.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {talents.map((talent) => (
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
