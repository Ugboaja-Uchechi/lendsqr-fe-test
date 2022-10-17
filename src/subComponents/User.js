import { useState } from "react";
import { Title, UserInfo } from "../Data/UsersInfo";
import { HiDotsVertical }from "react-icons/hi";
import moment from "moment";
import { BsEye } from "react-icons/bs";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const User = ({ users, loading }) => {

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTable, setActiveTable] = useState(-1);

  const handleFilterClick = () => setOpen(!open);

  const handleMenuClick = (key) => {
    setActiveTable(key);
    setMenuOpen(!menuOpen);
  };

  // document.onclick = function () {
  //   setMenuOpen(false);
  //   setOpen(false);
  // };

  let detailPage = useNavigate();
  const handleClick = (id) => {
    detailPage(`/users/${id}`);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <main className="main">
        <div>
          <h1>Users</h1>
        </div>
        <div className="user-info">
          {
            UserInfo.map(data => {
              return (
                <div className="info-cover">
                  <img className="info-icons" src={data.img} alt={data.alt} />
                  <h2>{data.title}</h2>
                  <h3>{data.num}</h3>
                </div>
              )
            })
          }
        </div>
        <div className="user-cover">
          <table>
            <thead>
              <tr>
                {
                  Title.map(item => {
                    return (
                      <th className={item.class} key={item.id}>
                        <div className="t-head">
                          <p>{item.header}</p>
                          <img open={open} onClick={handleFilterClick} src={item.image} alt="Filter icon" />
                        </div>
                      </th>
                    )
                  })
                }
                
              </tr>
              <div className="filter-cover">
                <form  className={open ? "filter-container active" : "filter-container"} onClick={handleFilterClick}>
                  <label>Organization</label>
                  <select name="org" id="org">
                    <option>Select</option>
                  </select>
                  <label>Username</label>
                  <input placeholder="User" />
                  <label>Email</label>
                  <input placeholder="Email" />
                  <label>Date</label>
                  <input placeholder="Date" />
                  <label>Phone Number</label>
                  <input placeholder="Phone Number" />
                  <label>Status</label>
                  <select name="status" id="status" >
                  <option>Select</option>
                  </select>
                  <div>
                    <button>Reset</button>
                    <button className="f-btn">Filter</button>
                  </div>
                </form>
              </div>
            </thead>
            {
              users.map((user, key) => {
                return (
                  <tr>
                    <td>{user.orgName}</td>
                    <td>{user.userName}</td>
                    <td className="d-none">{user.email}</td>
                    <td className="d-none">{user.profile.phoneNumber}</td>
                    <td className="tel">{moment(user.createdAt).format("MMMM Do, h:mm a")}</td>
                    <td className="activity d-none">Inactive</td>
                    <td  open={menuOpen}
                  handleClick={handleMenuClick}>
                      <HiDotsVertical onClick={() => handleMenuClick(key)} />
                      {key === activeTable && (
                    <div className="pop-up">
                      <ul>
                        <li onClick={() => handleClick(user.id)}>
                          <BsEye />
                          View Details
                        </li>
                        <li>
                          <FiUserX />
                          Blacklist User
                        </li>
                        <li>
                          <FiUserCheck />
                          Activate User
                        </li>
                      </ul>
                    </div>
                  )}
                    </td>
                  </tr>
                )
              })
            }
          </table>
        </div>
      </main>
    </>
  )
}

export default User;