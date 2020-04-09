import React from 'react';
import Router from 'next/router';
import { Button, styled } from '@material-ui/core';

const LinkContainer = styled('div')({
  marginLeft: 'auto',
});

const LinksDesktop = () => {
  return (
    <LinkContainer data-testid="link-desktop">
      <Button color="inherit" onClick={() => Router.push('/blog')}>
        Blog
      </Button>
      <Button color="inherit" onClick={() => Router.push('/repo')}>
        Repo
      </Button>
    </LinkContainer>
  );
};

export default LinksDesktop;
