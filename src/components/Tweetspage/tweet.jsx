import "./tweet.css"

import {PermMedia, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
    return (
        <>
      
                <div>
                <div className="card" >
                
                <div className="card-header">
                <img className="tweetProfileImg" src="/assets/helmet.jpg" alt="" />
                
                </div>
                    
                <div className="card-body" >
                <input placeholder="Tweety Tweets Tweet"className="tweetInput"/>
                <hr className="tweetHr"/>

                       <PermMedia htmlColor="tomato" className="tweetIcon"/>
                        <span className="tweetOptionText">Photo or Video</span>
                        <EmojiEmotions htmlColor="goldenrod" className="tweetIcon"/>
                        <span className="tweetOptionText">Emoji</span>
                        <button  className="tweetButton" type="button" >Tweet</button>
                </div>
            </div>

         </div>
                

           
 {/* <div className="tweet">
            
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
</div> */}


    
    </>
    );
}