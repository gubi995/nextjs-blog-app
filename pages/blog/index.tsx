import { NextPage, GetStaticProps } from 'next';
import { Container, styled } from '@material-ui/core';

import { GET_BLOGS } from '../../graphql/queries';
import { Blog } from '../../models/blog';
import { navigateAndScrollTop } from '../../utils/navigation';
import client from '../../utils/graphql-client';

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
  return (
    <AppShell pageTitle="Blog page">
      <CustomBanner title="Blog posts ✍" />
      <StyledContainer>
        {blogs.map((blog) => (
          <BlogCard
            blog={blog}
            key={blog.id}
            onClick={() => navigateAndScrollTop('/blog/[slug]', `/blog/${blog.slug}`)}
          />
        ))}
      </StyledContainer>
    </AppShell>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await client.request(GET_BLOGS);

  const blogs = data.allBlogs;

  return {
    props: { blogs },
  };
};

export default BlogPostsPage;
