import React, { useEffect, useState } from "react";
import News from "../components/News";

type News = {
    imgUrl: string;
    title: string;
};

const MainPage: React.FC = () => {
    let [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        fetch("https://645ca5e4250a246ae30a0341.mockapi.io/news")
            .then((response) => response.json())
            .then((result) => {
                setNews(result);
            });
    }, []);

    return (
        <div className="news_page">
            <h1>News Page</h1>
            <div className="news_page_items">
                {news.map((elem, id) => {
                    return <News {...elem} key={id} />;
                })}
            </div>
        </div>
    );
};

export default MainPage;
