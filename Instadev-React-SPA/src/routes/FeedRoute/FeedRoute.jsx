import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([])
  const [stories, setStories] = useState([])
  const [posts, setPosts] = useState([])
  const [usersIndex, setUsersIndex] = useState(0);

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
      .then(res => res.json())
      .then(res => {
        setStories(res)
      })
  }, [])

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then(res => res.json())
      .then(res => {
        setUsers(res)
      })
  }, [])

  useEffect(() => {
    if (usersIndex === users.length) return

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersIndex].id}/posts`)
      .then((res) => res.json())
      .then(res => {
        setPosts([...posts, ...res])
        setUsersIndex(usersIndex + 1)
      })
  }, [users, usersIndex]);

  const getUserHandler = (userId) => users.find(user => user.id === userId)

  return (
    <div data-testid="feed-route">
      {
        (users && stories) && (<Stories stories={stories} getUserHandler={getUserHandler} />)
      }

      {
        users.length !== usersIndex ?
          (<Loading />)
          :
          (
            <Posts posts={posts} getUserHandler={getUserHandler} />
          )
      }
    </div>
  );
};


export default FeedRoute;
