import React from 'react';
import ReactDOM from 'react-dom';
import Repos from './Repos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Repos />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('asyncFetch', () => {

  it('should fetch data', async () => {

  });
});

describe('All issues', () => {
  it('should hide all issues intially', () => {

  });
  it('should display "loading..." before data is fetched', () => {
    //Only for the first time
  });
  it('should hide all issues before showing target issue', () => {
    //TODO for complete experience
  });
  it('should show issues when repo is clicked', () => {
    
  });
});

