import "./tweet.css"

import { PermMedia, EmojiEmotions } from "@material-ui/icons"

export default function Share() {
    return (
        <>
            <div>
                <div className="card" >
                    <div className="card-header">
                        <img className="tweetProfileImg" src="/images/smile.svg" alt="" />
                        <h4 className="chirp-around">Chirp Around</h4>
                    </div>
                    <div className="card-body" >
                        <input placeholder="Chirp chirp chirp" className="tweetInput" />
                        <hr/>
                        {/* <PermMedia htmlColor="tomato" className="tweetIcon" /> */}
                        {/* <span className="tweetOptionText">Photo or Video</span> */}
                        {/* <EmojiEmotions htmlColor="goldenrod" className="tweetIcon" /> */}
                        {/* <span className="tweetOptionText">Emoji</span> */}
                        <button className="tweetButton btn btn-outline-danger" type="button" >Tweet</button>
                    </div>
                </div>
            </div>
        </>
    );
}