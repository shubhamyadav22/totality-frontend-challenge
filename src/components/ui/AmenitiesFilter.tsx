export const AmenitiesFilter = ({ filters, setFilters }) => {
    const amenitiesList = ['WiFi', 'Pool', 'Air Conditioning', 'Gym Access', 'Pet Friendly'];
  
    const handleAmenityChange = (amenity: string) => {
      const updatedAmenities = filters.amenities.includes(amenity)
        ? filters.amenities.filter((a) => a !== amenity)
        : [...filters.amenities, amenity];
  
      setFilters({ ...filters, amenities: updatedAmenities });
    };
  
    return (
      <div className="mb-4">
        <label htmlFor="amenities" className="block mb-2">Amenities</label>
        {amenitiesList.map((amenity) => (
          <div key={amenity} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={amenity}
              value={amenity}
              checked={filters.amenities.includes(amenity)}
              onChange={() => handleAmenityChange(amenity)}
              className="mr-2"
            />
            <label htmlFor={amenity}>{amenity}</label>
          </div>
        ))}
      </div>
    );
  };
  