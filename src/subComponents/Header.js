import Logo from "../assests/images/logo.svg";
import Avatar from "../assests/images/avatar.png"
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md"

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <img className="logo" src={Logo} alt="LendSqr Logo" />
          </div>
          <div>
            <input type="text" placeholder="Search for anything" className="text" />
            <span><AiOutlineSearch /></span>
          </div>
        </div>
        <div>
          <h4>Docs</h4>
          <BsBell />
          <img src={Avatar} alt="A girl wearing glasses laughing" />
          <p>Adedeji</p>
          <MdArrowDropDown />
        </div>
      </header>
    </>
  )
}

export default Header;