import { Link } from "react-router-dom";
import {useEffect, useRef} from "react";

function NotFound () {

const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView(
        {
          behavior: 'smooth',
        })
    }
  });

    return (
        <section className="our-error bgc-f7" ref={divRef}>
		<div className="container">
			<div className="row">
				<div className="col-lg-10 offset-lg-1 text-center">
					<div className="error_page footer_apps_widget">
						<img className="img-fluid" src="/images/notFound.jpg" alt="error.png"/>
						<div className="erro_code"><h1>Ohh! Page Not Found</h1></div>
						<p>We can’t seem to find the page you’re looking for</p>
						
					</div>
					<Link className="btn btn_error btn-thm" to="/home">Back To Home</Link>
				</div>
			</div>
		</div>
	</section>
    )
};

export default NotFound;