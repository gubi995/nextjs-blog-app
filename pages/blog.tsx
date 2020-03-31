import { NextPage, GetStaticProps } from 'next';
import { Container, styled } from '@material-ui/core';
import { request } from 'graphql-request';

import { GET_BLOGS } from '../graphql/queries';
import { Blog } from '../models/blog';

import AppShell from '../components/AppShell';
import CustomBanner from '../components/CustomBanner';
import BlogCard from '../components/BlogCard';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
});

interface Props {
  blogs: Blog[];
}

const BlogPage: NextPage<Props> = ({ blogs }) => {
  return (
    <AppShell pageTitle="Blog page">
      <CustomBanner title="Blog posts ✍" />
      <StyledContainer>
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </StyledContainer>
    </AppShell>
  );
};

export async function getStaticProps(context: GetStaticProps) {
  const data = await request(process.env.API_ENDPOINT!, GET_BLOGS);

  const blogs = data.blogs;

  return {
    props: { blogs },
  };
}

export default BlogPage;
