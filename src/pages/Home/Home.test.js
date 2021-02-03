import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount, configure } from 'enzyme';
import Home from "./Home";
import InputBox from "../../components/InputBox/InputBox";
import ArticlesList from "../../components/SimilarArticleList/ArticlesList";

configure({ adapter: new Adapter() });

const mockdata = [
    {
        url: "www.google.com",
        title: "travel"
    }
];

describe("Home Component", () => {
    it("renders", () => {
        const wrapper = shallow(<InputBox />);
        expect(wrapper.exists()).toBe(true);
    });

    it("Input text is echoed", () => {
        const wrapper = shallow(<InputBox inputTextBox={() => { }} />);
        wrapper.find("input").simulate("change", {
            target: {
                value: "url"
            }
        });
        expect(wrapper.find("input").props().value).toEqual("url");
    });

    it("Similar articles list", () => {
        const wrapper = shallow(<ArticlesList similararticles={mockdata} />);
        expect(wrapper).toMatchSnapshot();

    })



})


