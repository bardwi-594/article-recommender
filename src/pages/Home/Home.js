import React, { Component } from 'react';
import InputBox from "../../components/InputBox/InputBox";
import getsimilararticle from "../../api/api";
import ArticlesList from "../../components/SimilarArticleList/ArticlesList";
import "./Home.css";

/** Code for the Home screen **/
class Home extends Component {
    state = {
        similararticles: [], /** to store an array of articles**/
        error: "", /** variable to handle any errors we receive from the API**/
        input: "", /** variable to hold the urlInput**/
        loading: false, /** Setting the initial value for loader to false by default **/
    }

    /** inputTextBox is the method to handle the state **/
    inputTextBox = async (urlInput) => {
        try {
            this.setState({
                loading: true /** Loading is set to true when the method is called **/
            });
            const response = await getsimilararticle(urlInput);
            /** When API executes successfully the similararticles is updated in the state from the response**/
            this.setState({
                similararticles: response,
                input: urlInput,
            });
        } catch (error) {
            this.setState({ error: "Sorry! Could not find any similar articles" });
            /** The error state will be updated with the message when there is no result or response **/
        }
        this.setState({
            loading: false
        });
        /** Once the method is executed the loading state will update to false **/
    }

    render() {
        const { similararticles, error, loading } = this.state;

        return (
            <div className="container">
                <header className="header">
                    Search text
                </header>
                <div className="input-search">
                    {/**InputBox-Component for the Input text box **/}
                    <InputBox
                        inputTextBox={this.inputTextBox}
                    />
                    {/**When the loading state is true it will render the loader**/}
                    {loading && (
                        <div className="loading">
                            <p className="loader-text">Searching for similar articles</p>
                            <p className="loader"></p>

                        </div>
                    )}
                </div>
                {/*** If similar articles exists then it will render ArticlesList Component with render***/}
                {similararticles.length > 0 &&
                    <ArticlesList similararticles={similararticles} />}
                {/*** If there is any error, it will render an error message***/}
                {error &&
                    <p className="error-message">Sorry, could not get any results! Please try again.</p>
                }

            </div>
        )
    }

}

export default Home;