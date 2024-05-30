import { Player } from '@/types/player';
import TableItem from './TableItem';
import TableItemDefault from './TableItemDefault';

export interface TableBodyProps {
  leaders?: Player[];
  def?: boolean;
}

export default function TableBody({leaders, def=false}: TableBodyProps) {

  return (
    <tbody className="py-3 text-center">
      {def && <TableItemDefault></TableItemDefault>}
      {leaders?.map((leader: Player, index: number) => (
        <TableItem leader={leader} index={index} key={index}></TableItem>
      ))}
    </tbody>
  );
}
