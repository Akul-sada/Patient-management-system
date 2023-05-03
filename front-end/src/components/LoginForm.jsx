import React from 'react'

import { Link } from 'react-router-dom';
const LoginForm = () => {

  return (
    <>
      <form >

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <Link to="/manager" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </form>
    </>
  )
}

export default LoginForm