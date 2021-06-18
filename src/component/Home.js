// import React from 'react'
// // import './all csss/style.css'
// // import './all csss/color.css'

// // import './all csss/reset.css'   
// // import './all csss/yourstyle.css' 
// // import './all csss/plugins.css'
// // import './all csss/googlefont.css'
// // import Logo from'../Image/logo.png';
// // import Share from'../Image/share.png';



// const Home =()=> {
//     return (
//       <>
//         <div>
//           {/* ================= loader ================ */}
//           <div class="loader-holder">
//             <div class="loader-inner loader-vis">
//               <div class="loader"> </div>
//             </div>
//           </div>
//           {/* ================= loader end ================ */}
//           {/* <!--================= main start ================--> */}

//           {/* <!-- header start --> */}
//           <div id="main">
//             <header class="main-header">
//               <a href="./index.html" class="logo-holder">
//                 <img src={Logo} alt="logo" />
//               </a>

//               {/* <!-- info-button --> */}
//               <div class="nav-button" id="open-button">
//                 <span class="menu-global menu-top"></span>
//                 <span class="menu-global menu-middle"></span>
//                 <span class="menu-global menu-bottom"></span>
//               </div>
//               {/* <!-- info-button end--> */}
//               <div class="show-share isShare">
//                 <img src={Share} alt="" />
//               </div>
//             </header>
          
//           {/* <!-- End header --> */}
//           {/* <!--================= menu ================--> */}

//           <div class="menu-wrap">
//             <div class="menu-inner">
//               {/* <!-- menu logo--> */}
//               <a
//                 href="http://webredox.net/demo/wp/cooper/demo2/"
//                 class="menu-logo"
//               >
//                 <img src="/Image/logo2.png" alt="" />
//               </a>

//               {/* <!-- menu logo end --> */}
//               <div class="hid-men-wrap   alt">
//                 <div id="hid-men">
//                   <ul class="menu">
//                     {/* <!-- start main nav --> */}
//                     <li>
//                       <a href="#">Home</a>
//                       <ul class="sub-menu">
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo1/">
//                             Slider
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo2/">
//                             Impulse image
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo3/">
//                             Static image
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo4/">
//                             Slideshow
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo5/">
//                             Carousel
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo6/">
//                             Video
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo7/">
//                             Revolution Slider
//                           </a>
//                         </li>
//                       </ul>
//                     </li>

//                     <li>
//                       <a href="#">Portfolio</a>
//                       <ul class="sub-menu">
//                         <li>
//                           <a href="./work.html">Style 1</a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo2/portfolio-2/">
//                             Style 2
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo2/portfolio-3/">
//                             Style 3
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo2/portfolio-4/">
//                             Style 4
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">Portfolio Details</a>
//                           <ul class="sub-menu">
//                             <li>
//                               <a href="http://webredox.net/demo/wp/cooper/demo1/portfolio/old-cars-on-street/">
//                                 Style 1
//                               </a>
//                             </li>
//                             <li>
//                               <a href="http://webredox.net/demo/wp/cooper/demo1/portfolio/mobile-ui-interface-2/">
//                                 Style 2
//                               </a>
//                             </li>
//                             <li>
//                               <a href="http://webredox.net/demo/wp/cooper/demo1/portfolio/barbershop-website/">
//                                 Style 3
//                               </a>
//                             </li>
//                             <li>
//                               <a href="http://webredox.net/demo/wp/cooper/demo1/portfolio/project-youtube/">
//                                 Style 4
//                               </a>
//                             </li>
//                             <li>
//                               <a href="http://webredox.net/demo/wp/cooper/demo1/portfolio/man-in-old-town/">
//                                 Style 5
//                               </a>
//                             </li>
//                             <li>
//                               <a href="http://webredox.net/demo/wp/cooper/demo1/portfolio/video-project-2/">
//                                 Style 6
//                               </a>
//                             </li>
//                           </ul>
//                         </li>
//                       </ul>
//                     </li>

