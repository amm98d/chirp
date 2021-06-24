import "./post.css"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {

  const [chirps, setChirps] = useState(null)
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.post("/postRouter/timeline/all", {
          email: user.email
        });
        var result = [];
        for (var i in res.data) {
          result.push({
            "createdAt": res.data[i].createdAt,
            "desc": res.data[i].desc,
            "email": res.data[i].email,
            "likes": res.data[i].likes.length,
            "postNum": res.data[i].postNum,
          });
        }
        setChirps(result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])

  const handleLike = async (email, postNum) => {
    try {
      const res = await axios.put("/PostRouter/" + email + "/" + postNum + "/like/", {
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
      {chirps && chirps.map(chirp => (
        <div className="card" >
          <div className="card-header">
            <img className="ProfileImg" src="/images/smile.svg" alt="" />
            <span className="Username">{chirp.email} </span>
            <span className="Date">{chirp.createdAt}</span>
          </div>
          <div className="card-body" >
            <span className="postText">{chirp.desc}</span>
            <hr className="" />
            <div className="inf">
              <div className="inf2" onClick={() => handleLike(chirp.email, chirp.postNum)}>
                <img className="likeIcon" src="assets/like.png" alt="" />
                <span className="postLikeCounter">{chirp.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}