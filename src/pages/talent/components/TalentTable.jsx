import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import useTalents from '../hooks/useTalents';
import SearchInput from '../components/SearchInput';
import TalentCard from '../components/TalentCard';
import Pagination from '../components/Pagination';
import SkeletonCard from '../components/SkeletonCard';
import FilterSelect from '../components/FilterSelect';

const ITEMS_PER_PAGE = 10;

const ROLE_OPTIONS = [
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
  'Designer',
];

const TalentTable = () => {
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
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Talents</h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <SearchInput
          value={search}
          onChange={(val) => {
            setSearch(val);
            setCurrentPage(1);
          }}
        />

        <FilterSelect
          label="Role"
          value={filters.role}
          options={ROLE_OPTIONS}
          onChange={(val) => {
            setFilters({ ...filters, role: val });
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Talent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {loading &&
          Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}

        {error && <p className="text-red-500 col-span-full">{error}</p>}

        {!loading && talents.length === 0 && (
          <p className="text-gray-500 col-span-full">No talents found.</p>
        )}

        {!loading &&
          talents.map((talent) => <TalentCard key={talent.id} talent={talent} />)}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            primaryColor="purple"
          />
        </div>
      )}
    </div>
  );
};

export default TalentTable;
