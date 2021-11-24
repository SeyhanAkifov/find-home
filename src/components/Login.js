import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Login({setToken}) {
	const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  let navigate = useNavigate();
	let token = ""
  const onFormSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let username = formData.get("username");
    let password = formData.get("password");
    console.log(username);
    console.log(password);

   
     await fetch("https://localhost:44382/api/Account/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: '{"username":"seyhan","password":"Seyhan1@"}',
      }).then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setToken(result.token);
        },
        // Note: it's important to handle errors here
        // instead of Link catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
   
		console.log(token);
    navigate({ pathname: "/home" });
  };

  return (
    <section className="our-log bgc-fa">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <div className="login_form inner_page">
              <form action="#" onSubmit={onFormSubmit}>
                <div className="heading">
                  <h3 className="text-center">Login to your account</h3>
                  <p className="text-center">
                    Don't have an account?{" "}
                    <a className="text-thm" href="page-register.html">
                      Sign Up!
                    </a>
                  </p>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="username"
                    id="exampleInputEmail3"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="exampleInputPassword4"
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
                  <a className="tdu btn-fpswd float-right" href="#">
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn btn-log btn-block btn-thm2"
                >
                  Login
                </button>
                <div className="divide">
                  <span className="lf_divider">Or</span>
                  <hr />
                </div>
                <div className="row mt40">
                  <div className="col-lg">
                    <button
                      type="submit"
                      className="btn btn-block color-white bgc-fb mb0"
                    >
                      <i className="fa fa-facebook float-left mt5"></i> Facebook
                    </button>
                  </div>
                  <div className="col-lg">
                    <button
                      type="submit"
                      className="btn btn2 btn-block color-white bgc-gogle mb0"
                    >
                      <i className="fa fa-google float-left mt5"></i> Google
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
