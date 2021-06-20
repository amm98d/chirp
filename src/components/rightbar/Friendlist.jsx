import "./Friendlist.css"
export default function Friendlist() {
    return (
        <>
        <div className="rightbar">
      <div className="rightbarWrapper">
   
        <h4 className="Title">User friends</h4>
        <div className="Followings">
          <div className="Following">
            <img
              src="assets/helmet.jpg"
              alt=""
              className="FollowingImg"
            />
            <span className="FollowingName">Ahmed</span>
          </div>
          <div className="Following">
            <img
              src="assets/helmet.jpg"
              alt=""
              className="FollowingImg"
            />
            <span className="FollowingName">adil</span>
          </div>
          <div className="Following">
            <img
              src="assets/helmet.jpg"
              alt=""
              className="FollowingImg"
            />
            <span className="FollowingName">syedadil</span>
          </div>
          <div className="Following">
            <img
              src="assets/helmet.jpg"
              alt=""
              className="FollowingImg"
            />
            <span className="FollowingName">Aadil</span>
          </div>
          
          
        </div>
      </div>
    </div>
       
      </>
    );
    
}