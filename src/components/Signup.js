import { useState } from "react";

const Signup = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
  }
  return (
    <>
     {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
            <div>
              <h1>Welcome!</h1>
              <p>Enter details to Signup</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input type="email" autoComplete="off" placeholder="Email" required />

              <input type="password" autoComplete="off" id="password" placeholder="Password" required />


              <button>Sign up</button>
            </form>
            <p>
              Already registered?<br />
              <span className="line">
                {/*put router link here*/}
                <a href="#">Sign In</a>
              </span>
            </p>
        </section>
      )}
    </>
  )
}

export default Signup;