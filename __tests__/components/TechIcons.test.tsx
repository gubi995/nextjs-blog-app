import React from 'react';
import { render } from '@testing-library/react';

import TechIcons from '../../components/TechIcons';

describe('TechIcons', () => {
  test("should rendered component matches with it's the snapshot", () => {
    const { asFragment } = render(<TechIcons />);

    expect(asFragment()).toMatchSnapshot();
  });
});
