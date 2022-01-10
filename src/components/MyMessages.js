import useFetch from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import AuthContext from "../contexts/AuthContext";

function MyMessages(){
	const [messages, setMessages] = useState([]);
	
    let navigate = useNavigate();
    const { token, email } = useContext(AuthContext);

    useEffect(() => {
        if (!token) {
          navigate({
            pathname: "/login",
          });
        }
      }, [token, navigate]);

	  const url = `https://localhost:44382/api/Property/GetConversations?recipient=${email}`;
	  const [items, error, isLoaded] = useFetch(url, token);

	  const SendMessage = async (e) => {
		e.preventDefault();
	
		let formData = new FormData(e.currentTarget);
		let message = formData.get("message");
		
	
		await fetch(`https://localhost:44382/api/Property/SendMessage`, {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		  },
		  body: JSON.stringify({
			sender: email,
            recipient: messages[0].sender,
            propertyId: messages[0].propertyId,
            description: message
		  }),
		}).then((res) => res.json());
	
	  }

	  const GetMessages =  (e) => {
		e.preventDefault()
		let id = e.currentTarget.value;
		  
			fetch (`https://localhost:44382/api/Property/GetRecipientMessages?conversationId=${id}`, {
			  headers: {
				Authorization: `Bearer ${token}`,
			  },
			})
			  .then((res) => res.json())
			  .then(data => {
				  setMessages(data)
			  
			  })
		  
		  
		
	  }

	  

	  console.log(items);
	  
	  if (error) {
		return <div>Error: {error.message}</div>;
	  } else if (!isLoaded) {
		return <div>Loading...</div>;
	  } else {
		
	
    return (
		
        <>
        <div class="dashboard_sidebar_menu dn-992">
        <ul class="sidebar-menu">
          <li class="header">
            <img src="images/header-logo2.png" alt="header-logo2.png" />{" "}
            FindHouse
          </li>
          <li class="title">
            <span>Main</span>
          </li>

          <li class="treeview">
            <Link to="/myMessages">
              <i class="flaticon-envelope"></i>
              <span> Message</span>
            </Link>
          </li>
          <li class="treeview">
            <a href="page-my-properties.html">
              <i class="flaticon-home"></i> <span>My Properties</span>
              <i class="fa fa-angle-down pull-right"></i>
            </a>
          </li>
          <li>
            <a href="page-my-favorites.html">
              <i class="flaticon-heart"></i> <span> My Favorites</span>
            </a>
          </li>
          <li>
            <a href="page-my-savesearch.html">
              <i class="flaticon-magnifying-glass"></i>{" "}
              <span>Saved Search</span>
            </a>
          </li>
          <li>
            <a href="page-login.html">
              <i class="flaticon-logout"></i> <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
        <section class="our-dashbord dashbord bgc-f7 pb50">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-3 col-xl-2 dn-992 pl0"></div>
				<div class="col-lg-9 col-xl-10 maxw100flex-992">
					<div class="row">
						<div class="col-lg-12">
							<div class="dashboard_navigationbar dn db-992">
								<div class="dropdown">
									<button  class="dropbtn"><i class="fa fa-bars pr10"></i> Dashboard Navigation</button>
									<ul id="myDropdown" class="dropdown-content">
										<li><a href="page-dashboard.html"><span class="flaticon-layers"></span> Dashboard</a></li>
										<li class="active"><a href="page-message.html"><span class="flaticon-envelope"></span> Message</a></li>
										<li><a href="page-my-properties.html"><span class="flaticon-home"></span> My Properties</a></li>
										<li><a href="page-my-favorites.html"><span class="flaticon-heart"></span> My Favorites</a></li>
										<li><a href="page-my-savesearch.html"><span class="flaticon-magnifying-glass"></span> Saved Search</a></li>
										<li><a href="page-my-review.html"><span class="flaticon-chat"></span> My Reviews</a></li>
										<li><a href="page-my-packages.html"><span class="flaticon-box"></span> My Package</a></li>
										<li><a href="page-my-profile.html"><span class="flaticon-user"></span> My Profile</a></li>
										<li><a href="page-add-new-property.html"><span class="flaticon-filter-results-button"></span> Add New Listing</a></li>
										<li><a href="page-login.html"><span class="flaticon-logout"></span> Logout</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-12 mb10">
							<div class="breadcrumb_content style2"> 
								<h2 class="breadcrumb_title">Message</h2>
								<p>We are glad to see you again!</p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-5 col-xl-4">
							<div class="message_container">
								<div class="inbox_user_list">
									<div class="iu_heading">
										<div class="candidate_revew_search_box">
											<form class="form-inline">
										    	<input class="form-control" type="search" placeholder="Serach" aria-label="Search"/>
										    	<button class="btn" type="submit"><span class="flaticon-magnifying-glass"></span></button>
										    </form>
										</div>
									</div>
									<ul>
									{items.map((item) => (
                      
                    
										<li class="contact" value={item.id}  onClick={GetMessages}>
											<a href="#">
												<div class="wrap">
													<span class="contact-status online"></span>
													<img class="img-fluid" src="images/team/s1.jpg" alt="s1.jpg"/>
													<div class="meta">
														<h5 class="name">{item.sender}</h5>
														<p class="preview">{item.description}</p>
													</div>
													<div class="m_notif">2</div>
												</div>
											</a>
										</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-7 col-xl-8">
							<div class="message_container">
								<div class="user_heading">
									<a href="#">
										<div class="wrap">
											<span class="contact-status online"></span>
											<img class="img-fluid" src="images/team/s5.jpg" alt="s5.jpg"/>
											<div class="meta">
												<h5 class="name">Joanne Davies</h5>
												<p class="preview">was online today at 11:43</p>
											</div>
										</div>
									</a>
								</div>
								<div class="inbox_chatting_box">
									<ul class="chatting_content">
									{messages.map((item) => (
                      
                    
					  <li class={item.sender == email ? "media sent" : "media reply"}>
											<span class="contact-status busy"></span>
											<img class="img-fluid align-self-start mr-3" src="images/team/s6.jpg" alt="s6.jpg"/>
											<div class="media-body">
												<div class="date_time">{item.date}</div>
										    	<p>{item.description}</p>
											</div>
										</li>
					  ))}
										{/* <li class="media sent">
											<span class="contact-status busy"></span>
											<img class="img-fluid align-self-start mr-3" src="images/team/s6.jpg" alt="s6.jpg"/>
											<div class="media-body">
												<div class="date_time">Today, 10:31</div>
										    	<p>Hello, John!</p>
											</div>
										</li>
										<li class="media sent">
											<span class="contact-status busy"></span>
											<img class="img-fluid align-self-start mr-3" src="images/team/s6.jpg" alt="s6.jpg"/>
											<div class="media-body">
												<div class="date_time">Today, 10:31</div>
										    	<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
											</div>
										</li>
										<li class="media reply first">
											<div class="media-body text-right">
												<div class="date_time">Today, 10:35</div>
										    	<p>Are we meeting today?</p>
											</div>
										</li>
										<li class="media reply">
											<div class="media-body text-right">
												<div class="date_time">Today, 10:35</div>
										    	<p>The project finally complete! Let's go to!</p>
											</div>
										</li>
										<li class="media sent">
											<span class="contact-status busy"></span>
											<img class="img-fluid align-self-start mr-3" src="images/team/s6.jpg" alt="s6.jpg"/>
											<div class="media-body">
												<div class="date_time">Today, 10:45</div>
										    	<p>Let's go!</p>
											</div>
										</li>
										<li class="media sent">
											<span class="contact-status busy"></span>
											<img class="img-fluid align-self-start mr-3" src="images/team/s6.jpg" alt="s6.jpg"/>
											<div class="media-body">
												<div class="date_time">Today, 10:51</div>
										    	<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
											</div>
										</li>
										<li class="media sent">
											<span class="contact-status busy"></span>
											<img class="img-fluid align-self-start mr-3" src="images/team/s6.jpg" alt="s6.jpg"/>
											<div class="media-body">
												<div class="date_time">Today, 10:31</div>
										    	<p>Hello, John!</p>
											</div>
										</li>
										<li class="media sent">
											<span class="contact-status busy"></span>
											<img class="img-fluid align-self-start mr-3" src="images/team/s6.jpg" alt="s6.jpg"/>
											<div class="media-body">
												<div class="date_time">Today, 10:31</div>
										    	<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
											</div>
										</li>
										<li class="media reply first">
											<div class="media-body text-right">
												<div class="date_time">Today, 10:35</div>
										    	<p>Are we meeting today?</p>
											</div>
										</li>
										<li class="media reply">
											<div class="media-body text-right">
												<div class="date_time">Today, 10:35</div>
										    	<p>The project finally complete! Let's go to!</p>
											</div>
										</li>
										<li class="media sent">
											<span class="contact-status busy"></span>
											<img class="img-fluid align-self-start mr-3" src="images/team/s6.jpg" alt="s6.jpg"/>
											<div class="media-body">
												<div class="date_time">Today, 10:45</div>
										    	<p>Let's go!</p>
											</div>
										</li>
										<li class="media sent">
											<span class="contact-status busy"></span>
											<img class="img-fluid align-self-start mr-3" src="images/team/s6.jpg" alt="s6.jpg"/>
											<div class="media-body">
												<div class="date_time">Today, 10:51</div>
										    	<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
											</div>
										</li>
										<li class="media reply first">
											<div class="media-body text-right">
												<div class="date_time">Today, 10:35</div>
										    	<p>Are we meeting today?</p>
											</div>
										</li>
										<li class="media reply">
											<div class="media-body text-right">
												<div class="date_time">Today, 10:35</div>
										    	<p>The project finally complete! Let's go to!</p>
											</div>
										</li>
										<li class="media sent">
											<span class="contact-status busy"></span>
											<img class="img-fluid align-self-start mr-3" src="images/team/s6.jpg" alt="s6.jpg"/>
											<div class="media-body">
												<div class="date_time">Today, 10:45</div>
										    	<p>Let's go!</p>
											</div>
										</li>
										<li class="media sent">
											<span class="contact-status busy"></span>
											<img class="img-fluid align-self-start mr-3" src="images/team/s6.jpg" alt="s6.jpg"/>
											<div class="media-body">
												<div class="date_time">Today, 10:51</div>
										    	<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
											</div>
										</li> */}
									</ul>
								</div>
								<div class="mi_text">
									<div class="message_input">
										<form class="form-inline" onSubmit={SendMessage}>
									    	<input class="form-control" id="message" name="message" type="search" placeholder="Enter text here..." aria-label="Search"/>
									    	<button class="btn" type="submit">Send Message</button>
									    </form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row mt50">
						<div class="col-lg-12">
							<div class="copyright-widget text-center">
								<p>© 2020 Find House. Made with love.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
    )
	}
}

export default MyMessages