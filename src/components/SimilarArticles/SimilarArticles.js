import React from "react";
import { Link } from 'react-router-dom';
import formatPercent from '../../utils/util';
import moment from 'moment';
import "./SimilarArticles.css";

const SimilarArticles = (props) => {
    const { article } = props;
    return (
        <div className="list-item">
            <div className="grid-container card">
                <div className="grid-item-img">
                    <img alt="complex" src={article.thumbnail} />
                </div>
                <div className="grid-item-text">
                    <h3 className="article-header">
                        {article.title}
                    </h3>
                    <div className="article-items">
                        <div className="article-item similarity">
                            {formatPercent(article.similarity)} <span>Similar</span>
                        </div>
                        <div className="article-item date-font">
                            {moment(article.published).format('DD.MMM.YY')}
                        </div>
                        <div className="article-item source-font">
                            {article.source_name}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SimilarArticles;