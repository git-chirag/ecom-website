import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { signin, isAuthenticated, authenticate } from "../auth/helper";

const Signin = (props) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        loading: false,
        didRedirect: false,
    });

    const {
        name,
        email,
        password,
        error,
        success,
        loading,
        didRedirect,
    } = values;

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
            .then((data) => {
                console.log(data);
                if (data.token) {
                    let sessionToken = data.token;
                    authenticate(sessionToken, () => {
                        console.log("Tokken Added");
                        setValues({
                            ...values,
                            didRedirect: true,

                        });
                    });
                }
                else {
                    setValues({
                        ...values, loading: false
                    })
                }
            })
            .catch((err) => console.log(err));
    };

    const performRedirect = () => {
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }
    }

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-success"
                        style={{ display: success ? "" : "none" }}
                    >
                        New Account created Successfully. Please
                        <Link to="/signin"> Login</Link>
                    </div>
                </div>
            </div>
        );
    };
    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        Check all fields again.
                    </div>
                </div>
            </div>
        );
    };

    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="from-group mb-3">
                            <label className="text-light">Email</label>
                            <input
                                className="form-control"
                                value={email}
                                onChange={handleChange("email")}
                                type="text"
                            />
                        </div>
                        <div className="from-group mb-3">
                            <label className="text-light">Password</label>
                            <input
                                className="form-control"
                                value={password}
                                onChange={handleChange("password")}
                                type="password"
                            />
                        </div>
                        <button
                            onClick={onSubmit}
                            style={{ width: "100%" }}
                            className="btn mt-3 btn-success btn-block"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    };
    return (
        <Base title="Welcome to Signin Page" description="Tshirt Store">
            {loadingMessage()}
            {signInForm()}
            <p className="text-center">{JSON.stringify(values)}</p>
            {performRedirect()}
        </Base>
    );
};

export default Signin;
