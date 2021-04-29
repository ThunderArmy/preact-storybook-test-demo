import { h } from 'preact';
import Body from '../src/components/header';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
	test('Header renders 3 nav items', () => {
		const context = shallow(<Body />);
		expect(context.find('h1').text()).toBe('Preact App');
		expect(context.find('Link').length).toBe(3);
	});
});
