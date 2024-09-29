export const BedroomsFilter = ({ filters, setFilters }) => (
    <div className="mb-4">
      <label htmlFor="bedrooms" className="block mb-2">Minimum Bedrooms</label>
      <input
        type="number"
        id="bedrooms"
        value={filters.bedrooms}
        onChange={(e) => setFilters({ ...filters, bedrooms: Number(e.target.value) })}
        className="border p-2 w-full"
        min="0"
        placeholder="Enter number of bedrooms"
      />
    </div>
  );
  