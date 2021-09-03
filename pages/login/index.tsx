import Link from 'next/link';
import FormLogin from '../../src/components/Form/FormLogin';
import { Box, Button } from '@material-ui/core';
import TitleHero from '../../src/components/TitleHero';

export default function Login() {
  return (
    <>
      <TitleHero>
        Login Page! 🤗
      </TitleHero>
      <Box width="max-content" margin="auto" marginTop="50px" >
          <FormLogin/>
      </Box>
      <Box width="max-content" margin="auto">
        <Button color="secondary">
          <Link href="/signup">
            <a>OR SIGN UP</a>
          </Link>
        </Button>
      </Box>
    </>
  )
}
