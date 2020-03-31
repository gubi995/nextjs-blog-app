import React from 'react';
import { Typography, styled } from '@material-ui/core';

const StyledCustomBanner = styled('div')(({ theme }) => ({
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
}));

interface Props {
  title: string;
}

const CustomBanner = ({ title }: Props) => {
  return (
    <StyledCustomBanner>
      <Typography color="primary" variant="h4">
        {title}
      </Typography>
    </StyledCustomBanner>
  );
};

export default CustomBanner;
