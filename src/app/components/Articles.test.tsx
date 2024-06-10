import { fireEvent, render, screen } from '@testing-library/react';
import Articles from './Articles';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { Article } from '@/types/Article';
import '@testing-library/jest-dom/extend-expect';

const mockArticles: Article[] = [
  {
    id: '1',
    postImage: '/image.jpg',
    authorName: 'John Doe',
    authorAvatar: '/path/to/avatar.jpg',
    postText: 'This is a sample post text used for testing purposes.',
    createdAt: '2024-06-05T12:00:00Z',
  },
  {
    id: '2',
    postImage: '/image.jpg',
    authorName: 'John Doe',
    authorAvatar: '/path/to/avatar.jpg',
    postText: 'This is a sample post text used for testing purposes.',
    createdAt: '2024-06-05T12:00:00Z',
  },
];

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../redux/articles', () => ({
  ...jest.requireActual('../../redux/articles'),
  useGetLeadersQuery: jest.fn().mockImplementation(() => ({
    data: mockArticles,
    isError: false,
    isFetching: false,
    isLoading: false,
  })),
}));

describe('test Articles component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <Articles searchParam="" />
      </Provider>
    );
    expect(container).toBeTruthy();
  });

  it('should render without displaying error component', () => {
    render(
      <Provider store={store}>
        <Articles searchParam="" />
      </Provider>
    );
    const errorComponent = screen.queryByText('404 Not found');
    expect(errorComponent).toBeNull();
  });
});