import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

const Register = () => {

    const Fullname = useRef();
    const email = useRef();
    const password = useRef();
    const history = useHistory();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = async (e) => {
        e.preventDefault();
        const user = {
            Fullname: Fullname.current.value,
            email: email.current.value,
            password: password.current.value,
        };
        try {
            await axios.post("/authRouter/register", user);
            console.log();
            dispatch({ type: "LOGIN_START" });
            const res = await axios.post("/authRouter/login", { email: email.current.value, password: password.current.value });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            history.push('/')
        } catch (err) {
            console.log(err.response.data);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row register-body">
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
                                <input type="text" className="form-control" id="floatingInputName" placeholder="name@example.com" ref={Fullname} />
                                <label htmlFor="floatingInputName">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" ref={email} />
                                <label htmlFor="floatingInputEmail">Email</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={password}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div>
                                &nbsp;
                            </div>
                            <div className="d-grid col-6 mx-auto">
                                <button type="submit" className="btn btn btn-danger">
                                    {/* <CircularProgress color="white" size="15px" /> */}
                                    {isFetching ? <CircularProgress color="white" size="15px" /> : "Register"}
                                </button>
                            </div>
                        </form>
                        <div className="d-grid col-7 mx-auto">
                            <Link to="/login" type="button" className="btn btn-warning loginBtn">
                                {isFetching ? <CircularProgress color="white" size="15px" /> : "Back to login"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;