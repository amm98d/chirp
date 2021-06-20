import "./tweet.css"

import {PermMedia, EmojiEmotions} from "@material-ui/icons"
export default function Share() {
    return (
        <>
<div className="tweet">
      <div className="tweetWrapper">
        <div className="tweetTop">
          <img className="tweetProfileImg" src="/assets/helmet.jpg" alt="" />
          <input
            placeholder="Tweety Tweets Tweet"
            className="tweetInput"
          />
        </div>
        <hr className="tweetHr"/>
        <div className="tweetBottom">
            <div className="tweetOptions">
                <div className="tweetOption">
                    <PermMedia htmlColor="tomato" className="tweetIcon"/>
                    <span className="tweetOptionText">Photo or Video</span>
                </div>
                
                <div className="tweetOption">
                    <EmojiEmotions htmlColor="goldenrod" className="tweetIcon"/>
                    <span className="tweetOptionText">Emoji</span>
                </div>
            </div>
            <button className="tweetButton">Tweet</button>
        </div>
      </div>
</div>


    
    </>
    );
}