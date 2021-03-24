import React from "react"

const Star: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-4 h-4 mr-1 text-amber-accent-400"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
      />
    </svg>
  )
}

const HalfStar: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-4 h-4 mr-1 text-amber-accent-400"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentcolor"
        d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"
      />
    </svg>
  )
}

const FiveStar: React.FC = () => {
  return (
    <div className="flex mb-2">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  )
}

const FourStart: React.FC = () => {
  return (
    <div className="flex mb-2">
      <Star />
      <Star />
      <Star />
      <Star />
      <HalfStar />
    </div>
  )
}

const SocialProofSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-lg sm:text-center sm:mx-auto">
        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Customers satisfaction is our{" "}
          <span className="text-green-600">priority </span>
        </h2>
      </div>

      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white border rounded group hover:shadow-xl">
          <div className="p-5">
            <p className="mb-2 font-bold">Cecilia Hall</p>
            <FiveStar />
            <p className="text-sm leading-5 text-gray-900 line-clamp-2">
              The foyer and passages always neat and clean. The staff always
              helpfull and friendly.
            </p>
          </div>
          <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
        </div>
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white border rounded group hover:shadow-xl">
          <div className="p-5">
            <p className="mb-2 font-bold">Nat A</p>
            <FiveStar />
            <p className="text-sm leading-5 text-gray-900 line-clamp-2">
              Lovely clean secure place. Staff is very friendly and
              professional.
            </p>
          </div>
          <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
        </div>
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white border rounded group hover:shadow-xl">
          <div className="p-5">
            <p className="mb-2 font-bold">Martie Grobbelaar</p>
            <FourStart />
            <p className="text-sm leading-5 text-gray-900 line-clamp-2">
              My previous place of residence, was very happy there. Lovely
              climate and dear friends !!!
            </p>
          </div>
          <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
        </div>
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white border rounded group hover:shadow-xl">
          <div className="p-5">
            <p className="mb-2 font-bold">Anne-marie Du Toit</p>
            <FiveStar />
            <p className="text-sm leading-5 text-gray-900 line-clamp-2">
              There are so many wonderful people working here. Thanks everyone!
            </p>
          </div>
          <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
