import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Button';
import {render, cleanup} from '@testing-library/react';
// import jest-dom/extend-expect;
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('button element renders without crashing', () => {
    const div = document.createElement("div");
    ReactDom.render(
        <Button />,
        div
    )
})

it('renders button correctly', () => {
const {getByTestId} = render(<Button label="Test this button"></Button>)
expect(getByTestId('button')).toHaveTextContent('Test this button')
})

it('matches snapshot', () => {
  const tree = renderer.create(<Button label="Test this button"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
})