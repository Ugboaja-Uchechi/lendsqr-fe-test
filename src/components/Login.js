import { useState } from "react";
import Logo from "../assests/images/logo.svg";
import Signin from "../assests/images/sign-in-img.svg";
import "../login.scss"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
  }
  return (
    <>
      <section className="login-grid">
        <div className="img-container">
          <div className="logo-cover">
            <img className="logo" src={Logo} alt="LendSqr Logo" />
          </div>
          <div>
            <img src={Signin} alt="An illustration of a man with a bag walking through a door" className="illustration" />
          </div>
        </div>
        <div>
          <div className="text-cover">
            <h1>Welcome!</h1>
            <p>Enter details to Login.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Password" required />
            <p className="form-p">Forgot Password?</p>
            <button type="submit">Log in</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login;