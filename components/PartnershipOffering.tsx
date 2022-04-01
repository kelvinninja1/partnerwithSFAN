export default function PartnershipOffering() {
  const offerings = [
    {
      caption: "Make an impact that matters",
      description:
        "Join us to co-create EPIC events and programs in line with your corporate goals and values, and help young people live to their best potentials.",
    },
    {
      caption: "Scale Corporate Innovations",
      description:
        "Partnering with us gives you an opportunity to elevate your position in the innovation ecosystem and get premium brand exposure while solving real problems.",
    },
    {
      caption: "Access Right-Type Audience",
      description:
        "SFAN has access to an impressive network of young people. By partnering with us, you can obtain actionable data, exclusive insights, and talents for corporate transformation.",
    },
    {
      caption: "Build a learning organisation",
      description:
        "Partnering with us gives you numerous opportunities to help your employees develop their skills, enrich their jobs, and enhance their profile.",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            THE EXCEPTIONAL PARTNERSHIP OFFERING
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Working with <span className="text-blue-600">SFAN</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            There are two main ways by which cooperates and other stakeholders
            can gain exceptional value from partnering with us. Explore the
            options below and see how you can get involved in our global
            movement.
          </p>
        </div>
        <div className="bg-gradient-to-b from-blue-100 to-white ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-100 bg-blue-400 p-5">
            Corporate Partnerships
          </h1>
          <p className="mx-auto leading-relaxed text-base px-5 mb-10">
            We&apos;ve developed a range of investment models to cater to the
            different priorities and strategic needs of corporate organisation
            and government entities. From investment into SFAN, Event Production
            Collaboration, to Venture Building with SFAN in the corporates&apos;
            specific sector or market.
          </p>
          <div className="flex flex-wrap">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
              >
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  {item.caption}
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  {item.description}
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-8">
            <a
              href="mailto:info@sfanonline.org"
              className="text-indigo-100 bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-100 hover:text-indigo-600 rounded text-lg italic mt-8"
            >
              Let&apos;s do this
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
