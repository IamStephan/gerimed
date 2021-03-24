import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AssociationsSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative h-24 px-12 py-4 text-center sm:px-0">
          <StaticImage
            src="../../assets/images/homepage/logo-1.png"
            placeholder="blurred"
            className="top-0 left-0 w-full h-full gray-filter"
            objectFit="contain"
            alt="Alzheimers South Africa"
            style={{
              position: "absolute",
            }}
          />
        </div>
        <div className="relative h-24 px-12 py-4 text-center sm:px-0">
          <StaticImage
            src="../../assets/images/homepage/logo-2.png"
            placeholder="blurred"
            className="top-0 left-0 w-full h-full gray-filter"
            objectFit="contain"
            alt="BHF South Africa"
            style={{
              position: "absolute",
            }}
          />
        </div>
        <div className="relative h-24 px-12 py-4 text-center sm:px-0">
          <StaticImage
            src="../../assets/images/homepage/logo-3.png"
            placeholder="blurred"
            className="top-0 left-0 w-full h-full gray-filter"
            objectFit="contain"
            alt="RSA Health department"
            style={{
              position: "absolute",
            }}
          />
        </div>
        <div className="relative h-24 px-12 py-4 text-center sm:px-0">
          <StaticImage
            src="../../assets/images/homepage/logo-4.png"
            placeholder="blurred"
            className="top-0 left-0 w-full h-full gray-filter"
            objectFit="contain"
            alt="Western Cape government"
            style={{
              position: "absolute",
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default AssociationsSection
