/* eslint-disable no-unused-vars */
import React from "react";

const properties = [
  {
    id: 1,
    name: "Luxury Villa in Mumbai",
    price: "₹18,50,00,000",
    location: "Mumbai, Maharashtra",
    image: "https://server.ekostay.com/public/property_images/64704f1cbc55d_AnyConv.webp",
  },
  {
    id: 2,
    name: "Modern Apartment in Bangalore",
    price: "₹9,50,00,000",
    location: "Bangalore, Karnataka",
    image: "https://luxuryproperties.in/wp-content/uploads/2019/11/SOBHA-HRC-PRISTINE-Elevation.jpg",
  },
  {
    id: 3,
    name: "Beach House in Goa",
    price: "₹15,00,00,000",
    location: "Goa",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/526576344.jpg?k=8943dd6658dd1cd1bc18179d34f6056a78e1b8099a496c40ad52f2d9dc85a8d0&o=&hp=1",
  },
  {
    id: 4,
    name: "Penthouse in Delhi",
    price: "₹22,00,00,000",
    location: "New Delhi",
    image: "https://assets.savills.com/properties/IN310130901/Facade1_l_lis.jpg",
  },
];

export default function RealEstateLanding() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-10 flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20220924/pngtree-abstract-white-gray-gradient-green-background-designed-as-text-backdrop-product-image_1465635.jpg')",
      }}
    >
      <div className="text-center text-white mb-8">
        <h1 className="text-5xl font-bold drop-shadow-lg text-black">Find Your Dream Home</h1>
        <p className="text-lg mt-2 drop-shadow text-black">Discover the best properties for sale and rent.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {properties.map((property) => (
          <div key={property.id} className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition hover:scale-105">
            <img src={property.image} alt={property.name} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{property.name}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-green-600 font-bold mt-2">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
