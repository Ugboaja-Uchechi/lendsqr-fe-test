// import { useState } from "react";
// import Login from "./Login";
// import { Link } from "react-router-dom"

// const Signup = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSuccess(true);
//   }
//   return (
//     <>
//      {success ? (
//         <section>
//           <h1>Success!</h1>
//           <Login />
//         </section>
//       ) : (
//         <section>
//             <div>
//               <h1>Welcome!</h1>
//               <p>Enter details to Signup</p>
//             </div>
//             <form onSubmit={handleSubmit}>
//               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" placeholder="Email" required />

//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" id="password" placeholder="Password" required />

//               <button>Sign up</button>
//             </form>
//             <p>
//               Already registered?<br />
//               <span className="line">
//                 {/*put router link here*/}
//                 <Link to="/login" exact>Log In</Link>
//               </span>
//             </p>
//         </section>
//       )}
//     </>
//   )
// }

// export default Signup;