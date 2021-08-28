import React, { SyntheticEvent } from 'react';
import { Box, Button, createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import FormOauthLoginButton from './FormOauthLoginButton';
import { OauthProvider } from './form-oauth-providers';

export interface FormProps {
  className?: string,
  handleSubmit: (e: SyntheticEvent) => Promise<void> | void,
  handleChange: (e: SyntheticEvent) => void,
  formInput: object,
  label: string,
  oauthProviders?: OauthProvider[]
}

const Form = ({className, handleSubmit, handleChange, formInput, label, oauthProviders}: FormProps) => {
  let inputKeys: string[] = [];

  for (let key in formInput) {
    inputKeys.push(key);
  }

  return (
      <Box className={className} component="form" onSubmit={handleSubmit} display="flex" flexDirection="column">
        {
          inputKeys.map(
            key => (<TextField key={key} onChange={handleChange} type={key} label={key} name={key} variant="outlined" defaultValue={formInput[key]} required />)
          )
        }
        <Button type="submit" variant="contained" color="primary">{label}</Button>
        {
          oauthProviders &&
          oauthProviders.map(
              provider => (<FormOauthLoginButton key={provider.name} provider={provider.name} authLink={provider.authLink} />)
          )
        }
      </Box>
  )
}

export default Form
