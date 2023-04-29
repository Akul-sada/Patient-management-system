import React from 'react'

const LoginForm = () => {
  return (
    <>
<form>
    <div className="container">
  <div class="form-group">

    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>
    </>
  )
}

export default LoginForm