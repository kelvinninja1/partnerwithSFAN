export default function CallToAction() {
  return (
    <section className="text-gray-600 body-font bg-blue-800">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="sm:text-5xl text-2xl text-blue-300 font-medium title-font mb-2 md:w-4/5">
          Transforming Education
        </h2>
        <div className="">
          <p className="leading-relaxed text-base text-white">
            Industry analysis has shown that, on average, it takes university
            graduates in Africa six years to find their first jobs. But on the
            demand side, even when jobs are available, employers still struggle
            to find early career professionals that have the skills they need
            for such roles. SFAN brings the needed fresh perspectives to the
            scene by equipping entry-level job seekers with requisite job
            readiness skills and helping employers find the brightest talents
            across the continent. We also help entrepreneurs to build businesses
            that thrive. We do the heavy lifting, you get 10x results without
            breaking the bank.
          </p>
          <div className="flex md:mt-4 mt-6">
            <a
              className="inline-flex text-indigo-800 bg-indigo-100 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-800 hover:text-indigo-100 rounded"
              href="https://www.sfanonline.org/about"
            >
              Find out more
            </a>
            <a
              className="text-indigo-100 inline-flex items-center ml-4"
              href="https://www.sfanonline.org/contact"
            >
              Talk to us
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
        </div>
      </div>
    </section>
  );
}
