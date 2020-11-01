import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

describe('Header component', () =>{

      it('should test header div number ', () => {
            const wrapper = shallow(<Header />);
            const result = wrapper.find('.header');
            expect(result.length).toBe(1)
      })

      it('should render header text for the app', () => {
            const wrapper = shallow(<Header />);
            const result = wrapper.find('h1').text();
            expect(result).toBe('Quiz Coding Challenge.')
      })

});