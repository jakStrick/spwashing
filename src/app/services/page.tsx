// Services Page
export default function ServicesPage() {
  const services = [
    {
      title: "House Washing",
      description:
        "Enhance your home's beauty and prolong its lifespan with our gentle, yet effective house washing service.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    },
    {
      title: "Driveway Cleaning",
      description:
        "Restore your driveway to pristine condition with our powerful concrete cleaning methods.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    },
    {
      title: "Roof Treatment",
      description:
        "Remove moss, mold, and grime to restore your roof's health and appearance.",
      img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=300&fit=crop",
    },
    {
      title: "Deck & Fence Cleaning",
      description:
        "Revive your outdoor wooden structures with our specialized cleaning process.",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    },
    {
      title: "Commercial Cleaning",
      description:
        "Professional cleaning services for businesses, parking lots, and buildings.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      title: "Concrete Sealing",
      description:
        "Protect your concrete surfaces from weathering and extend their lifespan.",
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop",
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Work Gallery
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Real transformations from properties just like yours
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
