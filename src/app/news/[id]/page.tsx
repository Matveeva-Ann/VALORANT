'use client';

import ErrorComponent from '@/app/components/ErrorComponent/ErrorComponent';
import ParticlesBg from '@/app/components/ParticlesBg';
import UserData from '@/app/components/UserData';
import { formattedDateTime } from '../../../dateUtils/formattedDateTime';
import { useGetArticleItemQuery } from '@/redux/articles';
import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const { data, isSuccess, isError, isLoading } = useGetArticleItemQuery(params.id);

  return (
    <div className="bg-bodyGradient dark:bg-bodyGradientDark py-12" style={{minHeight: 'calc(100vh - 68px)'}}>
      <div className="w-10/12 mx-auto mb-10">
        <ParticlesBg></ParticlesBg>
        {isError && <ErrorComponent>404 Not found</ErrorComponent>}
        {isLoading && (
          <div
            style={{ width: '45vw', height: '25vh' }}
            className="bg-white mt-14 dark:bg-black mx-auto dark:text-white rounded-md text-black flex items-center justify-center text-7xl"
          >
            <ImSpinner9 className="animate-spin" />
          </div>
        )}
        <div className="flex items-center justify-center">
          {isSuccess && !isError && (
            <div className="w-full bg-cover bg-no-repeat flex flex-col items-center justify-center">
              <Link href={'/news'} className="mb-2 flex items-center gap-3 cursor-pointer p-3 text-lg text-white">
                <FaLongArrowAltLeft />
                Go Back
              </Link>

              <div className="bg-white dark:bg-black dark:text-white rounded-md text-black p-4 z-10 w-6/12 relative">
                <span className="text-sm text-gray-600 absolute top-2 right-4">
                  {formattedDateTime(data.createdAt)}
                </span>
                <Image
                  style={{ maxHeight: '25vh' }}
                  width={300}
                  height={200}
                  className="w-1/2 float-left mr-4 object-cover"
                  src={data.postImage}
                  alt="post image"
                />
                <div className="font-medium text-xl leading-5 mt-8 mb-4">
                  <UserData avatar={data.authorAvatar} name={data.authorName}></UserData>
                </div>

                <p>{data.postText}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
