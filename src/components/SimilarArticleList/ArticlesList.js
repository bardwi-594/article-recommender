import React from "react";
import SimilarArticles from "../SimilarArticles/SimilarArticles";
import Filters from "../Filters/Filters";
import "./ArticlesList.css";

/***Component for the rendering the Lis of similar Articles ***/
const ArticlesList = (props) => {
    return (
        <div className="list-container">
            <div className="heading">
                <h1>Similar articles</h1>
                <Filters />  {/**Component for the Filters **/}
            </div>
            {/** With props.similararticles passing down the array of the similar articles as a prop**/}
            {/** Using map() method on props.similarearticles we get a list of similar articles **/}

            {props.similararticles.map((article, document_id) => (
                <SimilarArticles
                    article={article}
                    title={article.title}
                    document_id={article.document_id}
                    key={article.title + document_id} />
            ))}
            {/** Passing the key props to SimilarArticles component **/}
        </div>
    )
}

export default ArticlesList;