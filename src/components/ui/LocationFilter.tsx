export const LocationFilter = ({ filters, setFilters }) => (
    <div className="mb-4">
      <label htmlFor="location" className="block mb-2">Location</label>
      <input
        type="text"
        id="location"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        className="border p-2 w-full"
        placeholder="Enter location"
      />
    </div>
  );
  