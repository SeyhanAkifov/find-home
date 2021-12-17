import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import "../Styles/Register.css";

function Register() {
  let navigate = useNavigate();
  const [error, setError] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let [userError, setUserError] = useState();
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
    setError([]);
    let formData = new FormData(e.currentTarget);
    let inputs = [
      "username",
      "email",
      "password",
      "confirmPassword",
      "firstName",
      "lastName",
    ];
    let errorElement = document.querySelector(`.error`);
    errorElement.style.display = "none";

    inputs.forEach((input) => {
      document.querySelector(`.${input}-error`).innerHTML = ``;
    });
    let username = formData.get("username");
    let email = formData.get("email");
    let password = formData.get("password");
    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let confirmPassword = formData.get("confirmPassword");
    let err = false;
    let serverError = false;

    if (password !== confirmPassword) {
      setError(["Both passwords doesn't match"]);
      errorElement.style.display = "block";
      err = true;
      serverError = true;
    } else if (password === confirmPassword) {
      errorElement.style.display = "none";
      err = false;
      serverError = false;
    }

    inputs.forEach((element) => {
      if (!formData.get(`${element}`)) {
        document.querySelector(`#${element}`).style.background = "pink";
        document.querySelector(
          `.${element}-error`
        ).innerHTML = `${element} is required`;
        
        document.querySelector(`.${element}-error`).style.display = "block";
        setTimeout(() => {
          document.querySelector(`#${element}`).style.background = "white";
        }, 1000);

        err = true
      } else {
        document.querySelector(`.${element}-error`).style.display = "none";
      }
    });
    if (!err) {
      document.querySelector(`.error`).style.display = "none";
      await fetch("https://apifindhome.seyhanakifov.com/api/Account/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          firstName,
          lastName,
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);

            if (result.errors) {
              err = true;
              serverError = true;
              setError([result.title]);
              setIsLoaded(false);
            } else if (result.isSuccessStatusCode === false) {
              err = true;
              serverError = true;
              setError(result.reasonPhrase);
              setIsLoaded(false);
            } else if (result.status === "Error") {
              err = true;
              serverError = true;
              setError([result.message]);
              setIsLoaded(false);
            } else {
              errorElement.style.display = "none";
              setError([]);
              setIsLoaded(true);
              navigate({ pathname: "/login" });
              err = false;
              serverError = false;
            }
          },
          (error) => {
            err = true;
            serverError = true;
            setIsLoaded(true);
            setError(error);
          }
        );
    }

    if (serverError) {
      errorElement.style.display = "block";
    } else {
      errorElement.style.display = "none";
    }
  };

  return (
    <section className="our-log-reg bgc-fa" ref={divRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <div className="sign_up_form inner_page">
              <div className="heading">
                <h3 className="text-center">Register to start learning</h3>
                <p className="text-center">
                  Have an account?{" "}
                  <Link className="text-thm" to="/login">
                    Login
                  </Link>
                </p>
              </div>

              <div className="details">
                <form action="#" onSubmit={onFormSubmit}>
                  <span className="error">{error.map((x) => x)}</span>

                  <span className="username-error">{userError}</span>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                    />
                  </div>
                  <span className="email-error">{userError}</span>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <p>
                    Password must contain: Capital letter, number and Sybmol
                  </p>
                  <span className="password-error">{userError}</span>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Example1@"
                    />
                  </div>
                  <span className="confirmPassword-error">{userError}</span>

                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <span className="firstName-error">{userError}</span>
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                    />
                  </div>
                  <span className="lastName-error">{userError}</span>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                    />
                  </div>

                  <button
                  id="reg"
                    type="submit"
                    className="btn btn-log btn-block btn-thm2"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
