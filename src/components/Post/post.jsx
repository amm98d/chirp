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
            "postId": res.data[i].likes.postId,
          });
        }
        setChirps(result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])

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
              <div className="inf2">
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