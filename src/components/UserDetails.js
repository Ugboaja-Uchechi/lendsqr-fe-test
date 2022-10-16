import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { BsEye } from "react-icons/bs";

const UserDetails = () => {
  let { id } = useParams();
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
    .then(res => {
      setUserDetails(res.data)
      console.log(setUserDetails)
    }).catch(err => {
      console.log(err)
    })
  }, [id]);

  return (
    <>
      <BsEye />
      <p>{userDetails.email}</p>
    </>
  )
}

export default UserDetails;