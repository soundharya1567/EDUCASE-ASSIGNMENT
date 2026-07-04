import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/account");
  };
  return (
    <div className="container">
      <div className="mobile">
        <form className="form" onSubmit={handleLogin}>
          <h2>Sign in to your PopX account</h2>
          <input type="text" placeholder="Email Address" disabled />
          <input type="password" placeholder="Password" disabled />
          <button type="submit" className="submitBtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
