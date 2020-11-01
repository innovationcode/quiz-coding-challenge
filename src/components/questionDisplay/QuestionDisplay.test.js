import React from 'react';
import { shallow } from 'enzyme';

import QuestionDisplay from './QuestionDisplay.js'; //component to be tested.

describe('Testing QuestionDisplay component', () => {

      it('should render correctly in "debug" mode', () => {
            const wrapper = shallow(<QuestionDisplay debug />);
            expect(wrapper).toMatchSnapshot();
      });

      it('shold test question display...', () => {
            const wrapper = shallow(<QuestionDisplay />);
            expect(wrapper.find('.question').text()).toBe('');
      });
      
});