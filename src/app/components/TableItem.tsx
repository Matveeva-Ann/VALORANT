'use client';
import { Player } from '@/types/player';
import { useRouter } from 'next/navigation';


interface TableItemProps {
  leader: Player;
  index: number;
}

export default function TableItem({ leader, index }: TableItemProps) {
  const router = useRouter();

  return (
    <tr
      className={`text-black cursor-pointer ${index % 2 ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-100 hover:scale-105 duration-200`}
      key={index}
      onClick={()=> router.push(`/playerPage/${leader.id}`)}
    >
      <td className="py-3 px-6">{index + 1}</td>
      <td className="py-3 px-6">{leader.rankedRating}</td>
      <td className="py-3 px-6">
        {leader.gameName} <span className="text-gray-600">#{leader.tagLine}</span>
      </td>
      <td className="py-3 px-6">{leader.numberOfWins}</td>
    </tr>
  );
}
