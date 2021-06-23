import "./Friendlist.css"
import Explore from "../explore/Explore";

export default function Friendlist() {
  return (
    <>
      <h4 className="friends-heading">Friends</h4>
      <div className="container friendslistbox">
        <div className="row eachFriend">
          <div className="col-2">
            <img className="navbar-dropdown-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
          </div>
          <div className="col-4">
            Friend-1
          </div>
          <div className="col-4">
            <button className="Explore btn btn-sm btn-outline-danger" >UnFollow</button>
          </div>
        </div>
        <div className="row eachFriend">
          <div className="col-2">
            <img className="navbar-dropdown-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
          </div>
          <div className="col-4">
            Friend-2
          </div>
          <div className="col-4">
            <button className="Explore btn btn-sm btn-outline-danger" >UnFollow</button>
          </div>
        </div>
        <div className="row eachFriend">
          <div className="col-2">
            <img className="navbar-dropdown-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
          </div>
          <div className="col-4">
            Friend-3
          </div>
          <div className="col-4">
            <button className="Explore btn btn-sm btn-outline-danger" >UnFollow</button>
          </div>
        </div>
        <div className="row eachFriend">
          <div className="col-2">
            <img className="navbar-dropdown-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
          </div>
          <div className="col-4">
            Friend-4
          </div>
          <div className="col-4">
            <button className="Explore btn btn-sm btn-outline-danger" >UnFollow</button>
          </div>
        </div>
      </div>
      <h4 className="friends-heading">People You May Know</h4>
      <Explore></Explore>
    </>
  );

}