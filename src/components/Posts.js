import React, {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {getPostList} from '../services/api';
import PostList from './PostList';
import Pagination from './Pagination';

const Posts = () => {
  const [currentPage, setCurrentPage] = useState (1);

  const {
    isLoading,
    data,
    isError,
    isFetching,
    isPreviousData,
    error,
  } = useQuery ({
    queryKey: ['posts', currentPage],
    queryFn: () => getPostList (currentPage),
    keepPreviousData: true,
  });

  if (isLoading) return 'Loading...';
  if (isError) return `Error: ${error.message}`;

  return (
    <div className="wrapper-postlist">

      {isLoading
        ? <div>Loading...</div>
        : isError
            ? <div>Error: {error.message}</div>
            : <PostList posts={data.posts} />}

      <Pagination
        currentPage={currentPage}
        totalItems={data.totalData}
        onPageChange={page => setCurrentPage (page)}
        isPreviousData={isPreviousData}
      />

      {isFetching ? <span> Loading...</span> : null}

    </div>
  );
};

export default Posts;
