import PinkUser from "../assests/images/pink-user.svg";
import PurpleUser from "../assests/images/purple-user.svg";
import Docs from "../assests/images/docs.png";
import Savings from "../assests/images/savings.svg";
import Filter from "../assests/images/filter-results.svg"

const UserInfo = [
  {
    id: 1,
    img: PinkUser,
    title: "Users",
    num: "2,453",
    alt: "A pink user icon"
  },
  {
    id: 2,
    img: PurpleUser,
    title: "Active Users",
    num: "2,453"
  },
  {
    id: 3,
    img: Docs,
    title: "Users with loans",
    num: "12,453"
  },
  {
    id: 4,
    img: Savings,
    title: "Users with savings",
    num: "102,453"
  },
];

const Title = [
  {
    id: 1,
    header: "Organization",
    image: Filter
  },
  {
    id: 2,
    header: "username",
    image: Filter
  },
  {
    id: 3,
    header: "email",
    image: Filter,
    class: "none"
  },
  {
    id: 4,
    header: "phone number",
    image: Filter,
    class: "none"
  },
  {
    id: 5,
    header: "date joined",
    image: Filter,
    class: "tel"
  },
  {
    id: 6,
    header: "status",
    image: Filter,
    class: "none"
  },
];

export { UserInfo, Title };