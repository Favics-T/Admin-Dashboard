import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useTalents from "../hooks/useTalents";
import useDebounce from "../hooks/useDebounce";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import SkeletonCard from "./SkeletonCard";
import TalentTable from "./TalentTable";

const ITEMS_PER_PAGE = 10;

const Talents = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const searchFromUrl = searchParams.get("search") || "";
  const sortByFromUrl = searchParams.get("sortBy") || "";
  const orderFromUrl = searchParams.get("order") || "asc";

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

  useEffect(() => {
    const nextParams = {};
    if (currentPage > 1) nextParams.page = String(currentPage);
    if (debouncedSearch) nextParams.search = debouncedSearch;
    if (sortBy) nextParams.sortBy = sortBy;
    if (order !== "asc") nextParams.order = order;
    setSearchParams(nextParams);
  }, [currentPage, debouncedSearch, sortBy, order, setSearchParams]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, sortBy, order]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }

    setSortBy(column);
    setOrder("asc");
  };

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Talents</h1>

      <SearchInput value={search} onChange={setSearch} />

      {loading && (
        <div className="mt-6">
          <SkeletonCard />
        </div>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <TalentTable talents={talents} sortBy={sortBy} order={order} onSort={handleSort} />

          <div className="mt-4">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </>
      )}
    </div>
  );
};

export default Talents;
