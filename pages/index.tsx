import { useContext } from 'react';
import TitleHero from '../src/components/TitleHero';
import StateContext from '../src/context/StateContext';

export default function Home() {
  const { user } = useContext(StateContext);

  return (
    <>
      <TitleHero>
        Welcome{user.name ? `, ${user.name.split(' ')[0]}` : ' to TODOs'}! 🥳
      </TitleHero>
    </>
  )
}
