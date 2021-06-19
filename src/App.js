import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

function App() {
	return (
		// <Router>
		// 	<Switch>
		// 		<Route path="/">
		// 			<Home></Home>
		// 		</Route>
		// 		<Route path="/login">
		// 			<Login></Login>
		// 		</Route>
		// 		<Route path="/register">
		// 			<Register></Register>
		// 		</Route>
		// 	</Switch>
		// </Router>
		<Home></Home>
		// <Login></Login>
	);
}

export default App;
