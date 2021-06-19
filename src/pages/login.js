
const Login = () => {
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
                        <form>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div>
                                &nbsp;
                            </div>
                            <div className="d-grid col-6 mx-auto">
                                <button type="submit" className="btn btn-danger">Login</button>
                            </div>
                        </form>
                        <div className="d-grid col-7 mx-auto">
                            <button className="btn btn-warning regBtn">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;