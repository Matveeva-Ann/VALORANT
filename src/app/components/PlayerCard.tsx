import { Player } from '@/types/player';

export interface PlayerCardProps {
  playerData: Player;
}

export default function PlayerCard({ playerData }: PlayerCardProps) {

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/EP8_Act_3.webp';
  };

  return (
    <div className="w-8/12 h-2/4 z-10 rounded-lg bg-white flex p-8 ">
      <img
        className="w-3/6 object-cover object-center rounded-xl mr-8 h-60"
        src={playerData.avatar}
        alt="playerAvatar"
        onError={handleImageError}
      />
      <dl className="text-lg">
        <div className="flex">
          <dt className="font-medium text-slate-500 mr-2">Player Name:</dt>
          <dd>{playerData.gameName}</dd>
        </div>
        <div className="flex">
          <dt className="font-medium text-slate-500 mr-2">Player Tag:</dt>
          <dd>{playerData.tagLine}</dd>
        </div>
        <div className="flex">
          <dt className="font-medium text-slate-500 mr-2">Number Of Wins:</dt>
          <dd>{playerData.numberOfWins}</dd>
        </div>
        <div className="flex"></div>
      </dl>
    </div>
  );
}
