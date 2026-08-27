import Image from "next/image";

// Services Page
export default function ServicesPage() {
  const services = [
    {
      title: "House Washing",
      description:
        "Enhance your home's beauty and prolong its lifespan with our gentle, yet effective house washing service.",
      img: "images/portfolio/house.webp",
    },
    {
      title: "Driveway Cleaning",
      description:
        "Restore your driveway to pristine condition with our powerful concrete cleaning methods.",
      img: "images/portfolio/driveway.webp",
    },
    {
      title: "Fence, Deck & Patio Cleaning",
      description:
        "Revive your outdoor wooden structures with our specialized cleaning process.",
      img: "images/portfolio/fence.webp",
    },
    {
      title: "Concrete Sealing",
      description:
        "Protect your concrete surfaces from weathering and extend their lifespan.",
      img: "images/portfolio/sealing.webp",
    },
    {
      title: "Outdoor Siding",
      description:
        "Restore your home's siding to like-new condition, removing mold, mildew, and years of buildup safely.",
      img: "images/portfolio/spw2.webp",
    },
    {
      title: "Vehicle Washing",
      description:
        "Professional exterior washing for cars, trucks, RVs, and fleet vehicles using safe, low-pressure techniques.",
      img: "images/portfolio/truck.webp",
    },
  ];

  const galleryImgBefore = [
    {
      src: "/images/portfolio/spw11.webp",
      alt: "Dirty steps made of red brick.",
    },
    {
      src: "/images/portfolio/spw5.webp",
      alt: "Dirty patio made of red brick.",
    },
    {
      src: "/images/portfolio/spw6.webp",
      alt: "Dirty cement driveway.",
    },
    {
      src: "/images/portfolio/spw13.webp",
      alt: "Dirty cement side of house.",
    },
    {
      src: "/images/portfolio/spw14.webp",
      alt: "Dirty, mossy retaining wall.",
    },
  ];

  const galleryImgAfter: { src: string; alt: string }[] = [
    {
      src: "/images/portfolio/spw10.webp",
      alt: "Clean steps made of red brick.",
    },
    {
      src: "/images/portfolio/spw7.webp",
      alt: "Clean patio made of red brick.",
    },
    {
      src: "/images/portfolio/spw3.webp",
      alt: "Clean cement driveway.",
    },
    {
      src: "/images/portfolio/spw12.webp",
      alt: "Clean cement side of house.",
    },
    {
      src: "/images/portfolio/spw15.webp",
      alt: "Clean, moss-free retaining wall.",
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
                <div key={index} className="rounded-lg shadow-md bg-white">
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
