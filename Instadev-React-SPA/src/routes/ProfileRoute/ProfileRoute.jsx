import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [user, setUser] = useState()
  const [posts, setPosts] = useState([])
  const [id, setId] = useState()
  const [loading, setLoading] = useState(true)
  const { username } = useParams()

  useEffect(() => {
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${username}`)
      .then(res => res.json())
      .then(res => {
        setUser(res[0])
        setId(res[0]?.id)
      })
  }, [username])

  useEffect(() => {
    if (id) {
      fetch(`	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${id}/posts`)
        .then(res => res.json())
        .then(res => {
          setPosts(res)
          setLoading(false)
        })
    }
  }, [id])

  return (
    <div data-testid="profile-route">
      <UserProfile avatar={user?.avatar} name={user?.name} username={user?.username} />
      {
        loading ?
          (<Loading />)
          :
          (<UserPosts posts={posts} />)
      }
    </div>
  );
};


export default ProfileRoute;
