// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Menu from "@material-ui/core/Menu";
// import "./all csss/Nav.css";
// import './all csss/reset.css'   
// import './all csss/yourstyle.css' 
// import './all csss/plugins.css'
// import './all csss/googlefont.css'
// // import './all csss/style.css'
// import "./all csss/color.css";

// const Nav = () => {
//   const [click, setClick] = useState(false)
//   const handleClick=()=>setClick(!click);
//   const handleClose=()=>setClick(false);


//   const [sideBar, setSideBar] = useState(false)
//   const handleClickSidebar=()=>setClick(!sideBar);
  
//   return (
//     <>
//       {/*================= loader ================*/}
//       <div className="loader-holder">
//         <div className="loader-inner loader-vis">
//           <div className="loader" />
//         </div>
//       </div>
//       {/*================= loader end ================*/}

//       <div id="main">
//         <header className="main-header">
//           <a href="" className="logo-holder">
//             <img
//               src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/logo.png"
//               alt
//             />
//           </a>
//           {/* info-button */}
//           <div className="nav-button " id="open-button" onClick={handleClick}>
//             {/* <span className="menu-global menu-top menu-top-click" />
//             <span className="menu-global menu-middle menu-middle-click" />
//             <span className="menu-global menu-bottom menu-bottom-click" /> */}
//               <div>
//                  <span className={click?  "menu-global menu-top menu-top-click"   : "menu-global menu-top"} />
//                  <span className={click? " menu-global menu-middle menu-middle-click" :  "menu-global menu-middle" } />
//                  <span className={click? "menu-global menu-bottom menu-bottom-click" :  "menu-global menu-bottom"}/>
//                  {/* <span className={click? "menu-global menu-top" : "menu-global menu-top menu-top-click"} />
//                  <span className={click? "menu-global menu-middle" : "menu-global menu-middle menu-middle-click" } />
//                  <span className={click? "menu-global menu-bottom" : "menu-global menu-bottom menu-bottom-click" }/> */}

//             </div>


//           </div>
//           {/* <div div className="nav-button">
//              <span className="menu-global menu-top menu-top-click" />
//             <span className="menu-global menu-middle menu-middle-click" />
//             <span className="menu-global menu-bottom menu-bottom-click" />
//            </div> */}
//           {/* info-button end*/}
//           <div className="show-share isShare">
//             <img
//               src="http://webredox.net/demo/wp/cooper/demo2/wp-content/themes/cooper/includes/images/share.png"
//               alt
//             />
//           </div>
//         </header>
//         {/* End header */}

//         {/*================= menu ================*/}
//         <div   className={click?" menu-wrap active": "menu-wrap" }>
//           <div className={click?"menu-inner active":"menu-inner"}>
//             {/* menu logo*/}
//             <a href=""
//               className="menu-logo"
//             >
//               <img
//                 src="http://webredox.net/demo/wp/cooper/demo2/wp-content/uploads/2017/01/logo2.png"
//                 alt
//               />
//             </a>
//             {/* menu logo end */}
//             <div className="hid-men-wrap   alt">
//               <div  className={click?" sliding-menu": "menu-wrap" }>
//                 <ul className="menu">
//                   {/* start main nav */}
//                   <li>
//                     <a href="#">Home</a>
//                     <ul className="sub-menu">
//                       <li>
//                         <a href="">Slider</a>
//                       </li>
//                       <li>
//                         <a href="">Impulse image</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <a href="#">Portfolio</a>
//                   </li>

//                   <li>
//                     <a href="#">Blog</a>
//                   </li>

//                   <li>
//                     <a>Contact</a>
//                   </li>

//                   <li>
//                     <a href="#">Pages</a>
//                   </li>

//                   <li>
//                     <a href="#">Shop</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div
//             className={click? "morph-shape.active ":"show-morph"}
//             id="morph-shape"
//             data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="100%"
//               height="100%"
//               viewBox="0 0 100 800"
//               preserveAspectRatio="none"
//             >
//               <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"/>
//             </svg>

//           </div>
//         </div>
//         {/*menu end*/}
//       </div>
//     </>
//   );
// };

// export default Nav;
