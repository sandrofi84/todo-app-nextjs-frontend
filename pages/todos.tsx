import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import TodosPool from '../src/components/Todos/TodosPool';
import TitleHero from '../src/components/TitleHero';

export default function Todos() {
  return (
    <>
      <TitleHero>
        My Todos Page! 🥵
      </TitleHero>
      <TodosPool />
    </>
  )
}
