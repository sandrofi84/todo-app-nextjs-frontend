import Link from 'next/link';
import FormSignup from '../src/components/Form/FormSignup';
import { Box, Button, createStyles, makeStyles, TextField, Theme } from '@material-ui/core';

export default function Signup() {
  //const classes = useStyles();
  
  return (
    <>
      <div>
        Sign up Page! 🥶
      </div>
      <Box margin="auto" width="max-content">
          <FormSignup/>
      </Box>
      <Box width="max-content" margin="auto">
        <Link passHref={true} href="/login">
          <Button color="secondary">
            <a>OR LOGIN</a>
          </Button>
        </Link>
      </Box>
    </>
  )
}

// const useStyles = makeStyles((theme: Theme) => 
//   createStyles({
//     form: {
//       "& > div": {
//         paddingBottom: "10px"
//       }
//     }
//   }))
