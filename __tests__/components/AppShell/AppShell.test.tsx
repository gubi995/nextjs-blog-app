import React from 'react';
import { render } from '@testing-library/react';

import AppShell from '../../../components/AppShell';

const matchToBigScreen = (matches: boolean) => {
  window.matchMedia = jest.fn().mockReturnValue({
    matches,
    addListener: () => {},
    removeListener: () => {},
  });
};

describe('AppShell', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render the LinkDesktop component', async () => {
    matchToBigScreen(true);

    window.matchMedia('(min-width:600px)');

    const { getByTestId, queryByTestId } = render(<AppShell pageTitle="Page title" />);

    const linkDesktop = getByTestId('link-desktop');
    const linkMobile = queryByTestId('link-mobile');

    expect(linkDesktop).toBeInTheDocument();
    expect(linkMobile).toBeNull();
  });

  test('should render the LinkMobile component', async () => {
    matchToBigScreen(false);

    window.matchMedia('(min-width:600px)');

    const { getByTestId, queryByTestId } = render(<AppShell pageTitle="Page title" />);

    const linkDesktop = queryByTestId('link-desktop');
    const linkMobile = getByTestId('link-mobile');

    expect(linkDesktop).toBeNull();
    expect(linkMobile).toBeInTheDocument();
  });
});
