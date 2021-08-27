import { useContext } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import TitleHero from '../src/components/TitleHero';
import StateContext from '../src/context/StateContext';

export default function Home() {
  const { user } = useContext(StateContext);

  return (
    <>
      <TitleHero>
        Welcome to TODOs{user.id && `, ${user.name}`}! 🥳
      </TitleHero>
      <Button color="secondary">
        <Link href="/contact">
            <a>Go to Contact Page</a>
        </Link>
      </Button>
    </>
  )
}
