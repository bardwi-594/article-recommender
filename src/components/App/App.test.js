import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount, configure } from 'enzyme';
import App from './App';
import Routes from '../../Routes';

/**Test case for App Component**/

configure({ adapter: new Adapter() });

describe('Testing App Component', () => {
  it('renders the App component', () => {
    const component = shallow(
      <App>
        <Routes />
      </App>);
    expect(component.find(".App")).toHaveLength(1);
    expect(component.find(Routes).length).toEqual(1);
  })

});

