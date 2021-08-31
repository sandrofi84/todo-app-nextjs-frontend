import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import TodosPool from '../src/components/Todos/TodosPool';

export default function Todos() {
  return (
    <>
      <Typography variant="h4">
        My Todos Page! 🥵
      </Typography>
      <TodosPool />
    </>
  )
}
