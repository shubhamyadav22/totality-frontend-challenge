'use client'

import { useState, useEffect } from 'react';
import { properties as allProperties } from '../../data/properties';
import { PropertyCard } from '../components/ui/PropertyCard';
import { LocationFilter} from '../components/ui/LocationFilter';
import { AmenitiesFilter } from '@/components/ui/AmenitiesFilter';
import { BedroomsFilter } from '@/components/ui/BedroomsFilter';
import { PriceRangeFilter } from '@/components/ui/PriceRangeFilter';

// Define price ranges for the filter
 export const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under ₹10000', min: 0, max: 10000 },
  { label: '₹10000 - ₹20000', min: 10000, max: 20000 },
  { label: '₹20000 - ₹30000', min: 20000, max: 30000 },
  { label: 'Above ₹30000', min: 30000, max: Infinity },
];

// Example property data
const properties = [
  { id: '1', name: 'Beach House', price: 200 },
  { id: '2', name: 'Mountain Cabin', price: 150 },
];


const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Available Properties</h1>
      <PropertyList properties={properties} />
      <Cart />
    </div>
  );
};

const PropertyListingsPage = () => {
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const [filters, setFilters] = useState({
    location: '',
    priceRange: priceRanges[0],
    bedrooms: 0,
    amenities: [] as string[],
  });

  // Update the displayed properties based on the filters
  useEffect(() => {
    let filtered = allProperties;

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (property) =>
        property.price >= filters.priceRange.min &&
        property.price <= filters.priceRange.max
    );

    // Filter by bedrooms
    if (filters.bedrooms) {
      filtered = filtered.filter((property) => property.bedrooms >= filters.bedrooms);
    }

    // Filter by amenities
    if (filters.amenities.length > 0) {
      filtered = filtered.filter((property) =>
        filters.amenities.every((amenity) => property.amenities.includes(amenity))
      );
    }

    setFilteredProperties(filtered);
  }, [filters]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4" style={{color: "red"}}><b>Property Listings</b></h1>

      {/* Filters Section */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <LocationFilter filters={filters} setFilters={setFilters} />
        <PriceRangeFilter filters={filters} setFilters={setFilters} />
        <BedroomsFilter filters={filters} setFilters={setFilters} />
        <AmenitiesFilter filters={filters} setFilters={setFilters} />
      </div>

      {/* Display the filtered properties */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>No properties match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyListingsPage;