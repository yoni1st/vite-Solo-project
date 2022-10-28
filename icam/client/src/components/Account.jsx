import React from "react";
import Navbar from "../components/Navbar/NavbarAdmin";

export default function Account() {
  return (
    <>
      <Navbar />
      <div className="container my-6 py-6 mx-auto px-4 md:px-6 lg:px-12">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <section className="mb-1 text-gray-800">
            <div className="block rounded-lg shadow-lg bg-white">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full mb-0">
                        <thead className="border-b bg-gray-50 rounded-t-lg text-left">
                          <tr>
                            <th
                              scope="col"
                              className="rounded-tl-lg text-sm font-medium px-6 py-4"
                            >
                              NAME
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium px-6 py-4"
                            >
                              TITLE
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium px-6 py-4"
                            >
                              STATUS
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium px-6 py-4"
                            >
                              ROLE
                            </th>
                            <th
                              scope="col"
                              className="rounded-tr-lg text-sm font-medium px-6 py-4"
                            ></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <th
                              scope="row"
                              className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left"
                            >
                              <div className="flex flex-row items-center">
                                <img
                                  className="rounded-full w-12"
                                  src="https://mdbootstrap.com/img/new/avatars/9.jpg"
                                  alt="Avatar"
                                />
                                <div className="ml-4">
                                  <p className="mb-0.5 font-medium">
                                    Jane Cooper
                                  </p>
                                  <p className="mb-0.5 text-gray-500">
                                    jane.cooper@example.com
                                  </p>
                                </div>
                              </div>
                            </th>
                            <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <div className="flex flex-col">
                                <p className="mb-0.5">
                                  Regional Paradigm Technican
                                </p>
                                <p className="mb-0.5 text-gray-500">
                                  Optimization
                                </p>
                              </div>
                            </td>
                            <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
                                Active
                              </span>
                            </td>
                            <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              Admin
                            </td>
                            <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <a
                                href="#!"
                                className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <th
                              scope="row"
                              className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left"
                            >
                              <div className="flex flex-row items-center">
                                <img
                                  className="rounded-full w-12"
                                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                  alt="Avatar"
                                />
                                <div className="ml-4">
                                  <p className="mb-0.5 font-medium">
                                    Cody Fisher
                                  </p>
                                  <p className="mb-0.5 text-gray-500">
                                    cody.fisher@example.com
                                  </p>
                                </div>
                              </div>
                            </th>
                            <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <div className="flex flex-col">
                                <p className="mb-0.5">
                                  Product Directives Officer
                                </p>
                                <p className="mb-0.5 text-gray-500">Intranet</p>
                              </div>
                            </td>
                            <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
                                Active
                              </span>
                            </td>
                            <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              Manager
                            </td>
                            <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <a
                                href="#!"
                                className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <th
                              scope="row"
                              className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left"
                            >
                              <div className="flex flex-row items-center">
                                <img
                                  className="rounded-full w-12"
                                  src="https://mdbootstrap.com/img/new/avatars/11.jpg"
                                  alt="Avatar"
                                />
                                <div className="ml-4">
                                  <p className="mb-0.5 font-medium">
                                    Esther Howard
                                  </p>
                                  <p className="mb-0.5 text-gray-500">
                                    esther.howard@example.com
                                  </p>
                                </div>
                              </div>
                            </th>
                            <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <div className="flex flex-col">
                                <p className="mb-0.5">
                                  Forward Response Developer
                                </p>
                                <p className="mb-0.5 text-gray-500">
                                  Directives
                                </p>
                              </div>
                            </td>
                            <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
                                Disabled
                              </span>
                            </td>
                            <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              Employee
                            </td>
                            <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <a
                                href="#!"
                                className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <th
                              scope="row"
                              className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left"
                            >
                              <div className="flex flex-row items-center">
                                <img
                                  className="rounded-full w-12"
                                  src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                                  alt="Avatar"
                                />
                                <div className="ml-4">
                                  <p className="mb-0.5 font-medium">
                                    Janny Wilson
                                  </p>
                                  <p className="mb-0.5 text-gray-500">
                                    jenny.wilson@example.com
                                  </p>
                                </div>
                              </div>
                            </th>
                            <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <div className="flex flex-col">
                                <p className="mb-0.5">
                                  Central Security Manager
                                </p>
                                <p className="mb-0.5 text-gray-500">Program</p>
                              </div>
                            </td>
                            <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
                                Active
                              </span>
                            </td>
                            <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              Employee
                            </td>
                            <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <a
                                href="#!"
                                className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <th
                              scope="row"
                              className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left"
                            >
                              <div className="flex flex-row items-center">
                                <img
                                  className="rounded-full w-12"
                                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                                  alt="Avatar"
                                />
                                <div className="ml-4">
                                  <p className="mb-0.5 font-medium">
                                    Kristin Watson
                                  </p>
                                  <p className="mb-0.5 text-gray-500">
                                    kristin.watson@example.com
                                  </p>
                                </div>
                              </div>
                            </th>
                            <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <div className="flex flex-col">
                                <p className="mb-0.5">
                                  Lead Implementation Liaison
                                </p>
                                <p className="mb-0.5 text-gray-500">Mobility</p>
                              </div>
                            </td>
                            <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
                                Active
                              </span>
                            </td>
                            <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              Manager
                            </td>
                            <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <a
                                href="#!"
                                className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th
                              scope="row"
                              className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left"
                            >
                              <div className="flex flex-row items-center">
                                <img
                                  className="rounded-full w-12"
                                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                  alt="Avatar"
                                />
                                <div className="ml-4">
                                  <p className="mb-0.5 font-medium">
                                    Danny Williamson
                                  </p>
                                  <p className="mb-0.5 text-gray-500">
                                    danny.williamson@example.com
                                  </p>
                                </div>
                              </div>
                            </th>
                            <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <div className="flex flex-col">
                                <p className="mb-0.5">
                                  Internal Applications Engineer
                                </p>
                                <p className="mb-0.5 text-gray-500">Security</p>
                              </div>
                            </td>
                            <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
                                Disabled
                              </span>
                            </td>
                            <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              Manager
                            </td>
                            <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <a
                                href="#!"
                                className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
            <div class="flex items-center">
              <button
                type="button"
                class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
              >
                <svg
                  width="9"
                  fill="currentColor"
                  height="8"
                  class=""
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                </svg>
              </button>
              <button
                type="button"
                class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
              >
                1
              </button>
              <button
                type="button"
                class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
              >
                2
              </button>
              <button
                type="button"
                class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
              >
                3
              </button>
              <button
                type="button"
                class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
              >
                4
              </button>
              <button
                type="button"
                class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
              >
                <svg
                  width="9"
                  fill="currentColor"
                  height="8"
                  class=""
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
