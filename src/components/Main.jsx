import { FollowTwitterCard } from './FollowTwitterCard';
import '../css/main.css';

const Main = () => {
  const addArroba = (nickName) => `@${nickName}`;

  return (
    <main>
      {/* <FollowTwitterCard name='MiduDev' nickName='midudev' />
      <FollowTwitterCard name='Maria' nickName='mariam' />
      <FollowTwitterCard name='Fernand' nickName='fer23nd' /> */}
      <FollowTwitterCard name='Kimberly' nickName='kimm' addArroba={addArroba} />
    </main>
  );
};

export default Main;
