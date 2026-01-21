import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import useTalents from '../hooks/useTalents';
import SearchInput from '../components/SearchInput';
import TalentCard from '../components/TalentCard';
import Pagination from '../components/Pagination';
import SkeletonCard from '../components/SkeletonCard';
import FilterSelect from '../components/FilterSelect';

const ITEMS_PER_PAGE = 10;

const roleOptions = [
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
  'Designer',
];

const locationOptions = ['Lagos', 'Abuja', 'Remote'];
const experienceOptions = ['Junior', 'Mid', 'Senior'];

const Talents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    role: '',
    location: '',
    experience: '',
  });

  const debouncedSearch = useDebounce(search, 500);

  const { talents, total, loading, error } = useTalents(
    currentPage,
    ITEMS_PER_PAGE,
    debouncedSearch,
    filters
  );

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Talents</h1>

      <SearchInput
        value={search}
        onChange={(val) => {
          setSearch(val);
          setCurrentPage(1);
        }}
      />

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <FilterSelect
          label="Role"
          value={filters.role}
          options={roleOptions}
          onChange={(val) => updateFilter('role', val)}
        />
        <FilterSelect
          label="Location"
          value={filters.location}
          options={locationOptions}
          onChange={(val) => updateFilter('location', val)}
        />
        <FilterSelect
          label="Experience"
          value={filters.experience}
          options={experienceOptions}
          onChange={(val) => updateFilter('experience', val)}
        />
      </div>

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
