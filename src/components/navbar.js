import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<div className="col-2">
					<Link to="/" className="navbar-brand" href="#">
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
									<a className="nav-link active" aria-current="page" href="#">
										<img className="navbar-img" src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" />
									</a>
								</li>
								<li className="nav-item l-item">
									<a className="nav-link" href="#">
										<img className="navbar-img" src={process.env.PUBLIC_URL + '/images/message.svg'} alt="" />
									</a>
								</li>
								<li className="nav-item l-item">
									<a className="nav-link" href="#">
										<img className="navbar-img" src={process.env.PUBLIC_URL + '/images/notification-read.svg'} alt="" />
									</a>
								</li>
							</div>
							<div className="col offset-1">
								<li className="nav-item dropdown l-item">
									<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										<img className="navbar-img" src={process.env.PUBLIC_URL + '/images/smile.svg'} alt="" />
									</a>
									<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
										<li><a className="dropdown-item" href="#">Action</a></li>
										<li><a className="dropdown-item" href="#">Another action</a></li>
										<li><hr className="dropdown-divider" /></li>
										<li><a className="dropdown-item" href="#">Something else here</a></li>
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