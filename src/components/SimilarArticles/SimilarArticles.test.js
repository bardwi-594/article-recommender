import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount, configure } from 'enzyme';
import SimilarArticles from "./SimilarArticles";
import moment from 'moment';
import formatDecimal from "../../utils/utils";

/**Test case for Similar Articles Component**/

configure({ adapter: new Adapter() });


describe('Test for Similar Articles', () => {

    it('renders SimilarArticles component', () => {
        /** Mock data**/
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

/** test for momentjs **/
const published = () => {
    const publishedtime = moment();
    return publishedtime;
};

describe('Format', () => {
    it('should return the date in a specific format', () => {
        const wrapper = published().format("DD.MMM.YY");
        expect(wrapper).toEqual("03.Feb.21");
    });
    /** test for formatting decimal **/
    it('format number', () => {
        const similarity = formatDecimal(0.8414);
        expect(similarity).toEqual(.84);
    })
});