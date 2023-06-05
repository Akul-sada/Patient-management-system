import React from "react";
import "./appointment.css";

const Appointments = () => {
  return (
    <>
      <div className="patient-header justify-center flex flex-wrap dark:bg-gray-800">
        <div className="wrapper inline-flex gap-4">
          <div className="inline-block patient-name">Adam</div>
        </div>
      </div>
      <div class="flex justify-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="text-white ">Appointment Number: 1</div>
          <div className="flex">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Date
            </h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Time
            </h5>                                                                                                                                
          </div>

          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    s.no
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Medicine
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Directions
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Course
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4">Licab XL 400 mg</td>
                  <td class="px-6 py-4">1-1-1</td>
                  <td class="px-6 py-4">30 days</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    2
                  </th>
                  <td class="px-6 py-4">T.Quser xl 400</td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4">Pacitane 2 Mg</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    T Quser xl 400 mg
                  </th>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4">Accessories</td>
                  <td class="px-6 py-4">$99</td>
                </tr>
              </tbody>
            </table>
            <p className="text-white">Amount: 220 Rs</p>
          </div>
          <div className="actions">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
