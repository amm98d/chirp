import "./post.css"

export default function Share() {
    return (
<div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="assets/cover.jpg"
              alt=""
            />
            <span className="postUsername">
              uolo username
            </span>
            <span className="postDate">date</span>
          </div>
          <div className="postTopRight">
            {/* <MoreVert /> */}
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">text desription</span>
          {/* if post has image leave it otherwise remove */}
          {/* <img className="postImg" src="assets/helmet.jpg" alt="" /> */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">people like itcounter</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
          </div>
        </div>
      </div>
    </div>
     );
 }