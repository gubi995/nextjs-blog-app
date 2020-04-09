import React from 'react';
import { render } from '@testing-library/react';

import WelcomeBanner from '../../components/WelcomeBanner';

describe('WelcomeBanner', () => {
  test("should rendered component matches with it's the snapshot", () => {
    const { asFragment } = render(<WelcomeBanner />);

    expect(asFragment()).toMatchSnapshot();
  });
});
