import { Typography } from '@material-ui/core'
import React from 'react'

const TitleHero = ({children}) => {
    return (
        <Typography align="center" color="primary">
            {children}
        </Typography>
    )
}

export default TitleHero
