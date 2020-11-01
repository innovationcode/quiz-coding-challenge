import React from 'react';
import { shallow } from 'enzyme';
import QuestionAndAnswer from './QuestionAndAnswer.js';

describe('testing QuestionAndAnswer component', () => {
      const wrapper = shallow(<QuestionAndAnswer />);

      it('should render header text for the app', () => {
            expect(wrapper.find('h2').text()).toBe('Answers...')
      });
      
});
