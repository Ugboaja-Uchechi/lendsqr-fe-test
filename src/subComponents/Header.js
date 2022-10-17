import Logo from "../assests/images/logo.svg";
import Avatar from "../assests/images/avatar.png"
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import "../Styling/_header.scss"

const Header = () => {
  
  return (
    <>
      <header>
        <div className="flex">
          <div>
            <img className="logo" src={Logo} alt="LendSqr Logo" />
          </div>
          <div className="grid">
            <input type="text" placeholder="Search for anything" className="text" />
            <span><AiOutlineSearch className="search-icon" /></span>
          </div>
        </div>
        <div className="flex">
          <h4>Docs</h4>
          <BsBell className="bell" />
          <img src={Avatar} alt="A girl wearing glasses laughing" className="avatar" />
          <p>Adedeji</p>
          <MdArrowDropDown className="dropdown" />
        </div>
      </header>
    </>
  )
}

export default Header;