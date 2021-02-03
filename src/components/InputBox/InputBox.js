import React, { Component } from "react";
import "./InputBox.css";

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlText: "" /** Initial state for urlText **/
        };
    }
    /** handleChange method is called when the input is typed and the state of urlText is updated with the setState **/
    handleChange = event => {
        this.setState({
            urlText: event.target.value
        });
    }
    /** handleSubmit method is called  when the form is submitted**/
    handleSubmit = event => {
        event.preventDefault();/**Preventing the default browser **/
        this.props.inputTextBox(this.state.urlText); /** Getting the text url as a props from 
                                         inputTextBox method as a state to variable urlText**/

    };
    render() {
        return (
            <div className="inputbox-container">
                <form className="input-form" onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <input
                            className="urlfield"
                            placeholder="Type url"
                            name="input-text"
                            required
                            value={this.state.urlText} /** Setting the value of the input to the urlText state**/
                            onChange={this.handleChange}
                        />{/** Button for submit the form**/}
                        <button className="submit" type="submit" color="green">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default InputBox;