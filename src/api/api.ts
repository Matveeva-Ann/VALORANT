export interface Leaders {
  leaderboardRank: number;
  id: number;
  rankedRating: number;
  gameName: string;
  tagLine: string;
  numberOfWins: number;
}

const buildUrl = (...paths: string[]) => {
  // return `http://localhost:3000/${paths.join('/')}`;
  return `https://6569abe1de53105b0dd7715a.mockapi.io/api/${paths.join('/')}`;
};

const sendRequest = async (url: string) => {
  const response = await fetch(url, { next: { revalidate: 600 } });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return await response.json();
};

export const getLeaders = async () => {
  const url = buildUrl('leaders');
  return await sendRequest(url);
};

export const getPlayer = async (id: string) => {
  const url = buildUrl('leaders', `${id}`);
  return await sendRequest(url);
};
