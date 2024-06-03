export interface Player {
  id: number;
  leaderboardRank: number;
  rankedRating: number;
  gameName: string;
  tagLine: string;
  numberOfWins: number;
  avatar: string;
}export interface KDA {
  kills: number;
  deaths: number;
  assists: number;
}
export interface Player {
  id: number;
  leaderboardRank: number;
  rankedRating: number;
  gameName: string;
  tagLine: string;
  numberOfWins: number;
  avatar: string;
  competitiveTier: number;
  map: string;
  team_result: boolean;
  kda: KDA;
  agent: string;
  agent_image: string;
  match_start_time: string;
  match_duration: number;
}
