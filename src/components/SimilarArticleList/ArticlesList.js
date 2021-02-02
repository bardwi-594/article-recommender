import React from "react";
import SimilarArticles from "../SimilarArticles/SimilarArticles";
import Filters from "../Filters/Filters";
import "./ArticlesList.css";

const ArticlesList = (props) => {
    return (
        <div className="list-container">
            <div className="heading">
                <h1>Similar articles</h1>
                <Filters />
            </div>
            {props.similararticles.map((article, document_id) => (
                <SimilarArticles article={article} key={article.title + document_id} />
            ))}
        </div>
    )
}

export default ArticlesList;