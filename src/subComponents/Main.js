import { Title, UserInfo } from "../Data/UsersInfo";
import "../Styling/_main.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiDotsVertical }from "react-icons/hi";
import moment from "moment";
import { BsEye } from "react-icons/bs";
import { FiUserCheck, FiUserX } from "react-icons/fi";

const Main = () => {

  // const [popup, setPopup] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTable, setActiveTable] = useState(-1);
  // const [menuClick, setMenuClick] = useState(false);

  const handleMenuClick = (key) => {
    setActiveTable(key);
    setMenuOpen(!menuOpen);
    // setMenuClick(true);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users").then(res => {
      setUsers(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  //   const handleClick = () => {
  //   setPopup(prevState => !prevState)
  // }
  return (
    <>
      <main>
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
                  <th key={item.id}>
                    <div className="t-head">
                      <p>{item.header}</p>
                      <img src={item.image} alt="Filter icon" />
                    </div>
                  </th>
                )
              })
            }
            </tr>
          </thead>
          
            {
              users.map((user, key) => {
                return (
                  
                  <tr>
                    <td>{user.orgName}</td>
                
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{moment(user.createdAt).format("MMMM Do, h:mm a")}</td>
                    <td className="activity">Inactive</td>
                    <td  open={menuOpen}
                  handleClick={handleMenuClick}>
                      <HiDotsVertical onClick={() => handleMenuClick(key)} />
                      {key === activeTable && (
                    <div className="pop-up">
                      <ul>
                        <li>
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

export default Main;