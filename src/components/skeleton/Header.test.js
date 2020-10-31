import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
    it('renders Header component', () => {
        const component = shallow(<Header title='Webpage title' />);
        expect(component.find("h1")).toHaveLength(1);
    });
});
