import Header from "../subComponents/Header"
import SideBar from "../subComponents/sideBar"
import UserDetails from "../subComponents/UserDetails"

const Details = () => {
  return (
    <>
    <Header />
    <div style={{ display: "flex" }}>
      <SideBar />
      <UserDetails />
    </div>
  </>
  )
}

export default Details;