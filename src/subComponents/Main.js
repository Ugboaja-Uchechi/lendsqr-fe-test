import UserInfo from "../Data/UsersInfo";

const Main = () => {
  return (
    <>
      <main>
        <div>
          <h1>Users</h1>
        </div>
        <div>
          {
            UserInfo.map(data => {
              return (
                <div>
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