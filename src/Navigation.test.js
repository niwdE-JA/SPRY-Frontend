import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

it('renders nav-bar with "loggedin" state as true', () => {
  render(<Navigation 
    route= {'home'} 
    loggedin= {true}
    searChange={()=>{}} />
    );
    const linkElement1 = screen.getAllByText(/home/i)[0];
    const linkElement2 = screen.getAllByText(/log out/i)[0];
    const linkElement3 = screen.getAllByText(/about/i)[0];
    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
    expect(linkElement3).toBeInTheDocument();
});

it('renders nav-bar with "loggedin" state as false', () => {
  render(
  <Navigation 
    route= {'login'} 
    loggedin= {false}
    searChange={()=>{}} />
    );
    const linkElement1 = screen.getAllByText(/login/i)[0];
    const linkElement2 = screen.getAllByText(/signup/i)[0];
    const linkElement3 = screen.getAllByText(/about/i)[0];
    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
    expect(linkElement3).toBeInTheDocument();
});