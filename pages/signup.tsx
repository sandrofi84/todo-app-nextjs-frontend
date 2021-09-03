import Link from 'next/link';
import FormSignup from '../src/components/Form/FormSignup';
import { Box, Button } from '@material-ui/core';
import TitleHero from '../src/components/TitleHero';

export default function Signup() {
  
  return (
    <>
      <TitleHero>
        Sign up Page! 🥶
      </TitleHero>
      <Box margin="auto" width="max-content">
          <FormSignup/>
      </Box>
      <Box width="max-content" margin="auto">
        <Button color="secondary">
          <Link href="/login">
            <a>OR LOGIN</a>
          </Link>
        </Button>
      </Box>
    </>
  )
}
