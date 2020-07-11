import React from 'react';
import logo from "../assests/logo192.png";
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { Style } from "react-style-tag";


class Header extends React.Component {
    render() {
        return (
            <div className="row navstrip" style={{ borderWidth: "2px", }}>
                <div className="col-1 nav-black">
                    <span><img src={logo} height="30px" width="30px"></img></span>
                </div>
                <div className="col-3 nav-black">
                    <div class="md-form active-pink active-pink-2 mb-3 mt-0 w-50">
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-start">
                    <div className="nav-item">  <Link>Browse</Link></div>
                    <div className="nav-item">  <Link>Browse</Link></div>
                    <div className="nav-item">  <Link>Browse</Link></div>

                </div>
                <div className="col-2"> 
                <div className="nav-item"><Link>Sign In</Link></div></div>
                <Style>{`
                .navstrip{
  background-color: white;
  /* background: linear-gradient(to right, rgb(40, 53, 53) , white 50%); */
  text-align: center;
  padding: 2px 10px 0px 10px;
  border: 2px black;
  height: 58px;
  border-bottom: 6px solid rgb(218, 216, 216);
  margin-bottom: 20px;
  position:fixed;
    top:0;
    width:100%;
    z-index:100;
  
}
.nav-item{
  font-size: 14px;
  
  text-decoration: none;
  color: black;
  padding: 16px 20px;
  font-weight: 600;
}
.nav-item a{
  color: black;
  padding: 0px 4px;
  display: flex;
  height: 40px;
}
.nav-item a:hover{
  color:rgb(64, 194, 245);
  text-decoration: none;
  border-bottom: solid;
}
.nav-black{
  padding: 10px 10px;
  
}

.active-pink-2 input.form-control[type=text]:focus:not([readonly]) {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.active-pink input.form-control[type=text] {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.nav-item:hover{
  color:rgb(64, 194, 245);
  text-decoration: none;
  border-bottom-width: 2px;
  
}
.nav-item:hover:after{
  color: rgb(255,255,255);
  content: "";
  
  
  
}`}</Style>
                
            </div>
        )
    }
}

export default Header;

// <div> <form class="form-inline md-form form-sm mt-0">
//     <AiOutlineSearch />
//     <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
// </form>
// </div>
//     <div className="navstrip">
//         <div className="">
//             <ul>
//                 <Link to="/">
//                     <a><li>Home</li></a>
//                 </Link>
//                 <Link to="/faq">
//                     <a><li>Forum</li></a>
//                 </Link>
//                 <Link to="/about" className="flex-end">
//                     <a><li>User</li></a>
//                 </Link>


//             </ul>
//         </div>
//     </div>


