const brands = [
  { name: "Chargeflow", src: "/brands/chargeflow.png" },
  { name: "Ashoka", src: "/brands/ashoka.png" },
  { name: "British Council", src: "/brands/britishcouncil.png" },
  { name: "Ecobank", src: "/brands/ecobank.png" },
  { name: "Village Capital", src: "/brands/villagecapital.png" },
];

export default function TrustedBrands() {
  return (
    <div className="container mx-auto pt-16">
      <h3 className="text-center text-3xl font-bold">
        The Best Brands Trust Us
      </h3>
      <div className="xl:py-8 lg:py-16 md:py-8 sm:py-8 px-15 flex flex-wrap">
        {brands.map((brand, index) => (
          <div
            className="w-6/12 xl:w-1/5 lg:w-1/5 md:w-1/5 flex justify-center xl:pt-10 items-center"
            key={index}
          >
            <img
              src={brand.src}
              alt={brand.name}
              className="focus:outline-none p-4"
              role="img"
              tabIndex={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
