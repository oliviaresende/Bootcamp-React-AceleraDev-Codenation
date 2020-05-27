import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('John Doe')
  const [username, setUsername] = useState('johndoe')
  const [email, setEmail] = useState('johndoe@gmail.com')
  const [avatar, setAvatar] = useState('')
  const [submit, setSubmit] = useState(false)

  const changeSetName = e => setName(e.target.value)
  const changeSetUsername = e => setUsername(e.target.value)
  const changeSetEmail = e => setEmail(e.target.value)
  const changeSetAvatar = e => setAvatar(e.target.value)

  const changeSetSubmit = e => {
    e.preventDefault()
    const userInfos = JSON.stringify({
      name,
      username,
      avatar,
      email,
    })
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: userInfos
    }).finally(() => setSubmit(true));
  }
  return (
    <>
      <div className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                <img src={avatar ? avatar : 'https://ipc.digital/wp-content/uploads/2016/07/icon-user-default.png'} alt="" />
              </div>
              <p className="user__name">
                {name}
                <span>@{username}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input type="text" placeholder="Ex: Maria da Penha" value={name} onChange={e => changeSetName(e)} />
            <label>Usuário</label>
            <input type="text" placeholder="Ex: mariadapenha" value={username} onChange={e => changeSetUsername(e)} />
            <label>Email</label>
            <input type="email" placeholder="Ex: maria@email.com " value={email} onChange={e => changeSetEmail(e)} />
            <label>Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
            <input type="text" placeholder="http://..." value={avatar} onChange={e => changeSetAvatar(e)} />
            <button type="button" onClick={(e) => changeSetSubmit(e)}>Cadastrar</button>
          </div>
        </div>
      </section>
      {submit && (<SuccessMessage />)}
    </>
  );
};

export default UserForm;
