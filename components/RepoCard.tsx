import React from 'react';
import { Paper, Typography, Divider, styled, Button } from '@material-ui/core';

import { Repo } from '../models/repo';
import { toReadableDate } from '../utils/date';

const StyledRepoCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  '& > *': {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

const StyledContainer = styled('div')({ display: 'flex', justifyContent: 'space-between' });

const Info = ({ caption, value }: { caption: string; value: string }) => {
  return (
    <div>
      <Typography variant="h6" color="primary">
        {caption}
      </Typography>
      <Typography variant="overline" color="primary">
        {value}
      </Typography>
    </div>
  );
};

interface Props {
  repo: Repo;
}

const RepoCard = ({ repo }: Props) => {
  return (
    <StyledRepoCard>
      <StyledContainer>
        <Info caption="Name" value={repo.name} />
        <Info caption="Created" value={toReadableDate(repo.createdAt)} />
      </StyledContainer>

      <Divider orientation="horizontal" color="primary" />

      <StyledContainer>
        <Button href={repo.url ? repo.url : '#'} rel="noopener" target="_blank" color="primary">
          Repo url
        </Button>
        <Divider orientation="vertical" />
        <Button
          href={repo.homepageUrl ? repo.homepageUrl : '#'}
          rel="noopener"
          target="_blank"
          disabled={!Boolean(repo.homepageUrl)}
          color="primary"
        >
          Home page url
        </Button>
      </StyledContainer>
    </StyledRepoCard>
  );
};

export default RepoCard;
