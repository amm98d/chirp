import Navbar from "../../components/navbar/navbar";
import Feed from "../../components/feed/feed";
import Contactsbar from "../../components/contactsbar/contactsbar";
import './home.css'

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