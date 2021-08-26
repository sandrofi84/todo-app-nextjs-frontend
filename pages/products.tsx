import Link from 'next/link';
import Button from '@material-ui/core/Button';

export default function Products() {
  return (
    <>
      <div>
        Products Page! 🥵
      </div>
      <Link passHref={true} href="/">
        <Button color="secondary">
          <a>Go Home</a>
        </Button>
      </Link>
    </>
  )
}
