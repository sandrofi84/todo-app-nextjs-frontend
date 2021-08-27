import Link from 'next/link';
import FormLogin from '../../src/components/Form/FormLogin';
import { Box, Button } from '@material-ui/core';

export default function Login() {
  return (
    <>
      <div>
        Login Page! 🤗
      </div>
      <Box margin="auto" width="max-content">
          <FormLogin/>
      </Box>
      <Box width="max-content" margin="auto">
        <Link passHref={true} href="/signup">
          <Button color="secondary">
            <a>OR SIGN UP</a>
          </Button>
        </Link>
      </Box>
    </>
  )
}
