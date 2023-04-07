import { useState } from 'react';

export const FollowTwitterCard = ({ nickName, name, addArroba }) => {
  const [follow, setFollow] = useState(false);

  const userIcon = `https://unavatar.io/${nickName}`;
  const buttonText = follow ? 'Unfollow' : 'Follow';
  const buttonClass = follow ? 'is-follow' : 'is-not-follow';

  const handleClick = () => {
    setFollow(!follow);
  };

  return (
    <article className='FollowProfileCard'>
      <div className='FollowProfileCard-userInfo'>
        <img src={userIcon} alt='Profile Icon' className='FollowProfileCard-img' />

        <div className='FollowProfileCard-userNickName'>
          <h1 className='FollowProfileCard-name'>{name}</h1>
          <p className='FollowProfileCard-nickName'>{addArroba(nickName)}</p>
        </div>
      </div>

      <button
        className={`FollowProfileCard-buttonFollow ${buttonClass}`}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </article>
  );
};
