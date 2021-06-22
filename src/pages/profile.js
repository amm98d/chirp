import React from 'react';
import Feed from "../components/ProfileFeed/pfeed"
import Friendlist from "../components/rightbar/Friendlist";
import Navbar from '../components/navbar';

export default function Profile() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <img className="profileCoverImg" src="assets/cover.jpg" alt="" />
                        <img className="profileUserImg" src="assets/helmet.jpg" alt="" />
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
                        <Feed />
                    </div>
                    <div className="col-2">
                        <Friendlist />
                    </div>
                </div>

            </div>
        </>
    );
}