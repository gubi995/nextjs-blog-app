import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RepoCard from '../../components/RepoCard';
import { Repo } from '../../models/repo';

const repo: Repo = {
  createdAt: '2020-04-01T07:14:32Z',
  homepageUrl: 'http://mock-home-page.com',
  url: 'http://mock-repo.com',
  name: 'Mock repo',
};

const repoWithoutUrls: Repo = { ...repo, url: undefined, homepageUrl: undefined };

describe('RepoCard', () => {
  test("should rendered component matches with it's the snapshot [URLs are present]", () => {
    const { asFragment } = render(<RepoCard repo={repo} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("should rendered component matches with it's the snapshot [URLs are NOT present]", () => {
    const { asFragment } = render(<RepoCard repo={repoWithoutUrls} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should have "href" attributes have been set to "a" tags', () => {
    const { getByText } = render(<RepoCard repo={repo} />);

    const repoBtn = getByText('Repo url').closest('a');
    const homeBtn = getByText('Home page url').closest('a');

    expect(repoBtn).toHaveAttribute('href', 'http://mock-repo.com');
    expect(homeBtn).toHaveAttribute('href', 'http://mock-home-page.com');
    expect(homeBtn).toHaveAttribute('aria-disabled', 'false');
  });

  test('should NOT have "href" attributes have been set to "a" tags', () => {
    const { getByText, debug } = render(<RepoCard repo={repoWithoutUrls} />);

    const repoBtn = getByText('Repo url').closest('a');
    const homeBtn = getByText('Home page url').closest('a');

    console.log(debug());

    expect(repoBtn).toHaveAttribute('href', '#');
    expect(homeBtn).toHaveAttribute('href', '#');
    expect(homeBtn).toHaveAttribute('aria-disabled', 'true');
  });
});