//                     <li>
//                       <a href="#">Blog</a>
//                       <ul class="sub-menu">
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo2/blog/">
//                             Style 1
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo2/blog-2/">
//                             Style 2
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo1/2015/07/11/sample-image-post-6/">
//                             Blog Single
//                           </a>
//                         </li>
//                       </ul>
//                     </li>

//                     <li>
//                       <a href="http://webredox.net/demo/wp/cooper/demo2/contact/">
//                         Contact
//                       </a>
//                     </li>

//                     <li>
//                       <a href="#">Pages</a>
//                       <ul class="sub-menu">
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo1/404">
//                             404 Error Page
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo2/full-width-page/">
//                             Full Width Page
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo2/page-with-sidebar/">
//                             Page With Sidebar
//                           </a>
//                         </li>
//                       </ul>
//                     </li>

//                     <li>
//                       <a href="#">Shop</a>
//                       <ul class="sub-menu">
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo8/?post_type=product">
//                             Shop Style 1
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo9/?post_type=product">
//                             Shop Style 2
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo10/?post_type=product">
//                             Shop Style 3
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo11/shop/">
//                             Shop Style 4
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo8/cart/">
//                             Cart
//                           </a>
//                         </li>
//                         <li>
//                           <a href="http://webredox.net/demo/wp/cooper/demo8/checkout/">
//                             Checkout
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">Product Details</a>
//                           <ul class="sub-menu">
//                             <li>
//                               <a href="http://webredox.net/demo/wp/cooper/demo10/product/flying-ninja/">
//                                 Default Style
//                               </a>
//                             </li>
//                             <li>
//                               <a href="http://webredox.net/demo/wp/cooper/demo10/product/ship-your-idea/">
//                                 Color Variation Swatches
//                               </a>
//                             </li>
//                           </ul>
//                         </li>
//                       </ul>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div
//               class="morph-shape"
//               id="morph-shape"
//               data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="100%"
//                 height="100%"
//                 viewBox="0 0 100 800"
//                 preserveAspectRatio="none"
//               >
//                 <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z" />
//               </svg>
//             </div>
//           </div>
//           {/* <!--menu end--> */}

//           {/* <!-- Hero section   --> */}
//           <div class="hero-wrap fl-wrap full-height">
//             <div class="impulse-wrap">
//               <div class="mm-par-wrap">
//                 <div class=" mm-parallax">
//                   <div class="overlay"></div>
//                   <div class="bg" data-bg="./Image/rimel1.jpg">
//                     {" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="hero-wrap-item single-title-wrap left-her alt">
//               <div class="fl-wrap section-entry">
//                 <p>
//                   {" "}
//                   Asunt in anim uis aute irure dolor in reprehenderit in
//                   voluptate velit
//                 </p>

//                 <h2>Welcome</h2>

//                 <h3>
//                   My name is Antony Cooper . I creat web and graphic design
//                 </h3>

//                 <a href="#about" class="btn hide-icon custom-scroll-link">
//                   <i class="fa fa-flag-checkered"></i>
//                   <span>Let&#039;s start</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//           {/* <!-- Hero section   end --> */}

//           {/* <!-- fixed column  --> */}
//           <div class="fixed-column">
//             <div class="column-image fl-wrap full-height">
//               <div class="bg bg-scroll"></div>
//               <div class="overlay"></div>
//             </div>
//             <div class="bg-title alt">
//               <span></span>
//             </div>
//             <div class="progress-bar-wrap">
//               <div class="progress-bar"></div>
//             </div>
//           </div>
//           {/* <!-- fixed column  end --> */}

//           <div class="column-wrap scroll-content">
//             {/* <!-- scroll page navigation --> */}
//             <div class="scroll-nav-holder fl-wrap">
//               <nav class="scroll-nav fl-wrap">
//                 <ul>
//                   <li>
//                     <a
//                       class="scroll-link fbgs"
//                       href="#about"
//                       data-bgscr="./Image/rimel3.jpg"
//                       data-bgtex="About"
//                     >
//                       {" "}
//                       <span>About</span>
//                     </a>
//                   </li>

