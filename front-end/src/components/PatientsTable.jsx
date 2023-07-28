import React from 'react';
import { Navigate,Link } from 'react-router-dom';


const PatientsTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 ">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Place
                </th>
                <th scope="col" className="px-6 py-3">
                    Gender
                </th>
               
                <th scope="col" className="px-6 py-3 flex">
                    <div>
                    Actions
                    </div>
                    <Link to="/add-patient" className="add-patient-spacing-left space-x-11 font-medium text-blue-600 dark:text-green-500 hover:underline">Add Patient</Link>
                    <Link to="/login" className="add-patient-spacing-left space-x-11 font-medium text-blue-600 dark:text-yellow-500 hover:underline">Logout</Link>
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white">
                <td className="px-6 py-4">
                    1
                </td>
                <td className="px-6 py-4">
                Adam
                </td>
                <td className="px-6 py-4">
                Alique
                </td>
                <td className="px-6 py-4">
                    M
                </td>
                
                <td className="flex items-center px-6 py-4 space-x-3">
                    <Link to="/edit-patient" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                    <Link to="/delete-patient" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</Link>
                    <Link to="/appointments" className="font-medium text-green-600 dark:text-green-500 hover:underline">Appointments</Link>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
  )
}

export default PatientsTable