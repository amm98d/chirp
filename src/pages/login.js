import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        console.log("clicked");
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };

    return (
        <div className="container-fluid">
            <div className="row login-body">
                <div className="col-6">
                    <div className="row position-relative top-50 start-50 translate-middle">
                        <img className="chirp-logo-img" src={process.env.PUBLIC_URL + '/images/bird.svg'} alt="" />
                        <h1 className="chirp-logo-text">Chirp</h1>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row position-relative top-50 start-50 translate-middle">
                        <form onSubmit={handleClick}>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" ref={email} />
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={password} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div>
                                &nbsp;
                            </div>
                            <div className="d-grid col-6 mx-auto">
                                <button type="submit" className="btn btn-danger">Login</button>
                            </div>
                        </form>
                        <div className="d-grid col-7 mx-auto">
                            <Link to="/register" className="btn btn-warning regBtn">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;