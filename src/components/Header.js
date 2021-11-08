function Header() {
    return (
        <header className="header-nav menu_style_home_one navbar-scrolltofixed stricky main-menu">
		<div className="container-fluid p0">
             <nav>
                 
		        <a href="#" className="navbar_brand float-left dn-smd"> <span>FindHouse</span>
		        </a>
                <ul id="respMenu" className="ace-responsive-menu text-right" data-menu-style="horizontal">
		            <li>
		                <a href="#"><span className="title">Home</span></a>
                       
		            </li>
		            <li>
		                <a href="#"><span className="title">Listing</span></a>
                       
		            </li>
		            <li>
		                <a href="#"><span className="title">Property</span></a>
		                
		            </li>
		            <li>
		                <a href="#"><span className="title">Pages</span></a>
		                
		            </li>
		            <li>
		                <a href="#"><span className="title">Blog</span></a>
		               
		            </li>
		            <li className="last">
		                <a href="page-contact.html"><span className="title">Contact</span></a>
		            </li>
	                
		        </ul>
		    </nav>
		</div>
	</header>
    )
}

export default Header;