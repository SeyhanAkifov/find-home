import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  let navigate = useNavigate();
	const [error, setError] = useState ([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let username = formData.get("username");
    let email = formData.get("email");
    let password = formData.get("password");
    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let confirmPassword = formData.get("confirmPassword");
    
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
          console.log(result);
          if (result.errors) {
            setError([result.title]);
            setIsLoaded(false)
            
          }else if(result.isSuccessStatusCode === false){
            setError(result.reasonPhrase);
            setIsLoaded(false)
          }else if(result.status == "Error"){
            setError([result.message]);
            setIsLoaded(false)
          }else{
            setIsLoaded(true)
            
            navigate({ pathname: "/login" });
          
          }
          
        },
        // Note: it's important to handle errors here
        // instead of Link catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
         }
      );

console.log(error);
    
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
                  <Link className="text-thm" to="/login">
                    Login
                  </Link>
                </p>
              </div>
              <span>{error.map(x => x)}</span>
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
                  
                  <button
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
