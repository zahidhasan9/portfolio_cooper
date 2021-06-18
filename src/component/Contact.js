import React, { useState } from "react";
import {NavLink} from "react-router-dom";
// import './all csss/style.css'
// import './all csss/color.css'

// import './all csss/reset.css'   
// import './all csss/yourstyle.css' 
// import './all csss/plugins.css'
// import './all csss/googlefont.css'
import './all csss/map.css'
import home2 from './home2'

const Contact = () => {
  const [click, setClick] = useState(false)
  const handleClick=()=>setClick(!click);
  const handleClose=()=>setClick(false);


  const [sideBar, setSideBar] = useState(false)
  const handleClickSidebar=()=>setClick(!sideBar);
 
 return(
 
 
 
 
 
 
 
 <>
   
    
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
                <span className={click? "menu-global menu-top menu-top-click":"menu-global menu-top"} />
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
                    <a href="http://localhost:3000/">Home</a>
                     </li>

           
                </ul>
              </div>
            </div>
          </div>
         
        </div> {/*menu end*/}
      {/* Empty */}
      {/* Right Sidebar Layout */}
      {/*=============== fixed-column ===============*/}
      <div className="fixed-column">
        <div className="column-image fl-wrap full-height">
          <div
            className="bg"
            data-bg="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/6.jpg"
          />
          <div className="overlay" />
        </div>
        <div className="bg-title alt">
          <span>Contacts</span>
        </div>
        <div className="progress-bar-wrap">
          <div className="progress-bar" />
        </div>
      </div>
      {/* fixed-column end */}
      <div className="column-wrap scroll-content">
        {/*=============== content ===============*/}
        {/* content   */}
        <div className="content">
          {/* section*/}
          <section data-scrollax-parent="true" className="dec-sec">
            <div
              className="parallax-title right-pos"
              data-scrollax="properties: { translateY: '-350px' }"
            >
              Contacts
            </div>
            <div className="container">
              <div className="section-title">
                <h2>Contacts</h2>
                <p>
                  Asunt in anim uis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
                </p>
                <div className="clearfix" />
                <span className="bold-separator" />
              </div>
              <div className="wrapper-content th-check">
                <div className="fl-wrap">
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div className="sec-contact-info ">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="contact-info">
                                  <h4>Nulla pariatur esse</h4>
                                  <h3>You can write me on this adress</h3>
                                  <p>
                                    <a href="#">yourmail@domain.com</a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sec-contact-info ">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="contact-info">
                                  <h4>Voluptate cillum</h4>
                                  <h3>My mobile phone number</h3>
                                  <p>
                                    <a href="#">+0(111)123456789</a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sec-contact-info ">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="contact-info">
                                  <h4>Suspendisse id neque</h4>
                                  <h3>My office located In</h3>
                                  <p>
                                    <a href="#">
                                      27th Brooklyn New York, NY 10065
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sec-social-icon row ">
                            <div className="col-md-6">
                              <div className="contact-social">
                                <ul>
                                  <li>
                                    <a
                                      href="https://www.facebook.com/webRedox"
                                      target="_blank"
                                    >
                                      <i className="fa fa-facebook" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://twitter.com/webRedox"
                                      target="_blank"
                                    >
                                      <i className="fa fa-twitter" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://plus.google.com/114758098200068619793/"
                                      target="_blank"
                                    >
                                      <i className="fa fa-google-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.instagram.com/webRedox"
                                      target="_blank"
                                    >
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.pinterest.com/webRedox/"
                                      target="_blank"
                                    >
                                      <i className="fa fa-pinterest-p" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                              <div className="map-container">
                                <div
                                  id="map-single"
                                  className="map"
                                  data-latlog="[48.859003, 2.345275]"
                                  data-popuptext="27th Brooklyn New York, NY 10065"
                                  data-popupicon="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/mapmarker.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                              <h4 className="bold-title">Get in Touch</h4>
                              <div className="fl-wrap">
                                <div id="contact-form" className>
                                  <div id="message" />
                                  <div
                                    role="form"
                                    className="wpcf7"
                                    id="wpcf7-f226-p89-o1"
                                    lang="en-US"
                                    dir="ltr"
                                  >
                                    <div className="screen-reader-response" />
                                    <form
                                      action="/demo/wp/cooper/demo2/contact/#wpcf7-f226-p89-o1"
                                      method="post"
                                      className="wpcf7-form"
                                      noValidate="novalidate"
                                    >
                                      <div style={{ display: "none" }}>
                                        <input
                                          type="hidden"
                                          name="_wpcf7"
                                          defaultValue={226}
                                        />
                                        <input
                                          type="hidden"
                                          name="_wpcf7_version"
                                          defaultValue="4.6.1"
                                        />
                                        <input
                                          type="hidden"
                                          name="_wpcf7_locale"
                                          defaultValue="en_US"
                                        />
                                        <input
                                          type="hidden"
                                          name="_wpcf7_unit_tag"
                                          defaultValue="wpcf7-f226-p89-o1"
                                        />
                                        <input
                                          type="hidden"
                                          name="_wpnonce"
                                          defaultValue="440729f209"
                                        />
                                      </div>
                                      <div className="input-wrap">
                                        <i
                                          className="fa fa-user-plus"
                                          aria-hidden="true"
                                        />
                                        <span className="wpcf7-form-control-wrap your-name">
                                          <input
                                            type="text"
                                            name="your-name"
                                            defaultValue
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                            aria-required="true"
                                            aria-invalid="false"
                                            placeholder="Name"
                                          />
                                        </span>
                                      </div>
                                      <div className="input-wrap">
                                        <i
                                          className="fa fa-envelope"
                                          aria-hidden="true"
                                        />
                                        <span className="wpcf7-form-control-wrap your-email">
                                          <input
                                            type="email"
                                            name="your-email"
                                            defaultValue
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                            aria-required="true"
                                            aria-invalid="false"
                                            placeholder="E-mail"
                                          />
                                        </span>
                                      </div>
                                      <p>
                                        <span className="wpcf7-form-control-wrap your-message">
                                          <textarea
                                            name="your-message"
                                            cols={40}
                                            rows={10}
                                            className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                            aria-required="true"
                                            aria-invalid="false"
                                            placeholder="Message"
                                            defaultValue={""}
                                          />
                                        </span>
                                      </p>
                                      <p>
                                        <input
                                          type="submit"
                                          defaultValue="Send Message"
                                          className="wpcf7-form-control wpcf7-submit"
                                        />
                                      </p>
                                      <div className="wpcf7-response-output wpcf7-display-none" />
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Comment section*/}
                  {/* Empty */}
                </div>
              </div>
            </div>
          </section>
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
        {/* content end  */}
      </div>
      {/* wrapper-inner end  */}
      <footer className="main-footer">
        <a href="mailto:webredox@gmail.com" className="mail-link">
          <i className="fa fa-envelope" aria-hidden="true" />
        </a>
        {/* footer*/}
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
        data-share="['facebook','pinterest','twitter','linkedin']"
      />
      {/* Share container  end*/}
    </div>
    {/* Main end */}
    <style
      type="text/css"
      className="custom-dynamic-css"
      dangerouslySetInnerHTML={{
        __html:
          "\n \n     \n\n\t.scroll-nav li {\n    margin-left: -1px!important;;\n}\t\t\n\n\t\t\n\t\n\t\t\n  \n "
      }}
    />
  </>
);
};
export default Contact;