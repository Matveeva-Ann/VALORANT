import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PlayerCard from '@/app/components/PlayerCard';
import { Player } from '@/types/player';
import '@testing-library/jest-dom'

const mockPlayer: Player = {
    id: 1,
    leaderboardRank: 0, 
    rankedRating: 0, 
    gameName: 'game-name',
    tagLine: 'tag-line',
    numberOfWins: 10,
    avatar: 'avatar-link',
    competitiveTier: 0, 
    map: 'map-name',
    team_result: true,
    kda: { kills: 5, deaths: 3, assists: 2 },
    agent: 'agent-name',
    agent_image: 'agent-image-link',
    match_start_time: '2024-06-03T12:00:00Z',
    match_duration: 3600,
};

describe('Testing PlayerCard Component', () => {
  it('should render without crashing', () => {
    render(<PlayerCard playerData={mockPlayer} />);
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });
  it('should open modal', () => {
    render(<PlayerCard playerData={mockPlayer} />);
    const agentImage = screen.getByAltText('playerAvatar');
    fireEvent.click(agentImage);
    const modalImage = screen.getByAltText('img') as HTMLImageElement;
    expect(modalImage).toBeInTheDocument();
  });
  it('should handle image error and substitute a standard image', () => {
    render(<PlayerCard playerData={mockPlayer} />);
    fireEvent.error(screen.getByAltText('playerAvatar'));
    expect(screen.getByAltText('playerAvatar')).toHaveAttribute('src', '/EP8_Act_3.webp');
  });
});
