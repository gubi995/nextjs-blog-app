import { NextPage, GetStaticProps } from 'next';
import Router from 'next/router';
import { Container, styled } from '@material-ui/core';
import { request } from 'graphql-request';

import { GET_BLOGS } from '../../graphql/queries';
import { Blog } from '../../models/blog';

import AppShell from '../../components/AppShell';
import CustomBanner from '../../components/CustomBanner';
import BlogCard from '../../components/BlogCard';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

interface Props {
  blogs: Blog[];
}

const BlogPostsPage: NextPage<Props> = ({ blogs }) => {
  const navigate = (id: string) => {
    Router.push('/blog/[id]', `/blog/${id}`);
  };

  return (
    <AppShell pageTitle="Blog page">
      <CustomBanner title="Blog posts ✍" />
      <StyledContainer>
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} onClick={() => navigate(blog.id)} />
        ))}
      </StyledContainer>
    </AppShell>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await request(process.env.API_ENDPOINT!, GET_BLOGS);

  const blogs = data.blogs;

  return {
    props: { blogs },
  };
};

export default BlogPostsPage;
