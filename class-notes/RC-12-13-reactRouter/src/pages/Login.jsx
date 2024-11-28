
  


import { useState } from "react";
const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");




  const handleSubmit = (e) => {
    e.preventDefault();


setEmail("")
setPass("")
  };

  
  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">LOG IN</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
          Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pass"
            placeholder="Enter your password"
            required
            onChange={(e) => setPass(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
