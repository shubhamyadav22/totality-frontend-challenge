// Define a type for Property


export type Property = {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
  bedrooms: number;
  amenities: string[];
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Hotel in Rajasthan",
    description: "A modern apartment located in the pink city Jaipur with stunning views.",
    image: "/assets/pexels-ashwani-17911338.jpg",
    location: "India",
    price: 20000,
    bedrooms: 3,
    amenities: ["WiFi", "Air Conditioning", "Pool","Pet Friendly"],
  },
  {
    id: 2,
    title: "Luxury Hotel in Jaipur(Hotel Ramgarh)",
    description: "A modern apartment located in the pink city Jaipur and Best for the Destination Wedding.",
    image: "/assets/Hotel Rambagh Palace.jpg",
    location: "India",
    price: 45000,
    bedrooms: 2,
    amenities: ["WiFi", "Air Conditioning", "Pool","Gym Access","Pet Friendly"],
  },     
  {
    id: 3,
    title: "Luxury Hotel in Mumbai (Hotel Taj)",
    description: "A modern apartment located in the City Of Dreams Mumbai with Five Star Ratings.",
    image: "/assets/Hotel Taj.jpg",
    location: "India",
    price: 35000,
    bedrooms: 3,
    amenities: ["WiFi", "Air Conditioning", "Pool","Gym Access"],
  },
    {
    id: 4,
    title: "Luxury Hotel in Delhi (Leela Palace)",
    description: "Best Hotel in the Capital of India.",
    image: "/assets/Leela Palace.jpg",
    location: "India",
    price: 25000,
    bedrooms: 4,
    amenities: ["WiFi", "Air Conditioning", "Pool","Pet Friendly"],
  },
  {
    id: 5,
      title: "Luxury Apartment in Downtown",
      description: "A modern apartment located in the heart of the city with stunning views.",
      image: "/assets/pexels-anasjawed-1697076.jpg",
      location: "New York ",
      price: 10000,
      bedrooms: 2,
      amenities: ["WiFi", "Air Conditioning", "Pool","Gym Access"],
    },
    {
      id: 6,
      title: "Cozy Cottage Near the Beach",
      description: "A charming cottage just minutes away from the beach, perfect for a quiet getaway.",
      image: "/assets/pexels-jose-rodriguez-ortega-2189823-28583830.jpg",
      location: "US",
      price: 15000,
      bedrooms: 3,
      amenities: ["WiFi", "Pet Friendly", "Fireplace"],
    },
    {
      id: 7,
      title: "Spacious Villa with Private Pool",
      description: "A luxurious villa featuring a private pool, perfect for family vacations.",
      image: "/assets/pexels-nien-tran-dinh-788736-1654748.jpg",
      location: "New York",
      price: 45000,
      bedrooms: 4,
      amenities: ["WiFi", "Pool", "BBQ Grill"],
    },
    {
      id: 8,
      title: "Modern Loft with Skyline Views",
      description: "A beautiful loft apartment with floor-to-ceiling windows offering panoramic city views.",
      image: "/assets/pexels-thorsten-technoman-109353-338504.jpg",
      location: "UK",
      price: 50000,
      bedrooms: 2,
      amenities: ["WiFi", "Gym Access", "Rooftop Lounge"],
    },
    {
      id: 9,
      title: "Rustic Cabin in the Mountains",
      description: "A cozy cabin retreat surrounded by nature, perfect for outdoor enthusiasts.",
      image: "/assets/pexels-vince-2363808.jpg",
      location: "US",
      price: 23000,
      bedrooms: 1,
      amenities: ["WiFi", "Hot Tub", "Hiking Trails"],
    },
    {
      id: 10,
      title: "Luxury Hotel in Dubai",
      description: "A modern Hotel located in the Dubai With Seven Star Ratings.",
      image: "/assets/dubai hotel.jpg",
      location: "Dubai",
      price: 37000,
      bedrooms: 3,
      amenities: ["WiFi", "Air Conditioning", "Pool","Gym Access","Pet Friendly"],
    },
    {
      id: 11,
      title: "Luxury Hotel in Lucknow (Hotel Taj)",
      description: "A modern apartment located in the City Of Nawabs Lucknow with Five Star Ratings.",
      image: "/assets/Taj Lucknow.jpg",
      location: "India",
      price: 9000,
      bedrooms: 2,
      amenities: ["WiFi", "Air Conditioning", "Pool","Gym Access"],
    },
    {
      id: 12,
      title: "Luxury Hotel in Lucknow (Hotel Novotel)",
      description: "A modern apartment located in the City Of Nawabs Lucknow with Five Star Ratings.",
      image: "/assets/Novotel.jpeg",
      location: "India",
      price: 7500,
      bedrooms: 1,
      amenities: ["WiFi", "Air Conditioning", "Pool","Gym Access"],
    },
  ];
  