import { useState, useEffect } from "react"
import Get  from '../services/propertyServices'
import { useHistory, useParams } from "react-router-dom";


function Details () {
    let id = useParams();

    const [property, setProperty] = useState([]);

    useEffect(async () => {
        fetch(`http://apifindhome.seyhanakifov.com/api/Home/GetWithId?id=${id.id}`, {
            headers: {
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2V5aGFuIiwianRpIjoiYWM5Zjc0OTctMTA2NS00ZjgxLWJlNWMtOTE3NGY3ZWQ3MTAzIiwiZXhwIjoxNjM2ODk3ODgyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjU5OTIxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.bL9Bc7Olqxld1lEuu2mS-zXlEb4UUmOogXxLy5QYLiU",
              expiration: "2021-11-14T13:51:22Z",
            },
          })
          .then((res) => res.json())
          .then(data => setProperty(data))
          
        
          
    }, []);

    console.log(property);
    return (
        <section className="our-agent-single pb30-991">
		<div className="container">
			<div className="row">
				<div className="col-md-12 col-lg-8">
					<div className="row">
						<div className="col-lg-12">
							<div className="listing_single_description">
								<div className="lsd_list">
									<ul className="mb0">
										<li className="list-inline-item"><a href="#">{}</a></li>
										<li className="list-inline-item"><a href="#">Beds: {property.beds}</a></li>
										<li className="list-inline-item"><a href="#">Baths: {property.baths}</a></li>
										<li className="list-inline-item"><a href="#">Sq Ft: {property.area}</a></li>
									</ul>
								</div>
								<h4 className="mb30">Description</h4>
						    	<p className="mb25">Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.</p>
						    	<p className="gpara second_para white_goverlay mt10 mb10">Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow htmlFor lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p>
								<div className="collapse" id="collapseExample">
								  	<div className="card card-body">
								    	<p className="mt10 mb10">Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow htmlFor lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p>
								    	<p className="mt10 mb10">Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow htmlFor lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p>
								  	</div>
								</div>
								<p className="overlay_close">
									<a className="text-thm fz14" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
								   	 Show More <span className="flaticon-download-1 fz12"></span>
								  	</a>
								</p>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="additional_details">
								<div className="row">
									<div className="col-lg-12">
										<h4 className="mb15">Property Details</h4>
									</div>
									<div className="col-md-6 col-lg-6 col-xl-4">
										<ul className="list-inline-item">
											<li><p>Property ID :</p></li>
											<li><p>Price :</p></li>
											<li><p>Property Size :</p></li>
											<li><p>Year Built :</p></li>
										</ul>
										<ul className="list-inline-item">
											<li><p><span>HZ27</span></p></li>
											<li><p><span>${property.price}</span></p></li>
											<li><p><span>1560 Sq Ft</span></p></li>
											<li><p><span>2016-01-09</span></p></li>
										</ul>
									</div>
									<div className="col-md-6 col-lg-6 col-xl-4">
										<ul className="list-inline-item">
											<li><p>Bedrooms :</p></li>
											<li><p>Bathrooms :</p></li>
											<li><p>Garage :</p></li>
											<li><p>Garage Size :</p></li>
										</ul>
										<ul className="list-inline-item">
											<li><p><span>8</span></p></li>
											<li><p><span>4</span></p></li>
											<li><p><span>2</span></p></li>
											<li><p><span>200 SqFt</span></p></li>
										</ul>
									</div>
									<div className="col-md-6 col-lg-6 col-xl-4">
										<ul className="list-inline-item">
											<li><p>Property Type :</p></li>
											<li><p>Property Status :</p></li>
										</ul>
										<ul className="list-inline-item">
											<li><p><span>Apartment</span></p></li>
											<li><p><span>htmlFor Sale</span></p></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="additional_details">
								<div className="row">
									<div className="col-lg-12">
										<h4 className="mb15">Additional details</h4>
									</div>
									<div className="col-md-6 col-lg-6">
										<ul className="list-inline-item">
											<li><p>Deposit :</p></li>
											<li><p>Pool Size :</p></li>
											<li><p>Additional Rooms :</p></li>
										</ul>
										<ul className="list-inline-item">
											<li><p><span>20%</span></p></li>
											<li><p><span>300 Sqft</span></p></li>
											<li><p><span>Guest Bath</span></p></li>
										</ul>
									</div>
									<div className="col-md-6 col-lg-6">
										<ul className="list-inline-item">
											<li><p>Last remodel year :</p></li>
											<li><p>Amenities :</p></li>
											<li><p>Equipment :</p></li>
										</ul>
										<ul className="list-inline-item">
											<li><p><span>1987</span></p></li>
											<li><p><span>Clubhouse</span></p></li>
											<li><p><span>Grill - Gas</span></p></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="property_attachment_area">
								<h4 className="mb30">Property Attachments</h4>
								<div className="iba_container style2">
									<div className="icon_box_area style2">
										<div className="score"><span className="flaticon-document text-thm fz30"></span></div>
										<div className="details">
											<h5><span className="flaticon-download text-thm pr10"></span> Demo Word Document</h5>
										</div>
									</div>
									<div className="icon_box_area style2">
										<div className="score"><span className="flaticon-pdf text-thm fz30"></span></div>
										<div className="details">
											<h5><span className="flaticon-download text-thm pr10"></span> Demo pdf Document</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="application_statics mt30">
								<div className="row">
									<div className="col-lg-12">
										<h4 className="mb10">Features</h4>
									</div>
									<div className="col-sm-6 col-md-6 col-lg-4">
										<ul className="order_list list-inline-item">
											<li><a href="#"><span className="flaticon-tick"></span>Air Conditioning</a></li>
											<li><a href="#"><span className="flaticon-tick"></span>Barbeque</a></li>
											<li><a href="#"><span className="flaticon-tick"></span>Dryer</a></li>
											<li><a href="#"><span className="flaticon-tick"></span>Gym</a></li>
											<li><a href="#"><span className="flaticon-tick"></span>Laundry</a></li>
										</ul>
									</div>
									<div className="col-sm-6 col-md-6 col-lg-4">
										<ul className="order_list list-inline-item">
											<li><a href="#"><span className="flaticon-tick"></span>Lawn</a></li>
											<li><a href="#"><span className="flaticon-tick"></span>Microwave</a></li>
											<li><a href="#"><span className="flaticon-tick"></span>Outdoor Shower</a></li>
											<li><a href="#"><span className="flaticon-tick"></span>Refrigerator</a></li>
											<li><a href="#"><span className="flaticon-tick"></span>Sauna</a></li>
										</ul>
									</div>
									<div className="col-sm-6 col-md-6 col-lg-4">
										<ul className="order_list list-inline-item">
											<li><a href="#"><span className="flaticon-tick"></span>Swimming Pool</a></li>
											<li><a href="#"><span className="flaticon-tick"></span>TV Cable</a></li>
											<li><a href="#"><span className="flaticon-tick"></span>Washer</a></li>
											<li><a href="#"><span className="flaticon-tick"></span>WiFi</a></li>
											<li><a href="#"><span className="flaticon-tick"></span>Window Coverings</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="application_statics mt30">
								<h4 className="mb30">Location <small className="float-right">1421 San Pedro St, Los Angeles, CA 90015</small></h4>
								<div className="property_video p0">
									<div className="thumb">
										<div className="h400" id="map-canvas"></div>
										<div className="overlay_icon">
											<a href="#"><img className="map_img_icon" src="images/header-logo.png" alt="header-logo.png"/></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="application_statics mt30">
								<h4 className="mb30">Floor plans</h4>
								<div className="faq_according style2">
									<div className="accordion" id="accordionExample">
									  	<div className="card floor_plan">
										    <div className="card-header" id="headingOne">
										    	<h2 className="mb-0">
										        	<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										        		<ul className="mb0">
										        			<li className="list-inline-item">First Floor</li>
										        			<li className="list-inline-item"><p>Size:</p> <span>1267 Sqft</span></li>
										        			<li className="list-inline-item"><p>Rooms:</p> <span>670 Sqft</span></li>
										        			<li className="list-inline-item"><p>Baths:</p> <span>530 Sqft</span></li>
										        			<li className="list-inline-item"><p>Price:</p> <span>$1489</span></li>
										        		</ul>
										        	</button>
										   		</h2>
										    </div>
										    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample" >
											    <div className="card-body text-center">
											    	<img className="img-fluid" src="images/resource/floor_plan.png" alt="floor_plan.png"/>
									        		<p>Plan description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
											    </div>
										    </div>
									    </div>
									    <div className="card floor_plan">
									    	<div className="card-header active" id="headingTwo">
									    		<h2 className="mb-0">
									        		<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										        		<ul className="mb0">
										        			<li className="list-inline-item">First Floor</li>
										        			<li className="list-inline-item"><p>Size:</p> <span>1267 Sqft</span></li>
										        			<li className="list-inline-item"><p>Rooms:</p> <span>670 Sqft</span></li>
										        			<li className="list-inline-item"><p>Baths:</p> <span>530 Sqft</span></li>
										        			<li className="list-inline-item"><p>Price:</p> <span>$1489</span></li>
										        		</ul>
										        	</button>
									    		</h2>
									    	</div>
									    	<div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
									      		<div className="card-body text-center">
											    	<img className="img-fluid" src="images/resource/floor_plan.png" alt="floor_plan.png"/>
									        		<p>Plan description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
									     		 </div>
									    	</div>
									    </div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="shop_single_tab_content style2 bdr1 mt30">
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item">
									    <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Property video</a>
									</li>
									<li className="nav-item">
									    <a className="nav-link" id="listing-tab" data-toggle="tab" href="#listing" role="tab" aria-controls="listing" aria-selected="false">Virtual Tour</a>
									</li>
								</ul>
								<div className="tab-content" id="myTabContent2">
									<div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
										<div className="property_video">
											<div className="thumb">
												<img className="pro_img img-fluid w100" src="images/background/7.jpg" alt="7.jpg"/>
												<div className="overlay_icon">
													<a className="video_popup_btn red popup-youtube popup-img" href="https://www.youtube.com/watch?v=oqNZOOWF8qM"><span className="flaticon-play"></span></a>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199" id="listing" role="tabpanel" aria-labelledby="listing-tab">
										<div className="property_video">
											<div className="thumb">
												<img className="pro_img img-fluid w100" src="images/background/7.jpg" alt="7.jpg"/>
												<div className="overlay_icon">
													<a className="video_popup_btn red popup-youtube popup-img" href="https://www.youtube.com/watch?v=Jrs5yji5bb0"><span className="flaticon-play"></span></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="walkscore_area mt30">
								<h4 className="mb30">Walkscore <span className="float-right"><img src="images/resource/wscore.png" alt="wscore.png"/></span></h4>
								<div className="iba_container">
									<div className="icon_box_area">
										<div className="score"><span>70</span></div>
										<div className="details">
											<h5>Walk Score</h5>
											<p>Somewhat Walkable</p>
										</div>
									</div>
									<div className="icon_box_area">
										<div className="score"><span>40</span></div>
										<div className="details">
											<h5>Bike Score</h5>
											<p>Bikeable</p>
										</div>
									</div>
								</div>
								<a className="more_info" href="#">More Details Here</a>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="whats_nearby mt30">
								<h4 className="mb10">What's Nearby</h4>
								<div className="education_distance mb15">
									<h5><span className="flaticon-college-graduation"></span> Education</h5>
									<div className="single_line">
										<p className="para">Eladia's Kids <span>(3.13 miles)</span></p>
										<ul className="review">
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><span className="total_rive_count">8895 reviews</span></li>
										</ul>
									</div>
									<div className="single_line">
										<p className="para">Gear Up With ACLS <span>(4.66 miles)</span></p>
										<ul className="review">
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><span className="total_rive_count">7475 reviews</span></li>
										</ul>
									</div>
									<div className="single_line">
										<p className="para">Brooklyn Brainery <span>(3.31 miles)</span></p>
										<ul className="review">
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><span className="total_rive_count">3579 reviews</span></li>
										</ul>
									</div>
								</div>
								<div className="education_distance mb15 style2">
									<h5><span className="flaticon-heartbeat"></span> Health & Medical</h5>
									<div className="single_line">
										<p className="para">Eladia's Kids <span>(3.13 miles)</span></p>
										<ul className="review">
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><span className="total_rive_count">8895 reviews</span></li>
										</ul>
									</div>
									<div className="single_line">
										<p className="para">Gear Up With ACLS <span>(4.66 miles)</span></p>
										<ul className="review">
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><span className="total_rive_count">7475 reviews</span></li>
										</ul>
									</div>
									<div className="single_line">
										<p className="para">Brooklyn Brainery <span>(3.31 miles)</span></p>
										<ul className="review">
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><span className="total_rive_count">3579 reviews</span></li>
										</ul>
									</div>
								</div>
								<div className="education_distance style3">
									<h5><span className="flaticon-front-of-bus"></span> Transportation</h5>
									<div className="single_line">
										<p className="para">Eladia's Kids <span>(3.13 miles)</span></p>
										<ul className="review">
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><span className="total_rive_count">8895 reviews</span></li>
										</ul>
									</div>
									<div className="single_line">
										<p className="para">Gear Up With ACLS <span>(4.66 miles)</span></p>
										<ul className="review">
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><span className="total_rive_count">7475 reviews</span></li>
										</ul>
									</div>
									<div className="single_line">
										<p className="para">Brooklyn Brainery <span>(3.31 miles)</span></p>
										<ul className="review">
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											<li className="list-inline-item"><span className="total_rive_count">3579 reviews</span></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="application_statics">
								<div className="row">
									<div className="col-lg-12">
										<div className="chart_circle_doughnut mt30">
											<h4>Payment Calculator</h4>
											<canvas className="mt50 mb50" id="myChart"></canvas>
										</div>
									</div>
									<div className="col-lg-6 col-xl-6">
										<div className="my_profile_setting_input ui_kit_select_search form-group">
											<select className="selectpicker" data-live-search="true" data-width="100%">
												<option data-tokens="Terms">Terms</option>
												<option data-tokens="Terms2">Terms2</option>
												<option data-tokens="Terms3">Terms3</option>
												<option data-tokens="Terms4">Terms4</option>
											</select>
										</div>
									</div>
									<div className="col-lg-6 col-xl-6">
										<div className="my_profile_setting_input form-group">
									    	<input type="text" className="form-control" id="htmlFormGroupExampleWebsite" placeholder="Interest"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-6">
										<div className="my_profile_setting_input form-group">
									    	<input type="text" className="form-control" id="htmlFormGroupExampleFaceBook" placeholder="Home Price"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<input type="text" className="form-control" id="htmlFormGroupExampleTwitter" placeholder="Down Payment"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-2">
										<div className="my_profile_setting_input form-group">
									    	<input type="text" className="form-control" id="htmlFormGroupExampleLinkedin" placeholder="10%"/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="application_statics shop_single_tab_content style3 mt30">
								<ul className="nav nav-tabs float-right fn-414" id="myTab" role="tablist">
									<li className="nav-item">
									    <a className="nav-link active" id="hourly-tab" data-toggle="tab" href="#hourly" role="tab" aria-controls="hourly" aria-selected="true">Hours</a>
									</li>
									<li className="nav-item">
									    <a className="nav-link" id="weekly-tab" data-toggle="tab" href="#weekly" role="tab" aria-controls="weekly" aria-selected="false">Weekly</a>
									</li>
									<li className="nav-item">
									    <a className="nav-link" id="monthly-tab" data-toggle="tab" href="#monthly" role="tab" aria-controls="monthly" aria-selected="false">Monthly</a>
									</li>
								</ul>
								<div className="tab-content" id="myTabContent2">
									<div className="tab-pane fade show active" id="hourly" role="tabpanel" aria-labelledby="hourly-tab">
										<h4 className="mt10-414">Property Views</h4>
										<canvas id="myChartweave" width="100%" height="50"></canvas>
									</div>
									<div className="tab-pane fade" id="weekly" role="tabpanel" aria-labelledby="weekly-tab">
										<h4 className="mt10-414">Property Views</h4>
										<div className="c_container w100"></div>
									</div>
									<div className="tab-pane fade" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
										<h4 className="mt10-414">Property Views</h4>
										<canvas className="ls_barchart" id="chart"></canvas>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="product_single_content">
								<div className="mbp_pagination_comments mt30">
									<ul className="total_reivew_view">
										<li className="list-inline-item sub_titles">896 Reviews</li>
										<li className="list-inline-item">
											<ul className="star_list">
												<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
												<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
												<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
												<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
												<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
											</ul>
										</li>
										<li className="list-inline-item avrg_review">( 4.5 out of 5 )</li>
										<li className="list-inline-item write_review">Write a Review</li>
									</ul>
									<div className="mbp_first media">
										<img src="images/testimonial/1.png" className="mr-3" alt="1.png"/>
										<div className="media-body">
									    	<h4 className="sub_title mt-0">Diana Cooper
												<div className="sspd_review dif">
													<ul className="ml10">
														<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
														<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
														<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
														<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
														<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
														<li className="list-inline-item"></li>
													</ul>
												</div>
									    	</h4>
									    	<a className="sspd_postdate fz14" href="#">December 28, 2020</a>
									    	<p className="mt10">Beautiful home, very picturesque and close to everything in jtree! A little warm htmlFor a hot weekend, but would love to come back during the cooler seasons!</p>
										</div>
									</div>
									<div className="custom_hr"></div>
									<div className="mbp_first media">
										<img src="images/testimonial/2.png" className="mr-3" alt="2.png"/>
										<div className="media-body">
									    	<h4 className="sub_title mt-0">Ali Tufan
												<div className="sspd_review dif">
													<ul className="ml10">
														<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
														<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
														<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
														<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
														<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
														<li className="list-inline-item"></li>
													</ul>
												</div>
									    	</h4>
									    	<a className="sspd_postdate fz14" href="#">December 28, 2020</a>
									    	<p className="mt10">Beautiful home, very picturesque and close to everything in jtree! A little warm htmlFor a hot weekend, but would love to come back during the cooler seasons!</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="product_single_content">
								<div className="mbp_pagination_comments mt30">
									<div className="mbp_comment_htmlForm style2">
										<h4>Write a Review</h4>
										<ul className="sspd_review">
											<li className="list-inline-item">
												<ul className="mb0">
													<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
													<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
													<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
													<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
													<li className="list-inline-item"><a href="#"><i className="fa fa-star"></i></a></li>
												</ul>
											</li>
											<li className="list-inline-item review_rating_para">Your Rating & Review</li>
										</ul>
										<form className="comments_htmlForm">
											<div className="form-group">
										    	<input type="text" className="form-control" id="exampleInputName1" aria-describedby="textHelp" placeholder="Review Title"/>
											</div>
											<div className="form-group">
											    <textarea className="form-control" id="examplehtmlFormControlTextarea1" rows="12" placeholder="Your Review"></textarea>
											</div>
											<button type="submit" className="btn btn-thm">Submit Review <span className="flaticon-right-arrow-1"></span></button>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<h4 className="mt30 mb30">Similar Properties</h4>
						</div>
						<div className="col-lg-6">
							<div className="feat_property">
								<div className="thumb">
									<img className="img-whp" src="images/property/fp1.jpg" alt="fp1.jpg"/>
									<div className="thmb_cntnt">
										<ul className="tag mb0">
											<li className="list-inline-item"><a href="#">htmlFor Rent</a></li>
											<li className="list-inline-item"><a href="#">Featured</a></li>
										</ul>
										<ul className="icon mb0">
											<li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1"></span></a></li>
											<li className="list-inline-item"><a href="#"><span className="flaticon-heart"></span></a></li>
										</ul>
										<a className="fp_price" href="#">$13,000<small>/mo</small></a>
									</div>
								</div>
								<div className="details">
									<div className="tc_content">
										<p className="text-thm">Apartment</p>
										<h4>Renovated Apartment</h4>
										<p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los Angeles, CA 90015</p>
										<ul className="prop_details mb0">
											<li className="list-inline-item"><a href="#">Beds: 4</a></li>
											<li className="list-inline-item"><a href="#">Baths: 2</a></li>
											<li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
										</ul>
									</div>
									<div className="fp_footer">
										<ul className="fp_meta float-left mb0">
											<li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png"/></a></li>
											<li className="list-inline-item"><a href="#">Ali Tufan</a></li>
										</ul>
										<div className="fp_pdate float-right">4 years ago</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="feat_property">
								<div className="thumb">
									<img className="img-whp" src="images/property/fp2.jpg" alt="fp2.jpg"/>
									<div className="thmb_cntnt">
										<ul className="tag mb0">
											<li className="list-inline-item"><a href="#">htmlFor Rent</a></li>
										</ul>
										<ul className="icon mb0">
											<li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1"></span></a></li>
											<li className="list-inline-item"><a href="#"><span className="flaticon-heart"></span></a></li>
										</ul>
										<a className="fp_price" href="#">$13,000<small>/mo</small></a>
									</div>
								</div>
								<div className="details">
									<div className="tc_content">
										<p className="text-thm">Apartment</p>
										<h4>Renovated Apartment</h4>
										<p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los Angeles, CA 90015</p>
										<ul className="prop_details mb0">
											<li className="list-inline-item"><a href="#">Beds: 4</a></li>
											<li className="list-inline-item"><a href="#">Baths: 2</a></li>
											<li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
										</ul>
									</div>
									<div className="fp_footer">
										<ul className="fp_meta float-left mb0">
											<li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png"/></a></li>
											<li className="list-inline-item"><a href="#">Ali Tufan</a></li>
										</ul>
										<div className="fp_pdate float-right">4 years ago</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="feat_property">
								<div className="thumb">
									<img className="img-whp" src="images/property/fp3.jpg" alt="fp3.jpg"/>
									<div className="thmb_cntnt">
										<ul className="tag mb0">
											<li className="list-inline-item"><a href="#">htmlFor Sale</a></li>
										</ul>
										<ul className="icon mb0">
											<li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1"></span></a></li>
											<li className="list-inline-item"><a href="#"><span className="flaticon-heart"></span></a></li>
										</ul>
										<a className="fp_price" href="#">$13,000<small>/mo</small></a>
									</div>
								</div>
								<div className="details">
									<div className="tc_content">
										<p className="text-thm">Apartment</p>
										<h4>Renovated Apartment</h4>
										<p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los Angeles, CA 90015</p>
										<ul className="prop_details mb0">
											<li className="list-inline-item"><a href="#">Beds: 4</a></li>
											<li className="list-inline-item"><a href="#">Baths: 2</a></li>
											<li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
										</ul>
									</div>
									<div className="fp_footer">
										<ul className="fp_meta float-left mb0">
											<li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png"/></a></li>
											<li className="list-inline-item"><a href="#">Ali Tufan</a></li>
										</ul>
										<div className="fp_pdate float-right">4 years ago</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="feat_property">
								<div className="thumb">
									<img className="img-whp" src="images/property/fp1.jpg" alt="fp1.jpg"/>
									<div className="thmb_cntnt">
										<ul className="tag mb0">
											<li className="list-inline-item"><a href="#">htmlFor Rent</a></li>
											<li className="list-inline-item"><a href="#">Featured</a></li>
										</ul>
										<ul className="icon mb0">
											<li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1"></span></a></li>
											<li className="list-inline-item"><a href="#"><span className="flaticon-heart"></span></a></li>
										</ul>
										<a className="fp_price" href="#">$13,000<small>/mo</small></a>
									</div>
								</div>
								<div className="details">
									<div className="tc_content">
										<p className="text-thm">Apartment</p>
										<h4>Renovated Apartment</h4>
										<p><span className="flaticon-placeholder"></span> 1421 San Pedro St, Los Angeles, CA 90015</p>
										<ul className="prop_details mb0">
											<li className="list-inline-item"><a href="#">Beds: 4</a></li>
											<li className="list-inline-item"><a href="#">Baths: 2</a></li>
											<li className="list-inline-item"><a href="#">Sq Ft: 5280</a></li>
										</ul>
									</div>
									<div className="fp_footer">
										<ul className="fp_meta float-left mb0">
											<li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png"/></a></li>
											<li className="list-inline-item"><a href="#">Ali Tufan</a></li>
										</ul>
										<div className="fp_pdate float-right">4 years ago</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-xl-4">
					<div className="sidebar_listing_list">
						<div className="sidebar_advanced_search_widget">
							<div className="sl_creator">
								<h4 className="mb25">Listed By</h4>
								<div className="media">
									<img className="mr-3" src="images/team/lc1.png" alt="lc1.png"/>
									<div className="media-body">
								    	<h5 className="mt-0 mb0">Samul Williams</h5>
								    	<p className="mb0">(123)456-7890</p>
								    	<p className="mb0">info@findhouse.com</p>
								    	<a className="text-thm" href="#">View My Listing</a>
								  	</div>
								</div>
							</div>
							<ul className="sasw_list mb0">
								<li className="search_area">
								    <div className="form-group">
								    	<input type="text" className="form-control" id="exampleInputName1" placeholder="Your Name"/>
								    </div>
								</li>
								<li className="search_area">
								    <div className="form-group">
								    	<input type="number" className="form-control" id="exampleInputName2" placeholder="Phone"/>
								    </div>
								</li>
								<li className="search_area">
								    <div className="form-group">
								    	<input type="email" className="form-control" id="exampleInputEmail" placeholder="Email"/>
								    </div>
								</li>
								<li className="search_area">
		                            <div className="form-group">
		                                <textarea id="htmlForm_message" name="htmlForm_message" className="form-control required" rows="5" required="required" placeholder="I'm interest in [ Listing Single ]"></textarea>
		                            </div>
								</li>
								<li>
									<div className="search_option_button">
									    <button type="submit" className="btn btn-block btn-thm">Search</button>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="sidebar_listing_list">
						<div className="sidebar_advanced_search_widget">
							<ul className="sasw_list mb0">
								<li className="search_area">
								    <div className="form-group">
								    	<input type="text" className="form-control" id="exampleInputName1" placeholder="keyword"/>
								    	<label htmlFor="exampleInputEmail"><span className="flaticon-magnifying-glass"></span></label>
								    </div>
								</li>
								<li className="search_area">
								    <div className="form-group">
								    	<input type="text" className="form-control" id="exampleInputEmail" placeholder="Location"/>
								    	<label htmlFor="exampleInputEmail"><span className="flaticon-maps-and-flags"></span></label>
								    </div>
								</li>
								<li>
									<div className="search_option_two">
										<div className="candidate_revew_select">
											<select className="selectpicker w100 show-tick">
												<option>Status</option>
												<option>Apartment</option>
												<option>Bungalow</option>
												<option>Condo</option>
												<option>House</option>
												<option>Land</option>
												<option>Single Family</option>
											</select>
										</div>
									</div>
								</li>
								<li>
									<div className="search_option_two">
										<div className="candidate_revew_select">
											<select className="selectpicker w100 show-tick">
												<option>Property Type</option>
												<option>Apartment</option>
												<option>Bungalow</option>
												<option>Condo</option>
												<option>House</option>
												<option>Land</option>
												<option>Single Family</option>
											</select>
										</div>
									</div>
								</li>
								<li>
									<div className="small_dropdown2">
									    <div id="prncgs2" className="btn dd_btn">
									    	<span>Price</span>
									    	<label htmlFor="exampleInputEmail2"><span className="fa fa-angle-down"></span></label>
									    </div>
									  	<div className="dd_content2">
										    <div className="pricing_acontent">
										    	<span id="slider-range-value1"></span>
												<span className="mt0" id="slider-range-value2"></span>
											    <div id="slider"></div>
												<input type="text" className="amount" placeholder="$52,239"/> 
												<input type="text" className="amount2" placeholder="$985,14"/>
												<div className="slider-range"></div> 
										    </div>
									  	</div>
									</div>
								</li>
								<li>
									<div className="search_option_two">
										<div className="candidate_revew_select">
											<select className="selectpicker w100 show-tick">
												<option>Bathrooms</option>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
												<option>6</option>
											</select>
										</div>
									</div>
								</li>
								<li>
									<div className="search_option_two">
										<div className="candidate_revew_select">
											<select className="selectpicker w100 show-tick">
												<option>Bedrooms</option>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
												<option>6</option>
											</select>
										</div>
									</div>
								</li>
								<li>
									<div className="search_option_two">
										<div className="candidate_revew_select">
											<select className="selectpicker w100 show-tick">
												<option>Garages</option>
												<option>Yes</option>
												<option>No</option>
												<option>Others</option>
											</select>
										</div>
									</div>
								</li>
								<li>
									<div className="search_option_two">
										<div className="candidate_revew_select">
											<select className="selectpicker w100 show-tick">
												<option>Year built</option>
												<option>2013</option>
												<option>2014</option>
												<option>2015</option>
												<option>2016</option>
												<option>2017</option>
												<option>2018</option>
												<option>2019</option>
												<option>2020</option>
											</select>
										</div>
									</div>
								</li>
								<li className="min_area list-inline-item">
								    <div className="form-group">
								    	<input type="text" className="form-control" id="exampleInputName2" placeholder="Min Area"/>
								    </div>
								</li>
								<li className="max_area list-inline-item">
								    <div className="form-group">
								    	<input type="text" className="form-control" id="exampleInputName3" placeholder="Max Area"/>
								    </div>
								</li>
								<li>
								  	<div id="accordion" className="panel-group">
									    <div className="panel">
									      	<div className="panel-heading">
										      	<h4 className="panel-title">
										        	<a href="#panelBodyRating" className="accordion-toggle link" data-toggle="collapse" data-parent="#accordion"><i className="flaticon-more"></i> Advanced features</a>
										        </h4>
									      	</div>
										    <div id="panelBodyRating" className="panel-collapse collapse">
										        <div className="panel-body row">
										      		<div className="col-lg-12">
										                <ul className="ui_kit_checkbox selectable-list float-left fn-400">
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck16"/>
																	<label className="custom-control-label" htmlFor="customCheck16">Air Conditioning</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck17"/>
																	<label className="custom-control-label" htmlFor="customCheck17">Barbeque</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck18"/>
																	<label className="custom-control-label" htmlFor="customCheck18">Gym</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck19"/>
																	<label className="custom-control-label" htmlFor="customCheck19">Microwave</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck20"/>
																	<label className="custom-control-label" htmlFor="customCheck20">TV Cable</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck21"/>
																	<label className="custom-control-label" htmlFor="customCheck21">Lawn</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck22"/>
																	<label className="custom-control-label" htmlFor="customCheck22">Refrigerator</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck23"/>
																	<label className="custom-control-label" htmlFor="customCheck23">Swimming Pool</label>
																</div>
										                	</li>
										                </ul>
										                <ul className="ui_kit_checkbox selectable-list float-right fn-400">
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck24"/>
																	<label className="custom-control-label" htmlFor="customCheck24">WiFi</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck25"/>
																	<label className="custom-control-label" htmlFor="customCheck25">Sauna</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck26"/>
																	<label className="custom-control-label" htmlFor="customCheck26">Dryer</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck27"/>
																	<label className="custom-control-label" htmlFor="customCheck27">Washer</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck28"/>
																	<label className="custom-control-label" htmlFor="customCheck28">Laundry</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck29"/>
																	<label className="custom-control-label" htmlFor="customCheck29">Outdoor Shower</label>
																</div>
										                	</li>
										                	<li>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input" id="customCheck30"/>
																	<label className="custom-control-label" htmlFor="customCheck30">Window Coverings</label>
																</div>
										                	</li>
										                </ul>
											        </div>
										        </div>
										    </div>
									    </div>
									</div>
								</li>
								<li>
									<div className="search_option_button">
									    <button type="submit" className="btn btn-block btn-thm">Search</button>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="terms_condition_widget">
						<h4 className="title">Featured Properties</h4>
						<div className="sidebar_feature_property_slider">
							<div className="item">
								<div className="feat_property home7 agent">
									<div className="thumb">
										<img className="img-whp" src="images/property/fp1.jpg" alt="fp1.jpg"/>
										<div className="thmb_cntnt">
											<ul className="tag mb0">
												<li className="list-inline-item"><a href="#">htmlFor Rent</a></li>
												<li className="list-inline-item"><a href="#">Featured</a></li>
											</ul>
											<a className="fp_price" href="#">$13,000<small>/mo</small></a>
											<h4 className="posr color-white">Renovated Apartment</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="feat_property home7 agent">
									<div className="thumb">
										<img className="img-whp" src="images/property/fp2.jpg" alt="fp2.jpg"/>
										<div className="thmb_cntnt">
											<ul className="tag mb0">
												<li className="list-inline-item"><a href="#">htmlFor Rent</a></li>
												<li className="list-inline-item"><a href="#">Featured</a></li>
											</ul>
											<a className="fp_price" href="#">$13,000<small>/mo</small></a>
											<h4 className="posr color-white">Renovated Apartment</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="feat_property home7 agent">
									<div className="thumb">
										<img className="img-whp" src="images/property/fp3.jpg" alt="fp3.jpg"/>
										<div className="thmb_cntnt">
											<ul className="tag mb0">
												<li className="list-inline-item"><a href="#">htmlFor Rent</a></li>
												<li className="list-inline-item"><a href="#">Featured</a></li>
											</ul>
											<a className="fp_price" href="#">$13,000<small>/mo</small></a>
											<h4 className="posr color-white">Renovated Apartment</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="feat_property home7 agent">
									<div className="thumb">
										<img className="img-whp" src="images/property/fp4.jpg" alt="fp4.jpg"/>
										<div className="thmb_cntnt">
											<ul className="tag mb0">
												<li className="list-inline-item"><a href="#">htmlFor Rent</a></li>
												<li className="list-inline-item"><a href="#">Featured</a></li>
											</ul>
											<a className="fp_price" href="#">$13,000<small>/mo</small></a>
											<h4 className="posr color-white">Renovated Apartment</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="feat_property home7 agent">
									<div className="thumb">
										<img className="img-whp" src="images/property/fp5.jpg" alt="fp5.jpg"/>
										<div className="thmb_cntnt">
											<ul className="tag mb0">
												<li className="list-inline-item"><a href="#">htmlFor Rent</a></li>
												<li className="list-inline-item"><a href="#">Featured</a></li>
											</ul>
											<a className="fp_price" href="#">$13,000<small>/mo</small></a>
											<h4 className="posr color-white">Renovated Apartment</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="terms_condition_widget">
						<h4 className="title">Categories Property</h4>
						<div className="widget_list">
							<ul className="list_details">
								<li><a href="#"><i className="fa fa-caret-right mr10"></i>Apartment <span className="float-right">6 properties</span></a></li>
								<li><a href="#"><i className="fa fa-caret-right mr10"></i>Condo <span className="float-right">12 properties</span></a></li>
								<li><a href="#"><i className="fa fa-caret-right mr10"></i>Family House <span className="float-right">8 properties</span></a></li>
								<li><a href="#"><i className="fa fa-caret-right mr10"></i>Modern Villa <span className="float-right">26 properties</span></a></li>
								<li><a href="#"><i className="fa fa-caret-right mr10"></i>Town House <span className="float-right">89 properties</span></a></li>
							</ul>
						</div>
					</div>
					<div className="sidebar_feature_listing">
						<h4 className="title">Recently Viewed</h4>
						<div className="media">
							<img className="align-self-start mr-3" src="images/blog/fls1.jpg" alt="fls1.jpg"/>
							<div className="media-body">
						    	<h5 className="mt-0 post_title">Nice Room With View</h5>
						    	<a href="#">$13,000/<small>/mo</small></a>
						    	<ul className="mb0">
						    		<li className="list-inline-item">Beds: 4</li>
						    		<li className="list-inline-item">Baths: 2</li>
						    		<li className="list-inline-item">Sq Ft: 5280</li>
						    	</ul>
							</div>
						</div>
						<div className="media">
							<img className="align-self-start mr-3" src="images/blog/fls2.jpg" alt="fls2.jpg"/>
							<div className="media-body">
						    	<h5 className="mt-0 post_title">Villa called Archangel</h5>
						    	<a href="#">$13,000<small>/mo</small></a>
						    	<ul className="mb0">
						    		<li className="list-inline-item">Beds: 4</li>
						    		<li className="list-inline-item">Baths: 2</li>
						    		<li className="list-inline-item">Sq Ft: 5280</li>
						    	</ul>
							</div>
						</div>
						<div className="media">
							<img className="align-self-start mr-3" src="images/blog/fls3.jpg" alt="fls3.jpg"/>
							<div className="media-body">
						    	<h5 className="mt-0 post_title">Sunset Studio</h5>
						    	<a href="#">$13,000<small>/mo</small></a>
						    	<ul className="mb0">
						    		<li className="list-inline-item">Beds: 4</li>
						    		<li className="list-inline-item">Baths: 2</li>
						    		<li className="list-inline-item">Sq Ft: 5280</li>
						    	</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	
    )
}

export default Details