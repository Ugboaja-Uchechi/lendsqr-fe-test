import UserInfo from "../Data/UsersInfo";
import "../Styling/_main.scss"

const Main = () => {
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
                  <img src={data.img} alt={data.alt} />
                  <h2>{data.title}</h2>
                  <h3>{data.num}</h3>
                </div>
              )
            })
          }
        </div>
        <div></div>
      </main>
    </>
  )
}

export default Main;