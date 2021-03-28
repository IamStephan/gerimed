import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ServicesApartmentsSection = () => {
  return (
    <section
      id="apartments"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Assisted Living Apartments
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            These apartments are ideal if you want your freedom but still need
            some extra care when needed.
          </p>
        </div>
        <div className="mb-4 transition-shadow duration-300 lg:mb-6">
          <StaticImage
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="../../assets/images/homepage/service-3.jpg"
            placeholder="blurred"
            alt="An elderly man exiting his home"
            style={{
              filter: "brightness(0.75)",
            }}
          />
        </div>
        <ul className="max-w-xl mb-4 text-base text-left text-gray-700 list-disc sm:mx-auto">
          <li>
            Three meals per day, 7 days per week, to be served in the dining
            room or in the residents suite at the discretion of the nursing
            staff and management.
          </li>
          <li>
            5kg of personal laundry per week. This does not include dry
            cleaning.
          </li>
          <li>
            Servicing of units once per week on days specified by the
            management. (no washing of dishes)
          </li>
          <li>24 Hour nurse call system</li>
          <li>
            General health monitoring in conjunction with the residents doctors.
          </li>
          <li>Post and admin service.</li>
          <li>Water, electricity, municipal services and insurance.</li>
          <li>Bathing and dressing assistance - as needed.</li>
          <li>Making of beds - as needed.</li>
          <li>Administration of medicine.</li>
          <li>
            Visits by nursing staff. (not including medicine and other medical
            consumables).
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ServicesApartmentsSection
