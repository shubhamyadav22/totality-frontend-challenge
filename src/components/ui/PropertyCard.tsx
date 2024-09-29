import { Property } from "../../../data/properties";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-2">{property.title}</h3>
      <p className="text-gray-600">{property.description}</p>
      <span className="block mt-2 text-blue-500 font-bold">₹{property.price} / Night</span>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded-md" >
        Book Now
      </button>
    </div>
  );
};
