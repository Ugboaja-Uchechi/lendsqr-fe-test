import "../Styling/_main.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";
import Pagination from "./Pagination";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(15);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
      setUsers(res.data)
      setLoading(false);
    }
    fetchUsers();
  }, []);

    // Get current Users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

      // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div style={{ backgroundColor: "#fafafa" }}>
        <User users={currentUser} loading={loading} />
        <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
      </div>
    </>
  )
}

export default Main;