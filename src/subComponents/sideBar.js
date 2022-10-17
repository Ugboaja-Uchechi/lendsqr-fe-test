import Briefcase from "../assests/images/briefcase.svg";
import { MdArrowDropDown } from "react-icons/md";
import SidebarData from "../Data/SidebarData";
import "../Styling/_sideBar.scss";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc"
import { useState } from "react";


const SideBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const showNavBar = () => setNavbarOpen(!navbarOpen);
  return (
    <>
      <VscMenu className="menu" onClick={showNavBar} />
      <section className={navbarOpen ? "side-bar active" : "side-bar"} onClick={showNavBar}>
        <div className="flex p-top">
          <div>
            <img src={Briefcase} alt="A briefcase icon" className="img" />
          </div>
          <div>
            <h4>Switch Organisation</h4>
          </div>
          <MdArrowDropDown className="dropdown-img" />
        </div>
        {
          SidebarData.map(sidebar => {
            return (
              <>
                <div className="flex m-top">
                  <div>
                    <img src={sidebar.img} className="img" alt="Icon" />
                  </div>
                  <div>
                    <Link to={sidebar.link} style={{ textDecoration: "none" }}><h4>{sidebar.name}</h4></Link>
                  </div>
                </div>
                <h3>{sidebar.header}</h3>
              </>
            )
          })
        }
      </section>
    </>
  )
}

export default SideBar