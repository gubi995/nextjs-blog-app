import React from 'react';
import Router from 'next/router';
import { Typography, styled } from '@material-ui/core';
import { Code } from '@material-ui/icons';

const StyledAppLogo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const StyledCodeIcon = styled(Code)(({ theme }) => ({ marginLeft: theme.spacing(2) }));

const AppLogo = () => {
  return (
    <StyledAppLogo onClick={() => Router.push('/')}>
      <Typography variant="h6">Web development</Typography>
      <StyledCodeIcon aria-label="App logo" />
    </StyledAppLogo>
  );
};

export default AppLogo;
