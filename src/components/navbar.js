import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<div className="col-2">
					<Link to="/" className="navbar-brand">
						<img className="navbar-img" src={process.env.PUBLIC_URL + '/images/bird.svg'} alt="" />
						&nbsp;&nbsp;
						<span className="navbar-text">
							Chirp
						</span>
					</Link>
				</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="col-6 offset-1">
						<form className="d-flex">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn" type="submit">
								<img className="navbar-img" src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" />
							</button>
						</form>
					</div>
					<div className="col">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<div className="col-4 offset-5">
								<li className="nav-item l-item">
									<Link to="/" className="nav-link active" aria-current="page" >
										<img className="navbar-img" src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" />
									</Link>
								</li>
								<li className="nav-item l-item">
									<Link to="/messages" className="nav-link" >
										<img className="navbar-img" src={process.env.PUBLIC_URL + '/images/message.svg'} alt="" />
									</Link>
								</li>
								<li className="nav-item l-item">
									<Link to="/notifs" className="nav-link" >
										<img className="navbar-img" src={process.env.PUBLIC_URL + '/images/notification-read.svg'} alt="" />
									</Link>
								</li>
							</div>
							<div className="col offset-1">
								<li className="nav-item dropdown l-item">
									<a href="/#" className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
										<img className="navbar-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
									</a>
									<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
										<li><Link to="/profile" className="dropdown-item" >Action</Link></li>
									</ul>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;