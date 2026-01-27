import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useTalents from '../hooks/useDebounce';
import TalentTable from './TalentTable';

const ITEMS_PER_PAGE = 10;

const Talents = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromUrl = Number(searchParams.get('page')) || 1;
  const searchFromUrl = searchParams.get('search') || '';
  const sortByFromUrl = searchParams.get('sortBy') || '';
  const orderFromUrl = searchParams.get('order') || 'asc';

  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [search, setSearch] = useState(searchFromUrl);
  const [sortBy, setSortBy] = useState(sortByFromUrl);
  const [order, setOrder] = useState(orderFromUrl);

  const debouncedSearch = useDebounce(search);

  const { talents, total, loading, error } = useTalents(
    currentPage,
    ITEMS_PER_PAGE,
    debouncedSearch,
    sortBy,
    order
  );

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  // Sync state → URL
  useEffect(() => {
    setSearchParams({
      page: currentPage,
      search: debouncedSearch,
      sortBy,
      order,
    });
  }, [currentPage, debouncedSearch, sortBy, order, setSearchParams]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, sortBy, order]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(column);
      setOrder('asc');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Talents</h1>

      <SearchInput value={search} onChange={setSearch} />

      {loading && (
        <div className="mt-6">
          <SkeletonCard />
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {!loading && (
        <>
          <TalentTable
            talents={talents}
            sortBy={sortBy}
            order={order}
            onSort={handleSort}
          />

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
