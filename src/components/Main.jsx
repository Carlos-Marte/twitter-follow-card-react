import { FollowTwitterCard } from './FollowTwitterCard';
import '../css/main.css';

const Main = () => {
  const addArroba = (nickName) => `@${nickName}`;

  return (
    <main className='Main'>
      <FollowTwitterCard
        name='Miguel Ángel Durán'
        nickName='midudev'
        addArroba={addArroba}
      />
      <FollowTwitterCard
        name='Nicolás Schürmann'
        nickName='_nasch_'
        addArroba={addArroba}
      />
      <FollowTwitterCard
        name='Martín'
        nickName='BettaTech'
        addArroba={addArroba}
      />
    </main>
  );
};

export default Main;
