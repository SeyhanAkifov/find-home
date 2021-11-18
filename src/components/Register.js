import { useNavigate } from 'react-router-dom';

function Register () {
	let navigate = useNavigate();

	const onFormSubmit = (e) => {
		e.preventDefault();
		navigate({pathname: '/login'})
	}
    return (
        <section className="our-log-reg bgc-fa">
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-lg-6 offset-lg-3">
					<div className="sign_up_form inner_page">
						<div className="heading">
							<h3 className="text-center">Register to start learning</h3>
							<p className="text-center">Have an account? <a className="text-thm" href="page-login.html">Login</a></p>
						</div>
						<div className="details">
							<form action="#" onSubmit={onFormSubmit}>
								<div className="form-group">
							    	<input type="text" className="form-control" id="exampleInputName2" placeholder="Username"/>
								</div>
								 <div className="form-group">
							    	<input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email Address"/>
								</div>
								<div className="form-group">
							    	<input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password"/>
								</div>
								<div className="form-group">
							    	<input type="password" className="form-control" id="exampleInputPassword5" placeholder="Confirm Password"/>
								</div>
								<div className="form-group custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="exampleCheck3"/>
									<label className="custom-control-label" htmlFor="exampleCheck3">Want to become an instructor?</label>
								</div>
								<button type="submit" className="btn btn-log btn-block btn-thm2">Register</button>
								<div className="divide">
									<span className="lf_divider">Or</span>
									<hr/>
								</div>
								<div className="row mt40">
									<div className="col-lg">
										<button type="submit" className="btn btn-block color-white bgc-fb mb0"><i className="fa fa-facebook float-left mt5"></i> Facebook</button>
									</div>
									<div className="col-lg">
										<button type="submit" className="btn btn2 btn-block color-white bgc-gogle mb0"><i className="fa fa-google float-left mt5"></i> Google</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Register