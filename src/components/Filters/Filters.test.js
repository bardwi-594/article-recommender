import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount, configure } from 'enzyme';
import Filters from "./Filters";

/**Test case for Filters Component**/

configure({ adapter: new Adapter() });

describe('Test for Filter Component', () => {
    it('renders the Filter component to have Length 1', () => {
        const component = shallow(<Filters />)
        expect(component.find(".filters")).toHaveLength(1);
    })

});