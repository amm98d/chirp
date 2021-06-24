import "./rightbar.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Rightbar() {
  const [friends, setfriends] = useState(null);
  const [peopleYouMayKnow, setPeopleYouMayKnow] = useState(null)
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const followersRes = await axios.get("/userRouter/followers/" + user.email);
        const peopleYouMayKnowRes = await axios.get("/userRouter/peopleMayknow/" + user.email);
        var followersResult = [];
        for (var i in followersRes.data) {
          followersResult.push({ "name": followersRes.data[i].Fullname, "email": followersRes.data[i].email });
        }
        setfriends(followersResult);
        var peopleYouMayKnowResult = [];
        for (var i in peopleYouMayKnowRes.data) {
          peopleYouMayKnowResult.push({ "name": peopleYouMayKnowRes.data[i].Fullname, "email": peopleYouMayKnowRes.data[i].email });
        }
        setPeopleYouMayKnow(peopleYouMayKnowResult);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  },)

  const followHandler = async (email, name) => {
    try {
      const res = await axios.put("/userRouter/follow/" + email, {
        email: user.email,
      });
      // setPeopleYouMayKnow(peopleYouMayKnow.filter(person => person.email != email));
      // var temp = friends;
      // temp.push({ "name": name, "email": email });
      // setfriends(temp);
    } catch (err) {
      console.log(err);
    }
  };

  const unFollowHandler = async (email, name) => {
    try {
      const res = await axios.put("/userRouter/unfollow/" + email, {
        email: user.email,
      });
      // setfriends(friends.filter(friend => friend.email != email));
      // var temp = peopleYouMayKnow;
      // temp.push({ "name": name, "email": email });
      // setPeopleYouMayKnow(temp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h4 className="friends-heading">Friends</h4>
      <div className="container friendslistbox">
        {friends && friends.map(friend => (
          <div className="row eachFriend" key={friend.email}>
            <div className="col-2">
              <img className="navbar-dropdown-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
            </div>
            <div className="col-4">
              {friend.name}
            </div>
            <div className="col-4">
              <button className="Explore btn btn-sm btn-outline-danger" onClick={() => unFollowHandler(friend.email, friend.name)}>UnFollow</button>
            </div>
          </div>
        ))}
      </div>
      <h4 className="friends-heading">People You May Know</h4>
      <div className="container Explorelistbox">
        {peopleYouMayKnow && peopleYouMayKnow.map(person => (
          <div className="row eachFriend" key={person.email}>
            <div className="col-2">
              <img className="navbar-dropdown-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
            </div>
            <div className="col-6 text-truncate">
              {person.name}
            </div>
            <div className="col-4">
              <button className="Explore btn btn-sm btn-outline-danger" onClick={() => followHandler(person.email, person.name)} >Follow</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

}