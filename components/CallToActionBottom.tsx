export default function CallToActionBottom() {
  return (
    <section className="text-gray-600 body-font bg-call-to-action">
      <div className="container mx-auto flex px-5 py-15 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font lg:text-6xl sm:text-4xl text-3xl mb-4 text-blue-300 font-medium title-font">
            Partner for Progress
          </h1>
          <p className="mb-8 leading-relaxed text-blue-200">
            If you&apos;d like to partner with us to scale our youth development
            efforts, enhance your productivity or re-engineer your business
            process, reach out to us. We&apos;ll walk you through various
            partnership and investment options for increased ROI.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex text-indigo-100 bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-100 hover:text-indigo-600 rounded text-lg"
              href="https://www.sfanonline.org/contact"
            >
              Let&apos;s Talk
            </a>
            <a
              className="ml-4 inline-flex text-indigo-600 bg-indigo-100 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-indigo-100 rounded text-lg"
              href="mailto:info@sfanonline.org"
            >
              Email us
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-0 m-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://www.sfanonline.org/static/media/king.bc38cf05.jpg"
          />
        </div>
      </div>
    </section>
  );
}
