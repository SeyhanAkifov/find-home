import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let username = formData.get("username");
    let email = formData.get("email");
    let password = formData.get("password");
    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let confirmPassword = formData.get("confirmPassword");

    console.log(username);
    console.log(password);
    console.log(confirmPassword);

    await fetch("https://localhost:44382/api/Account/Register", {
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


    navigate({ pathname: "/login" });
  };
  return (
    <section className="our-log-reg bgc-fa">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <div className="sign_up_form inner_page">
              <div className="heading">
                <h3 className="text-center">Register to start learning</h3>
                <p className="text-center">
                  Have an account?{" "}
                  <a className="text-thm" href="page-login.html">
                    Login
                  </a>
                </p>
              </div>
              <div className="details">
                <form action="#" onSubmit={onFormSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="exampleInputName2"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail3"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      id="exampleInputPassword5"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
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
                      Want to become an instructor?
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-log btn-block btn-thm2"
                  >
                    Register
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
                        <i className="fa fa-facebook float-left mt5"></i>{" "}
                        Facebook
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
      </div>
    </section>
  );
}

export default Register;
