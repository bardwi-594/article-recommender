import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import InputBox from "../../components/InputBox/InputBox";
import "./Home.css";

class Home extends Component {

    render() {
        return (
            <Container>
                <header className="header">
                    Similar Articles
                </header>
                <InputBox />
            </Container>
        )
    }

}

export default Home;