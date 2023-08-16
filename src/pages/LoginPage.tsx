import React, { useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [isError, setIsError] = useState(false);

    let navigate = useNavigate();

    function loginHandler(event: React.MouseEvent) {
        event.preventDefault();

        if (username === "Admin" && password === "12345") {
            localStorage.setItem("isAuthorized", "true");

            navigate("/profile");
        } else {
            setIsError(true);
        }
    }

    useEffect(() => {
        setIsError(false);
    }, [username, password]);

    return (
        <div className="login_page">
            <h1>Login Page</h1>
            <form action="" className="login_page_form" autoComplete="off">
                <FormInput
                    id="username"
                    type="text"
                    placeholder="Superman"
                    isRequired={true}
                    state={username}
                    setState={setUsername}
                />
                <FormInput
                    id="password"
                    type="password"
                    placeholder="Mega password"
                    isRequired={true}
                    state={password}
                    setState={setPassword}
                />
                <button type="submit" className="login_page_form_submit" onClick={(event) => loginHandler(event)}>
                    Login
                </button>
                {isError ? <span className="login_page_form_error">Invalid username or password</span> : <></>}
            </form>
        </div>
    );
};

export default LoginPage;
