import { renderComponent , expect } from '../test_helper';
import Header from '../../src/components/header';

describe('header' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders the app header', () => {
    expect(component).to.exist;
  });
});