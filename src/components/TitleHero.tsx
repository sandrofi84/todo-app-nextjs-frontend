import { Typography } from '@material-ui/core';
import React, { ReactNode } from 'react';

const TitleHero = ({children}: {children: ReactNode}) => {
    return (
        <Typography variant="h2" align="center" color="primary">
            {children}
        </Typography>
    )
}

export default TitleHero
