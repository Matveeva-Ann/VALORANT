import { render, screen } from '@testing-library/react';
import UserData from './UserData';

describe('UserData component', () => {
  it('should render the user avatar image', () => {
    const avatarUrl = '/path/to/avatar.jpg';
    render(<UserData avatar={avatarUrl} name="John Doe" />);

    const avatarImage = screen.getByAltText('Avatar');
    expect(avatarImage).toBeInTheDocument();
  });

  it('should render the user name text', () => {
    const userName = 'John Doe';
    render(<UserData avatar="/path/to/avatar.jpg" name={userName} />);

    const userNameText = screen.getByText(userName);
    expect(userNameText).toBeInTheDocument();
  });

  it('should render the user name as React node', () => {
    const userName = <span>John Doe</span>;
    render(<UserData avatar="/path/to/avatar.jpg" name={userName} />);

    const userNameElement = screen.getByText('John Doe');
    expect(userNameElement).toBeInTheDocument();
    expect(userNameElement.tagName).toBe('SPAN');
  });
});