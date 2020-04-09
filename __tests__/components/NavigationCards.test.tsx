import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { navigateAndScrollTop } from '../../utils/navigation';
import NavigationCards from '../../components/NavigationCards';

jest.mock('../../utils/navigation');

describe('NavigationCards', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should rendered component matches with it's the snapshot", () => {
    const { asFragment } = render(<NavigationCards />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should navigate to /repo and scroll to top', () => {
    const { getByText } = render(<NavigationCards />);

    const paperText = getByText('Take a look on my GitHub repos');

    fireEvent.click(paperText);

    expect(navigateAndScrollTop).toHaveBeenCalledTimes(1);
    expect(navigateAndScrollTop).toHaveBeenCalledWith('/repo');
  });

  test('should navigate to /blog and scroll to top', () => {
    const { getByText } = render(<NavigationCards />);

    const paperText = getByText('Find some interesting topic between my blog posts');

    fireEvent.click(paperText);

    expect(navigateAndScrollTop).toHaveBeenCalledTimes(1);
    expect(navigateAndScrollTop).toHaveBeenCalledWith('/blog');
  });
});
