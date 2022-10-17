import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import FilledStar from "../assests/images/star-fill.svg";
import Star from "../assests/images/star.svg";
import UserAvatar from "../assests/images/user-avatar.svg";
import "../Styling/_details.scss";
import { BsArrowLeft } from "react-icons/bs"

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
    <main>
      <div className="width">
        <Link to="/users" className="link">
          <BsArrowLeft />
          <span>Back to users</span>
        </Link>
        <div className="space-between">
          <div>
            <h1>User Details</h1>
          </div>
          <div>
            <button>Blacklist user</button>
            <button className="s-btn">Activate user</button>
          </div>
        </div>
      </div>
      <div className="cover">
        <div className="container">
          <img className="avatar" src={UserAvatar} alt="User icon"/>
          <div className="name-cover">
            <p className="user-name">{userDetails?.profile?.firstName} {userDetails?.profile?.lastName}</p>
            <p className="account">{userDetails.accountNumber}</p>
          </div>
          <div className="name-cover">
            <h3 className="tier">User's Tier</h3>
            <img src={Star} alt="Star icon" />
            <img src={FilledStar} alt="Star icon" />
            <img src={FilledStar} alt="Star icon" />
          </div>
          <div className="m-left">
            <h3 className="user-name m-top">{userDetails.accountBalance}</h3>
            <p className="bvn">{userDetails?.profile?.bvn}/Providus Bank</p>
          </div>
        </div>
        <div className="headers">
            <p>general details</p>
            <p>documents</p>
            <p>bank details</p>
            <p>loan</p>
            <p>savings</p>
            <p>app and system</p>
        </div>
      </div>
      <div className="cover margin-top">
        <div className="header-cover">
          <h2>Personal Information</h2>
        </div>
        <div className="d-flex">
          <div className="m-right">
            <h4 className="bvn">Full Name</h4>
            <p>{userDetails?.profile?.firstName} {userDetails.profile?.lastName}</p>
          </div>
          <div className="m-right">
            <h4 className="bvn">Phone Number</h4>
            <p>{userDetails?.profile?.phoneNumber}</p>
          </div>
          <div className="m-right">
            <h4 className="bvn">Email Address</h4>
            <p>{userDetails.email}</p>
          </div>
          <div className="m-right">
            <h4 className="bvn">bvn</h4>
            <p>{userDetails?.profile?.bvn}</p>
          </div>
          <div className="m-right">
            <h4 className="bvn">gender</h4>
            <p>{userDetails?.profile?.gender}</p>
          </div>
          <div className="m-right">
            <h4 className="bvn">Marital Status</h4>
            <p>Single</p>
          </div>
          <div className="children-m-right">
            <h4 className="bvn">Children</h4>
            <p>None</p>
          </div>
          <div>
            <h4 className="bvn">Type of Residence</h4>
            <p>{userDetails?.profile?.address}</p>
          </div>
        </div>
        <div className="header-cover">
          <h2>Education and Employment</h2>
        </div>
        <div className="d-flex">
          <div className="m-right">
            <h4 className="bvn">Level of education</h4>
            <p>{userDetails?.education?.level}</p>
          </div>
          <div className="employment-cover">
            <h4 className="bvn">employment Status</h4>
            <p>{userDetails?.education?.employmentStatus}</p>
          </div>
          <div className="sector-cover">
            <h4 className="bvn">sector of employment</h4>
            <p>{userDetails?.education?.sector}</p>
          </div>
          <div className="duration">
            <h4 className="bvn">duration of employment</h4>
            <p>{userDetails?.education?.duration}</p>
          </div>
          <div className="email-cover">
            <h4 className="bvn">office email</h4>
            <p>{userDetails?.education?.officeEmail}</p>
          </div>
          <div className="income-cover">
            <h4 className="bvn">Monthly income</h4>
            <p>₦{userDetails?.education?.monthlyIncome}</p>
          </div>
          <div>
            <h4 className="bvn">loan repayment</h4>
            <p>{userDetails?.education?.loanRepayment}</p>
          </div>
        </div>
        <div className="header-cover">
          <h2>socials</h2>
        </div>
        <div className="d-flex">
          <div className="twitter-cover">
            <h4 className="bvn">twitter</h4>
            <p>{userDetails?.socials?.twitter}</p>
          </div>
          <div className="facebook-cover">
            <h4 className="bvn">facebook</h4>
            <p>{userDetails?.socials?.facebook}</p>
          </div>
          <div>
            <h4 className="bvn">instagram</h4>
            <p>{userDetails?.socials?.instagram}</p>
          </div>
        </div>
        <div className="header-cover">
          <h2>guarantor</h2>
        </div>
        <div className="d-flex p-bottom">
          <div className="twitter-cover">
            <h4 className="bvn">full name</h4>
            <p>{userDetails?.guarantor?.firstName} {userDetails?.guarantor?.lastName}</p>
          </div>
          <div className="facebook-cover">
            <h4 className="bvn">phone number</h4>
            <p>{userDetails?.guarantor?.phoneNumber}</p>
          </div>
          <div className="facebook-cover">
            <h4 className="bvn">email address</h4>
            <p>guarantor@gmail.com</p>
          </div>
          <div>
            <h4 className="bvn">relationship</h4>
            <p>single</p>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default UserDetails;