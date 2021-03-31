import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const LocationHeaderLangebaanSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Gerimed <span className="inline-block text-red-700">Langebaan</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Aptly referred to as the 'Jewel of the West Coast', the picturesque
          town of Langebaan hugs the shores of the Langebaan Lagoon.
        </p>
      </div>
      <div className="mx-auto mb-10 lg:max-w-2xl md:mb-12">
        <div className="relative w-full transition-shadow duration-300">
          <StaticImage
            placeholder="blurred"
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="../../assets/images/locations/main-langebaan.jpg"
            alt="Overview of Langebaan"
          />
        </div>
      </div>
      <div className="max-w-xl md:mx-auto sm:text-left lg:max-w-2xl">
        <p className="mb-6 text-base text-gray-700 md:text-lg md:mb-12">
          The main attraction is the West Coast National Park (30 000ha), the
          waters are home to flamingos and a variety of other birds, whales and
          the park is well known as a paradise for bird watchers. Game viewing
          is possible within the park and the historic Geelbek restaurant and
          tourist centre are worth a visit.
        </p>

        <p className="text-base text-gray-700 md:text-lg">
          Dad can enjoy a round of golf at the Langebaan Country Estate, whilst
          mum can pamper herself with holistic beauty treatments, or browse
          around the many shops offering everything from curios, clothing,
          sports gear, home interiors to arts and crafts. When night falls enjoy
          live entertainment or try your luck at the Casino at Club Mykonos.
        </p>
      </div>
    </section>
  )
}

export default LocationHeaderLangebaanSection
