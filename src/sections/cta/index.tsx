import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const CTASection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <Link
            to="/contact"
            title="Contact us"
            aria-label="Contact us"
            className="flex items-center justify-center w-16 h-16 mb-4 bg-white border rounded-full"
          >
            <svg
              className="text-green-800 w-9 h-9"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                fill="currentColor"
              />
              <path
                d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                fill="currentColor"
              />
              <path
                d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Contact us and start
              <br className="hidden md:block" />
              your next{" "}
              <span className="inline-block text-red-700">journey</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Gerimed specializes in elderly health care giving you peace of
              mind. We are located in Langebaan and in Kleinmond giving you the
              option of choosing the closest home. Contact us for more
              information.
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-green-600 rounded hover:bg-green-800 focus:shadow-outline focus:outline-none"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <StaticImage
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              placeholder="blurred"
              src="../../assets/images/homepage/hero-1.jpg"
              style={{
                filter: "brightness(0.75)",
              }}
              alt="Young woman teaching an elder woman technology"
            />
            <StaticImage
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              placeholder="blurred"
              src="../../assets/images/homepage/cta-4.jpg"
              style={{
                filter: "brightness(0.75)",
              }}
              alt="Two elederly people embracing each other"
            />
          </div>
          <div className="px-3">
            <StaticImage
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              placeholder="blurred"
              src="../../assets/images/homepage/cta-3.jpg"
              style={{
                filter: "brightness(0.75)",
              }}
              alt="A young person embracing her mother"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
