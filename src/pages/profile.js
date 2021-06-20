import Topbar from "../components/topbar/Topbar"
import Feed from "../components/ProfileFeed/pfeed"
import Friendlist from "../components/rightbar/Friendlist";
import Navbar from "../components/navbar";
import Contactsbar from "../components/contactsbar";

export default function Profile() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container-fluid">
                <div className="row home-body">
                    <div className="col">
                        <div className="profile">
                            <div className="profileRight">
                                <div className="profileRightTop">
                                    <div className="profileCover">
                                        <img className="profileCoverImg" src="assets/cover.jpg" alt="" />
                                        <img className="profileUserImg" src="assets/helmet.jpg" alt="" />
                                    </div>
                                    <div className="profileInfo">
                                        <h4 className="profileinfoName">Name</h4>
                                        <span className="infoDesc">@name</span>
                                        <h4 className="barTitle">User information</h4>
                                        <div className="barInfo">
                                            <div className="barInfo">
                                                <span className="City">City:</span>
                                                <span className="cityvalue">New York</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profileRightBottom">
                                        <Feed />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <Contactsbar></Contactsbar>
                    </div>
                </div>
            </div>
        </>
    );
}