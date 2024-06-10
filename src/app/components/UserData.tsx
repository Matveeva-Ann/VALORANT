'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface UserDataProps {
  avatar: string;
  name: React.ReactNode;
}

const placeholderImage = '/1000_T.jpg';

export default function UserData({ avatar, name }: UserDataProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); 
  }, [avatar]);
  
  return (
    <div className="flex items-center gap-3 mb-4">
      {isLoading && (
        <img
          src={placeholderImage}
          alt="Loading..."
          className="rounded-full"
          style={{ width: '50px', height: '50px' }}
        />
      ) }

      <Image
        className={`rounded-full ${isLoading ? 'hidden' : 'block'} `}
        src={avatar || placeholderImage}
        alt="Avatar"
        width={50}
        height={50}
        loading='eager'
        onLoad={() => {
          setIsLoading(false); 
        }}
      />

      <p className="font-medium text-xl leading-5">{name}</p>
    </div>
    )
}