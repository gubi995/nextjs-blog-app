import React from 'react';
import { Avatar, styled } from '@material-ui/core';

const StyledTechIcons = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  width: '100%',
  margin: theme.spacing(5),
  '& > *': {
    margin: theme.spacing(2),
  },
}));

const TechIcons = () => {
  return (
    <StyledTechIcons>
      <Avatar variant="square" alt="html" src="/prog-icons/Html.png" />
      <Avatar variant="square" alt="css" src="/prog-icons/Css.png" />
      <Avatar variant="square" alt="js" src="/prog-icons/Javascript.png" />
      <Avatar variant="square" alt="ts" src="/prog-icons/Typescript.png" />
      <Avatar variant="square" alt="npm" src="/prog-icons/Npm.png" />
      <Avatar variant="square" alt="yarn" src="/prog-icons/Yarn.png" />
      <Avatar variant="square" alt="webpack" src="/prog-icons/Webpack.png" />
      <Avatar variant="square" alt="react" src="/prog-icons/React.png" />
      <Avatar variant="square" alt="angular" src="/prog-icons/Angular.png" />
      <Avatar variant="square" alt="node" src="/prog-icons/Nodejs.png" />
      <Avatar variant="square" alt="mongo" src="/prog-icons/Mongodb.png" />
    </StyledTechIcons>
  );
};

export default TechIcons;
