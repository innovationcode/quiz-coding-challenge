import App from './App';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

//Two test written for App component

describe('tests App component.. ',() => {

    it("renders the correct content", () => {
        const root = document.createElement("div");
        ReactDOM.render(<App />, root);
    });

    it('matches the snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    })

});

    