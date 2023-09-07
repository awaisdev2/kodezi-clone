import React from "react";

export default function Nav() {
  const logo = "https://kodezi.com/_next/static/media/logo-color.87a0aae3.svg";
  return (
    <div>
      <div className="flex items-center justify-center py-3 w-full bg-[#121929]">
        <img
          src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/1f389.png"
          alt=""
        />
        <p className="ml-2 text-white">
          Kodezi Visual Studio Code Extension is now available! Download
        </p>
        <a href="/" className="text-blue-500 underline ml-2">
          here!
        </a>
      </div>

      {/* nav starts */}

      <nav className="border-gray-200 mt-7">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/">
            <img src={logo} className="h-5 ml-12" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex -ml-32 flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="flex items-center text-md justify-between w-full text-gray-100 border-b border-gray-100 md:border-0 hover:text-yellow-100 md:p-0 md:w-auto"
                >
                  Use Cases
                </button>
                <div
                  id="dropdownHover"
                  style={{ height: "fit-content" }}
                  className="z-10 hidden font-normal bg-[#121929] rounded-lg shadow w-64"
                >
                  <ul
                    className="py-2 text-sm text-gray-300"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-700"
                      >
                        For Students
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li aria-labelledby="dropdownNavbara">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-700"
                      >
                        For Developers
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-700"
                      >
                        For Teams
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="flex items-center text-md justify-between w-full text-gray-100 hover:text-yellow-100 md:p-0 md:w-auto"
                >
                  Integrations
                </button>
                <div
                  id="dropdownHover"
                  style={{ height: "400px" }}
                  className="z-10 hidden font-normal bg-white rounded-lg shadow w-64"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-100"
                      >
                        Development
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li aria-labelledby="dropdownNavbara">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
                      >
                        Business
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-100"
                      >
                        Earnings
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Finance & Accounting
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        IT & Software
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Office Productivity
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Personal Development
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Design
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Marketing
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Lifestyle
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-100 rounded md:border-0 hover:text-yellow-100 md:p-0"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-100 rounded md:border-0 hover:text-yellow-100 md:p-0"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-100 rounded md:border-0 hover:text-yellow-100 md:p-0"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div
            className="hidden mr-12 w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col items-center font-medium p-4 text-gray-100 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-100 rounded md:border-0 hover:text-yellow-100 md:p-0"
                >
                  Careers
                </a>
              </li>
              <li>
                <button
                  style={{
                    borderWidth: "3px",
                    borderImage:
                      "linear-gradient(90deg, rgba(24,41,130,1) 0%, rgba(9,3,45,0.8982186624649859) 41%, rgba(58,168,19,0.8982186624649859) 68%, rgba(121,13,12,0.8982186624649859) 97%)",
                    borderImageSlice: 1,
                    borderRadius: "10px",
                  }}
                  className="px-4 py-2 text-gray-100 border-2"
                >
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
