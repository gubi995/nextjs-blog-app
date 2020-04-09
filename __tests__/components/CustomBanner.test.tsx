import React from 'react';
import { render } from '@testing-library/react';

import CustomBanner from '../../components/CustomBanner';

describe('CustomBanner', () => {
  test('should render with the given title', () => {
    const title = 'Banner name';
    const { getByText } = render(<CustomBanner title={title} />);

    const bannerText = getByText(title);

    expect(bannerText).toBeInTheDocument();
  });
});