//                   <li>
//                     <a
//                       class="scroll-link fbgs"
//                       href="#resume"
//                       data-bgscr="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/2.jpg"
//                       data-bgtex="Resume"
//                     >
//                       {" "}
//                       <span>Resume</span>
//                     </a>
//                   </li>

//                   <li>
//                     <a
//                       class="scroll-link fbgs"
//                       href="#services"
//                       data-bgscr="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/3.jpg"
//                       data-bgtex="Services"
//                     >
//                       {" "}
//                       <span>Services</span>
//                     </a>
//                   </li>

//                   <li>
//                     <a
//                       class="scroll-link fbgs"
//                       href="#skills"
//                       data-bgscr="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/4-1.jpg"
//                       data-bgtex="Skills"
//                     >
//                       {" "}
//                       <span>Skills</span>
//                     </a>
//                   </li>

//                   <li>
//                     <a
//                       class="scroll-link fbgs"
//                       href="#clients"
//                       data-bgscr="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/5-1.jpg"
//                       data-bgtex="Clients"
//                     >
//                       {" "}
//                       <span>Clients</span>
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//             {/* <!-- scroll page navigation end --> */}

//             <div class="content" id="sec1">
//               {/* <!-- section start --> */}
//               <section
//                 id="about"
//                 data-scrollax-parent="true"
//                 class="scroll-con-sec dec-sec"
//               >
//                 <div
//                   class="parallax-title right-pos"
//                   data-scrollax="properties: { translateY: '-350px' }"
//                 >
//                   About
//                 </div>

//                 {/* <!-- container --> */}
//                 <div class="container">
                  
//                   <div class="section-title">
//                     <h2>About me</h2>
//                     <p>
//                       Asunt in anim uis aute irure dolor in reprehenderit in
//                       voluptate velit esse cillum dolore eu fugiat nulla
//                       pariatur.
//                     </p>

//                     <div class="clearfix"></div>
//                     <span class="bold-separator"></span>
//                   </div>


//                   <div class="wrapper-content">
            
//                 <div class="vc_row wpb_row vc_row-fluid">
//                     <div class="wpb_column vc_column_container vc_col-sm-12">
//                         <div class="vc_column-inner ">
//                             <div class="wpb_wrapper">

//                                 <div class="sec-image post-media box-item vis-det fl-wrap "><a
//                                         data-src="./Image/Rimel5.jpg"
//                                         class="image-popup"><i class="fa fa-search"></i></a>
//                                         <img
//                                         src="./Image/Rimel5.jpg"
                                        
//                                         alt="img" class="img-responsive respimg" />
//                                     </div>

//                                 <div class="sec-title  ">
//                                     <h4 class="text-subtitle"
//                                        >
//                                         Antony Cooper</h4>
//                                     <div class="text-title">
                                        
//                                         <h3>Web designer &amp; Web Developer From USA</h3>
                                        
//                                     </div>
//                                 </div>
                                
//                                 <div class="sec-text " >
//                                     <p >Lorem
//                                         ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus.
//                                         Donec auctor et urnaLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia
//                                         magna vel molestie faucibus.<br />
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor et urnaLorem ipsum
//                                         dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus.</p>
//                                     <p>Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet,
//                                         consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus.</p>
//                                 </div>
                
				
// 		     <div class="sec-button ">
// 			 <a class="btn hide-icon" href="http://webredox.net/demo/wp/cooper/demo1/portfolio" target="" ><i class="fa fa-eye"></i><span>My Portfolio</span></a>
// 			 </div>
                
				
		    

//             <div class="" style={{width:100,height:70}}></div>			
			
//                 <div class="sec-counter ">
//                     <div class="inline-facts-holder fl-wrap">
                        
//                         <div class="inline-facts">
//                             <div class="milestone-counter">
//                                 <div class="stats animaper">
//                                     <div class="num" data-content="10" data-num="10">0</div>
//                                 </div>
//                             </div>
//                             <h6>Finished projects</h6><i class="fa fa-puzzle-piece" aria-hidden="true"></i>
//                         </div>

