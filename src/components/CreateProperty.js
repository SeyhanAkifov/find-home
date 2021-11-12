function CreateProperty () {
    return (
    <>
    <div className="col-lg-12 mb10">
							<div className="breadcrumb_content style2">
								<h2 className="breadcrumb_title">Add New Property</h2>
								<p>We are glad to see you again!</p>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="my_dashboard_review">
								<div className="row">
									<div className="col-lg-12">
										<h4 className="mb30">Create Listing</h4>
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="propertyTitle">Property Title</label>
									    	<input type="text" className="form-control" id="propertyTitle"/>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="my_profile_setting_textarea">
										    <label htmlFor="propertyDescription">Description</label>
										    <textarea className="form-control" id="propertyDescription" rows="7"></textarea>
										</div>
									</div>
									<div className="col-lg-6 col-xl-6">
										<div className="my_profile_setting_input ui_kit_select_search form-group">
									    	<label>Type</label>
											<select className="selectpicker" data-live-search="true" data-width="100%">
												<option data-tokens="type1">Type1</option>
												<option data-tokens="Type2">Type2</option>
												<option data-tokens="Type3">Type3</option>
												<option data-tokens="Type4">Type4</option>
												<option data-tokens="Type5">Type5</option>
											</select>
										</div>
									</div>
									<div className="col-lg-6 col-xl-6">
										<div className="my_profile_setting_input ui_kit_select_search form-group">
									    	<label>Status</label>
											<select className="selectpicker" data-live-search="true" data-width="100%">
												<option data-tokens="Status1">Status1</option>
												<option data-tokens="Status2">Status2</option>
												<option data-tokens="Status3">Status3</option>
												<option data-tokens="Status4">Status4</option>
												<option data-tokens="Status5">Status5</option>
											</select>
										</div>
									</div>
									<div className="col-lg-4 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="formGroupExamplePrice">Price</label>
									    	<input type="text" className="form-control" id="formGroupExamplePrice"/>
										</div>
									</div>
									<div className="col-lg-4 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="formGroupExampleArea">Area</label>
									    	<input type="text" className="form-control" id="formGroupExampleArea"/>
										</div>
									</div>
									<div className="col-lg-4 col-xl-4">
										<div className="my_profile_setting_input ui_kit_select_search form-group">
									    	<label>Rooms</label>
											<select className="selectpicker" data-live-search="true" data-width="100%">
												<option data-tokens="Status1">1</option>
												<option data-tokens="Status2">2</option>
												<option data-tokens="Status3">3</option>
												<option data-tokens="Status4">4</option>
												<option data-tokens="Status5">5</option>
												<option data-tokens="Status6">Other</option>
											</select>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="my_profile_setting_input">
											<button className="btn btn1 float-left">Back</button>
											<button className="btn btn2 float-right">Next</button>
										</div>
									</div>
								</div>
							</div>
							<div className="my_dashboard_review mt30">
								<div className="row">
									<div className="col-lg-12">
										<h4 className="mb30">Location</h4>
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="propertyAddress">Address</label>
									    	<input type="text" className="form-control" id="propertyAddress"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-6">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="propertyState">County / State</label>
									    	<input type="text" className="form-control" id="propertyState"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-6">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="propertyCity">City</label>
									    	<input type="text" className="form-control" id="propertyCity"/>
										</div>
									</div>
									<div className="col-lg-4 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="neighborHood">Neighborhood</label>
									    	<input type="text" className="form-control" id="neighborHood"/>
										</div>
									</div>
									<div className="col-lg-4 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="zipCode">Zip</label>
									    	<input type="text" className="form-control" id="zipCode"/>
										</div>
									</div>
									<div className="col-lg-4 col-xl-4">
										<div className="my_profile_setting_input ui_kit_select_search form-group">
									    	<label>Country</label>
											<select className="selectpicker" data-live-search="true" data-width="100%">
												<option data-tokens="Turkey">Turkey</option>
												<option data-tokens="Iran">Iran</option>
												<option data-tokens="Iraq">Iraq</option>
												<option data-tokens="Spain">Spain</option>
												<option data-tokens="Greece">Greece</option>
												<option data-tokens="Portugal">Portugal</option>
											</select>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="my_profile_setting_input form-group">
											<div className="h400 bdrs8" id="map-canvas"></div>
										</div>
									</div>
									<div className="col-lg-4 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="googleMapLat">Latitude (htmlFor Google Maps)</label>
									    	<input type="text" className="form-control" id="googleMapLat"/>
										</div>
									</div>
									<div className="col-lg-4 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="googleMapLong">Longitude (htmlFor Google Maps)</label>
									    	<input type="text" className="form-control" id="googleMapLong"/>
										</div>
									</div>
									<div className="col-lg-4 col-xl-4">
										<div className="my_profile_setting_input ui_kit_select_search form-group">
									    	<label>Google Map Street View</label>
											<select className="selectpicker" data-live-search="true" data-width="100%">
												<option data-tokens="Turkey">Street View v1</option>
												<option data-tokens="Iran">Street View v2</option>
												<option data-tokens="Iraq">Street View v3</option>
												<option data-tokens="Spain">Street View v4</option>
												<option data-tokens="Greece">Street View v5</option>
												<option data-tokens="Portugal">Street View v6</option>
											</select>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="my_profile_setting_input">
											<button className="btn btn1 float-left">Back</button>
											<button className="btn btn2 float-right">Next</button>
										</div>
									</div>
								</div>
							</div>
							<div className="my_dashboard_review mt30">
								<div className="row">
									<div className="col-lg-12">
										<h4 className="mb30">Detailed Information</h4>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="propertyId">Property ID</label>
									    	<input type="text" className="form-control" id="propertyId"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="propertyASize">Area Size</label>
									    	<input type="text" className="form-control" id="propertyASize"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="sizePrefix">Size Prefix</label>
									    	<input type="text" className="form-control" id="sizePrefix"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="landArea">Land Area</label>
									    	<input type="text" className="form-control" id="landArea"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="LASPostfix">Land Area Size Postfix</label>
									    	<input type="text" className="form-control" id="LASPostfix"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="bedRooms">Bedrooms</label>
									    	<input type="text" className="form-control" id="bedRooms"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="bathRooms">Bathrooms</label>
									    	<input type="text" className="form-control" id="bathRooms"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="garages">Garages</label>
									    	<input type="text" className="form-control" id="garages"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="garagesSize">Garages Size</label>
									    	<input type="text" className="form-control" id="garagesSize"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="yearBuild">Year Built</label>
									    	<input type="text" className="form-control" id="yearBuild"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="videoUrl">Video URL</label>
									    	<input type="text" className="form-control" id="videoUrl"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="virtualTour">360° Virtual Tour</label>
									    	<input type="text" className="form-control" id="virtualTour"/>
										</div>
									</div>
							        <div className="col-xl-12">
							        	<h4>Amenities</h4>
							        </div>
							        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2">
						                <ul className="ui_kit_checkbox selectable-list">
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck1"/>
													<label className="custom-control-label" htmlFor="customCheck1">Air Conditioning</label>
												</div>
						                	</li>
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck2"/>
													<label className="custom-control-label" htmlFor="customCheck2">Lawn</label>
												</div>
						                	</li>
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck3"/>
													<label className="custom-control-label" htmlFor="customCheck3">Swimming Pool</label>
												</div>
						                	</li>
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck4"/>
													<label className="custom-control-label" htmlFor="customCheck4">Barbeque</label>
												</div>
						                	</li>
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck5"/>
													<label className="custom-control-label" htmlFor="customCheck5">Microwave</label>
												</div>
						                	</li>
						                </ul>
							        </div>
							        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2">
						                <ul className="ui_kit_checkbox selectable-list">
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck6"/>
													<label className="custom-control-label" htmlFor="customCheck6">TV Cable</label>
												</div>
						                	</li>
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck7"/>
													<label className="custom-control-label" htmlFor="customCheck7">Dryer</label>
												</div>
						                	</li>
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck8"/>
													<label className="custom-control-label" htmlFor="customCheck8">Outdoor Shower</label>
												</div>
						                	</li>
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck9"/>
													<label className="custom-control-label" htmlFor="customCheck9">Washer</label>
												</div>
						                	</li>
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck10"/>
													<label className="custom-control-label" htmlFor="customCheck10">Gym</label>
												</div>
						                	</li>
						                </ul>
							        </div>
							        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2">
						                <ul className="ui_kit_checkbox selectable-list">
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck11"/>
													<label className="custom-control-label" htmlFor="customCheck11">Refrigerator</label>
												</div>
						                	</li>
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck12"/>
													<label className="custom-control-label" htmlFor="customCheck12">WiFi</label>
												</div>
						                	</li>
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck13"/>
													<label className="custom-control-label" htmlFor="customCheck13">Laundry</label>
												</div>
						                	</li>
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck14"/>
													<label className="custom-control-label" htmlFor="customCheck14">Sauna</label>
												</div>
						                	</li>
						                	<li>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck15"/>
													<label className="custom-control-label" htmlFor="customCheck15">Window Coverings</label>
												</div>
						                	</li>
						                </ul>
							        </div>
									<div className="col-xl-12">
										<div className="my_profile_setting_input">
											<button className="btn btn1 float-left">Back</button>
											<button className="btn btn2 float-right">Next</button>
										</div>
									</div>
								</div>
							</div>
							<div className="my_dashboard_review mt30">
								<div className="row">
									<div className="col-lg-12">
										<h4 className="mb30">Property media</h4>
									</div>
									<div className="col-lg-12">
										<ul className="mb0">
											<li className="list-inline-item">
												<div className="portfolio_item">
													<img className="img-fluid" src="images/property/fp1.jpg" alt="fp1.jpg"/>
								    				<div className="edu_stats_list" data-toggle="tooltip" data-placement="top" title="Delete" data-original-title="Delete"><a href="#"><span className="flaticon-garbage"></span></a></div>
												</div>
											</li>
											<li className="list-inline-item">
												<div className="portfolio_item">
													<img className="img-fluid" src="images/property/fp2.jpg" alt="fp2.jpg"/>
								    				<div className="edu_stats_list" data-toggle="tooltip" data-placement="top" title="Delete" data-original-title="Delete"><a href="#"><span className="flaticon-garbage"></span></a></div>
												</div>
											</li>
											<li className="list-inline-item">
												<div className="portfolio_item">
													<img className="img-fluid" src="images/property/fp3.jpg" alt="fp3.jpg"/>
								    				<div className="edu_stats_list" data-toggle="tooltip" data-placement="top" title="Delete" data-original-title="Delete"><a href="#"><span className="flaticon-garbage"></span></a></div>
												</div>
											</li>
										</ul>
									</div>
									<div className="col-lg-12">
										<div className="portfolio_upload">
											<input type="file" name="myfile" />
											<div className="icon"><span className="flaticon-download"></span></div>
											<p>Drag and drop images here</p>
										</div>
									</div>
									<div className="col-xl-6">
										<div className="resume_uploader mb30">
											<h4>Attachments</h4>
											<form className="form-inline">
												<input className="upload-path"/>
												<label className="upload">
												    <input type="file"/>
												    Select Attachment
												</label>
											</form>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="my_profile_setting_input">
											<button className="btn btn1 float-left">Back</button>
											<button className="btn btn2 float-right">Next</button>
										</div>
									</div>
								</div>
							</div>
							<div className="my_dashboard_review mt30">
								<div className="row">
									<div className="col-lg-12">
										<h4 className="mb30">Floor Plans</h4>
										<button className="btn admore_btn mb30">Add More</button>
									</div>
									<div className="col-xl-12">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="planDsecription">Plan Description</label>
									    	<input type="text" className="form-control" id="planDsecription"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="planBedrooms">Plan Bedrooms</label>
									    	<input type="text" className="form-control" id="planBedrooms"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="planBathrooms">Plan Bathrooms</label>
									    	<input type="text" className="form-control" id="planBathrooms"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="planPrice">Plan Price</label>
									    	<input type="text" className="form-control" id="planPrice"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="planPostfix">Price Postfix</label>
									    	<input type="text" className="form-control" id="planPostfix"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label htmlFor="planSize">Plan Size</label>
									    	<input type="text" className="form-control" id="planSize"/>
										</div>
									</div>
									<div className="col-lg-6 col-xl-4">
										<div className="my_profile_setting_input form-group">
									    	<label>Plan Image</label>
											<div className="avatar-upload">
										        <div className="avatar-edit">
										            <input className="btn btn-thm" type="file" id="imageUpload" accept=".png, .jpg, .jpeg"/>
										            <label htmlFor="imageUpload"></label>
										        </div>
										        <div className="avatar-preview">
										            <div id="imagePreview"></div>
										        </div>
										    </div>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="my_profile_setting_textarea mt30-991">
										    <label htmlFor="planDescription">Plan Description</label>
										    <textarea className="form-control" id="planDescription" rows="7"></textarea>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="my_profile_setting_input">
											<button className="btn btn1 float-left">Back</button>
											<button className="btn btn2 float-right">Next</button>
										</div>
									</div>
								</div>
							</div>
							</div>
                            </>
							
						
    )
}

export default CreateProperty