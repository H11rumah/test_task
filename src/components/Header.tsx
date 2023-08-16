import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    let navigate = useNavigate();

    return (
        <div className="header">
            <ul>
                <li
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Main
                </li>
                <li
                    onClick={() => {
                        navigate("/news");
                    }}
                >
                    News
                </li>
                <li
                    onClick={() => {
                        if (!localStorage.getItem("isAuthorized") || localStorage.getItem("isAuthorized") === "false") {
                            navigate("/login");
                        } else {
                            navigate("/profile");
                        }
                    }}
                >
                    Profile
                </li>
            </ul>
        </div>
    );
};

export default Header;
