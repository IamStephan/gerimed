import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const LocationHeaderKleinmondSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Gerimed <span className="inline-block text-red-700">Kleinmond</span>{" "}
          <br className="hidden md:block" />
          Kogelpark Clinic
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Kleinmond is set between the Palmiet River and Kleinmond lagoon in the
          Western Cape. With stunning beaches ideal for walking, swimming as
          well as some of the best mouth watering restaurants on offer, and a
          stunning 18-hole golf course.
        </p>
      </div>
      <div className="mx-auto mb-10 lg:max-w-2xl md:mb-12">
        <div className="relative w-full transition-shadow duration-300">
          <StaticImage
            placeholder="blurred"
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="../../assets/images/locations/main-kleinmond.jpg"
            alt="Overview of Kleinmond"
          />
        </div>
      </div>
      <div className="max-w-xl md:mx-auto sm:text-left lg:max-w-2xl">
        <p className="mb-6 text-base text-gray-700 md:text-lg md:mb-12">
          There are quaint shops, an art gallery, pottery and craft, interior
          stores and the seafood restaurants serve fresh fish and sushi. Close
          by is the Rooisand nature reserve a few kilometers east of Kleinmond
          for wild horses and bird life, or hike in the Kogelberg nature
          reserve, stroll along the cliff path or buy fresh veg at the market.
        </p>

        <p className="text-base text-gray-700 md:text-lg">
          Kleinmond is an ideal village to relax and enjoy a sundowner.
        </p>
      </div>
    </section>
  )
}

export default LocationHeaderKleinmondSection
