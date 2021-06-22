import "./pfeed.css"
import Tweet from "../Tweetspage/tweet"
import Post from "../Post/post"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Tweet />
        <h3> All tweets</h3>
        <Post />
      </div>
    </div>
  );
}