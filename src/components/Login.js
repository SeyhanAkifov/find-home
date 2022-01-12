import { useNavigate, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { login } from "../services/authServices";
import { authenticate } from "../services/authServices";
import "../Styles/Login.css";

function Login({ setUserInfo }) {
  const [error, setError] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let navigate = useNavigate();
  let [usernameError, setUsernameError] = useState();
  let [passwordError, setPasswordError] = useState();
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let username = formData.get("username");
    let password = formData.get("password");
    let usernameInput = document.querySelector("#username");
    let passwordInput = document.querySelector("#password");
    let passwordErrorElement = document.querySelector(".password-error");
    passwordErrorElement.style.display = "none";
    let usernameErrorElement = document.querySelector(".username-error");
    usernameErrorElement.style.display = "none";
    let userElement = document.querySelector(".error");
    userElement.style.display = "none";
    setUsernameError("");
    setPasswordError("");

    if (!username) {
      
      usernameErrorElement.style.display = "block";
      usernameInput.style.background = "pink";
      setUsernameError("Username is required");
      setTimeout(() => {
        usernameInput.style.background = "white";
      }, 1000);
    }
    if (!password) {
      
      passwordErrorElement.style.display = "block";
      passwordInput.style.background = "pink";
      setPasswordError("Password is required");
      setTimeout(() => {
        passwordInput.style.background = "white";
      }, 1000);
    } else if (password && username) {
      await login(username, password).then(
        (result) => {
          setIsLoaded(true);
console.log(result);
          if (result.errors) {
            userElement.style.display = "block";
            setError([
              result.errors.Password ? result.errors.Password[0] : "",
              result.errors.Username ? " and " + result.errors.Username[0] : "",
            ]);
            setIsLoaded(false);
          } else if (result.isSuccessStatusCode === false) {
            userElement.style.display = "block";
            setError(result.reasonPhrase);
            setIsLoaded(false);
          } else {
            setIsLoaded(true);
            console.log(result);
            authenticate(result)
            console.log(localStorage);
            setUserInfo({
              isAuthenticated: true,
              token: result.token,
              email: result.email,
            });
            navigate({ pathname: "/home" });
          }
        },
        (error) => {
          userElement.style.display = "block";
          setIsLoaded(true);
          setError(error);
        }
      );
    }
  };

  return (
    <section className="our-log bgc-fa" ref={divRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <div className="login_form inner_page">
              <form action="#" onSubmit={onFormSubmit}>
                <div className="heading">
                  <h3 className="text-center">Login to your account</h3>
                  <p className="text-center">
                    Don't have an account?{" "}
                    <Link className="text-thm" to="/register">
                      Sign Up!
                    </Link>
                  </p>
                </div>

                <div className="error">{error}</div>

                <span className="username-error">{usernameError}</span>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                </div>

                <span className="password-error">{passwordError}</span>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="exampleCheck3"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>
                <button
                id="log"
                  type="submit"
                  className="btn btn-log btn-block btn-thm2"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
