import "./Explore.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Explore() {

  const [peopleYouMayKnow, setPeopleYouMayKnow] = useState(null)
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/userRouter/peopleMayknow/" + user.email);
        var result = [];
        for (var i in res.data) {
          result.push({ "name": res.data[i].Fullname, "email": res.data[i].email });
        }
        setPeopleYouMayKnow(result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, )

  const followHandler = async (email) => {
    console.log(email);
    try {
      const res = await axios.put("/userRouter/follow/" + email, {
        email: user.email,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
              <button className="Explore btn btn-sm btn-outline-danger" onClick={() => followHandler(person.email)} >Follow</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

}