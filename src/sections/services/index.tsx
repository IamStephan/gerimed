import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ServicesSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            First-class <span className="text-green-600">services</span> to
            choose from
          </h2>
        </div>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        <div>
          <StaticImage
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            placeholder="blurred"
            src="../../assets/images/homepage/service-1.jpg"
            alt="Nurse taking care of an elderly woman"
            style={{
              filter: "brightness(0.75)",
            }}
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Frail Care
          </p>
          <p className="mb-2 text-gray-700 line-clamp-3">
            Frail care is the care you need when you are no longer able to look
            after yourself because of physical frailty or mental incapacity.
          </p>
          <Link
            to="/services/#frail-care"
            aria-label=""
            className="inline-flex items-center text-sm font-semibold text-green-600 transition-colors duration-200 hover:text-green-800"
          >
            Learn more
          </Link>
        </div>
        <div className="relative">
          <StaticImage
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            placeholder="blurred"
            src="../../assets/images/homepage/service-2.jpg"
            alt="Masks and sanitizers on a white table"
            style={{
              filter: "brightness(0.75)",
            }}
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Sub-acute Care / Step Down
          </p>
          <p className="mb-2 text-gray-700 line-clamp-3">
            Merging the sophisticated technology of a hospital and the
            efficiency of a skilled nursing facility to reduce the cost of
            services while maintaining quality of care.
          </p>
          <Link
            to="/services/#step-down"
            aria-label=""
            className="inline-flex items-center text-sm font-semibold text-green-600 transition-colors duration-200 hover:text-green-800"
          >
            Learn more
          </Link>
        </div>
        <div>
          <StaticImage
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            placeholder="blurred"
            src="../../assets/images/homepage/service-3.jpg"
            objectPosition="top"
            alt="An elderly man exiting his home"
            style={{
              filter: "brightness(0.75)",
            }}
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Assisted Living Apartments
          </p>
          <p className="mb-2 text-gray-700 line-clamp-3">
            These apartments are ideal if you want your freedom but still need
            some extra care when needed.
          </p>
          <Link
            to="/services/#apartments"
            aria-label=""
            className="inline-flex items-center text-sm font-semibold text-green-600 transition-colors duration-200 hover:text-green-800"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
