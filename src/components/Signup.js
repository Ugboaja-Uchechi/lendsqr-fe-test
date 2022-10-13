import React from "react";

const Signup = () => {
  return (
    <>
      <section>
          <div>
            <h1>Welcome!</h1>
            <p>Enter details to Signup</p>
          </div>
          <div>
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Password" required />
            <button>Sign up</button>
          </div>
      </section>
    </>
  )
}

export default Signup;