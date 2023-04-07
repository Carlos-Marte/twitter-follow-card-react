import { useState } from 'react';

export const FollowTwitterCard = ({ nickName, name, addArroba }) => {
  const [follow, setFollow] = useState(false);

  const userIcon = `https://unavatar.io/${name}`;
  const buttonText = follow ? 'Unfollow' : 'Follow';

  const handleClick = () => {
    setFollow(!follow);
  };

  return (
    <article className='FollowProfileCard'>
      <img src={userIcon} alt='Profile Icon' className='FollowProfileCard-img' />

      <div className='FollowProfileCard-userInfo'>
        <h1 className='FollowProfileCard-name'>{name}</h1>
        <p className='FollowProfileCard-nickName'>{addArroba(nickName)}</p>
      </div>

      <button
        className='FollowProfileCard-buttonFollow'
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </article>
  );
};
