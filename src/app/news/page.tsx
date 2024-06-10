'use client';
import { useState } from 'react';
import Search from '../components/Search';
import dynamic from 'next/dynamic';

const ArticlesComponent = dynamic(() => import('../components/Articles'));

export default function Page() {
  const [searchParam, setSearchParam] = useState('');
  return (
    <div className="bg-bodyGradient dark:bg-bodyGradientDark py-12" style={{minHeight: 'calc(100vh - 68px)'}}>
      <div className="w-10/12 mx-auto mb-10">
        <Search setSearchParam={setSearchParam}></Search>
        <ArticlesComponent searchParam={searchParam}></ArticlesComponent>
      </div>
    </div>
  );
}
