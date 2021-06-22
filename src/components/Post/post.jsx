import "./post.css"

export default function Share() {
  return (
    <>
      <div className="card" >
        <div className="card-header">
          <img className="ProfileImg" src="/images/smile.svg" alt="" />
          <span className="Username"> username</span>
          <span className="Date">date</span>
        </div>
        <div className="card-body" >
          <span className="postText">text desription</span>
          <hr className="" />
          <div className="inf">
            <div className="inf2">
              <img className="likeIcon" src="assets/like.png" alt="" />
              <span className="postLikeCounter">1</span>
            </div>
            <button className="ReplyButton btn btn-sm btn-outline-danger" type="button" >Reply</button>
          </div>
        </div>
      </div>
    </>
  );
}