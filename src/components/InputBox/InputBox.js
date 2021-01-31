import React, { Component } from "react";
import "./InputBox.css";

class InputBox extends Component {
    render() {
        return (
            <div className="inputbox-container">
                <form className="input-form">
                    <div className="form-field">
                        <input />
                        <button className="submit" type="submit" color="green">Submit</button>
                    </div>
                </form>

            </div>
        )
    }
}
export default InputBox;