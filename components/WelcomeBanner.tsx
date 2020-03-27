import React from 'react';
import { Avatar, Typography, styled } from '@material-ui/core';

const TypographyContrast = styled(Typography)(({ theme }) => ({ color: theme.palette.primary.contrastText }));

const StyledWelcomeBanner = styled('div')(({ theme }) => ({
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  clipPath: 'polygon(0% 0%, 100% 0, 100% 70%, 50% 100%, 0 70%)',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({ height: '140px', width: '140px', margin: theme.spacing(3) }));

const WelcomeBanner = () => {
  return (
    <StyledWelcomeBanner>
      <StyledAvatar src="/itsme.jpg" />
      <TypographyContrast variant="h4">Welcome here my friend</TypographyContrast>
      <TypographyContrast variant="subtitle1">Check out my repos and blog posts</TypographyContrast>
    </StyledWelcomeBanner>
  );
};

export default WelcomeBanner;
