import React, { Component } from 'react';
import InputBox from "../../components/InputBox/InputBox";
import getsimilararticle from "../../api/api";
import ArticlesList from "../../components/SimilarArticleList/ArticlesList";
import "./Home.css";


class Home extends Component {
    state = {
        similararticles: [],
        error: "",
        input: "",
        loading: false,
    }

    inputTextBox = async (urlInput) => {
        try {
            this.setState({
                loading: true
            });
            const response = await getsimilararticle(urlInput);
            this.setState({
                similararticles: response,
                input: urlInput,
            });
        } catch (error) {
            this.setState({ error: "Sorry! Could not find any similar articles" });
        }
        this.setState({ loading: false });
    }

    render() {
        const { similararticles, error, loading } = this.state;
        return (
            <div className="container">
                <header className="header">
                    Search text
                </header>
                <div className="input-search">
                    <InputBox inputTextBox={this.inputTextBox} />
                    {loading && (
                        <div className="loading">
                            <p className="loader-text">Searching for similar articles</p>
                            <p className="loader"></p>

                        </div>
                    )}
                </div>

                {similararticles.length > 0 && <ArticlesList similararticles={similararticles} />}
                {error && <p>Could not get any results. Please try again.</p>}
            </div>
        )
    }

}

export default Home;