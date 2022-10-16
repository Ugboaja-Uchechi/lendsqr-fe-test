import { Title, UserInfo } from "../Data/UsersInfo";
import "../Styling/_main.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiDotsVertical }from "react-icons/hi";

// const DetailPopup = () => {
//   return (
//     <>
//       <p>Details</p>
//       <p>Active</p>
//       <p>Block</p>
//     </>
//   )
// }

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
          <ul className="title-cover">
          {
            Title.map(item => <li key={item.id}>{item.header}<img src={item.image} alt="Filter icon" /></li>)
          }
          </ul>
            {
              users.map((user, key) => {
                return (
                  <ul className="title-cover">
                    <li>{user.orgName}</li>
                    <li>{user.userName}</li>
                    <li>{user.email}</li>
                    <li>{user.phoneNumber}</li>
                    <li>{user.createdAt}</li>
                    <li  open={menuOpen}
                  handleClick={handleMenuClick}>
                      <HiDotsVertical onClick={() => handleMenuClick(key)} />
                      {key === activeTable && (
                    <div className="tool-tip">
                      <ul>
                        <li>
                          View Details
                        </li>
                        <li>
                          Blacklist User
                        </li>
                        <li>
                          Activate User
                        </li>
                      </ul>
                    </div>
                  )}
                      {/* {popup ? <DetailPopup /> : ""} */}
                    </li>
                  </ul>
                )
              })
            }
        </div>
      </main>
    </>
  )
}

export default Main;