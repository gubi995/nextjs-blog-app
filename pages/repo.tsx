import { NextPage, GetStaticProps } from 'next';
import { Container, styled } from '@material-ui/core';
import { GraphQLClient } from 'graphql-request';

import { Repo } from '../models/repo';
import { GET_PERSONAL_REPOS } from '../graphql/queries';
import { getHeaders } from '../utils/graphql-client';
import AppShell from '../components/AppShell';
import CustomBanner from '../components/CustomBanner';
import RepoCard from '../components/RepoCard';

const StyledContainer = styled(Container)(({ theme }) => ({ '& > *': { margin: theme.spacing(4) } }));

interface Props {
  repositories: Repo[];
}

const RepoPage: NextPage<Props> = ({ repositories }) => {
  return (
    <AppShell pageTitle="Repositories page">
      <CustomBanner title="Repositories 🎮" />
      <StyledContainer maxWidth="md">
        {repositories.map((repo) => (
          <RepoCard repo={repo} key={repo.url} />
        ))}
      </StyledContainer>
    </AppShell>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new GraphQLClient('https://api.github.com/graphql', getHeaders(process.env.GITHUB_TOKEN!));

  const data = await client.request(GET_PERSONAL_REPOS);

  const repositories = data.viewer.repositories.nodes;

  return {
    props: { repositories },
  };
};

export default RepoPage;
