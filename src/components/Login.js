import React from "react";
import Logo from "../assests/images/logo.svg";
import Signin from "../assests/images/sign-in-img.svg"

const Login = () => {
  return (
    <>
      <section>
        <div>
          <div>
            <img src={Logo} alt="LendSqr Logo" />
          </div>
            <h3>lendsqr</h3>
          <div>
            {/* Background Color: #fefefe */}
            <img src={Signin} alt="An illustration of a man with a bag walking through a door" />
          </div>
        </div>
        <div>
          <div>
            <h1>Welcome!</h1>
            <p>Enter details to Login</p>
          </div>
          <div>
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Password" required />
            <p>Forgot Password?</p>
            <button>Log in</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login;