import Header from "../subComponents/Header";
import Main from "../subComponents/Main";
import SideBar from "../subComponents/sideBar";
import "../Styling/_user.scss"


const User = () => {
  return (
    <>
      <Header />
      <div className="flex-container">
        <SideBar />
        <Main />
      </div>
    </>
  )
}

export default User;