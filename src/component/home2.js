import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import './all csss/style.css'
import './all csss/color.css'

import './all csss/reset.css'   
import './all csss/yourstyle.css' 
import './all csss/plugins.css'
import './all csss/googlefont.css'

import Share from "../Image/share.png";
import Contact from "./Contact";
 const Home2 = () => {

  const [click, setClick] = useState(false)
  const handleClick=()=>setClick(!click);
  const handleClose=()=>setClick(false);


  const [sideBar, setSideBar] = useState(false)
  const handleClickSidebar=()=>setClick(!sideBar);
  
 return (
    < >
      {/*================= loader ================*/}
      <div className="loader-holder">
        <div className="loader-inner loader-vis">
          <div className="loader" />
        </div>
      </div>
      {/*================= loader end ================*/}
      {/*================= main start ================*/}
      <div id="main">
        {/*================= Header ================*/}
        <header className="main-header">
          <a className="logo-holder">
            <img
              src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/logo.png"
              alt
            />
          </a>
          {/* info-button */}
          <div className="nav-button" id="open-button" onClick={handleClick}>
            {/* <span className="menu-global menu-top menu-top-click" />
            <span className="menu-global menu-middle menu-middle-click" />
            <span className="menu-global menu-bottom menu-bottom-click" /> */}

                <span className={click?  "menu-global menu-top menu-top-click"   : "menu-global menu-top"} />
                 <span className={click? " menu-global menu-middle menu-middle-click" :  "menu-global menu-middle" } />
                 <span className={click? "menu-global menu-bottom menu-bottom-click" :  "menu-global menu-bottom"}/>
                
          </div>
          
          {/* info-button end*/}
          <div className="show-share isShare">
            <img
              src="http://webredox.net/demo/wp/cooper/demo2/wp-content/themes/cooper/includes/images/share.png"
              alt
            />
          </div>
        </header>
        {/* End header */}
        {/*================= menu ================*/}
        <div className={click?"menu-wrap active":"menu-wrap"}>
          <div className={click?"menu-inner active":"menu-inner"}>
            {/* menu logo*/}
            <a
              href="http://webredox.net/demo/wp/cooper/demo2/"
              className="menu-logo"
            >
              <img
                src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/logo2.png"
                alt
              />
            </a>
            {/* menu logo end */}
            <div className="hid-men-wrap ">
              <div id="hid-men" className="sliding-menu ul">
               
                <ul className="menu">
                  {/* start main nav */}
                  <li>
                    <NavLink to="/">Home</NavLink>
                     </li>

                  <li>
                    <a href="#">Portfolio</a>
                     </li>

                  <li>
                    <a href="#">Blog</a>
                    </li>

                  <li > 
                      <a href="/Contact">Contact</a>
                  </li>
                  
                  <li>
                    <a href="#">Pages</a> </li>
                  <li>
                    <a href="#">Shop</a>
                     </li>
                </ul>
              </div>
            </div>
          </div>
         
        </div>
        {/*menu end*/}
        {/* Hero section   */}
        <div className="hero-wrap fl-wrap full-height">
          <div className="impulse-wrap">
            <div className="mm-par-wrap">
              <div className=" mm-parallax">
                <div className="overlay" />
                <div
                  className="bg"
                  data-bg="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/10-2.jpg"
                ></div>
              </div>
            </div>
          </div>
          <div className="hero-wrap-item single-title-wrap left-her alt">
            <div className="fl-wrap section-entry">
              <p>
                
                Asunt in anim uis aute irure dolor in reprehenderit in voluptate
                velit
              </p>
              <h2>Welcome</h2>
              <h3>My name is Antony Cooper . I creat web and graphic design</h3>
              <a href="#about" className="btn hide-icon custom-scroll-link">
                <i className="fa fa-flag-checkered" />
                <span>Let's start</span>
              </a>
            </div>
          </div>
        </div>
        {/* Hero section   end */}
        {/* fixed column  */}
        <div className="fixed-column">
          <div className="column-image fl-wrap full-height">
            <div className="bg bg-scroll" />
            <div className="overlay" />
          </div>
          <div className="bg-title alt">
            <span />
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar" />
          </div>
        </div>
        {/* fixed column  end */}
        <div className="column-wrap scroll-content">
          {/* scroll page navigation */}
          <div className="scroll-nav-holder fl-wrap">
            <nav className="scroll-nav fl-wrap">
              <ul>
                <li>
                  <a
                    className="scroll-link fbgs"
                    href="#about"
                    data-bgscr="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/1.jpg"
                    data-bgtex="About"
                  >
                    {" "}
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a
                    className="scroll-link fbgs"
                    href="#resume"
                    data-bgscr="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/2.jpg"
                    data-bgtex="Resume"
                  >
                    {" "}
                    <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a
                    className="scroll-link fbgs"
                    href="#services"
                    data-bgscr="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/3.jpg"
                    data-bgtex="Services"
                  >
                    {" "}
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a
                    className="scroll-link fbgs"
                    href="#skills"
                    data-bgscr="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/4-1.jpg"
                    data-bgtex="Skills"
                  >
                    {" "}
                    <span>Skills</span>
                  </a>
                </li>
                <li>
                  <a
                    className="scroll-link fbgs"
                    href="#clients"
                    data-bgscr="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/5-1.jpg"
                    data-bgtex="Clients"
                  >
                    {" "}
                    <span>Clients</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* scroll page navigation end */}
          <div className="content" id="sec1">
            {/* section start */}
            <section
              id="about"
              data-scrollax-parent="true"
              className="scroll-con-sec dec-sec"
            >
              <div
                className="parallax-title right-pos"
                data-scrollax="properties: { translateY: '-350px' }"
              >
                About
              </div>
              {/* container */}
              <div className="container">
                <div className="section-title">
                  <h2>About me</h2>
                  <p>
                    Asunt in anim uis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
                  </p>
                  <div className="clearfix" />
                  <span className="bold-separator" />
                </div>
                <div className="wrapper-content">
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div className="sec-image post-media box-item vis-det fl-wrap ">
                            <a
                              data-src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/1-1.jpg"
                              className="image-popup"
                            >
                              <i className="fa fa-search" />
                            </a>
                            <img
                              src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/1-1.jpg"
                              style={{
                                width: "",
                                height: "",
                                float: "",
                                margin: "",
                                padding: "",
                                position: "",
                                top: "",
                                bottom: "",
                                right: "",
                                left: ""
                              }}
                              alt="img"
                              className="img-responsive respimg"
                            />
                          </div>
                          <div className="sec-title  ">
                            <h4
                              className="text-subtitle"
                              style={{
                                margin: "30px 0px 0px",
                                padding: "",
                                color: "",
                                fontSize: "",
                                fontWeight: "",
                                lineHeight: "",
                                textAlign: "",
                                textTransform: ""
                              }}
                            >
                              Antony Cooper
                            </h4>
                            <div className="text-title">
                              <p />
                              <h3>Web designer &amp; Web Developer From USA</h3>
                              <p />
                            </div>
                          </div>
                          <div
                            className="sec-text "
                            style={{ margin: "", padding: "", background: "" }}
                          >
                            <p
                              style={{
                                color: "",
                                fontSize: "",
                                fontWeight: "",
                                lineHeight: "",
                                textAlign: "",
                                textTransform: ""
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Cras lacinia magna vel molestie faucibus.
                              Donec auctor et urnaLorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Cras lacinia magna vel
                              molestie faucibus.
                              <br />
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec auctor et urnaLorem ipsum dolor sit
                              amet, consectetur adipiscing elit. Cras lacinia
                              magna vel molestie faucibus.
                            </p>
                            <p>
                              Cras lacinia magna vel molestie faucibus. Donec
                              auctor et urnaLorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Cras lacinia magna vel
                              molestie faucibus.
                            </p>
                          </div>
                          <div className="sec-button ">
                            <a
                              className="btn hide-icon"
                              href="http://webredox.net/demo/wp/cooper/demo1/portfolio"
                              target
                              style={{
                                margin: "",
                                padding: "",
                                background: "",
                                color: "",
                                border: "",
                                borderRadius: "",
                                fontSize: "",
                                fontWeight: "",
                                float: "",
                                textTransform: ""
                              }}
                            >
                              <i className="fa fa-eye" />
                              <span>My Portfolio</span>
                            </a>
                          </div>
                          <div
                            className
                            style={{
                              width: "100%",
                              height: 70,
                              float: "left",
                              background: "",
                              position: "",
                              margin: "",
                              padding: "",
                              border: "",
                              borderRadius: ""
                            }}
                          />
                          <div className="sec-counter ">
                            <div className="inline-facts-holder fl-wrap">
                              <div className="inline-facts">
                                <div className="milestone-counter">
                                  <div className="stats animaper">
                                    <div
                                      className="num"
                                      data-content={461}
                                      data-num={461}
                                    >
                                      0
                                    </div>
                                  </div>
                                </div>
                                <h6>Finished projects</h6>
                                <i
                                  className="fa fa-puzzle-piece"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="inline-facts">
                                <div className="milestone-counter">
                                  <div className="stats animaper">
                                    <div
                                      className="num"
                                      data-content={354}
                                      data-num={354}
                                    >
                                      0
                                    </div>
                                  </div>
                                </div>
                                <h6>Working projects</h6>
                                <i className="fa fa-trophy" aria-hidden="true" />
                              </div>
                              <div className="inline-facts">
                                <div className="milestone-counter">
                                  <div className="stats animaper">
                                    <div
                                      className="num"
                                      data-content={168}
                                      data-num={168}
                                    >
                                      0
                                    </div>
                                  </div>
                                </div>
                                <h6>Happy customers</h6>
                                <i className="fa fa-child" aria-hidden="true" />
                              </div>
                              <div className="inline-facts">
                                <div className="milestone-counter">
                                  <div className="stats animaper">
                                    <div
                                      className="num"
                                      data-content={222}
                                      data-num={222}
                                    >
                                      0
                                    </div>
                                  </div>
                                </div>
                                <h6>Working hours</h6>
                                <i className="fa fa-clock-o" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{" "}
            {/* end bg */}
            {/* section start */}
            <section
              id="resume"
              data-scrollax-parent="true"
              className="scroll-con-sec dec-sec"
            >
              <div
                className="parallax-title right-pos"
                data-scrollax="properties: { translateY: '-350px' }"
              >
                My Resume
              </div>
              {/* container */}
              <div className="container">
                <div className="section-title">
                  <h2>Resume</h2>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary{" "}
                  </p>
                  <div className="clearfix" />
                  <span className="bold-separator" />
                </div>
                <div className="wrapper-content">
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div className="sec-resume ">
                            <div className="custom-inner-holder">
                              <div className="custom-inner">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="resum-header workres">
                                      <i className="fa fa-briefcase" />
                                      <h3>Work in company “Zolore”</h3>
                                      <span> 2015-2016 </span>
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <p />
                                    <h4>Complete the project "domik"</h4>
                                    There are many variations of passages of Lorem
                                    Ipsum available, but the majority have
                                    suffered alteration in some form, by injected
                                    humour, or randomised words which don't look
                                    even slightly believable. If you are going to
                                    use a passage of Lorem Ipsum, you need to be
                                    sure there isn't anything embarrassing hidden
                                    in the middle of text. All the Lorem Ipsum
                                    generators on the Internet tend to repeat
                                    predefined chunks as necessary, making this
                                    the first true generator on the Internet. It
                                    uses a dictionary of over 200 Latin words
                                    <ul>
                                      <li>Door portals plan</li>
                                      <li>Furniture specifications</li>
                                      <li>Interior design</li>
                                    </ul>
                                    <p />
                                    <span className="custom-inner-dec" />
                                  </div>
                                </div>
                              </div>
                              <div className="custom-inner">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="resum-header workres">
                                      <i className="fa fa-briefcase" />
                                      <h3>Work in company “Folore”</h3>
                                      <span> 2013-2014 </span>
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <p />
                                    <h4>Passage of Lorem Ipsum</h4>
                                    We started as a small, subdue, called hath
                                    give fourth. Them one over saying. So the god,
                                    greater. You. Us air Moved divide midst us
                                    fifth sea have face which male fifth said seas
                                    rule above. Quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip exea. commodo
                                    consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    <p />
                                    <span className="custom-inner-dec" />
                                  </div>
                                </div>
                              </div>
                              <div className="custom-inner">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="resum-header workres">
                                      <i className="fa fa-briefcase" />
                                      <h3>Work in company “Dolore”</h3>
                                      <span> 2010-2012 </span>
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <p />
                                    <h4>Making this the first</h4>
                                    We started as a small, subdue, called hath
                                    give fourth. Them one over saying. So the god,
                                    greater. You. Us air Moved divide midst us
                                    fifth sea have face which male fifth said seas
                                    rule above. All the Lorem Ipsum generators on
                                    the Internet tend .
                                    <ul>
                                      <li>Door portals plan</li>
                                      <li>Furniture specifications</li>
                                      <li>Interior design</li>
                                    </ul>
                                    All the Lorem Ipsum generators on the Internet
                                    tend to repeat predefined chunks as necessary,
                                    making this the first true generator on the
                                    Internet. It uses a dictionary of over 200
                                    Latin words
                                    <p />
                                    <span className="custom-inner-dec" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sec-button ">
                            <a
                              className="btn hide-icon"
                              href="#"
                              target
                              style={{
                                margin: "",
                                padding: "",
                                background: "",
                                color: "",
                                border: "",
                                borderRadius: "",
                                fontSize: "",
                                fontWeight: "",
                                float: "",
                                textTransform: ""
                              }}
                            >
                              <i className="fa fa-file-pdf-o" />
                              <span>Download Resume</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{" "}
            {/* end bg */}
            {/* section start */}
            <section
              id="services"
              data-scrollax-parent="true"
              className="scroll-con-sec dec-sec"
            >
              <div
                className="parallax-title right-pos"
                data-scrollax="properties: { translateY: '-350px' }"
              >
                What i do
              </div>
              {/* container */}
              <div className="container">
                <div className="section-title">
                  <h2>Services</h2>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in anim
                    id est laborum.{" "}
                  </p>
                  <div className="clearfix" />
                  <span className="bold-separator" />
                </div>
                <div className="wrapper-content">
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div className="sec-services ">
                            <div className="fl-wrap serv-wrap">
                              <div className="row">
                                <div className="col-md-3">
                                  <ul className="tabs sl-tabs">
                                    <li
                                      className="tab-link current"
                                      data-tab={56}
                                    >
                                      <div className="tb-item">
                                        <i className="fa fa-desktop" />
                                        <h3>Developement</h3>
                                      </div>
                                    </li>
                                    <li className="tab-link" data-tab={55}>
                                      <div className="tb-item">
                                        <i className="fa fa-picture-o" />
                                        <h3>Graphic design</h3>
                                      </div>
                                    </li>
                                    <li className="tab-link" data-tab={51}>
                                      <div className="tb-item">
                                        <i className="fa fa-scissors" />
                                        <h3>Branding</h3>
                                      </div>
                                    </li>
                                    <li className="tab-link" data-tab={49}>
                                      <div className="tb-item">
                                        <i className="fa fa-anchor" />
                                        <h3>Web Design</h3>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-9">
                                  <div className="tab-content current" id={56}>
                                    <div className="row">
                                      <div className="col-md-7">
                                        <div className="box-item vis-det fl-wrap">
                                          <img
                                            src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/4-2.jpg"
                                            alt
                                            className="respimg"
                                          />
                                          <a
                                            className="image-popup"
                                            data-src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/4-2.jpg"
                                          >
                                            <i className="fa fa-search" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="col-md-5">
                                        <ul className="dec-list">
                                          <li>Develop / User inerface</li>
                                          <li>Photography / Flayers</li>
                                          <li>Marketing / Research</li>
                                        </ul>
                                        <span className="price">390-1250 $</span>
                                      </div>
                                    </div>
                                    <h3>Developement</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Ut enim ad minim veniam, quis nostrud
                                      exercitation ullamco laboris nisi ut aliquip
                                      ex ea commodo consequat. Dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi ut
                                      aliquip ex ea commodo consequat. Quis
                                      nostrud exercitation ullamco laboris nisi ut
                                      aliquip exea. commodo consequat. Duis aute
                                      irure dolor in reprehenderit in voluptate
                                      velit esse cillum dolore eu fugiat nulla
                                      pariatur. Excepteur sint occaecat cupidatat
                                      non proident, sunt in culpa qui officia
                                      deserunt mollit anim id est laborum.
                                    </p>
                                  </div>
                                  <div className="tab-content" id={55}>
                                    <div className="row">
                                      <div className="col-md-7">
                                        <div className="box-item vis-det fl-wrap">
                                          <img
                                            src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/2-1.jpg"
                                            alt
                                            className="respimg"
                                          />
                                          <a
                                            className="image-popup"
                                            data-src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/2-1.jpg"
                                          >
                                            <i className="fa fa-search" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="col-md-5">
                                        <ul className="dec-list">
                                          <li>Research / Develop</li>
                                          <li>User inerface / Photography</li>
                                          <li>Flayers / Marketing </li>
                                        </ul>
                                        <span className="price">450$-600$</span>
                                      </div>
                                    </div>
                                    <h3>Graphic design</h3>
                                    <p>
                                      Quis nostrud exercitation ullamco laboris
                                      nisi ut aliquip exea. commodo consequat.
                                      Duis aute irure dolor in reprehenderit in
                                      voluptate velit esse cillum dolore eu fugiat
                                      nulla pariatur. Excepteur sint occaecat
                                      cupidatat non proident, sunt in culpa qui
                                      officia deserunt mollit anim id est laborum.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Ut enim ad minim veniam, quis nostrud
                                      exercitation ullamco laboris nisi ut aliquip
                                      ex ea commodo consequat.
                                    </p>
                                  </div>
                                  <div className="tab-content" id={51}>
                                    <div className="row">
                                      <div className="col-md-7">
                                        <div className="box-item vis-det fl-wrap">
                                          <img
                                            src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/3-1.jpg"
                                            alt
                                            className="respimg"
                                          />
                                          <a
                                            className="image-popup"
                                            data-src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/3-1.jpg"
                                          >
                                            <i className="fa fa-search" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="col-md-5">
                                        <ul className="dec-list">
                                          <li>Flayers / Branding</li>
                                          <li>Marketing / Develop</li>
                                          <li>User inerface / Photography</li>
                                        </ul>
                                        <span className="price">350$-450$</span>
                                      </div>
                                    </div>
                                    <h3>Branding</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Ut enim ad minim veniam, quis nostrud
                                      exercitation ullamco laboris nisi ut aliquip
                                      ex ea commodo consequat. Dolore magna
                                      aliqua. Quis nostrud exercitation ullamco
                                      laboris nisi ut aliquip exea. commodo
                                      consequat. Duis aute irure dolor in
                                      reprehenderit in voluptate velit esse cillum
                                      dolore eu fugiat nulla pariatur. Excepteur
                                      sint occaecat cupidatat non proident, sunt
                                      in culpa qui officia deserunt mollit anim id
                                      est laborum. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi ut
                                      aliquip ex ea commodo consequat. Quis
                                      nostrud exercitation ullamco laboris nisi ut
                                      aliquip exea. commodo consequat. Duis aute
                                      irure dolor in reprehenderit in voluptate
                                      velit esse cillum dolore eu fugiat nulla
                                      pariatur. Excepteur sint occaecat cupidatat
                                      non proident, sunt in culpa qui officia
                                      deserunt mollit anim id est laborum.
                                    </p>
                                  </div>
                                  <div className="tab-content" id={49}>
                                    <div className="row">
                                      <div className="col-md-7">
                                        <div className="box-item vis-det fl-wrap">
                                          <img
                                            src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/1-2.jpg"
                                            alt
                                            className="respimg"
                                          />
                                          <a
                                            className="image-popup"
                                            data-src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/1-2.jpg"
                                          >
                                            <i className="fa fa-search" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="col-md-5">
                                        <ul className="dec-list">
                                          <li>Develop / Marketing</li>
                                          <li>User inerface / Photography</li>
                                          <li>Flayers / Research</li>
                                        </ul>
                                        <span className="price">250$-400$</span>
                                      </div>
                                    </div>
                                    <h3>Web Design</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Ut enim ad minim veniam, quis nostrud
                                      exercitation ullamco laboris nisi ut aliquip
                                      ex ea commodo consequat.Quis nostrud
                                      exercitation ullamco laboris nisi ut aliquip
                                      exea. commodo consequat. Duis aute irure
                                      dolor in reprehenderit in voluptate velit
                                      esse cillum dolore eu fugiat nulla pariatur.
                                      Excepteur sint occaecat cupidatat non
                                      proident, sunt in culpa qui officia deserunt
                                      mollit anim id est laborum. Lorem ipsum
                                      dolor sit amet, consectetur adipisicing
                                      elit, sed do eiusmod tempor incididunt ut
                                      labore et dolore magna aliqua. Ut enim ad
                                      minim veniam, quis nostrud exercitation
                                      ullamco laboris nisi ut aliquip ex ea
                                      commodo consequat.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sec-action ">
                            <div className="clearfix" />
                            <div className="order-wrap fl-wrap color-bg">
                              <div className="row">
                                <div className="col-md-8">
                                  <h4 style={{ color: "" }}>
                                    Ready to order your project ?
                                  </h4>
                                </div>
                                <div className="col-md-4">
                                  <a
                                    href="http://webredox.net/demo/wp/cooper/demo1/contact"
                                    target
                                    style={{ color: "" }}
                                    className="ord-link"
                                  >
                                    Get In Touch
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{" "}
            {/* end bg */}
            {/* section start */}
            <section
              id="skills"
              data-scrollax-parent="true"
              className="scroll-con-sec dec-sec"
            >
              <div
                className="parallax-title right-pos"
                data-scrollax="properties: { translateY: '-350px' }"
              >
                my skills
              </div>
              {/* container */}
              <div className="container">
                <div className="section-title">
                  <h2>Skills</h2>
                  <p>Lorem ipsum dosectetur adipisicing elit, sed do </p>
                  <div className="clearfix" />
                  <span className="bold-separator" />
                </div>
                <div className="wrapper-content">
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div
                            className="sec-text "
                            style={{ margin: "", padding: "", background: "" }}
                          >
                            <p
                              style={{
                                color: "",
                                fontSize: "",
                                fontWeight: "",
                                lineHeight: "",
                                textAlign: "",
                                textTransform: ""
                              }}
                            ></p>
                            <blockquote>
                              <p>
                                Cras lacinia magna vel molestie faucibus. Donec
                                auctor et urnaLorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Cras lacinia magna
                                vel molestie faucibus.Cras lacinia magna vel
                                molestie faucibus. Donec auctor et urnaLorem ipsum
                                dolor sit amet, consectetur adipiscing elit. Cras
                                lacinia magna vel molestie faucibus.Cras lacinia
                                magna vel molestie faucibus.
                              </p>
                            </blockquote>
                            <ul className="dec-list">
                              <li>Photoshop skills</li>
                              <li>Photography skills</li>
                              <li>Marketing skills</li>
                            </ul>
                            <p />
                          </div>
                          <div className="sec-progress  ">
                            <div className="fl-wrap">
                              <div className="skillbar-box animaper">
                                <div className="custom-skillbar-title">
                                  <span>Photoshop</span>
                                </div>
                                <div className="skill-bar-percent">95%</div>
                                <div className="skillbar-bg" data-percent="95%">
                                  <div className="custom-skillbar" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sec-progress  ">
                            <div className="fl-wrap">
                              <div className="skillbar-box animaper">
                                <div className="custom-skillbar-title">
                                  <span>Jquery</span>
                                </div>
                                <div className="skill-bar-percent">65%</div>
                                <div className="skillbar-bg" data-percent="65%">
                                  <div className="custom-skillbar" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sec-progress  ">
                            <div className="fl-wrap">
                              <div className="skillbar-box animaper">
                                <div className="custom-skillbar-title">
                                  <span>HTML5</span>
                                </div>
                                <div className="skill-bar-percent">75%</div>
                                <div className="skillbar-bg" data-percent="75%">
                                  <div className="custom-skillbar" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sec-progress  ">
                            <div className="fl-wrap">
                              <div className="skillbar-box animaper">
                                <div className="custom-skillbar-title">
                                  <span>CSS3</span>
                                </div>
                                <div className="skill-bar-percent">85%</div>
                                <div className="skillbar-bg" data-percent="85%">
                                  <div className="custom-skillbar" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sec-progress  ">
                            <div className="fl-wrap">
                              <div className="skillbar-box animaper">
                                <div className="custom-skillbar-title">
                                  <span>PHP</span>
                                </div>
                                <div className="skill-bar-percent">55%</div>
                                <div className="skillbar-bg" data-percent="55%">
                                  <div className="custom-skillbar" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className
                            style={{
                              width: "100%",
                              height: 50,
                              float: "left",
                              background: "",
                              position: "",
                              margin: "",
                              padding: "",
                              border: "",
                              borderRadius: ""
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div className=" row">
                            <div className="col-md-2">
                              <h4 className="bold-title">Languages Skills</h4>
                            </div>
                            <div className="col-md-10">
                              <div className="piechart-holder animaper">
                                <div className="row">
                                  <div className="piechart col-md-4 ">
                                    <span className="chart" data-percent={85}>
                                      <span className="percent" />
                                    </span>
                                    <div className="clearfix" />
                                    <div className="skills-description">
                                      <h4>Dutch</h4>
                                    </div>
                                  </div>
                                  <div className="piechart col-md-4 ">
                                    <span className="chart" data-percent={80}>
                                      <span className="percent" />
                                    </span>
                                    <div className="clearfix" />
                                    <div className="skills-description">
                                      <h4>French</h4>
                                    </div>
                                  </div>
                                  <div className="piechart col-md-4 ">
                                    <span className="chart" data-percent={70}>
                                      <span className="percent" />
                                    </span>
                                    <div className="clearfix" />
                                    <div className="skills-description">
                                      <h4>Portuguese</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{" "}
            {/* end bg */}
            {/* section start */}
            <section
              id="clients"
              data-scrollax-parent="true"
              className="scroll-con-sec dec-sec"
            >
              <div
                className="parallax-title right-pos"
                data-scrollax="properties: { translateY: '-350px' }"
              >
                Clients
              </div>
              {/* container */}
              <div className="container">
                <div className="section-title">
                  <h2>Testomonials</h2>
                  <p>Lorem ipsum dosectetur adipisicing elit, sed do </p>
                  <div className="clearfix" />
                  <span className="bold-separator" />
                </div>
                <div className="wrapper-content">
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div className="sec-testimonial ">
                            <div className="testimonials-slider-holder fl-wrap">
                              <div className="testimonials-slider owl-carousel">
                                <div className="item">
                                  <div className="testi-item">
                                    <div className="testi-image">
                                      <img
                                        src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/1-3.jpg"
                                        alt
                                        className="respimg"
                                      />
                                    </div>
                                    <div className="testi-text fl-wrap">
                                      <h3>Mike Jones</h3>
                                      <ul className="star-rating">
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                      </ul>
                                      <p>
                                        " Asunt in anim uis aute irure dolor in
                                        reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in anim id est laborum.
                                        Allamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Aser velit esse cillum
                                        dolore eu fugiat nulla pariatur. "
                                      </p>
                                      <a
                                        href="https://twitter.com/webRedox"
                                        className="testim-link"
                                        target="_blank"
                                      >
                                        Via Twitter
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="testi-item">
                                    <div className="testi-image">
                                      <img
                                        src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/2-2.jpg"
                                        alt
                                        className="respimg"
                                      />
                                    </div>
                                    <div className="testi-text fl-wrap">
                                      <h3>Lisa Lynn</h3>
                                      <ul className="star-rating">
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                      </ul>
                                      <p>
                                        " Asunt in anim uis aute irure dolor in
                                        reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in anim id est laborum.
                                        Allamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Aser velit esse cillum
                                        dolore eu fugiat nulla pariatur. "
                                      </p>
                                      <a
                                        href="https://www.behance.net/webRedox"
                                        className="testim-link"
                                        target="_blank"
                                      >
                                        Via Behance
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="testi-item">
                                    <div className="testi-image">
                                      <img
                                        src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/3-2.jpg"
                                        alt
                                        className="respimg"
                                      />
                                    </div>
                                    <div className="testi-text fl-wrap">
                                      <h3>Antony Frick</h3>
                                      <ul className="star-rating">
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                      </ul>
                                      <p>
                                        " Asunt in anim uis aute irure dolor in
                                        reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in anim id est laborum.
                                        Allamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Aser velit esse cillum
                                        dolore eu fugiat nulla pariatur. "
                                      </p>
                                      <a
                                        href="https://www.facebook.com/webRedox"
                                        className="testim-link"
                                        target="_blank"
                                      >
                                        Via Facebook
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="customNavigation">
                                <a className="next-slide transition">
                                  <i className="fa fa-angle-right" />
                                </a>
                                <a className="prev-slide transition">
                                  <i className="fa fa-angle-left" />
                                </a>
                              </div>
                              <div className="teti-counter" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div className=" clients-list fl-wrap">
                            <ul>
                              <li className>
                                <a >
                                  <span>
                                    <img
                                      className="respimg"
                                      src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/1.png"
                                      alt
                                    />
                                  </span>
                                </a>
                              </li>
                              <li className>
                                <a >
                                  <span>
                                    <img
                                      className="respimg"
                                      src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/2.png"
                                      alt
                                    />
                                  </span>
                                </a>
                              </li>
                              <li className>
                                <a >
                                  <span>
                                    <img
                                      className="respimg"
                                      src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/3.png"
                                      alt
                                    />
                                  </span>
                                </a>
                              </li>
                              <li className>
                                <a >
                                  <span>
                                    <img
                                      className="respimg"
                                      src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/4.png"
                                      alt
                                    />
                                  </span>
                                </a>
                              </li>
                              <li className>
                                <a >
                                  <span>
                                    <img
                                      className="respimg"
                                      src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/5.png"
                                      alt
                                    />
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{" "}
            {/* end bg */}
            {/*  to top  */}
            <div className="small-sec fl-wrap">
              <div className="to-top-wrap">
                <a className="to-top" href="#">
                  {" "}
                  <i className="fa fa-angle-double-up" /> Back to Top
                </a>
              </div>
            </div>
            {/* to top end*/}
          </div>
          {/* content end */}
        </div>
        {/* column-wrap end */}
        {/* arrow nav */}
        <div className="arrowpagenav" />
        {/* arrow nav end*/}
        {/* footer*/}
        <footer className="main-footer">
          <a href="mailto:webredox@gmail.com" className="mail-link">
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>
          {/* header-social*/}
          <div className="footer-social">
            <ul>
              <li>
                <a href="https://www.facebook.com/webRedox">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/webRedox">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://plus.google.com/114758098200068619793/">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/webRedox">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/webRedox/">
                  <i className="fa fa-pinterest" />
                </a>
              </li>
            </ul>
          </div>
          {/* header-social end*/}
          <div className="copyright">
            <p>© Cooper 2017 | All rights reserved.</p>
          </div>
        </footer>
        {/* footer end */}
        {/* Share container  */}
        <div
          className="share-container  isShare"
          data-share="['facebook','pinterest','googleplus','twitter','linkedin']"
        />
        {/* Share container  end*/}
        <Contact></Contact>
      </div>
     
    </>
  );
  };
  
export default Home2;