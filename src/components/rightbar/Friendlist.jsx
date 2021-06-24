import "./Friendlist.css"
import { useEffect, useState } from "react";
import Explore from "../explore/Explore";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Friendlist() {
const [friends, setfriends] = useState(null);
const { user } = useContext(AuthContext);

useEffect(() => {
  async function fetchData() {
    try {
      const res = await axios.get("/userRouter/followers/" + user.email);
      var result = [];
      for (var i in res.data) {
        result.push({ "name": res.data[i].Fullname });
      }
      setfriends(result);
    } catch (err) {
      console.log(err);
    }
  }
  fetchData();
},{} )
  

  return (
    <>
      <h4 className="friends-heading">Friends</h4>
      <div className="container friendslistbox">
        {friends && friends.map(friend => (
          <div className="row eachFriend">
            <div className="col-2">
              <img className="navbar-dropdown-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
            </div>
            <div className="col-4">
            {friend.name}
            </div>
            <div className="col-4">
              <button className="Explore btn btn-sm btn-outline-danger" >UnFollow</button>
            </div>
          </div>
        ))}
      </div>
      <h4 className="friends-heading">People You May Know</h4>
      <Explore></Explore>
    </>
  );

}