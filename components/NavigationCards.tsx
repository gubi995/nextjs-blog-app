import React from 'react';
import Router from 'next/router';
import { Paper, Typography, styled } from '@material-ui/core';

const StyledNavigationCards = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  margin: theme.spacing(5),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexBasis: '45%',
  justifyContent: 'center',
  padding: theme.spacing(5),
  margin: theme.spacing(2),
  textAlign: 'center',
  cursor: 'pointer',
  minWidth: '300px',
}));

const NavigationCards = () => {
  return (
    <StyledNavigationCards>
      <StyledPaper variant="outlined" onClick={() => Router.push('/repo')}>
        <Typography color="primary" variant="h6" component="h4">
          Take a look on my GitHub repos
        </Typography>
      </StyledPaper>
      <StyledPaper variant="outlined" onClick={() => Router.push('/blog')}>
        <Typography color="primary" variant="h6" component="h4">
          Find some interesting topic between my blog posts
        </Typography>
      </StyledPaper>
    </StyledNavigationCards>
  );
};

export default NavigationCards;
