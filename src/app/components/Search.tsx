'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { GoSearch } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';
import { useDebounce } from '../../dateUtils/useDebounce';

interface SearchProps {
  setSearchParam: Dispatch<SetStateAction<string>>;
}

export default function Search({ setSearchParam }: SearchProps) {
  const [inputValue, setInputValue] = useState('');
  const inputData = useRef<HTMLInputElement>(null);
  
  const debouncedSetSearchParam = useDebounce((value) => {
    setSearchParam(value);
  }, 500);

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const searchData = event.target.value;
    setInputValue(searchData);
    debouncedSetSearchParam(searchData);
  }

  function reset() {
    setSearchParam('');
    setInputValue('');
  }

  return (
    <>
      <div className="w-full mb-6 flex justify-between">
        <label htmlFor="email" className="w-full relative text-gray-400 focus-within:text-gray-600 block">
          <GoSearch className="absolute pointer-events-none w-6 h-6 text-gray-400 top-1/4 left-2" />
          <input
            ref={inputData}
            className="mr-5 nl-5 w-full p-2 pl-10 border bg-white dark:bg-stone-900 border-black dark:border-white rounded-lg form-input text-slate-950 dark:text-white focus:outline-none"
            type="search"
            onChange={(e)=>handleSearch(e)}
            value={inputValue}
          />
          <RxCross2
            onClick={() => reset()}
            className="absolute w-6 h-6 text-gray-400 top-1/4 right-2 cursor-pointer bg-white dark:bg-stone-900"
          />
        </label>
      </div>
    </>
  );
}