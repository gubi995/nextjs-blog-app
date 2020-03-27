import React, { useState } from 'react';
import Router from 'next/router';
import { IconButton, Menu, MenuItem, styled } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

const StyledIconButton = styled(IconButton)({
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
    <>
      <StyledIconButton
        aria-label="display more actions"
        aria-haspopup="true"
        aria-controls="menu"
        color="inherit"
        onClick={handleClick}
      >
        <MoreVert />
      </StyledIconButton>
      <Menu id="menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => Router.push('/blog')}>Blog</MenuItem>
        <MenuItem onClick={() => Router.push('/repo')}>Repo</MenuItem>
      </Menu>
    </>
  );
};

export default LinksMobile;
