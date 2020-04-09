import React, { useState } from 'react';
import Router from 'next/router';
import { IconButton, Menu, MenuItem, styled } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

const LinkContainer = styled('div')({
  marginLeft: 'auto',
});

const LinksMobile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <LinkContainer data-testid="link-mobile">
      <IconButton
        aria-label="display more actions"
        aria-haspopup="true"
        aria-controls="menu"
        color="inherit"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu id="menu" aria-label="menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => Router.push('/blog')}>Blog</MenuItem>
        <MenuItem onClick={() => Router.push('/repo')}>Repo</MenuItem>
      </Menu>
    </LinkContainer>
  );
};

export default LinksMobile;
