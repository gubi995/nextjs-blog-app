import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { request } from 'graphql-request';
import { Container, styled, Typography } from '@material-ui/core';

import { Blog } from '../../models/blog';
import { toReadableDate } from '../../utils/date';

import AppShell from '../../components/AppShell';
import { GET_BLOG, GET_BLOG_IDS } from '../../graphql/queries';

const StyledImg = styled('img')(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  maxHeight: '400px',
}));

interface Props {
  blog: Blog;
}

const SingleBlogPostPage: NextPage<Props> = ({ blog }) => {
  return (
    <AppShell pageTitle={blog.title}>
      <Container maxWidth="sm">
        <StyledImg src={blog.image.url} />
        <Typography color="primary" variant="h3">
          {blog.title}
        </Typography>
        <Typography color="primary" variant="subtitle1">
          {toReadableDate(blog.createdAt)}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: blog.content.html }} />
      </Container>
    </AppShell>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await request(process.env.API_ENDPOINT!, GET_BLOG, { id: params?.id });

  const blog = data.blog;

  return {
    props: { blog },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request(process.env.API_ENDPOINT!, GET_BLOG_IDS);

  const paths = data.blogs.map((blog: Blog) => ({ params: { id: blog.id } }));

  return {
    paths,
    fallback: false,
  };
};

export default SingleBlogPostPage;