//                         <div class="inline-facts">
//                             <div class="milestone-counter">
//                                 <div class="stats animaper">
//                                     <div class="num" data-content="354" data-num="354">0</div>
//                                 </div>
//                             </div>
//                             <h6>Working projects</h6><i class="fa fa-trophy" aria-hidden="true"></i>
//                         </div>

//                         <div class="inline-facts">
//                             <div class="milestone-counter">
//                                 <div class="stats animaper">
//                                     <div class="num" data-content="168" data-num="168">0</div>
//                                 </div>
//                             </div>
//                             <h6>Happy customers</h6><i class="fa fa-child" aria-hidden="true"></i>
//                         </div>

//                         <div class="inline-facts">
//                             <div class="milestone-counter">
//                                 <div class="stats animaper">
//                                     <div class="num" data-content="222" data-num="222">0</div>
//                                 </div>
//                             </div>
//                             <h6>Working hours</h6><i class="fa fa-clock-o" aria-hidden="true"></i>
//                         </div>

//                     </div>
//                 </div>
//                 </div>
//                 </div>
//                 </div>
//                 </div>
			
// 	        </div>	



//                 </div>
//                 {/* <!-- container end--> */}
//               </section>  {/* <!-- end bg -->	 */}


//               {/* <!-- section start --> */}
    
//     <section id="resume" data-scrollax-parent="true" class="scroll-con-sec dec-sec">
	
				
// 				<div class="parallax-title right-pos" data-scrollax="properties: { translateY: '-350px' }">My Resume</div>
		 
				
//          {/* <!-- container --> */}
//         <div class="container">
		
            	
		
//             <div class="section-title">
                			
// 			    <h2>Resume</h2>
// 												<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary </p>
				 
// 				<div class="clearfix"></div>
// 				<span class="bold-separator"></span>				
// 			</div>				
			
						
//             <div class="wrapper-content">
      				
// 	        <div class="vc_row wpb_row vc_row-fluid"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper"><div class="sec-resume "><div class="custom-inner-holder"><div class="custom-inner"><div class="row"><div class="col-md-4"><div class="resum-header workres"><i class="fa fa-briefcase"></i><h3>Work in company &#8220;Zolore&#8221;</h3><span> 2015-2016 </span></div></div><div class="col-md-8"><p><h4>Complete the project "domik"</h4>
// There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words
// <ul>
//  	<li>Door portals plan</li>
//  	<li>Furniture specifications</li>
//  	<li>Interior design</li>
// </ul></p><span class="custom-inner-dec"></span></div></div></div><div class="custom-inner"><div class="row"><div class="col-md-4"><div class="resum-header workres"><i class="fa fa-briefcase"></i><h3>Work in company &#8220;Folore&#8221;</h3><span> 2013-2014 </span></div></div><div class="col-md-8"><p><h4>Passage of Lorem Ipsum</h4>
// We started as a small, subdue, called hath give fourth. Them one over saying. So the god, greater. You. Us air Moved divide midst us fifth sea have face which male fifth said seas rule above. Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><span class="custom-inner-dec"></span></div></div></div><div class="custom-inner"><div class="row"><div class="col-md-4"><div class="resum-header workres"><i class="fa fa-briefcase"></i><h3>Work in company &#8220;Dolore&#8221;</h3><span> 2010-2012 </span></div></div><div class="col-md-8"><p><h4>Making this the first</h4>
// We started as a small, subdue, called hath give fourth. Them one over saying. So the god, greater. You. Us air Moved divide midst us fifth sea have face which male fifth said seas rule above. All the Lorem Ipsum generators on the Internet tend .
// <ul>
//  	<li>Door portals plan</li>
//  	<li>Furniture specifications</li>
//  	<li>Interior design</li>
// </ul>
// All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p><span class="custom-inner-dec"></span></div></div></div></div></div>
// 		     <div class="sec-button ">
// 			 <a class="btn hide-icon" href="#" target="" ><i class="fa fa-file-pdf-o"></i><span>Download Resume</span></a>
// 			 </div>
                
