import React, { useState } from "react"
import { Link } from "gatsby"
import classnames from "classnames"

import MiniLogo from "../../assets/svgs/mini_logo.svg"
import Logo from "../../assets/svgs/logo.svg"
import "./styles.css"

interface Props {
  isHanging?: boolean
}

const Navbar: React.FC<Props> = ({ isHanging }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav
      className={classnames({
        "absolute z-50 w-full": isHanging,
      })}
    >
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              title="Go Home"
              aria-label="Gerimed"
              className="inline-flex items-center mr-8"
            >
              <MiniLogo className="text-green-800 w-11 h-11" />
            </Link>
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <button
                  onFocus={() => setIsDropdownOpen(true)}
                  onBlur={() => setIsDropdownOpen(false)}
                  className="relative flex items-center font-medium tracking-wide text-gray-700 transition-colors duration-200 cursor-pointer hover:text-green-600"
                >
                  Locations
                  <svg
                    className="inline-block w-2 ml-2 transform rotate-90"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                  <div
                    className={classnames(
                      "hidden md:block absolute right-0 transform translate-y-full bg-white border rounded shadow-2xl -bottom-4 transition-opacity",
                      {
                        "opacity-0": !isDropdownOpen,
                        "opacity-100": isDropdownOpen,
                      }
                    )}
                  >
                    <ul className="grid p-4 gap-y-4">
                      <li>
                        <Link
                          activeClassName="activeLink"
                          to="/langebaan"
                          className="relative font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-600"
                        >
                          Langebaan
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClassName="activeLink"
                          to="/kleinmond"
                          className="relative font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-600"
                        >
                          Kleinmond
                        </Link>
                      </li>
                    </ul>
                  </div>
                </button>
              </li>
              <li>
                <Link
                  activeClassName="activeLink"
                  to="/services"
                  className="relative font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  activeClassName="activeLink"
                  to="/about"
                  className="relative font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-600"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  activeClassName="activeLink"
                  to="/contact"
                  className="relative font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-600"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 z-50 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <Link to="/" aria-label="Gerimed" title="Go Home">
                        <Logo className="w-auto max-h-12" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/langebaan"
                          activeClassName="activeLink"
                          className="relative font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-600"
                        >
                          Langebaan
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/kleinmond"
                          activeClassName="activeLink"
                          className="relative font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-600"
                        >
                          Kleinmond
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          activeClassName="activeLink"
                          className="relative font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-600"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          activeClassName="activeLink"
                          className="relative font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-600"
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          activeClassName="activeLink"
                          className="relative font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-600"
                        >
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
