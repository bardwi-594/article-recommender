import React, { Component } from "react";
import "./InputBox.css";

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlText: ""
        };
    }
    handleChange = event => {
        this.setState({
            urlText: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.inputTextBox(this.state.urlText);
    };
    render() {
        return (
            <div className="inputbox-container">
                <form className="input-form" onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <input
                            placeholder="Type url"
                            required
                            value={this.state.urlText}
                            onChange={this.handleChange}
                        />
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