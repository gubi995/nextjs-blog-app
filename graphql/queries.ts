export const GET_BLOGS = `
  {
    allBlogs {
      id
      title
      createdAt
      introduction
      slug
      image {
        url
      }
    }
  }
`;

export const GET_BLOG_SLUGS = `
  {
    allBlogs {
      slug
    }
  }
`;

export const GET_BLOG = `
  query GetBlog($slug: String!) {
    blog(filter: {slug: {eq: $slug}}) {
      title
      createdAt
      content
      image {
        url
      }
    }
  }
`;

export const GET_PERSONAL_REPOS = `
  {
    viewer {
      repositories(first: 20) {
        nodes {
          createdAt,
          name,
          homepageUrl,
          url
        }
      }
    }
  }
`;
