import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Router from 'next/router';

import LinksMobile from '../../../components/AppShell/LinksMobile';

jest.mock('next/router');

describe('LinkMobile', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should the icon visible and the menu hidden', () => {
    const { getByLabelText } = render(<LinksMobile />);

    const iconBtn = getByLabelText('display more actions');
    const menu = getByLabelText('menu');

    expect(iconBtn).toBeVisible();
    expect(menu).not.toBeVisible();
  });

  test('should the icon visible and the menu as well', () => {
    const { getByLabelText } = render(<LinksMobile />);

    const iconBtn = getByLabelText('display more actions');

    fireEvent.click(iconBtn);

    const menu = getByLabelText('menu');

    expect(iconBtn).toBeVisible();
    expect(menu).toBeVisible();
  });

  test('should navigate to "/blog"', () => {
    const { getByText } = render(<LinksMobile />);

    const blogBtn = getByText('Blog');

    fireEvent.click(blogBtn);

    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith('/blog');
  });

  test('should navigate to "/repo"', () => {
    const { getByText } = render(<LinksMobile />);

    const repoBtn = getByText('Repo');

    fireEvent.click(repoBtn);

    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith('/repo');
  });
});
