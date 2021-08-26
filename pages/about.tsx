import Link from 'next/link';
import Button from '@material-ui/core/Button';

export default function About() {
  return (
    <>
      <div>
        About Page! 🤓
      </div>
      <Link passHref={true} href="/">
        <Button color="secondary">
          <a>Go Home</a>
        </Button>
      </Link>
    </>
  )
}
