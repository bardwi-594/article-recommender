import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount, configure } from 'enzyme';
import InputBox from "./InputBox";

/**Test case for InputBox Component**/

configure({ adapter: new Adapter() });

describe('Test for InputBox Component', () => {
    it('renders the InputBox component', () => {
        const component = shallow(<InputBox />);
        expect(component.exists()).toBe(true);
    });

    let wrapper;
    let mockSubmit;
    beforeEach(() => {
        mockSubmit = jest.fn();
        wrapper = shallow(<InputBox submit={mockSubmit} />);
    });

    it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    //handleChange
    it("should call setState on urlText", () => {
        const mockEvent = {
            target: {
                name: "urlText",
                value: "www.google.com"
            }
        };
        const expected = {
            urlText: "www.google.com",
        };
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state()).toEqual(expected);
    });
    /**should call handleChange on url change with the correct params**/
    it("should call handleChange on url change with the correct params", () => {
        const spy = jest.spyOn(wrapper.instance(), "handleChange");
        wrapper.instance().forceUpdate();
        const mockEvent = {
            target: {
                name: "input-text",
                value: "test"
            }
        };
        wrapper.find(".urlfield").simulate("change", mockEvent);
        expect(spy).toHaveBeenCalledWith(mockEvent);
    });
    /**when the form is submitted the event is cancelled**/
    it("when the form is submitted the event is cancelled", () => {
        const component = shallow(<InputBox inputTextBox={() => { }} />);
        let prevented = false;
        component.find("form").simulate("submit", {
            preventDefault: () => {
                prevented = true;
            }
        });
        expect(prevented).toBe(true);
    })


});