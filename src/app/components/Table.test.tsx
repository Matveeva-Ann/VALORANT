import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from './Table';

const mockData = Array.from({ length: 30 }, (_, i) => ({
  IsAnonymized: false,
  IsBanned: false,
  agent: 'Generic',
  agent_image: 'https://loremflickr.com/640/480/abstract',
  avatar: 'https://loremflickr.com/640/480',
  competitiveTier: 10,
  gameName: 'deliver',
  id: `${i + 1}`,
  kda: {},
  map: 'Shoes',
  match_duration: 2356581,
  match_start_time: '2065-04-26T02:19:47.547Z',
  numberOfWins: 39,
  player_card: 'https://loremflickr.com/640/480/people',
  rankedRating: 82,
  tagLine: 'Cruiser',
  team_result: false,
}));
const mockDataShort = Array.from({ length: 15 }, (_, i) => ({
  IsAnonymized: false,
  IsBanned: false,
  agent: 'Generic',
  agent_image: 'https://loremflickr.com/640/480/abstract',
  avatar: 'https://loremflickr.com/640/480',
  competitiveTier: 10,
  gameName: 'deliver',
  id: `${i + 1}`,
  kda: {},
  map: 'Shoes',
  match_duration: 2356581,
  match_start_time: '2065-04-26T02:19:47.547Z',
  numberOfWins: 39,
  player_card: 'https://loremflickr.com/640/480/people',
  rankedRating: 82,
  tagLine: 'Cruiser',
  team_result: false,
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../redux/leaders', () => ({
  ...jest.requireActual('../redux/leaders'),
  useGetLeadersQuery: jest.fn().mockImplementation(() => ({
    data: mockData,
    error: null,
    isFetching: false,
    isLoading: false,
  })),
}));

describe('Testing Table Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    const { container } = render(<Table />);
    expect(container).toBeTruthy();
  });

  it('should increment count and update leaders when next page button is clicked', () => {
    render(<Table />);

    let leaders = screen.getAllByRole('row');
    expect(leaders).toHaveLength(11);

    const nextButton = screen.getByRole('button', { name: /Load more/i });
    fireEvent.click(nextButton);

    leaders = screen.getAllByRole('row');
    expect(leaders).toHaveLength(21);

    fireEvent.click(nextButton);

    leaders = screen.getAllByRole('row');
    expect(leaders).toHaveLength(31);
  });

  it('should not increment count when data length is insufficient', () => { 

    jest.requireMock('../redux/leaders').useGetLeadersQuery.mockImplementation(() => ({
      data: mockDataShort,
      error: null,
      isFetching: false,
      isLoading: false,
    }));

    render(<Table />);

    let leaders = screen.getAllByRole('row');
    expect(leaders).toHaveLength(11);

    const nextButton = screen.getByRole('button', { name: /Load more/i });
    fireEvent.click(nextButton);

    leaders = screen.getAllByRole('row');
    expect(leaders).toHaveLength(16);
  });
});
