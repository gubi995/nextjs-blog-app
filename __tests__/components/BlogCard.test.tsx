import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import BlogCard from '../../components/BlogCard';
import { Blog } from '../../models/blog';

const blog: Blog = {
  title: 'Blog title',
  content: 'Blog content',
  createdAt: '2020-04-01T07:14:32Z',
  id: '4489112',
  image: { url: 'https://www.mock.com/image.jpeg' },
  introduction: 'Blog intro',
  slug: 'blog-intro',
};

describe('BlogCard', () => {
  test("should rendered component matches with it's the snapshot", () => {
    const { asFragment } = render(<BlogCard blog={blog} onClick={jest.fn()} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should onClick has been called once', () => {
    const clickHandler = jest.fn();
    const { getByText } = render(<BlogCard blog={blog} onClick={clickHandler} />);

    const viewPostBtn = getByText('View post');

    fireEvent.click(viewPostBtn);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
