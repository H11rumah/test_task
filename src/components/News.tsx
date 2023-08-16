import React from "react";

type NewsProps = {
    imgUrl: string;
    title: string;
};

const News: React.FC<NewsProps> = ({ imgUrl, title }) => {
    return (
        <div className="news_item">
            <figure>
                <img className="news_item_img" src={imgUrl} alt="placeholder" />
                <figcaption className="news_item_description">{title}</figcaption>
            </figure>
        </div>
    );
};

export default News;
