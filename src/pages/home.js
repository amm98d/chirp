import Navbar from "../components/navbar";
import Rightbar from "../components/rightbar/rightbar";
import Feed from "../components/ProfileFeed/pfeed";

const Home = () => {
	return (
		<>
			<Navbar></Navbar>
			<div className="container-fluid">
				<div className="row home-body">
					<div className="col">
						<Feed></Feed>
					</div>
					<div className="col-3">
						<Rightbar></Rightbar>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;