import React from 'react';
import { shallow } from 'enzyme';

import QuizResult from './QuizResult.js'; //component to be tested.

describe('Testing QuizResult component', () => {
      
      it('should render correctly in "debug" mode', () => {
            const wrapper = shallow(<QuizResult debug />);
            expect(wrapper).toMatchSnapshot();
      });

      

});