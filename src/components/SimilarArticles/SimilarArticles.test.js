import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount, configure } from 'enzyme';
import SimilarArticles from "./SimilarArticles";
import moment from 'moment';
import formatPercent from "../../utils/utils";

/**Test case for Similar Articles Component**/

configure({ adapter: new Adapter() });
describe('Test for Similar Articles', () => {
    it('renders SimilarArticles component', () => {
        const article = {
            url: "https://www.axios.com",
            similarity: "0.84",
            title: "title",
            published: "2021-02-02d",
            source_name: "Axios",
            thumbnail: "https://images.getnewsbot.com/20775162.jpg"

        }
        expect(shallow(<SimilarArticles article={article} />)).toMatchSnapshot();
    });

});

;
const published = () => {
    const publishedtime = moment();
    console.log(moment())
    return publishedtime;
};

describe('Format', () => {
    it('should return the date in a specific format', () => {
        const wrapper = published().format("DD.MMM.YY");
        expect(wrapper).toEqual("03.Feb.21");
    });

    it('formats a number', () => {
        const similarity = formatPercent(0.8414);
        expect(similarity).toEqual(84);
    })
});