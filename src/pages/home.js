import Navbar from "../components/navbar";
import Feed from "../components/feed";
import Contactsbar from "../components/contactsbar";

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
						<Contactsbar></Contactsbar>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;