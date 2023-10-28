import { render, screen } from '@testing-library/react';
import App from './App';
import Board from './Components/Board/Board';
import Card from './Components/Card/Card';
import Editable from './Components/Editable/Editable';
import Modal from './Components/Modal/Modal';
import Tag from './Components/Tags/Tag';


test('Is App rendering', () => {
  render(<App />);
  const app = screen.getByTestId("App");
  expect(app).toBeInTheDocument();
});

test('Is Board Component rendering', () => {
  render(<Board />);
  const board = screen.getByTestId("boardid");
  expect(board).toBeInTheDocument();
});

test('Is Card Component rendering', () => {
  render(<Card />);
  const card = screen.getByTestId("cardid");
  expect(card).toBeInTheDocument();
});

test('Is Editable Component rendering', () => {
  render(<Editable />);
  const edit = screen.getByTestId("editid");
  expect(edit).toBeInTheDocument();
});

test('Is Modal Component rendering', () => {
  render(<Modal />);
  const modal = screen.getByTestId("modalid");
  expect(modal).toBeInTheDocument();
});

test('Is Tag Component rendering', () => {
  render(<Tag />);
  const tag = screen.getByTestId("tagid");
  expect(tag).toBeInTheDocument();
});