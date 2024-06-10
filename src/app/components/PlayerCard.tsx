import { Player } from '@/types/player';
import Modal from './modal/Modal';
import { useState } from 'react';
import PlayerCardDataItem from './PlayerCardDataItem';
import { formattedDateTime } from '@/dateUtils/formattedDateTime';
import { formatTime } from '@/dateUtils/formatTime';
import Link from 'next/link';

export interface PlayerCardProps {
  playerData: Player;
}

export default function PlayerCard({ playerData }: PlayerCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgLink, setImgLink] = useState('');
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/EP8_Act_3.webp';
  };

  function openModal(link: string) {
    setImgLink(link);
    setIsModalOpen(true);
  }

  return (
    <>
      <div
        className={`w-11/12 sm:w-8/12 h-2/4 z-10 relative rounded-lg bg-white dark:bg-gray-600 p-6 pt-2 border-solid border-1 text-black dark:text-slate-200 shadow-md ${
          playerData.team_result ? 'shadow-cyan-500' : 'shadow-rose-600'
        } ${playerData.team_result ? 'border-cyan-500' : 'border-rose-600'}`}
      >
        <h2 className="text-center text-3xl font-medium mb-6 mt-6 sm:mt-0">Map played</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <img
            className="w-full mb-3 h-max object-cover object-center rounded-xl lg:w-7/12 lg:mr-8 z-10"
            src={playerData.avatar}
            alt="playerAvatar"
            onError={handleImageError}
            onClick={() => openModal(playerData.avatar)}
          />
          <dl className="text-lg">
            <PlayerCardDataItem title="Map:">{playerData.map}</PlayerCardDataItem>
            <PlayerCardDataItem title="Team result:">{playerData.team_result ? 'Win' : 'Loss'}</PlayerCardDataItem>
            <PlayerCardDataItem title="Kda:">
              <ul className="ml-4">
                <li>
                  <span className="text-slate-800 dark:text-slate-400  mr-2">kills:</span> {playerData.kda?.kills || 0}
                </li>
                <li>
                  <span className="text-slate-800 dark:text-slate-400  mr-2">deaths:</span> {playerData.kda?.deaths || 0}
                </li>
                <li>
                  <span className="text-slate-800 dark:text-slate-400  mr-2">assists:</span> {playerData.kda?.assists || 0}
                </li>
              </ul>
            </PlayerCardDataItem>
            <PlayerCardDataItem title="Agent:">{playerData.agent}</PlayerCardDataItem>

            <div className="flex">
              <dt className="font-medium text-slate-500 dark:text-slate-900 mr-2">Agent image:</dt>
              <dd className="underline cursor-pointer text-blue-600" onClick={() => openModal(playerData.agent_image)}>
                click to Link
              </dd>
            </div>

            <PlayerCardDataItem title="Match start:">
              {formattedDateTime(playerData.match_start_time)}
            </PlayerCardDataItem>

            <PlayerCardDataItem title="Duration of the match:">
              {formatTime(playerData.match_duration)}
            </PlayerCardDataItem>

            <PlayerCardDataItem title="Player name:">{playerData.gameName}</PlayerCardDataItem>
            <PlayerCardDataItem title="Player tag:">#{playerData.tagLine}</PlayerCardDataItem>
            <PlayerCardDataItem title="Number of wins:">{playerData.numberOfWins}</PlayerCardDataItem>
          </dl>
        </div>
      </div>
      {isModalOpen && <Modal link={imgLink} onClick={() => setIsModalOpen(false)}></Modal>}
    </>
  );
}
