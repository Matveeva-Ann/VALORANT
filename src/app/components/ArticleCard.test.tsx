import { Article } from '@/types/Article';
import ArticleCard, { ArticleCardProps } from './ArticleCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

export const mockArticle: Article = {
  id: '1',
  postImage: '/image.jpg',
  authorName: 'John Doe',
  authorAvatar: '/path/to/avatar.jpg',
  postText: 'This is a sample post text used for testing purposes.',
  createdAt: '2024-06-05T12:00:00Z',
};

export const renderArticleCard = (props: Partial<ArticleCardProps> = {}) => {
  const defaultProps: ArticleCardProps = {
    articleData: mockArticle,
    searchParam: '',
    ...props,
  };
  return render(<ArticleCard {...defaultProps} />);
};


describe('test ArticleCard component', () => {
  it('should render the component without errors', () => {
    renderArticleCard();
    const articleElement = screen.getByRole('article');
    expect(articleElement).toBeInTheDocument();
  });

  it('renders article data correctly', () => {
    renderArticleCard();

    const image = screen.getByAltText('John Doe article');
    expect(image).toBeInTheDocument();

    const authorName = screen.getByText(/John Doe/i);
    expect(authorName).toBeInTheDocument();

    const truncatedText = 'This is a sample post text used for testing purposes.';
    const postText = screen.getByText(truncatedText, { exact: false });
    expect(postText).toBeInTheDocument();
  });

  it('highlights searchParam in author name and post text', () => {
    const searchParam = 'John';
    renderArticleCard({ searchParam });

    const highlightedAuthorName = screen.getByText(searchParam, { exact: false });
    expect(highlightedAuthorName).toBeInTheDocument();

    const highlightedPostText = screen.getByText(searchParam, { exact: false });
    expect(highlightedPostText).toBeInTheDocument();
  });

  it('navigates to the correct post when the link is clicked', () => {
    renderArticleCard();
    
    const link = screen.getByRole('link', { name: /This is a sample post text used for testing purposes./i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/news/${mockArticle.id}`);
  });
});