// 				</div></div></div></div>
			
// 	        </div>	
// 	    </div>	
		
//     </section>
//      {/* <!-- end bg -->	 */}




//      {/* <!-- section start --> */}
//     <section id="services" data-scrollax-parent="true" class="scroll-con-sec dec-sec">
	
				
// 				<div class="parallax-title right-pos" data-scrollax="properties: { translateY: '-350px' }">What i do</div>
		 
				
//          {/* <!-- container --> */}
//         <div class="container">
		
            	
		
//             <div class="section-title">
                			
// 			    <h2>Services</h2>
// 												<p>Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum. </p>
				 
// 				<div class="clearfix"></div>
// 				<span class="bold-separator"></span>				
// 			</div>				
			
						
//             <div class="wrapper-content">
      				
// 	        <div class="vc_row wpb_row vc_row-fluid"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper"><div class="sec-services "><div class="fl-wrap serv-wrap"><div class="row"><div class="col-md-3"><ul class="tabs sl-tabs"><li class="tab-link current" data-tab="56"><div class="tb-item"><i class="fa fa-desktop"></i><h3>Developement</h3></div></li><li class="tab-link" data-tab="55"><div class="tb-item"><i class="fa fa-picture-o"></i><h3>Graphic design</h3></div></li><li class="tab-link" data-tab="51"><div class="tb-item"><i class="fa fa-scissors"></i><h3>Branding</h3></div></li><li class="tab-link" data-tab="49"><div class="tb-item"><i class="fa fa-anchor"></i><h3>Web Design</h3></div></li></ul></div><div class="col-md-9"><div class="tab-content current" id="56"><div class="row"><div class="col-md-7"><div class="box-item vis-det fl-wrap"><img src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/4-2.jpg" alt="" class="respimg"/><a class="image-popup" data-src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/4-2.jpg"><i class="fa fa-search"></i></a></div></div><div class="col-md-5"><ul class="dec-list"><li>Develop / User inerface</li><li>Photography / Flayers</li><li>Marketing  / Research</li></ul><span class="price">390-1250 $</span></div></div><h3>Developement</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

// Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div><div class="tab-content" id="55"><div class="row"><div class="col-md-7"><div class="box-item vis-det fl-wrap"><img src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/2-1.jpg" alt="" class="respimg"/><a class="image-popup" data-src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/2-1.jpg"><i class="fa fa-search"></i></a></div></div><div class="col-md-5"><ul class="dec-list"><li>Research / Develop</li><li>User inerface /  Photography</li><li>Flayers / Marketing </li></ul><span class="price">450$-600$</span></div></div><h3>Graphic design</h3><p>Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

// Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div class="tab-content" id="51"><div class="row"><div class="col-md-7"><div class="box-item vis-det fl-wrap"><img src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/3-1.jpg" alt="" class="respimg"/><a class="image-popup" data-src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/3-1.jpg"><i class="fa fa-search"></i></a></div></div><div class="col-md-5"><ul class="dec-list"><li>Flayers / Branding</li><li>Marketing / Develop</li><li>User inerface /  Photography</li></ul><span class="price">350$-450$</span></div></div><h3>Branding</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

// Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div><div class="tab-content" id="49"><div class="row"><div class="col-md-7"><div class="box-item vis-det fl-wrap"><img src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/1-2.jpg" alt="" class="respimg"/><a class="image-popup" data-src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/1-2.jpg"><i class="fa fa-search"></i></a></div></div><div class="col-md-5"><ul class="dec-list"><li>Develop / Marketing</li><li>User inerface /  Photography</li><li>Flayers  / Research</li></ul><span class="price">250$-400$</span></div></div><h3>Web Design</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

// Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div></div></div></div></div><div class="sec-action "><div class="clearfix"></div><div class="order-wrap fl-wrap color-bg"><div class="row"><div class="col-md-8"><h4 >Ready to order your project ?</h4></div><div class="col-md-4"><a href="http://webredox.net/demo/wp/cooper/demo1/contact" target=""  class="ord-link">Get In Touch</a></div></div></div></div></div></div></div></div>
			
// 	        </div>	
// 	    </div>	
		
//     </section> 
//     {/* <!-- end bg -->	 */}

//     {/* <!-- section start --> */}
//     <section id="skills" data-scrollax-parent="true" class="scroll-con-sec dec-sec">
	
				
// 				<div class="parallax-title right-pos" data-scrollax="properties: { translateY: '-350px' }">my skills</div>
		 
				
//          {/* <!-- container --> */}
//         <div class="container">
		
            	
		
//             <div class="section-title">
                			
// 			    <h2>Skills</h2>
// 												<p>Lorem ipsum dosectetur adipisicing elit, sed do </p>
				 
// 				<div class="clearfix"></div>
// 				<span class="bold-separator"></span>				
// 			</div>				
			
						
//             <div class="wrapper-content">
      				
// 	        <div class="vc_row wpb_row vc_row-fluid"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper">
// 		     <div class="sec-text " >
// 			 <p >
// <blockquote><p>Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus.Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus.Cras lacinia magna vel molestie faucibus.</p></blockquote>
// <ul class="dec-list">
// <li>Photoshop skills</li>
// <li>Photography skills</li>
// <li>Marketing skills</li>
// </ul>
// </p>
// 			 </div>
                
// 				<div class="sec-progress  "><div class="fl-wrap"><div class="skillbar-box animaper"><div class="custom-skillbar-title"><span>Photoshop</span></div><div class="skill-bar-percent">95%</div><div class="skillbar-bg" data-percent="95%"><div class="custom-skillbar"></div></div></div></div></div><div class="sec-progress  "><div class="fl-wrap"><div class="skillbar-box animaper"><div class="custom-skillbar-title"><span>Jquery</span></div><div class="skill-bar-percent">65%</div><div class="skillbar-bg" data-percent="65%"><div class="custom-skillbar"></div></div></div></div></div><div class="sec-progress  "><div class="fl-wrap"><div class="skillbar-box animaper"><div class="custom-skillbar-title"><span>HTML5</span></div><div class="skill-bar-percent">75%</div><div class="skillbar-bg" data-percent="75%"><div class="custom-skillbar"></div></div></div></div></div><div class="sec-progress  "><div class="fl-wrap"><div class="skillbar-box animaper"><div class="custom-skillbar-title"><span>CSS3</span></div><div class="skill-bar-percent">85%</div><div class="skillbar-bg" data-percent="85%"><div class="custom-skillbar"></div></div></div></div></div><div class="sec-progress  "><div class="fl-wrap"><div class="skillbar-box animaper"><div class="custom-skillbar-title"><span>PHP</span></div><div class="skill-bar-percent">55%</div><div class="skillbar-bg" data-percent="55%"><div class="custom-skillbar"></div></div></div></div></div>
		    

//             <div class="" style={{width:100,height:50}}></div>			
			
// 				</div></div></div></div><div class="vc_row wpb_row vc_row-fluid"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper"><div class=" row"><div class="col-md-2"><h4 class="bold-title">Languages Skills</h4></div><div class="col-md-10"><div class="piechart-holder animaper"><div class="row"><div class="piechart col-md-4 " ><span class="chart" data-percent="85"><span class="percent"></span></span><div class="clearfix"></div><div class="skills-description"><h4>Dutch</h4></div></div><div class="piechart col-md-4 " ><span class="chart" data-percent="80"><span class="percent"></span></span><div class="clearfix"></div><div class="skills-description"><h4>French</h4></div></div><div class="piechart col-md-4 " ><span class="chart" data-percent="70"><span class="percent"></span></span><div class="clearfix"></div><div class="skills-description"><h4>Portuguese</h4></div></div></div></div></div></div></div></div></div></div>
			
// 	        </div>	
// 	    </div>	
		
