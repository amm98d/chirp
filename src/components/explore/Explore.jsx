import "./Explore.css"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Explore() {

  const [peopleYouMayKnow, setPeopleYouMayKnow] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/userRouter/allUsers");
        console.log(res);
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
  }, [])


  return (
    <>
      <div className="container Explorelistbox">
        {peopleYouMayKnow && peopleYouMayKnow.map(person => (
          <div className="row eachFriend" key={person.email}>
            <div className="col-2">
              <img className="navbar-dropdown-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
            </div>
            <div className="col-6">
              {person.name}
            </div>
            <div className="col-4">
              <button className="Explore btn btn-sm btn-outline-danger" >Follow</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

}