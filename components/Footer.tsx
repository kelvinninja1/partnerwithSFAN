export default function Footer() {
  const Links = {
    action: [
      {
        title: "Learn More",
        url: "https://www.sfanonline.org/about",
      },
      {
        title: "Talk to Us",
        url: "https://www.sfanonline.org/contact",
      },
      {
        title: "Email Us",
        url: "mailto:info@sfanonline.org",
      },
    ],
    navigation: [
      {
        title: "Venture Studio",
        url: "https://www.sfanonline.org/venture-studio",
      },
      {
        title: "ReadyForWork",
        url: "https://readyforwork.africa/",
      },
      {
        title: "Events",
        url: "https://www.sfanonline.org/events",
      },
      {
        title: "Media",
        url: "https://www.sfanonline.org/media",
      },
    ],
    quickLinks: [
      {
        title: "#StarsWeAre",
        url: "https://www.sfanonline.org/join-us",
      },
      {
        title: "Resume Service",
        url: "https://www.sfanonline.org/resume",
      },
      {
        title: "Help Center",
        url: "https://www.sfanonline.org/contact",
      },
      {
        title: "Careers",
        url: "https://www.sfanonline.org/careers",
      },
    ],
  };
  return (
    <footer className="text-gray-600 body-font bg-gradient-to-t from-blue-200 to-blue-50">
      {/*<hr className="border-b border-gray-200" />*/}
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              className="h-8 w-auto sm:h-10 bg-gradient-to-tl from-blue-500 via-blue-300 to-blue-200 rounded-full"
              src="https://www.sfanonline.org/static/media/sfan.429fc475.png"
              alt={"logo"}
            />
            <span className="ml-3 text-xl">Stars of All Nations</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            SFAN is unlocking the potential of Africa&apos;s young geniuses by
            helping them turn their passion into businesses and fulfilling
            careers.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-2/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Get in touch
            </h2>
            <nav className="list-none mb-10">
              {Links.action.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.url}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Navigation
            </h2>
            <nav className="list-none mb-10">
              {Links.navigation.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.url}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              {Links.quickLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.url}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2022 SFAN —
            <a
              href="https://www.linkedin.com/in/kelvin-morrison-48abba193/"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Kelvin Morrison - Senior Software Engineer
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              className="ml-3 text-gray-500"
              href="https://www.linkedin.com/in/kelvin-morrison-48abba193/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </a>

            <a
              className="ml-3 text-gray-500"
              href="mailto:ikelvinstudios@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/*Gmail SVG*/}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://twitter.com/ikelvinTweet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
