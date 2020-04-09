import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Router from 'next/router';

import LinksDesktop from '../../../components/AppShell/LinksDesktop';

jest.mock('next/router');

describe('LinkDesktop', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should navigate to "/blog"', () => {
    const { getByText } = render(<LinksDesktop />);

    const blogBtn = getByText('Blog');

    fireEvent.click(blogBtn);

    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith('/blog');
  });

  test('should navigate to "/repo"', () => {
    const { getByText } = render(<LinksDesktop />);

    const repoBtn = getByText('Repo');

    fireEvent.click(repoBtn);

    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith('/repo');
  });
});
