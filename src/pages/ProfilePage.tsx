import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
    let navigate = useNavigate();

    function logoutHandler() {
        localStorage.setItem("isAuthorized", "false");

        navigate("/login");
    }

    return (
        <div className="profile_page">
            <h1>Profile Page</h1>
            <button className="profile_page_logout" onClick={() => logoutHandler()}>
                Logout
            </button>
        </div>
    );
};

export default MainPage;
