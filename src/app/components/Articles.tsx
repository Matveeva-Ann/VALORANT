'use client';

import { useGetArticlesQuery } from '../../redux/articles';
import ArticleCard from '../components/ArticleCard';
import { Article } from '@/types/Article';
import Btn from '../components/Btn';
import { useCallback, useEffect, useState } from 'react';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';

enum Direction {
  Next = 'next',
  Prev = 'prev',
}
interface ArticlesProps {
  searchParam: string;
}

export default function Articles({ searchParam }: ArticlesProps) {
  const { data, isSuccess, isError } = useGetArticlesQuery([]);
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(1);
  const [isNotFound, setIsNotFound] = useState(false);

  const filterArticles = useCallback(() => {
    if (data) {
      const result = data.filter(
        (item: Article) =>
          item.authorName.toLowerCase().includes(searchParam.trim().toLowerCase()) ||
          item.postText.toLowerCase().includes(searchParam.trim().toLowerCase())
      );
      setArticles(result);
      setCount(1);
      result.length === 0 ? setIsNotFound(true) : setIsNotFound(false);
    }
  }, [searchParam, data]);

  useEffect(() => {
    filterArticles();
  }, [searchParam, filterArticles]);

  useEffect(() => {
    if (data) {
      setArticles(data);
    }
  }, [data]);

  function handleClick(direction: string) {
    if (direction === Direction.Next && data.length >= count * 8) {
      setCount(prevState => prevState + 1);
    } else if (direction === Direction.Prev && count > 1) {
      setCount(prevState => prevState - 1);
    }
  } 

  return (
    <div data-testid="articles-component">
      {isError && <ErrorComponent>404 Not found</ErrorComponent>}
      {isSuccess && (
        <>
          <div className="flex justify-between items-center mb-8 text-white">
            <Btn onClick={() => handleClick(Direction.Prev)} disabled={count === 1}>
              Prev page
            </Btn>
            <p className="text-xl">{articles.length !== 0 ? `${count}/${Math.ceil(articles.length / 8)}` : '0/0'}</p>
            <Btn onClick={() => handleClick(Direction.Next)} disabled={articles.length <= count * 8}>
              Next page
            </Btn>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {articles.slice((count - 1) * 8, count * 8).map((article: Article, index: number) => {
              return <ArticleCard articleData={article} key={index} searchParam={searchParam}></ArticleCard>;
            })}
          </div>

          {isNotFound && <ErrorComponent>Nothing was found for your request</ErrorComponent>}
        </>
      )}
    </div>
  );
}
