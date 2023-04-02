import { MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';

export function Search({ value, onChange }) {
  return (
    <form className="mx-12 hidden md:block">
      <div className="flex h-10 max-w-[14rem] items-center rounded-xl bg-grey-light px-3 py-[10px]">
        <input
          type="text"
          id="search"
          value={value}
          className="w-full bg-transparent text-sm focus:outline-none"
          placeholder="Search"
          onChange={onChange}
        />
        <label htmlFor="search">
          <SearchIcon className="h-4 w-4 text-grey" />
        </label>
      </div>
    </form>
  );
}
