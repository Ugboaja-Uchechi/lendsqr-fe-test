import Briefcase from "../assests/images/briefcase.svg";
import { MdArrowDropDown } from "react-icons/md";
import SidebarData from "../Data/SidebarData";

const SideBar = () => {
  return (
    <>
      <section>
        <div>
          <div>
            <img src={Briefcase} alt="A briefcase" />
          </div>
          <div>
            <h4>Switch Organisation</h4>
          </div>
          <div>
            <MdArrowDropDown />
          </div>
        </div>
        {
          SidebarData.map(sidebar => {
            return (
              <>
                <div key={sidebar.id}>
                  <div>
                    <img src={sidebar.img} alt="A home icon" />
                  </div>
                  <div>
                    <h4>{sidebar.name}</h4>
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