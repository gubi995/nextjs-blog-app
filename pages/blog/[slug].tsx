import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Container, styled, Typography } from '@material-ui/core';

import { Blog } from '../../models/blog';
import { toReadableDate } from '../../utils/date';
import client from '../../utils/graphql-client';

import AppShell from '../../components/AppShell';
import { GET_BLOG, GET_BLOG_SLUGS } from '../../graphql/queries';

const StyledImg = styled('img')(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  maxHeight: '400px',
}));

const StyledTypography = styled(Typography)({ fontWeight: 'bold' });

interface Props {
  blog: Blog;
}

const SingleBlogPostPage: NextPage<Props> = ({ blog }) => {
  return (
    <AppShell pageTitle={blog.title}>
      <Container maxWidth="md">
        <StyledImg src={blog.image.url} />
        <StyledTypography color="primary" variant="h4">
          {blog.title}
        </StyledTypography>
        <Typography color="primary" variant="caption">
          {toReadableDate(blog.createdAt)}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </Container>
    </AppShell>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await client.request(GET_BLOG, { slug: params?.slug });

  const blog = data.blog;

  return {
    props: { blog },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.request(GET_BLOG_SLUGS);

  const paths = data.allBlogs.map((blog: Blog) => ({ params: { slug: blog.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default SingleBlogPostPage;
