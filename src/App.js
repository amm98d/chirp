import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import './App.css'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home></Home>
				</Route>
				<Route path="/login">
					<Login></Login>
				</Route>
				<Route path="/register">
					<Register></Register>
				</Route>
			</Switch>
		</Router>
		// <Home></Home>
		// <Login></Login>
	);
}

export default App;
