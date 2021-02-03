import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount, configure } from 'enzyme';
import Home from "./Home";
import ArticlesList from "../../components/SimilarArticleList/ArticlesList";

jest.mock("../../api/mock");

configure({ adapter: new Adapter() });

/**Test Code for Home Component**/

const mockdata = [  /*** Mock Data ***/
    {
        url: "http://www.Axios.com",
        title: "Axios"
    }
];

describe("Home Component", () => {
    /** checking if this component exists using a boolean assertion **/
    it("renders", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.exists()).toBe(true);
    });

    /** testing if the text input was echoed **/
    it("pass mock data through similar articles prop", () => {
        const wrapper = shallow(<ArticlesList similararticles={mockdata} />);
        expect(wrapper).toMatchSnapshot();

    })
    /** the default empty array when no data **/
    it("returns the default empty array when no data", () => {
        const wrapper = shallow(<ArticlesList similararticles={[]} />);
        expect(wrapper).toMatchSnapshot();
    })
})


