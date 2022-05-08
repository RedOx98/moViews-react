import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };


  return (
    <div className={isScrolled? "navbar scrolled" : "navbar"}>
      <div className="container">
      <div className="left">
          <img src="https://th.bing.com/th/id/R.34c020bb6536e1e72380e9614ff67eb1?rik=V6%2f6ekNByQ2EEQ&pid=ImgRaw&r=0" alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
      </div>
      <div className="right">
          <Search className="icon"/>
          <span>KID</span>
          <Notifications className="icon"/>
          <img src="https://th.bing.com/th/id/R.3f1be987bcda6a228fd3c04f9ac03619?rik=UDnSF2JhxtY1Kw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fa%2f6%2f7%2f187767.jpg&ehk=CyDq6yhquQxHlEAQ87k0o19yZ3OoGBugSxxkMbIHHdk%3d&risl=&pid=ImgRaw&r=0" alt=""/>

        <div className="profile">
        <ArrowDropDown className="icon"/>
        <div className="options">
        <span>Settings</span>
        <span>Logout</span>
        </div>
        </div>

      </div>
      
      </div>
    </div>
  )
}

export default Navbar
