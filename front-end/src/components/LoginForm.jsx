import React from 'react'

const LoginForm = () => {
  return (
    <>
      <section className="vh-full" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container py-5 h-100">
          <div className="flex justify-center items-center h-100">
            <div className="max-w-sm w-full">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-8">
                  <span className="text-2xl font-bold">Logo</span>
                </div>

                <h5 className="font-medium mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                <div className="mb-4">
                  <label className="block text-slate-700 font-medium mb-2" htmlFor="email">Email address</label>
                  <input type="email" id="email" className="form-input w-full px-4 py-3 rounded-lg border border-slate-300" />
                </div>
                <div className="mb-4">
                  <label className="block text-slate-700 font-medium mb-2" htmlFor="password">Password</label>
                  <input type="password" id="password" className="form-input w-full px-4 py-3 rounded-lg border border-slate-300" />
                </div>
                <div className="mb-4">
                  <button className="bg-slate-800 text-white font-medium w-full py-3 rounded-lg">
                    Login
                  </button>
                </div>
                <a className="block text-sm text-slate-600 mb-5 pb-2" href="#!">Forgot password?</a>
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account?
                  <a href="#!" style={{ color: '#393f81' }} className='mx-1 font-medium'>Register here</a>
                </p>
                <div className="flex justify-between text-sm text-slate-600">
                  <a href="#!" className="underline">Terms of use.</a>
                  <a href="#!" className="underline">Privacy policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginForm