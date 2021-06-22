import "./post.css"

export default function Share() {
  return (
    <>


      <div className="card" >

        <div className="card-header">
          <img className="ProfileImg" src="assets/cover.jpg" alt="" />
          <span className="Username"> username</span>
          <span className="Date">date</span>

        </div>

        <div className="card-body" >
          <span className="postText">text desription</span>
          <hr className="tweetHr" />
          <div className="inf">
            <div className="inf2">
              <img className="likeIcon" src="assets/heart.png" alt="" />
              <span className="postLikeCounter">count if any</span>
            </div>
            <button className="ReplyButton" type="button" >Reply</button>
          </div>
        </div>
      </div>
    </>
  );
}