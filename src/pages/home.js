import Navbar from "../components/navbar";
import Friendlist from "../components/rightbar/Friendlist";
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
						<Friendlist></Friendlist>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;