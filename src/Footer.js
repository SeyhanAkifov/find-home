function Footer () {
    return (
        <section className="footer_one">
		<div className="container">
			<div className="row">
				<div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
					<div className="footer_about_widget">
						<h4>About Site</h4>
						<p>We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.</p>
					</div>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
					<div className="footer_qlink_widget">
						<h4>Quick Links</h4>
						<ul className="list-unstyled">
							<li><a href="#">About Us</a></li>
							<li><a href="#">Terms & Conditions</a></li>
							<li><a href="#">User’s Guide</a></li>
							<li><a href="#">Support Center</a></li>
							<li><a href="#">Press Info</a></li>
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
					<div className="footer_contact_widget">
						<h4>Contact Us</h4>
						<ul className="list-unstyled">
							<li><a href="#">info@findhouse.com</a></li>
							<li><a href="#">Collins Street West, Victoria</a></li>
							<li><a href="#">8007, Australia.</a></li>
							<li><a href="#">+1 246-345-0699</a></li>
							<li><a href="#">+1 246-345-0695</a></li>
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
					<div className="footer_social_widget">
						<h4>Follow us</h4>
						<ul className="mb30">
							<li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fa fa-pinterest"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fa fa-dribbble"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fa fa-google"></i></a></li>
						</ul>
						<h4>Subscribe</h4>
						<form className="footer_mailchimp_form">
						 	<div className="form-row align-items-center">
							    <div className="col-auto">

                                </div>
							    <div className="col-auto">
							    	<button type="submit" className="btn btn-primary mb-2"><i className="fa fa-angle-right"></i></button>
							    </div>
						  	</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>

    )
}

export default Footer;