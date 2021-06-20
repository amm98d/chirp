import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import './App.css'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
	const { user } = useContext(AuthContext)
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					{user ? <Home></Home> : <Login></Login>}
				</Route>
				<Route path="/login">
					{user ? <Redirect to='/' /> : <Login></Login>}
				</Route>
				<Route path="/register">
					{user ? <Redirect to='/' /> : <Register></Register>}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
