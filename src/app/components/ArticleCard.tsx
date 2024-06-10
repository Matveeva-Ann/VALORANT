import { Article } from '@/types/Article';
import Image from 'next/image';
import Link from 'next/link';
import { formattedDateTime } from '../../dateUtils/formattedDateTime';
import UserData from '../components/UserData';
import { truncateText } from '../../dateUtils/truncateText';

export interface ArticleCardProps {
  articleData: Article;
  searchParam: string;
}

export default function ArticleCard({ articleData, searchParam }: ArticleCardProps) {
  
  function highlightText(text: string, highlightElem: string) {
    if (!highlightElem) {
      return text;
    }
    const reg = new RegExp(`(${highlightElem})`, 'gi');
    return text.split(reg).map((textPart, index) =>
      reg.test(textPart) ? (
        <span
          key={index}
          className='bg-cyan-600 text-white p-0.5 text-lg rounded-sm'
        >
          {textPart}
        </span>
      ) : (
        textPart
      )
    );
  }

  return (
    <>
      <article
        className={`w-full flex flex-col text-black rounded-2xl overflow-hidden bg-white hover:scale-105 duration-300 shadow shadow-gray-500 dark:bg-black dark:text-white `}
      >
        <Link href={`/news/${articleData.id}`} className="relative">
          <Image
            className="rounded-t-2xl w-full object-cover"
            src={articleData.postImage}
            alt={`${articleData.authorName} article`}
            width={500}
            height={300}
            priority
          />
          <div className="absolute w-full h-2/5 -bottom-1 bg-shadowGradient dark:bg-shadowGradientDark"></div>
        </Link>

        <div className="text-black grow rounded-b-2xl -mt-2 p-5 pb-7 relative dark:text-white">
          <UserData
            avatar={articleData.authorAvatar}
            name={highlightText(articleData.authorName, searchParam)}
          ></UserData>
          <Link href={`/news/${articleData.id}`}>
            <p className="text-sm text-justify min-h-28">
              {highlightText(truncateText(articleData.postText, 120), searchParam)}
            </p>
          </Link>
          <span className="text-sm text-gray-600 absolute bottom-2 right-4">
            {formattedDateTime(articleData.createdAt)}
          </span>
        </div>
      </article>
    </>
  );
}