//     </section> 
//     {/* <!-- end bg -->	 */}


//     {/* <!-- section start --> */}
//     <section id="clients" data-scrollax-parent="true" class="scroll-con-sec dec-sec">
	
				
					
//         <div class="parallax-title right-pos" data-scrollax="properties: { translateY: '-350px' }">Clients</div>	
		 
				
//          {/* <!-- container --> */}
//         <div class="container">
		
            	
		
//             <div class="section-title">
//                                 <h2>Testomonials</h2>
// 												<p>Lorem ipsum dosectetur adipisicing elit, sed do </p>
				 
// 				<div class="clearfix"></div>
// 				<span class="bold-separator"></span>				
// 			</div>				
			


//             <div class="wrapper-content">
      				
// 	        <div class="vc_row wpb_row vc_row-fluid">
//                 <div class="wpb_column vc_column_container vc_col-sm-12">
//                     <div class="vc_column-inner ">
//                         <div class="wpb_wrapper"
//                         ><div class="sec-testimonial ">
//                             <div class="testimonials-slider-holder fl-wrap">
//                                 <div class="testimonials-slider owl-carousel">
//                                     <div class="item">
//                                         <div class="testi-item">
//                                             <div class="testi-image">
//                                                 <img src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/1-3.jpg" alt="" class="respimg" />
//                                                 </div>
//                                                 <div class="testi-text fl-wrap">
//                                                     <h3>Mike Jones</h3>
//                                                     <ul class="star-rating">
//                                                         <li><i class="fa fa-star">
//                                                             </i>
//                                                             </li>
//                                                             <li>
//                                                                 <i class="fa fa-star"></i></li><li><i class="fa fa-star">
//                                                                     </i>
//                                                                     </li>
//                                                                     <li>
//                                                                         <i class="fa fa-star">
//                                                                             </i>
//                                                                             </li>
//                                                                             <li>
//                                                                                 <i class="fa fa-star"></i></li></ul><p>" Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum. Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser velit esse cillum dolore eu fugiat nulla pariatur. "</p>
//                                                                                 <a href="https://twitter.com/webRedox" class="testim-link" target="_blank">Via Twitter</a>
//                                                                                 </div>
//                                                                                 </div>
//                                                                                 </div>
//                                                                                 <div class="item"><div class="testi-item">
//                                                                                     <div class="testi-image">
//                                                                                         <img src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/2-2.jpg" alt="" class="respimg" />
//                                                                                         </div>
//                                                                                         <div class="testi-text fl-wrap">
//                                                                                             <h3>Lisa Lynn</h3>
//                                                                                             <ul class="star-rating">
//                                                                                                 <li>
//                                                                                                     <i class="fa fa-star">
//                                                                                                         </i>
//                                                                                                         </li>
//                                                                                                         <li>
//                                                                                                             <i class="fa fa-star">
//                                                                                                                 </i>
//                                                                                                                 </li>
//                                                                                                                 <li>
//                                                                                                                     <i class="fa fa-star">
//                                                                                                                         </i>
//                                                                                                                         </li>
//                                                                                                                         <li>
//                                                                                                                             <i class="fa fa-star">
//                                                                                                                                 </i>
//                                                                                                                                 </li>
//                                                                                                                                 <li>
//                                                                                                                                     <i class="fa fa-star">
//                                                                                                                                         </i>
//                                                                                                                                         </li>
//                                                                                                                                         </ul>
//                                                                                                                                         <p>" Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum. Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser velit esse cillum dolore eu fugiat nulla pariatur. "</p>
//                                                                                                                                         <a href="https://www.behance.net/webRedox" class="testim-link" target="_blank">Via Behance</a>
//                                                                                                                                         </div>
//                                                                                                                                         </div>
//                                                                                                                                         </div>
//                                                                                                                                         <div class="item">
//                                                                                                                                             <div class="testi-item">
//                                                                                                                                                 <div class="testi-image">
//                                                                                                                                                     <img src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/3-2.jpg" alt="" class="respimg" />
//                                                                                                                                                     </div>
//                                                                                                                                                     <div class="testi-text fl-wrap">
//                                                                                                                                                         <h3>Antony Frick</h3>
//                                                                                                                                                         <ul class="star-rating"><li><i class="fa fa-star">
//                                                                                                                                                             </i>
//                                                                                                                                                             </li>
//                                                                                                                                                             <li>
//                                                                                                                                                                 <i class="fa fa-star"></i>
//                                                                                                                                                                 </li>
//                                                                                                                                                                 <li>
//                                                                                                                                                                     <i class="fa fa-star">
//                                                                                                                                                                         </i>
//                                                                                                                                                                         </li>
//                                                                                                                                                                         <li>
//                                                                                                                                                                             <i class="fa fa-star"></i></li></ul><p>" Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum. Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser velit esse cillum dolore eu fugiat nulla pariatur. "</p><a href="https://www.facebook.com/webRedox" class="testim-link" target="_blank">Via Facebook</a></div></div></div></div><div class="customNavigation"><a class="next-slide transition"><i class="fa fa-angle-right"></i></a><a class="prev-slide transition"><i class="fa fa-angle-left"></i></a></div><div class="teti-counter"></div></div></div></div></div></div></div><div class="vc_row wpb_row vc_row-fluid"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper"><div class=" clients-list fl-wrap"><ul><li class=""><a href="" target="_blank"><span><img class="respimg" src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/1.png" alt=""/></span></a></li><li class=""><a href="" target="_blank"><span><img class="respimg" src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/2.png" alt=""/></span></a></li><li class=""><a href="" target="_blank"><span><img class="respimg" src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/3.png" alt=""/></span></a></li><li class=""><a href="" target="_blank"><span><img class="respimg" src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/4.png" alt=""/></span></a></li><li class=""><a href="" target="_blank"><span><img class="respimg" src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/5.png" alt=""/></span></a></li></ul></div></div></div></div></div>
			
