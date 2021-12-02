import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/authServices" 



function Login({setUserInfo}) {
 
  
	const [error, setError] = useState ([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  let navigate = useNavigate();
	
  const onFormSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let username = formData.get("username");
    let password = formData.get("password");
    console.log(username);
    console.log(password);

    
     await login(username, password)
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          console.log(result.errors);
          console.log(result.headers);
          if (result.errors) {
            setError([result.errors.Password? result.errors.Password[0]: "", result.errors.Username ? " and " + result.errors.Username[0] : ""]);
            console.log(error);
            setIsLoaded(false)
            
          }else if(result.isSuccessStatusCode === false){
            setError(result.reasonPhrase);
            setIsLoaded(false)
          }
          else{
            setIsLoaded(true)
            setUserInfo({ isAuthenticated : true , token : result.token,email :  result.email})
            navigate({ pathname: "/home" });
          
          }
          
        },
        // Note: it's important to handle errors here
        // instead of Link catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
          console.log(isLoaded);
        }
      );

    //  if (!isLoaded) {
    //   navigate({ pathname: "/login" });
    //   console.log(isLoaded);
    //   console.log(error);
    //   console.log('error');
    //  }
    //  else{
    //   navigate({ pathname: "/home" });
    //   console.log('home');
    //  }
       
      
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
                    <Link className="text-thm" to="page-register.html">
                      Sign Up!
                    </Link>
                  </p>
                </div>
                <span>{error}</span>
                <div className="form-group">
                  <input
                    type="text"
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
                  <Link className="tdu btn-fpswd float-right" to="#">
                    Forgot Password?
                  </Link>
                </div>
                <button
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
