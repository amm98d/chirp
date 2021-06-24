import React from 'react';
import Rightbar from "../components/rightbar/rightbar";
import Navbar from '../components/navbar';
import Post from "../components/Post/post"

export default function Profile() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <div className="row g-0 endOfProfileSection">
                            <div className="col-2">
                                <img className="profileUserImg" src="images/smile.svg" alt="" />
                            </div>
                            <div className="col">
                                <div className="profileInfo">
                                    <h4 className="profileinfoName">Name</h4>
                                    <h4 className="barTitle">User information</h4>
                                    <div className="barInfo">
                                        <div className="barInfo">
                                            <span className="City">City: </span>
                                            <span className="cityvalue">New York</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3> My Chirps</h3>
                        <Post />
                    </div>
                    <div className="col-3">
                        <Rightbar />
                    </div>
                </div>

            </div>
        </>
    );
}