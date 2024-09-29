import { priceRanges } from "@/app/page";

export const PriceRangeFilter = ({ filters, setFilters }) => (
    <div className="mb-4">
      <label htmlFor="priceRange" className="block mb-2">Price Range</label>
      <select
        id="priceRange"
        value={filters.priceRange.label}
        onChange={(e) => {
          const selectedRange = priceRanges.find(range => range.label === e.target.value);
          setFilters({ ...filters, priceRange: selectedRange || priceRanges[0] });
        }}
        className="border p-2 w-full"
      >
        {priceRanges.map((range, index) => (
          <option key={index} value={range.label}>{range.label}</option>
        ))}
      </select>
    </div>
  );
  