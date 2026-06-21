import Image from "next/image";

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
      title: "Deck & Fence Cleaning",
      description:
        "Revive your outdoor wooden structures with our specialized cleaning process.",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    },
    {
      title: "Concrete Sealing",
      description:
        "Protect your concrete surfaces from weathering and extend their lifespan.",
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
    },
    {
      title: "Outdoor Siding",
      description:
        "Restore your home's siding to like-new condition, removing mold, mildew, and years of buildup safely.",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      title: "Vehicle Washing",
      description:
        "Professional exterior washing for cars, trucks, RVs, and fleet vehicles using safe, low-pressure techniques.",
      img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&h=300&fit=crop",
    },
  ];

  const galleryImgBefore = [
    {
      src: "/images/portfolio/spw11.webp",
      alt: "Strickland pressure washing before 11",
    },
    {
      src: "/images/portfolio/spw5.webp",
      alt: "Strickland pressure washing before 1",
    },
    {
      src: "/images/portfolio/spw6.webp",
      alt: "Strickland pressure washing before 6",
    },
    {
      src: "/images/portfolio/spw13.webp",
      alt: "Strickland pressure washing before 12",
    },
  ];

  const galleryImgAfter: { src: string; alt: string }[] = [
    {
      src: "/images/portfolio/spw10.webp",
      alt: "Strickland pressure washing before 10",
    },
    {
      src: "/images/portfolio/spw7.webp",
      alt: "Strickland pressure washing before 2",
    },
    {
      src: "/images/portfolio/spw3.webp",
      alt: "Strickland pressure washing before 3",
    },
    {
      src: "/images/portfolio/spw12.webp",
      alt: "Strickland pressure washing before 13",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={300}
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

        {/* Before & After Gallery */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
            Before &amp; After Gallery
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Real transformations from properties just like yours
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {galleryImgBefore.map((before, index) => {
              const after = galleryImgAfter[index];
              return (
                <div
                  key={index}
                  className="rounded-lg shadow-md bg-white"
                >
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    {/* Before */}
                    <div className="relative">
                      <span className="absolute top-2 left-2 z-10 bg-blue-900 text-white text-xs font-bold px-2 py-1 rounded">
                        BEFORE
                      </span>
                      <Image
                        src={before.src}
                        alt={before.alt}
                        width={600}
                        height={450}
                        className="w-full h-44 object-cover rounded-l-lg transition-transform duration-300 ease-in-out hover:scale-[2] hover:z-50 relative"
                      />
                    </div>
                    {/* After */}
                    <div className="relative">
                      <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                        AFTER
                      </span>
                      {after ? (
                        <Image
                          src={after.src}
                          alt={after.alt}
                          width={600}
                          height={450}
                          className="w-full h-44 object-cover rounded-r-lg transition-transform duration-300 ease-in-out hover:scale-[2] hover:z-50 relative"
                        />
                      ) : (
                        <div className="h-44 bg-gray-100 flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                          <p className="text-xs text-gray-400 font-medium text-center px-3">
                            Photo coming soon
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
