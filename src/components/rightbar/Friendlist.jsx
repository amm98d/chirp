import "./Friendlist.css"
export default function Friendlist() {
  return (
    <>
      <div className="container friendslistbox">
        <div className="row eachFriend">
          <div className="col-2">
            <img className="navbar-dropdown-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
          </div>
          <div className="col-4">
            Friend-1
          </div>
        </div>
        <div className="row eachFriend">
          <div className="col-2">
            <img className="navbar-dropdown-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
          </div>
          <div className="col-4">
            Friend-2
          </div>
        </div>
        <div className="row eachFriend">
          <div className="col-2">
            <img className="navbar-dropdown-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
          </div>
          <div className="col-4">
            Friend-3
          </div>
        </div>
        <div className="row eachFriend">
          <div className="col-2">
            <img className="navbar-dropdown-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
          </div>
          <div className="col-4">
            Friend-4
          </div>
        </div>
      </div>
    </>
  );

}