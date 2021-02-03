import React from "react";
import { Link } from 'react-router-dom';
import formatPercent from '../../utils/utils'; /** Used to format the decimal value to percent **/
import moment from 'moment'; /** Used momentjs library to format the date format **/
import "./SimilarArticles.css";

/***Component for the rendering the similarArticles card***/
const SimilarArticles = (props) => {
    const { article } = props; /** Articles Passed down as props**/
    return (
        <div className="list-item">
            {/** Each card links to the source website url from article data **/}
            <Link target="_blank" rel="noreferrer" to={{ pathname: `${article.url}` }}>
                <div className="grid-container card">
                    <div className="grid-item-img">
                        <img alt="complex" src={article.thumbnail} /> {/** Thumbnail image**/}
                    </div>
                    <div className="grid-item-text">
                        <h3 className="article-header">
                            {article.title}   {/** Article Title **/}
                        </h3>
                        <div className="article-items">
                            <div className="article-item similarity">
                                {/** Similarity percent **/}
                                {formatPercent(article.similarity)}% <span>Similar</span>
                            </div>
                            <div className="article-item date-font">
                                {/** Published date **/}
                                {moment(article.published).format('DD.MMM.YY')}
                            </div>
                            <div className="article-item source-font">
                                {/** Source name **/}
                                {article.source_name}
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SimilarArticles;