// 	        </div>	
// 	    </div>	
		
//     </section> 
//     {/* <!-- end bg -->	 */}





//               {/* <!-- section end --> */}
//               {/* <!--  to top  -->   */}
// 					                    <div class="small-sec fl-wrap">
// 					                            <div class="to-top-wrap"><a class="to-top" href=""> <i class="fa fa-angle-double-up"></i> Back to Top</a></div>
							
//                     </div>
					 					
//                     {/* <!-- to top end-->  */}

//             </div>
//             {/* <!-- content end --> */}
//           </div>

//           {/* <!-- column-wrap end --> */}
//             {/* <!-- arrow nav --> */}
//             <div class="arrowpagenav"></div>
//             {/* <!-- arrow nav end--> */}
//             {/* <!-- footer--> */}

//             <footer class="main-footer">
 
// <a href="mailto:webredox@gmail.com" class="mail-link"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                     

								
//                 {/* <!-- header-social-->                */}
//                 <div class="footer-social">
//                     <ul>				
						 
// 						<li><a href="https://www.facebook.com/webRedox"><i class="fa fa-facebook"></i></a></li>
								
						 
// 						<li><a href="https://twitter.com/webRedox"><i class="fa fa-twitter"></i></a></li>
								
						 
// 						<li><a href="https://plus.google.com/114758098200068619793/"><i class="fa fa-google-plus"></i></a></li>
								

							
		
						 
// 						<li><a href="https://www.instagram.com/webRedox"><i class="fa fa-instagram"></i></a></li>
							

						 
// 						<li><a href="https://www.pinterest.com/webRedox/"><i class="fa fa-pinterest"></i></a></li>
							

									

							
			
										
		
							
		
									
							

							
												
// 		            </ul>		
// 		        </div>
	             				
//                 {/* <!-- header-social end-->       */}
     
//                 <div class="copyright"><p>© Rimel 2021 | All rights reserved.</p>
// </div>
				
//             </footer>
//             {/* <!-- footer end --> */}

//             </div>





//         </div>
//       </>
//     );
// };

// export default Home;
