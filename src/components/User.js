import Header from "../subComponents/Header";
import Main from "../subComponents/Main";
import SideBar from "../subComponents/sideBar";


const User = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Main />
      </div>
    </>
  )
}

export default User;