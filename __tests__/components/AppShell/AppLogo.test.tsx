import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Router from 'next/router';

import AppLogo from '../../../components/AppShell/AppLogo';

jest.mock('next/router');

describe('AppLogo', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render the title and the icon', () => {
    const { getByText, getByLabelText } = render(<AppLogo />);

    const titleEl = getByText(/Web development/);
    const iconEl = getByLabelText(/App logo/);

    expect(titleEl).toBeInTheDocument();
    expect(iconEl).toBeInTheDocument();
  });

  test('should trigger a navigation on click', () => {
    const { getByText } = render(<AppLogo />);

    const titleEl = getByText(/Web development/);

    const appLogoEl = titleEl.parentElement;

    fireEvent.click(appLogoEl!);

    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith('/');
  });
});
