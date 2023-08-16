import React from "react";
import { Outlet } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    );
};

export default App;
