'use client';
import { getLeaders } from '@/api/api';
import { useGetLeadersQuery } from '@/redux/leaders';
import { useEffect, useState } from 'react';
import NextButton from './NextButton';
import TableBody from './TableBody';

export default function Table() {
  const { data, error, isFetching, isLoading  } = useGetLeadersQuery([]);
  const [leaders, setLeaders] = useState([]);
  const [count, setCount] = useState(1);
  const logo = '/radiant-badge.png';

  useEffect(() => {
    if (data) {
      setLeaders(data.slice(0, count * 10));
    }
  }, [data, count]);

  
  function nextPage() {
    if (data && data.length >= count * 10) {
      setCount(prevCount => prevCount + 1);
    }
  }

  return (
    <div className="py-8 min-h-screen" style={{ backgroundColor: '#ece8e1' }}>
      <table className="table-fixed shadow-xl border-cyan-2 mx-auto my-8 w-4/5 overflow-hidden">
        <thead>
          <tr style={{ backgroundColor: '#0f1923', color: '#ece8e1' }}>
            <th className="py-3 flex items-center justify-center">
              <img className='h-11' src={logo} alt="Radiant Badge" />
            </th>
            <th className="py-3 w-1/6 text-center">RATING</th>
            <th className="py-3 w-1/2 text-center">USER NAME</th>
            <th className="py-3 w-1/4 text-center">NUMBER OF WINS</th>
          </tr>
        </thead>
        {isLoading && <TableBody def></TableBody>}
        {!error && <TableBody leaders={leaders}></TableBody>}
      </table>
      {!error && data && data.length > 0 && !isFetching && data.length >= count * 10 && <NextButton onClick={nextPage} />}
    </div>
  );
}