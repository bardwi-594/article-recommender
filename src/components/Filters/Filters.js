import React from "react";
import articleicon from "../../assets/icons/article.svg";
import question from "../../assets/icons/question.svg";
import time from "../../assets/icons/time.svg";
import "./Filters.css";


const Filters = () => {
    return (
        <div className="filters">
            <h3>Filters:</h3>
            <div className="filter-container mysources" >
                <img src={articleicon} alt="article" />
                <div className="filter-sources">
                    <select name="mysources">
                        <option value="" disabled selected hidden>MY SOURCES</option>
                    </select>
                </div>
            </div>
            <div className="filter-container">
                <img src={time} alt="time" />
                <div className="filter-month">

                    <select name="past-month">
                        <option value="" disabled selected hidden>PAST MONTH</option>
                    </select>
                </div>

            </div>
            <div className="help-icon">
                <img src={question} alt="help" />
            </div>

        </div >
    )
}

export default Filters;