import { redirect } from 'next/navigation'
import { useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext"

function MyProfile() {
  let navigate = redirect();
  const { user } = useAuth();
  const {token} = user;
  const divRef = useRef(null)

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  });

  useEffect(() => {
    if (!token) {
      navigate({
        pathname: "/login",
      });
    }
  }, [token, navigate]);

  return (
    <>
     
      <section className="our-dashbord dashbord bgc-f7 pb50" ref={divRef}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-xl-2 dn-992 pl0"></div>
            <div className="col-lg-9 col-xl-10 maxw100flex-992">
              <div className="row">
                
                <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2">
                    <h2 className="breadcrumb_title">My Profile</h2>
                    <p>We are glad to see you again!</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="my_dashboard_review">
                    <div className="row">
                      <div className="col-xl-2">
                        <h4>Profile Information</h4>
                      </div>
                      <div className="col-xl-10">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="wrap-custom-file">
                              <input
                                type="file"
                                name="image1"
                                id="image1"
                                accept=".gif, .jpg, .png"
                              />
                              <label htmlFor="image1">
                                <span>
                                  <i className="flaticon-download"></i> Upload Photo{" "}
                                </span>
                              </label>
                            </div>
                            <p>*minimum 260px x 260px</p>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput1">
                                Username
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput1"
                                placeholder="alitfn"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleEmail">Email</label>
                              <input
                                type="email"
                                className="form-control"
                                id="formGroupExampleEmail"
                                placeholder="creativelayers@gmail.com"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput3">
                                First Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput3"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput4">
                                Last Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput4"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput5">
                                Position
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput5"
                              />
                            </div>
                          </div>
                          
                          
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput8">Phone</label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput8"
                              />
                            </div>
                          </div>
                         
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput10">
                                Mobile
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput10"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput11">
                                Language
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput11"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput12">
                                Company Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput12"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput13">
                                Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput13"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="my_profile_setting_textarea">
                              <label htmlFor="exampleFormControlTextarea1">
                                About me
                              </label>
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="7"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-xl-12 text-right">
                            <div className="my_profile_setting_input">
                              <button className="btn btn1">
                                View Public Profile
                              </button>
                              <button className="btn btn2">Update Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my_dashboard_review mt30">
                    <div className="row">
                      <div className="col-xl-2">
                        <h4>Social Media</h4>
                      </div>
                      <div className="col-xl-10">
                        <div className="row">
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleSkype">Skype</label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleSkype"
                                placeholder="alitfn"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleWebsite">
                                Website
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleWebsite"
                                placeholder="creativelayers@gmail.com"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleFaceBook">
                                Facebook
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleFaceBook"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleTwitter">
                                Twitter
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleTwitter"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleLinkedin">
                                Linkedin
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleLinkedin"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInstagram">
                                Instagram
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInstagram"
                              />
                            </div>
                          </div>
                          
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleYoutube">
                                Youtube
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleYoutube"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExamplePinterest">
                                Pinterest
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExamplePinterest"
                              />
                            </div>
                          </div>
                          
                          <div className="col-xl-12 text-right">
                            <div className="my_profile_setting_input">
                              <button className="btn btn2">Update Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my_dashboard_review mt30">
                    <div className="row">
                      <div className="col-xl-2">
                        <h4>Change password</h4>
                      </div>
                      <div className="col-xl-10">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleOldPass">
                                Old Password
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleOldPass"
                                placeholder="alitfn"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleNewPass">
                                New Password
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleNewPass"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleConfPass">
                                Confirm New Password
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleConfPass"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="my_profile_setting_input float-left fn-520">
                              <button className="btn btn3 btn-dark">
                                Update Profile
                              </button>
                            </div>
                            <div className="my_profile_setting_input float-right fn-520">
                              <button className="btn btn2">Update Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt10">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2020 Find House. Made with love.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyProfile;
