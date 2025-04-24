"use client";
import { Link, useRouter } from "next/navigation";
import { useState, useRef, useEffect, useContext, createContext } from "react";
import { login } from "../services/authServices";
import { AuthContext } from "../contexts/AuthContext";
import "../Styles/Login.css";

function Login() {

  const { authenticate } = useContext(AuthContext)
  const [error, setError] = useState([]);
  const navigate = useRouter();
  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();

 
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    const passwordErrorElement = document.querySelector(".password-error");
    const usernameErrorElement = document.querySelector(".username-error");
    const userElement = document.querySelector(".error");
   
    passwordErrorElement.style.display = "none";
    usernameErrorElement.style.display = "none";
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
          if (result.errors) {
            userElement.style.display = "block";
            setError([
              result.errors.Password ? result.errors.Password[0] : "",
              result.errors.Username ? " and " + result.errors.Username[0] : "",
            ]);
          } else if (result.isSuccessStatusCode === false) {
            userElement.style.display = "block";
            setError(result.reasonPhrase);
          } else {
            authenticate(result.email, result.token, result.expiration, result.username);
            navigate.push("/home");
          }
        },
        (error) => {
          userElement.style.display = "block";
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
                    <a className="text-thm" href="/register">
                      Sign Up!
                    </a>
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