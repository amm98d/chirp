import "./tweet.css"
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {

    const newChirp = useRef();
    const { user } = useContext(AuthContext);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "/PostRouter/create",
                {
                    email: user.email,
                    desc: newChirp.current.value
                }
            );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div>
                <div className="card" >
                    <div className="card-header">
                        <img className="tweetProfileImg" src="/images/smile.svg" alt="" />
                        <h4 className="chirp-around">Chirp Around</h4>
                    </div>
                    <div className="card-body" >
                        <input placeholder="Chirp chirp chirp" className="tweetInput" ref={newChirp} />
                        <hr />
                        <button className="tweetButton btn btn-outline-danger" onClick={handleClick}>Chirp</button>
                        {/* {isFetching ? <CircularProgress color="white" size="15px" /> : "Login"} */}
                    </div>
                </div>
            </div>
        </>
    );
}